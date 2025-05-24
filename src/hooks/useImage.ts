import useWindowSize from "./useWindowSize";

const useImage = (images: string[]) => {
  const windowWidth = useWindowSize();
  return windowWidth < 600
    ? images[0]
    : windowWidth < 1024
    ? images[1]
    : images[2];
};

export default useImage;
