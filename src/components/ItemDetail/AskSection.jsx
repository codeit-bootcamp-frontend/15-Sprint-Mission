import { useState } from "react";
import styles from "./styles/AskSection.module.css";

export default function AskSection() {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <section className={styles.askSection}>
      <h2 className={styles.title}>문의하기</h2>
      <label htmlFor="inquiryInput" style={{ display: "none" }}>
        내용
      </label>
      <textarea
        className={styles.input}
        id="inquiryInput"
        placeholder="개인 정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포 시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        value={content}
        onChange={handleChange}
      />
      <button
        className={styles.btn}
        type="submit"
        disabled={content.trim() === ""}
      >
        등록
      </button>
    </section>
  );
}
