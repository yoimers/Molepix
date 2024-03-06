import {
  ChevronRight24Filled,
  ChevronDown24Filled,
  MoreHorizontal24Filled,
  Delete24Filled,
} from "@fluentui/react-icons";

import CustomText from "../Components/Text/Text";
import { Fragment, ReactNode, useState } from "react";
import { Popover, Transition } from "@headlessui/react";

type ImportDirectoryMenuItemType = {
  path: string;
};
const items: ImportDirectoryMenuItemType[] = [
  {
    path: "C:/XXXX/YYY",
  },
  {
    path: "C:/XXXX/ZZZ",
  },
  {
    path: "C:/XXXX/WWW",
  },
];
export default function ImportDirectoryMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div
      className={`flex flex-col ${
        isOpen && "min-h-60"
      } max-h-60 w-full select-none`}
    >
      <div
        className="flex items-center border-y border-slate-200/40 px-1"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <ChevronRight24Filled className="h-4 w-4 mr-1 text-slate-100 text-opacity-80" />
        ) : (
          <ChevronDown24Filled className="h-4 w-4 mr-1 text-slate-100 text-opacity-80" />
        )}
        <CustomText>Import Directory</CustomText>
      </div>
      {isOpen && (
        <div className="h-full overflow-y-scroll items-center px-2 mt-1">
          {items.map((item) => (
            <ImportDirectoryMenuItem path={item.path} />
          ))}
        </div>
      )}
    </div>
  );
}

type ItemProps = {
  path: string;
};
const ImportDirectoryMenuItem = (props: ItemProps): ReactNode => {
  return (
    <div className="flex items-center h-6 py-1 text-slate-100 text-opacity-80">
      <Popover className="relative">
        <Popover.Button>
          <MoreHorizontal24Filled />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute z-10 mt-3 max-w-sm transform px-4 bg-slate-300 rounded-lg">
            <div className="flex flex-row rounded-lg shadow-lg">
              <Delete24Filled className="text-red-600" />
              <div className="text-red-600 font-medium">DELETE</div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <div className="font-thin">{props.path}</div>
    </div>
  );
};
