"use strict";
const jsdoc2md = require("jsdoc-to-markdown");
const fs = require("fs");
const path = require("path");

const files = [
  {
    name: "NFT",
    input: "sdks/open-format/src/core/nft.ts",
    output: "website/docs/reference/javascript"
  },
  {
    name: "SDK",
    input: "sdks/open-format/src/core/sdk.ts",
    output: "website/docs/reference/javascript"
  },
  {
    name: "Hooks",
    input: "sdks/react/src/hooks/*.tsx",
    output: "website/docs/reference/react"
  }
];

for (const file of files) {
  const templateData = jsdoc2md.getTemplateDataSync({
    files: file.input,
    configure: "jsdoc2md.json"
  });

  console.log(`Generating: ${file.name}`);

  const output = jsdoc2md.renderSync({
    data: templateData,
    template: `---
title: ${file.name}
---

{{>all-docs~}}
`
  });

  fs.writeFileSync(
    path.resolve(file.output, `${file.name.toLowerCase()}.md`),
    output
  );
}
