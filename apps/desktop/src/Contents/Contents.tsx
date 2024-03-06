import { convertFileSrc } from "@tauri-apps/api/tauri";
import { appWindow } from "@tauri-apps/api/window";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useRecoilState } from "recoil";
import { showImagesState } from "../states/showImagesState";
import { useLocation } from "wouter";
import { ArrowLeft24Filled, Search24Filled } from "@fluentui/react-icons";

export default function Contents() {
  return (
    <div className="h-screen grow">
      <ContentsHeader />
      <ContentsBody />
    </div>
  );
}

const ContentsHeader = (): ReactNode => {
  const [location, setLocation] = useLocation();
  const [sliderValue, setSliderValue] = useState(50);
  return (
    <div
      data-tauri-drag-region
      className="flex justify-between items-center select-none h-10"
    >
      <div className="flex justify-center items-center text-white h-10 w-10">
        <div className="flex justify-center items-center h-6 w-6 opacity-60 rounded-md hover:bg-slate-600 hover:opacity-40">
          <ArrowLeft24Filled
            aria-label="An back icon"
            className="w-5 h-5"
            onClick={() => setLocation("/")}
          />
        </div>
      </div>
      <input
        type="range"
        min={1}
        max={100}
        value={sliderValue}
        onChange={(e) => setSliderValue(Number(e.target.value))}
        className="h-0.5 cursor-pointer rounded-xl accent-slate-200"
      />
      <div className="flex h-6 items-center bg-slate-950 border border-black p-2 rounded-lg">
        <Search24Filled aria-label="An search icon" className="w-4 h-4" />
        <input
          type="search"
          placeholder="検索"
          className=" bg-transparent px-1 outline-none"
        />
      </div>
    </div>
  );
};

const tempData = [
  "D:\\101067.jpg",
  "D:\\101122.jpg",
  "D:\\101530.jpg",
  "D:\\101592.jpg",
  "D:\\101601.jpg",
  "D:\\101067.jpg",
  "D:\\101122.jpg",
  "D:\\101530.jpg",
  "D:\\101592.jpg",
  "D:\\101601.jpg",
  "D:\\101067.jpg",
  "D:\\101122.jpg",
  "D:\\101530.jpg",
  "D:\\101592.jpg",
  "D:\\101601.jpg",
  "D:\\101067.jpg",
  "D:\\101122.jpg",
  "D:\\101530.jpg",
  "D:\\101592.jpg",
  "D:\\101601.jpg",
  "D:\\101067.jpg",
  "D:\\101122.jpg",
  "D:\\101530.jpg",
  "D:\\101592.jpg",
  "D:\\101601.jpg",
  "D:\\101067.jpg",
  "D:\\101122.jpg",
  "D:\\101530.jpg",
  "D:\\101592.jpg",
  "D:\\101601.jpg",
  "D:\\101067.jpg",
  "D:\\101122.jpg",
  "D:\\101530.jpg",
  "D:\\101592.jpg",
  "D:\\101601.jpg",
  "D:\\101067.jpg",
  "D:\\101122.jpg",
  "D:\\101530.jpg",
  "D:\\101592.jpg",
  "D:\\101601.jpg",
  "D:\\101067.jpg",
  "D:\\101122.jpg",
  "D:\\101530.jpg",
  "D:\\101592.jpg",
  "D:\\101601.jpg",
];
const ContentsBody = (): ReactNode => {
  const [count, setCount] = useState(6);
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        const width = divRef.current.offsetWidth;
        setCount(Math.ceil(width / 200));
      }
    };
    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    if (divRef.current) {
      resizeObserver.observe(divRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return (
    <div className="overflow-y-scroll h-full" ref={divRef}>
      <Masonry columnsCount={count} gutter="16px" className="flex px-2">
        {tempData.map((data, index, _) => (
          <ContentsBodyImageItem
            path={data}
            key={index}
            id={index.toString()}
          />
        ))}
      </Masonry>
    </div>
  );
};

type ContentsBodyImageItemType = {
  id: string;
  path: string;
  isFocus?: boolean;
};
const ContentsBodyImageItem = (props: ContentsBodyImageItemType): ReactNode => {
  const [showImages, setShowImages] = useRecoilState(showImagesState);
  const [_, setLocation] = useLocation();
  const isFocus = showImages == props.id;
  return (
    <img
      className={`flex mx-auto rounded-lg ${
        isFocus && "outline"
      } outline-2 outline-blue-600 outline-offset-2`}
      src={convertFileSrc(props.path)}
      onClick={() => setShowImages(props.id)}
      onDoubleClick={() => setLocation(`/images/${props.id}`)}
    />
  );
};
