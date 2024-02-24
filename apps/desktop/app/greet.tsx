"use client";

import Image from "next/image";
import { convertFileSrc } from "@tauri-apps/api/tauri";
import { appDataDir } from "@tauri-apps/api/path";
import { MutableRefObject, useEffect, useRef, useState } from "react";

type ImageInfo = {
  url: Blob;
  width: number;
  height: number;
};

async function setConvertFileSrc(
  convertFileSrcRef: MutableRefObject<
    ((filePath: string, protocol?: string | undefined) => string) | undefined
  >
) {
  const tauriApi = await import("@tauri-apps/api/tauri");
  const convertFileSrc = tauriApi.convertFileSrc;
  console.log(typeof convertFileSrc);
  if (typeof convertFileSrc === "function") {
    convertFileSrcRef.current = convertFileSrc;
  }
}
export default function Greet() {
  const convertFileSrcRef =
    useRef<(filePath: string, protocol?: string | undefined) => string>();
  useEffect(() => {
    if (!convertFileSrcRef.current) {
      setConvertFileSrc(convertFileSrcRef);
    }
  }, []);

  console.log(convertFileSrcRef.current);
  if (!convertFileSrcRef.current) return <></>;
  const src = convertFileSrcRef.current("D:/101601.jpg");
  return (
    <div className="">
      {/* <img src={src} width={200} height={200} alt="xx" /> */}
      <TestComp />
    </div>
  );
}

export function TestComp() {
  return (
    <div className="">
      <img src={convertFileSrc("D:/101601.jpg")} alt="xx" />
    </div>
  );
}
