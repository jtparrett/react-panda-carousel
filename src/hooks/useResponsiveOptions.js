import React, { useState, useEffect } from "react";

const useResponsiveOptions = (defaultOptions, responsive) => {
  const [options, setOptions] = useState(defaultOptions);

  if (!responsive) {
    return defaultOptions;
  }

  const handleResize = () => {
    const newOptions = responsive.reduce((acc, { breakpoint, options }) => {
      return {
        ...acc,
        ...(window.innerWidth < breakpoint && options)
      };
    }, defaultOptions);

    setOptions(newOptions);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return options;
};

export default useResponsiveOptions;
