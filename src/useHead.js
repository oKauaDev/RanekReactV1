const useHead = (title, description = "") => {
  document.title = title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", description);

  return document.head;
};

export default useHead;
