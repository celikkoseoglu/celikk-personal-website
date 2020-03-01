import {isWebpSupported} from "react-image-webp/dist/utils";
import storage from "local-storage-fallback";

const importAll = r => r.keys().map(r);

export const IMAGE_EXTENSION = isWebpSupported() ? ".webp" : ".png";

export const folders = Object.freeze({
  blogFiles: importAll(require.context("../blog", false, /\.md$/)),
  heroImages: importAll(require.context("../data/images/hero", false, /\.jpg$/)),
  tinyHeroImages: importAll(require.context("../data/images/hero/tiny", false, /\.jpg$/))
});

export const mapFileNameToId = (fileName, fileArray) => {
  for (let i = 0; i < fileArray.length; i += 1) {
    if (fileArray[i].indexOf(fileName) !== -1) {
      return fileArray[i].substring(fileArray[i].lastIndexOf("/") + 1);
    }
  }
  return null;
};

// This function checks if the given imageFileName has a custom file extension. If not
// it is assumed that file is a PNG/WebP and the PNG/WebP image name is returned
export const getImageLinkWithExtension = imageLink => {
  if (!imageLink.includes(".")) {
    return imageLink + IMAGE_EXTENSION;
  }
  return imageLink;
};

export const getRandomInt = range => {
  return Math.floor(Math.random() * Math.floor(range));
};

export const getInitialTheme = () => {
  const savedTheme = storage.getItem("theme");
  return savedTheme === "true";
};
