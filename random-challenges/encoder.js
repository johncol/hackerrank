function minimumTime(numOfSubFiles, files) {
  if (numOfSubFiles === 1) {
    return 0;
  }

  const sortedFiles = files.sort((n1, n2) => n1 - n2);
  const file = sortedFiles[0] + sortedFiles[1];
  return file + minimumTime(numOfSubFiles - 1, [file, ...sortedFiles.slice(2)]);
}
