import { ChangeEvent, useEffect, useRef, useState } from "react";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Btn from "@/components/Btn";
import BtnImage from "@/components/BtnImage";
import CheckListDetail from "@/components/CheckListDetail";
import Gnb from "@/components/Gnb";
import {
  deleteItem,
  getItem,
  patchItem,
  postImage,
  ResponseItem,
} from "@/lib/api";
import ic_img from "@/assets/images/img.png";
import ic_memo from "@/assets/images/memo.png";
import styles from "@/styles/item.module.css";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const itemId = Number(context.params?.itemId);
  const item = await getItem(itemId);

  return { props: { item, itemId } };
}

export default function Item({
  item,
  itemId,
}: {
  item: ResponseItem;
  itemId: number;
}) {
  const [imageUrl, setImageUrl] = useState(item.imageUrl);
  const [disabled, setDisabled] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      try {
        const { url } = await postImage(e.target.files[0]);
        setImageUrl(url);
      } catch (error) {
        alert((error as Error).message);
      }
    }
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 229) + "px";
  };

  const handleEditClick = async () => {
    try {
      setDisabled(true);
      const data = Object.fromEntries(
        new FormData(formRef.current ?? undefined).entries()
      );
      await patchItem(itemId, { ...data, imageUrl: imageUrl ?? "" });
      router.push("/");
    } catch (error) {
      alert((error as Error).message);
      setDisabled(false);
    }
  };

  const handleDeleteClick = async () => {
    try {
      setDisabled(true);
      await deleteItem(itemId);
      router.push("/");
    } catch (error) {
      alert((error as Error).message);
      setDisabled(false);
    }
  };

  useEffect(() => {
    const area = document.querySelector<HTMLTextAreaElement>(
      "form label textarea"
    );
    if (area) area.style.height = Math.min(area.scrollHeight, 229) + "px";
  }, []);

  return (
    <div className={styles.item}>
      <Gnb />
      <form ref={formRef}>
        <CheckListDetail
          defaultValue={item.name}
          defaultIsChecked={item.isCompleted}
        />
        <section className={styles.container}>
          <div className={styles.image}>
            {imageUrl ? (
              <img className={styles.full} alt="image" src={imageUrl} />
            ) : (
              <Image width={64} alt="image" src={ic_img} />
            )}
            <BtnImage htmlFor="file" mode={imageUrl ? "edit" : "plus"} />
            <input
              id="file"
              type="file"
              accept="image/*"
              disabled={disabled}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.memo}>
            <Image alt="memo" src={ic_memo} fill />
            <div>Memo</div>
            <label>
              <textarea
                name="memo"
                disabled={disabled}
                defaultValue={item.memo ?? ""}
                rows={1}
                onChange={handleTextareaChange}
              />
            </label>
          </div>
        </section>
        <section className={styles.btns}>
          <Btn mode="edit" disabled={disabled} onClick={handleEditClick} />
          <Btn mode="delete" disabled={disabled} onClick={handleDeleteClick} />
        </section>
      </form>
    </div>
  );
}
