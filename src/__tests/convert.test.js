import convert from "../convert";

test("leaves normal markdown alone", () => {
  const content = "**bold** _italics_";

  const result = convert({
    fileContent: content,
  });

  expect(result).toMatchInlineSnapshot(`
"**bold** _italics_
"
`);
});

test("fix open HTML tags", () => {
  const content = `hello
  
<br>  

world`;

  const result = convert({
    fileContent: content,
  });

  expect(result).toMatchInlineSnapshot(`
"hello

<br />  

world
"
`);
});
