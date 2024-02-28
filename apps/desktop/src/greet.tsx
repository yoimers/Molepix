"use client";

import { convertFileSrc } from "@tauri-apps/api/tauri";


type ImageInfo = {
  url: Blob;
  width: number;
  height: number;
};

export default function Greet() {
  // const convertFileSrcRef =
  // useRef<(filePath: string, protocol?: string | undefined) => string>();
  // useEffect(() => {
  //   console.log("Use Effent");
  //   // if (convertFileSrcRef.current) {
  //   //   return
  //   // }
  //   async function setConvertFileSrc(
  //     convertFileSrcRef: MutableRefObject<
  //       ((filePath: string, protocol?: string | undefined) => string) | undefined
  //     >
  //   ) {
  //     const tauriApi = await import("@tauri-apps/api/tauri");
  //     const convertFileSrc = tauriApi.convertFileSrc;
  //     console.log(typeof convertFileSrc);
  //     if (typeof convertFileSrc === "function") {
  //       convertFileSrcRef.current = convertFileSrc;
  //     }
  //   }
  //   setConvertFileSrc(convertFileSrcRef);
  // }, [convertFileSrcRef]);

  // console.log(convertFileSrcRef.current);
  // if (!convertFileSrcRef.current) return <span>Loading</span>;
  // const src = convertFileSrcRef.current("D:/101601.jpg");
  return (
    <div className="w-full h-full">
      <span>Hello</span>
      {/* <img src={src} width={600} height={600} alt="xx" /> */}
      <img src={convertFileSrc("D:/101601.jpg")} alt="xx" />
      {/* <TestComp /> */}
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
