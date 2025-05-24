import { useState, useEffect } from "react";

const useScrollYNavbarChecker = (scrollTopValue = 70) => {
  const [scrollEnableSticky, setScrollEnableSticky] = useState(false);
  useEffect(() => {
    function handleScroll() {
      window.scrollY > scrollTopValue
        ? setScrollEnableSticky(true)
        : setScrollEnableSticky(false);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollEnableSticky;
};

export default useScrollYNavbarChecker;
