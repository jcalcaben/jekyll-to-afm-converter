const remark = require("remark");

const convert = ({ config, fileContent }) => {
  let result = "";

  remark()
    .use(require("remark-preset-lint-consistent"))
    .use(require("remark-preset-lint-recommended"))
    .use(require("remark-preset-lint-markdown-style-guide"))
    .use({
      settings: { emphasis: "_", strong: "*" },
      // ^ `remark-stringify` settings.
    })
    .process(fileContent, (err, file) => {
      if (err) throw err;
      result = String(file);
    });

  return result;
};

module.exports = convert;
