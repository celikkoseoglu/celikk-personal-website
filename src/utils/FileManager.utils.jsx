import storage from "local-storage-fallback";

const importAll = (r) => r.keys().map(r);

export const folders = Object.freeze({
  blogFiles: importAll(require.context("../blog", false, /\.md$/)),
  heroImages: importAll(require.context("../data/images/hero", false, /\.jpg$/)),
  tinyHeroImages: importAll(require.context("../data/images/hero/tiny", false, /\.jpg$/)),
});

export const mapFileNameToId = (fileName, fileArray) => {
  for (let i = 0; i < fileArray.length; i += 1) {
    // match iOSvsAndroid from /static/media/iOSvsAndroid.79d56394.md
    const match = RegExp(/[a-zA-Z0-9]+(?=\.)/g).exec(fileArray[i])[0];
    // check if provided fileName exactly matches with the fileName
    if (fileName === match) {
      return fileArray[i].substring(fileArray[i].lastIndexOf("/") + 1);
    }
  }
  throw Error(`File ${fileName} is not found`);
};

export const getRandomInt = (range) => {
  return Math.floor(Math.random() * Math.floor(range));
};

export const getInitialTheme = () => {
  const savedTheme = storage.getItem("theme");
  return savedTheme === "true";
};
