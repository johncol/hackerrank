function pageCount(total, page) {
  const shouldStartByFront = page <= total - page;
  if (shouldStartByFront) {
    return Math.floor(page / 2.0);
  }

  if (total % 2 === 1) {
    return Math.floor((total - page) / 2.0);
  }

  return Math.ceil((total - page) / 2.0);
}
