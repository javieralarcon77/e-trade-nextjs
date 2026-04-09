import { useState } from "react";

export function useSidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  function onOpenMenu() {
    console.log("click desde el menu");
    setOpenSidebar(true);
  }

  function onCloseMenu() {
    console.log("click desde el sidebar");
    setOpenSidebar(false);
  }

  return { openSidebar, onCloseMenu, onOpenMenu };
}
