const { TestScheduler } = require("jest");
var unified = require("unified");
var markdown = require("remark-parse");

const fixer = require("../remark-html-fixer");

test("closes open tags", () => {
  const tree = unified().use(markdown).parse(`**Hello** 
    <br> 
    _world_`);

  unified()
    .use(fixer)
    .run(tree, (err, result) => {
      expect(result).toMatchSnapshot();
    });
});
