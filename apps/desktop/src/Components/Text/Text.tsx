import React from "react";

type Props = {
  children: string | string[];
  className?: string;
};
export default function CustomText(props: Props) {
  return (
    <h3
      className={`text-slate-100 text-opacity-80 font-semibold ${props.className}`}
    >
      {props.children}
    </h3>
  );
}
