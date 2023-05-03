const clearPage = (content) => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  // removeAllChildNodes(content);
};

export { clearPage };
