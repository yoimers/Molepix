import { List28Filled, List28Regular, bundleIcon } from "@fluentui/react-icons";
import { ReactNode } from "react";

const AccessTime = bundleIcon(List28Filled, List28Regular);
const LeftSideBarHeader = (): ReactNode => {
  return (
    <div
      data-tauri-drag-region
      className="flex justify-between select-none h-10"
    >
      <div className="flex justify-center items-center text-white h-10 w-10">
        <div className="flex justify-center items-center h-6 w-6 rounded-md hover:bg-slate-600">
          <AccessTime aria-label="An Hamburger menu icon" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default LeftSideBarHeader;
