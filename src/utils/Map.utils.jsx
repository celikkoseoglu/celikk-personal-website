const mapNotNull = array => {
  if (array != null) {
    return array;
  }
  return [];
};

export default mapNotNull;
