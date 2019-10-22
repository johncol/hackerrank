const INT_VALUE_FOR_A = 97;

function designerPdfViewer(heights, word = '') {
  const toHeight = letter => heights[letter.charCodeAt(0) - INT_VALUE_FOR_A];
  const toMaxHeight = (max, h) => (h > max ? h : max);

  const maxHeight = word
    .toLowerCase()
    .split('')
    .map(toHeight)
    .reduce(toMaxHeight, 0);

  return word.length * maxHeight;
}
