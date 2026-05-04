import { useEffect } from "react";

type Props = {
  title: string;
};

/** Синхронизация `document.title` на вложенных роутах без дублирования `DocumentTitle`. */
export function PageMeta({ title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
}
