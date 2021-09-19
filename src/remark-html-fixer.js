import { unified } from "unified";
import rehypeParse from "rehype-parse";
import toHtml from "hast-util-to-html";
import visit from "unist-util-visit";

// Visits an HTML node and cleans up the HTML value
const htmlVisitor = (node) => {
  const html = node.value;

  let result = html;

  const tree = unified().use(rehypeParse, { fragment: true }).parse(html);

  result = toHtml(tree, { closeSelfClosing: true });

  node.value = result;
};

const fixer = () => {
  return (tree) => {
    visit(tree, "html", htmlVisitor);
  };
};

export default fixer;
