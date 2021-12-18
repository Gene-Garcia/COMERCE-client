import { useEffect, useState } from "react";

/*
 * a custom hook that will get the current dimension of the device. we have used a hook instead of simply getting
 * the width and height so that whenever the devices change size even after initially opening the page,
 * we are able to get the new width and height
 *
 * as of now we only need get the width of the window
 *
 */
function useWindow() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width };
}

export default useWindow;
