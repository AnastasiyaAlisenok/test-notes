const addRange = (element: null): void => {
  if (element) {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(element as Node);
    range.collapse(false);
    selection?.removeAllRanges();
    selection?.addRange(range);
  }
};

export default addRange;
