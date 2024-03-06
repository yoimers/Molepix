import LeftSideBarHeader from "./Header";
import ImportDirectoryMenu from "./ImportDirectoryMenu";
import LeftSideBarMenuList from "./MenuList";

type Props = {
  width: number;
};
export default function LeftSideBar(props: Props) {
  return (
    <div
      className="flex flex-col bg-indigo-100 bg-opacity-5 h-full"
      style={{
        flexBasis: props.width,
        minWidth: props.width,
        maxWidth: props.width,
      }}
    >
      <LeftSideBarHeader />
      <div className="flex flex-col justify-between h-full">
        <LeftSideBarMenuList />
        <ImportDirectoryMenu />
      </div>
    </div>
  );
}
