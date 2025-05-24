import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function onResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", onResize);

    return function () {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return width;
};

export default useWindowSize;
