import { AnchorHTMLAttributes, MouseEventHandler } from "react";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import ic_checked from "@/assets/icons/checkbox_checked.svg";
import ic_empty from "@/assets/icons//checkbox_empty.svg";
import styles from "./CheckList.module.css";

type LinkAttributes = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps;

interface Props extends LinkAttributes {
  href: string;
  isChecked: boolean;
  onButtonClick: MouseEventHandler<HTMLButtonElement>;
}

export default function CheckList({
  className = "",
  children,
  isChecked,
  onButtonClick,
  ...props
}: Props) {
  return (
    <Link
      className={`${styles["check-list"]} ${
        styles[String(isChecked)]
      } ${className}`}
      {...props}
    >
      <button type="button" onClick={onButtonClick}>
        <Image alt="checkbox" src={isChecked ? ic_checked : ic_empty} />
      </button>
      {children}
    </Link>
  );
}
