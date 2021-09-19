import findAndReplace from "mdast-util-find-and-replace";

const remover = () => {
  return (tree) => {
    findAndReplace(tree, "google", "yahoo");
  };
};

export default remover;
