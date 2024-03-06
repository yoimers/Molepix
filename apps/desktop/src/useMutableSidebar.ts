import React, { useEffect, useRef, useState } from "react";

export default function useMutableSidebar() {
  const maxWidth = 600;
  const ref = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [leftSide, setLeftSide] = useState(width / 5);
  const [isLeftClick, setIsLeftClick] = useState<boolean>(false);
  const [rightSide, setRightSide] = useState(width / 5);
  const [isRightClick, setIsRightClick] = useState<boolean>(false);
  const maxLeftWidth = width - rightSide - width / 10;
  const maxRightWidth = width - leftSide - width / 10;
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const onMouseUp: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (isRightClick) {
      setIsRightClick(false);
      width - e.pageX < maxRightWidth &&
        setRightSide(Math.min(width - (e.pageX + 2), maxWidth));
    }
    if (isLeftClick) {
      setIsLeftClick(false);
      e.pageX < maxLeftWidth && setLeftSide(Math.min(e.pageX - 2, maxWidth));
    }
  };
  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (isRightClick && width - e.pageX < maxRightWidth) {
      setRightSide(Math.min(width - (e.pageX + 2), maxWidth));
    }
    if (isLeftClick && e.pageX < maxLeftWidth) {
      setLeftSide(Math.min(e.pageX - 2, maxWidth));
    }
  };
  return {
    ref,
    leftSide,
    rightSide,
    isLeftClick,
    isRightClick,
    onMouseUp,
    onPointerMove,
    setIsLeftClick,
    setIsRightClick,
  };
}
