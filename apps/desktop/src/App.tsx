import LeftSideBar from "./LeftSideBar/LeftSideBar";
import Contents from "./Contents/Contents";
import RightSideBar from "./RightSideBar/RightSideBar";
import useMutableSidebar from "./useMutableSidebar";
import { Route, Switch } from "wouter";
import ImageViewPage from "./Contents/ImageViewPage";

const Splitter = ({
  setIsClick,
  isClick,
}: {
  setIsClick: (b: boolean) => void;
  isClick: boolean;
}) => {
  return (
    <div
      className={`${
        isClick && "bg-blue-600"
      } max-w-1 min-w-1 select-none hover:cursor-col-resize z-10`}
      onMouseDown={() => {
        setIsClick(true);
      }}
    ></div>
  );
};

function App() {
  const {
    ref,
    leftSide,
    rightSide,
    isLeftClick,
    isRightClick,
    onMouseUp,
    onPointerMove,
    setIsLeftClick,
    setIsRightClick,
  } = useMutableSidebar();
  return (
    <div
      className={`flex flex-row w-screen h-screen relative overflow-hidden scrollbar-hide text-slate-100 text-opacity-80 bg-zinc-800
       ${(isLeftClick || isRightClick) && "cursor-col-resize"}`}
      onMouseUp={(e) => onMouseUp(e)}
      onPointerMove={(e) => onPointerMove(e)}
      ref={ref}
    >
      <LeftSideBar width={leftSide} />
      <Splitter isClick={isLeftClick} setIsClick={setIsLeftClick} />
      <Switch>
        <Route path="/" component={Contents} />
        <Route path="/images/:id">
          {(params) => <ImageViewPage id={params.id} />}
        </Route>
        <Route>404</Route>
      </Switch>
      <Splitter isClick={isRightClick} setIsClick={setIsRightClick} />
      <RightSideBar width={rightSide} />
    </div>
  );
}

export default App;
