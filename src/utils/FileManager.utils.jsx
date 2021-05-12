import storage from "local-storage-fallback";

const importAll = (r) => r.keys().map(r);

export const folders = Object.freeze({
  heroImages: importAll(require.context("../data/images/hero", false, /\.jpg$/)),
  tinyHeroImages: importAll(require.context("../data/images/hero/tiny", false, /\.jpg$/)),
});

export const getRandomInt = (range) => Math.floor(Math.random() * Math.floor(range));

export const getInitialTheme = () => {
  const savedTheme = storage.getItem("theme");
  return savedTheme === "true";
};
