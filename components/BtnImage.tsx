import { LabelHTMLAttributes } from "react";
import Image from "next/image";
import ic_plus from "@/assets/icons/plus_big.svg";
import ic_edit from "@/assets/icons/edit.svg";
import styles from "./BtnImage.module.css";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  mode: "plus" | "edit";
}

export default function BtnImage({ className = "", mode, ...props }: Props) {
  return (
    <label className={`${styles.btn} ${styles[mode]} ${className}`} {...props}>
      <Image alt={mode} src={mode === "plus" ? ic_plus : ic_edit} />
    </label>
  );
}
