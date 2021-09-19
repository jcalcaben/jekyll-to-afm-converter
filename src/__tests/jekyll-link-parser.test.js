import { unified } from 'unified';
import markdown from "remark-parse";

import remover from "../jekyll-link-parser";

test("parses jekyll link tags", () => {
  const tree = unified().use(markdown).parse(`This is a [link][]

[link]: {% link www.google.com %}
`);

  unified()
    .use(remover)
    .run(tree, (err, result) => {
      expect(result).toMatchSnapshot();
    });
});

test.todo("parses jekyll link tag in reference links");
