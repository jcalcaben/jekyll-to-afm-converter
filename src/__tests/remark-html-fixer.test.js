import { unified } from "unified";
import markdown from "remark-parse";
import { toString } from "mdast-util-to-string";

import fixer from "../remark-html-fixer";

test("closes open tags", () => {
  const tree = unified().use(markdown).parse(`**Hello** 
    <br> 
    _world_`);

  unified()
    .use(fixer)
    .run(tree, (err, result) => {
      const rendered = toString(result);
      expect(rendered).toMatchInlineSnapshot(`
        "Hello
        <br />
        world"
      `);
    });
});
