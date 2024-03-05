function followFilePath(dir, pathList) {
  if (pathList.length == 1) {
    fileIter = dir.getFilesByName(pathList.shift());

    if (fileIter.hasNext() == false)
      return null;

    return fileIter.next();
  }

  dirIter = dir.getFoldersByName(pathList.shift());

  if (dirIter.hasNext() == false)
    return null;

  return followFilePath(dirIter.next(), pathList);
}

function getFileByPath(path) {
  return followFilePath(DriveApp.getRootFolder(), path.split("/"));
}

function getFileIdByPath(path) {
  return getFileByPath(path).getId();
}
