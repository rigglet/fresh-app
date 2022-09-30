import { useState, useRef } from "react";


export default function useHideNav() {
  const elementRef = useRef();
  const [showMenu, setShowMenu] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);
  
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

// export default function useHideNav() {
//   const elementRef = useRef();
  
//   const [elementScrollTop, setElementScrollTop] = useState(0);
//   const [showMenu, setShowMenu] = useState(true);

//   const scrollFnc = () => {
//     const currentScrollTop = elementRef?.current?.scrollTop;
    
//     setElementScrollTop((prev) => {
//       //if (prev !== elementScrollTop) return elementScrollTop;
//       return currentScrollTop
//     });

//     currentScrollTop < elementScrollTop ? setShowMenu(() => true) : setShowMenu(() => false);
    
//     console.log("currentScrollTop :", currentScrollTop);
//     console.log("elementScrollTop :", elementScrollTop);
    
//     //setElementScrollTop(currentScrollTop)
//   };
  
//   return [elementRef, scrollFnc, showMenu];
// }

