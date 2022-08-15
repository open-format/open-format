/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: "category",
      label: "Getting Started",
      items: ["introduction", "what-is-open-format"],
      collapsible: false
    },
    {
      type: "category",
      label: "Quickstart",
      items: ["quickstart/javascript", "quickstart/react"],
      collapsible: false
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/overview",
        "guides/deploying",
        "guides/minting",
        "guides/buying-and-selling",
        "guides/royalties",
        "guides/revenue-sharing",
        "guides/sales-commissions",
        "guides/metadata"
      ],
      collapsible: false
    },
    {
      type: "category",
      label: "Reference",
      items: ["glossary"],
      collapsible: false
    }
  ],
  reference: [
    {
      type: "category",
      label: "Javascript",
      items: [
        {
          type: "doc",
          id: "api/javascript/sdk",
          label: "SDK"
        },
        {
          type: "doc",
          id: "api/javascript/nft",
          label: "NFT"
        }
      ],
      collapsible: false
    },
    {
      type: "category",
      label: "React",
      items: [
        "api/react/openformatprovider",
        "api/react/connectbutton",
        {
          type: "doc",
          id: "api/react/hooks",
          label: "Hooks"
        }
      ],
      collapsible: false
    },
    {
      type: "category",
      label: "Contracts",
      items: ["api/contracts/open-format", "api/contracts/error-codes"],
      collapsible: false
    }
  ]
};

module.exports = sidebars;
