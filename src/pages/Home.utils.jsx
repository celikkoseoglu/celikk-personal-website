const importAll = r => r.keys().map(r);
const markdownFiles = importAll(require.context("../blog", false, /\.md$/));

export const mapFileNameToId = fileName => {
  for (let i = 0; i < markdownFiles.length; i += 1) {
    if (markdownFiles[i].indexOf(fileName) !== -1) {
      return markdownFiles[i].substring(markdownFiles[i].lastIndexOf("/") + 1);
    }
  }
  return null;
};

export default mapFileNameToId;
