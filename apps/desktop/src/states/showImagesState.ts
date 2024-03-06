import { atom } from "recoil";

// フォーカスしている画像のIDを保存(パスではない)
export const showImagesState = atom<string | null>({
  key: "showImagesState",
  default: null,
});
