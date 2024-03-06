import {
  Add16Filled,
  Archive20Regular,
  Clock20Regular,
} from "@fluentui/react-icons";
import {
  Fragment,
  ReactElement,
  ReactNode,
  useCallback,
  useState,
} from "react";
import CustomText from "../Components/Text/Text";
import { Dialog, Transition } from "@headlessui/react";

type LeftSideBarMenuItemType = {
  text: string;
  rtext?: string | number;
  icon: ReactElement<any, any>;
};
const items: LeftSideBarMenuItemType[] = [
  {
    text: "全て",
    rtext: 123123,
    icon: <Archive20Regular />,
  },
  { text: "閲覧履歴", rtext: 23, icon: <Clock20Regular /> },
  { text: "閲覧履歴", rtext: 23, icon: <Clock20Regular /> },
  { text: "閲覧履歴", rtext: 23, icon: <Clock20Regular /> },
  { text: "閲覧履歴", rtext: 23, icon: <Clock20Regular /> },
  { text: "閲覧履歴", rtext: 23, icon: <Clock20Regular /> },
];
const LeftSideBarMenuList = (): ReactNode => {
  return (
    <div className="flex flex-col grow-0 items-center justify-center select-none px-2">
      <div className="w-full">
        {items.map((item) => (
          <LeftSideBarMenuItem {...item} />
        ))}
      </div>
      <div className="my-1" />
      <LeftSideBarSmartFolder />
    </div>
  );
};

const LeftSideBarMenuItem = (props: LeftSideBarMenuItemType): ReactNode => {
  return (
    <div className="flex justify-between w-full px-2 h-8 hover:bg-slate-100 hover:bg-opacity-10 rounded-md hover:text-opacity-100">
      <div className="flex flex-row items-center">
        <div className="text-slate-100 text-opacity-80">{props.icon}</div>
        <div className="mr-2" />
        <CustomText>{props.text}</CustomText>
      </div>
      <div className="flex flex-row items-center justify-center">
        {props.rtext && (
          <CustomText className="text-opacity-50">
            {props.rtext.toString()}
          </CustomText>
        )}
      </div>
    </div>
  );
};

const LeftSideBarSmartFolder = (): ReactNode => {
  const [isOpen, setIsOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const trigger = useCallback(() => setIsOpen((prev) => !prev), []);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row items-center justify-between">
        <div
          onClick={trigger}
          className="px-2 hover:bg-slate-100 hover:bg-opacity-10 rounded-md hover:text-opacity-100"
        >
          <CustomText>Smart Folder</CustomText>
        </div>
        <div
          className="flex h-6 w-6 items-center justify-center text-slate-100 text-opacity-80 opacity-60 hover:bg-slate-100 hover:bg-opacity-10 rounded-md hover:opacity-100"
          onClick={() => setIsModalOpen(true)}
        >
          <Add16Filled />
        </div>
        <Transition appear show={isModalOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setIsModalOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md bg-zinc-800 transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-slate-100 text-opacity-80"
                    >
                      Payment successful
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-slate-100 text-opacity-80">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      <div className="mt-1" />
      {isOpen && (
        <div className="">
          <LeftSideBarMenuItem
            text="TEST"
            rtext={123123}
            icon={<Clock20Regular />}
          />
        </div>
      )}
    </div>
  );
};

export default LeftSideBarMenuList;
