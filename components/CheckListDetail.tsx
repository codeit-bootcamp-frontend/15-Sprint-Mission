import { HTMLAttributes, useEffect, useRef, useState } from "react";
import Image from "next/image";
import ic_checked from "@/assets/icons/checkbox_checked.svg";
import ic_empty from "@/assets/icons//checkbox_empty.svg";
import styles from "./CheckListDetail.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  defaultIsChecked: boolean;
  defaultValue: string;
}

export default function CheckListDetail({
  className = "",
  defaultIsChecked = false,
  defaultValue = "",
  ...props
}: Props) {
  const [value, setValue] = useState(defaultValue ?? "");
  const [isChecked, setIsChecked] = useState(defaultIsChecked);
  const spanRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const width = (spanRef.current?.offsetWidth ?? 0) + 1;
    if (inputRef.current) inputRef.current.style.width = width + "px";
  }, [value]);

  return (
    <div
      className={`${styles["check-list"]} ${
        styles[String(isChecked)]
      } ${className}`}
      {...props}
    >
      <button type="button" onClick={() => setIsChecked((prev) => !prev)}>
        <Image alt="checkbox" src={isChecked ? ic_checked : ic_empty} />
        <input type="hidden" name="isCompleted" value={String(isChecked)} />
      </button>
      <span ref={spanRef}>{value}</span>
      <input
        ref={inputRef}
        name="name"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
    </div>
  );
}
