const importAll = r => r.keys().map(r);

export const imageFolders = Object.freeze({
  ongoingProjectImages: importAll(
    require.context(`../data/images/ongoingProjects`, false, /\.png$/)
  ),
  personalSkillImages: importAll(
    require.context(`../data/images/personalSkills`, false, /\.png$/)
  ),
  projectImages: importAll(
    require.context(`../data/images/projects`, false, /\.png$/)
  )
});
export const blogFiles = importAll(require.context("../blog", false, /\.md$/));

export const mapFileNameToId = (fileName, fileArray) => {
  for (let i = 0; i < fileArray.length; i += 1) {
    if (fileArray[i].indexOf(fileName) !== -1) {
      return fileArray[i].substring(fileArray[i].lastIndexOf("/") + 1);
    }
  }
  return null;
};
