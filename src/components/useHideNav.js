import { useState, useRef } from "react";

export default function useHideNav() {
  const elementRef = useRef();
  const [scrollTop, setScrollTop] = useState(0);
  const [showMenu, setShowMenu] = useState(true);

  const scrollFnc = () => {
    //const scrollHeight = appRef.current?.scrollHeight;
    const st = elementRef?.current?.scrollTop;
    st > scrollTop ? setShowMenu(true) : setShowMenu(false);
    setScrollTop((prev) => {
      if (prev !== st) return st;
    });
  };

  return [elementRef, scrollFnc, showMenu];
}
