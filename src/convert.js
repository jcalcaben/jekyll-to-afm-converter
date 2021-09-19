import remark from "remark";

import consistent from "remark-preset-lint-consistent";
import recommended from "remark-preset-lint-recommended";
import md from "remark-preset-lint-markdown-style-guide";

import fixer from "./remark-html-fixer";

const convert = ({ config, fileContent }) => {
  let result = "";

  remark()
    .use(consistent)
    .use(recommended)
    .use(md)
    .use(fixer)
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

export default convert;
