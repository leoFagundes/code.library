import { useState, useEffect } from "react";

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (screenWidth < 600) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }, [screenWidth]);

  const handleWindowSizeChange = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return { screenWidth, isSmallScreen };
};
