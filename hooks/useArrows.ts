import { useRef } from "react";

export function useArrows({ size }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const moveRigth = () => {
    const divElement = ref.current;
    if (divElement === null) return;

    const widthChildren = divElement.children[0].clientWidth;
    const left = divElement.scrollLeft + divElement.clientWidth;
    divElement.scrollTo({ behavior: "smooth", left: left });
  };

  const moveLeft = () => {
    const divElement = ref.current;
    if (divElement === null) return;

    const widthChildren = divElement.children[0].clientWidth;
    const left = divElement.scrollLeft - divElement.clientWidth;
    divElement.scrollTo({ behavior: "smooth", left: left });
  };

  return { ref, moveLeft, moveRigth };
}
