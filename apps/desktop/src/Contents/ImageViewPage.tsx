import { convertFileSrc } from "@tauri-apps/api/tauri";
import React, { ReactNode, useEffect, useRef, useState } from "react";

type ImageViewType = {
  id: string;
};
export default function ImageViewPage(props: ImageViewType) {
  return (
    <div className="flex grow relative flex-col justify-center h-screen overflow-clip">
      <ContentsHeader />
      <ContentsBody />
    </div>
  );
}

const ContentsHeader = (): ReactNode => {
  return (
    <div
      data-tauri-drag-region
      className="flex justify-between select-none h-8"
    />
  );
};

const ContentsBody = (): ReactNode => {
  const [windowHeight, setWindowHeight] = useState<number>(
    window.innerHeight - 32
  );
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight - 32);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      ref={ref}
      style={{ height: windowHeight }}
      className="flex justify-center items-center"
    >
      <img
        className={`h-full object-cover`}
        src={convertFileSrc("D:\\101067.jpg")}
      />
    </div>
  );
};
