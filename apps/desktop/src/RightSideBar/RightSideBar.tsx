import { appWindow } from "@tauri-apps/api/window";
import React from "react";
type Props = {
  width: number;
};
export default function RightSideBar(props: Props) {
  return (
    <div
      className="bg-blue-800"
      style={{
        flexBasis: props.width,
        minWidth: props.width,
        maxWidth: props.width,
      }}
    >
      <div
        data-tauri-drag-region
        className="flex justify-end select-none top-0 left-0 right-0 h-8"
      >
        <div
          className="inline-flex justify-center items-center w-8 h-8 hover:bg-slate-700"
          onClick={() => appWindow.minimize()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="#9c9c9c"
          >
            <path d="M20 14H4v-2h16v2z" />
          </svg>
        </div>
        <div
          className="inline-flex justify-center items-center w-8 h-8 hover:bg-slate-700"
          onClick={() => appWindow.toggleMaximize()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="#9c9c9c"
          >
            <path d="M4 4h16v16H4zm2 4v10h12V8z" />
          </svg>
        </div>
        <div
          className="inline-flex justify-center items-center w-8 h-8 hover:bg-slate-700"
          onClick={() => appWindow.close()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="#9c9c9c"
          >
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
