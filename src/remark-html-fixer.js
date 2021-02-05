const unified = require("unified");
const rehypeParse = require("rehype-parse");
const toHtml = require("hast-util-to-html");
const visit = require("unist-util-visit");

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

module.exports = fixer;
