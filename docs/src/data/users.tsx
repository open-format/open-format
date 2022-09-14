/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import { translate } from "@docusaurus/Translate";
import { sortBy } from "@site/src/utils/jsUtils";

/*
 * - Add a local image preview (decent screenshot of the Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 */

export type TagType =
  // 👇 This tag is pretty important for highlighting our top picks
  | "favorite"
  | "experiment"
  | "finance"
  | "marketplace"
  | "marketing"
  | "rewards"
  | "ticketing";

// Add sites to this list
// prettier-ignore
const Users: User[] = [
  {
    title: "Office incentive scheme",
    description:
      "Simpleweb are experimenting with Open Format to incentivise employees to come back to the office after the pandemic. When an employee connects to the office WiFi, an NFT is generated, which can be used to redeem items from a canteen.",
    preview: require("./showcase/OfficeIncentiveScheme.jpg"),
    website: null,
    source: null,
    tags: ["experiment", "rewards"]
  },
  {
    title: "Music NFT Platform",
    description:
      "Daft Springer created a music NFT platform using Open Format in only one month with a web2 developer.",
    preview: require("./showcase/DaftSpringer.jpg"),
    website: null,
    source: null,
    tags: ["marketplace", "rewards"]
  },
  {
    title: "Event Ticketing Platform",
    description:
      "Amplify used Open Format to create NFT Tickets for their first DeFi gig in a couple of days.",
    preview: require("./showcase/Amplify.jpg"),
    website: null,
    source: null,
    tags: ["ticketing"]
  },
  {
    title: "Open Format NFT",
    description:
      "We challenged one of our web2 developers to build an NFT marketplace in four weeks. This was the result.",
    preview: require("./showcase/OpenFormatNFT.jpg"),
    website: "https://open-format-nft.vercel.app/",
    source: "https://github.com/simpleweb/open-format-nft",
    tags: ["marketplace"]
  },
  {
    title: "Simple Faucets",
    description: "A marketing tool and faucet for Polygon.",
    preview: require("./showcase/SimpleFaucets.jpg"),
    website: "https://faucets.simpleweb.co.uk/",
    source: null,
    tags: ["marketing"]
  },
  {
    title: "YourTub3",
    description:
      "A decentralised video platform where each video and it's metadata is an NFT.",
    preview: require("./showcase/YourTub3.jpg"),
    website: null,
    source: null,
    tags: ["marketplace"]
  },
  {
    title: "Simple NFT",
    description:
      "Showcasing some of the more complex features that are configurable with Open Format. The primary goal was to prove that you could deposit as the creator and then subsequently withdraw as a holder. The idea behind this is that NFT's can reward you financially.",
    preview: require("./showcase/SimpleNFT.jpg"),
    website: null,
    source: null,
    tags: ["finance"]
  }
  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export type User = {
  title: string;
  description: string;
  preview: string;
  website: string | null;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: { [type in TagType]: Tag } = {
  favorite: {
    label: translate({ message: "Favorite" }),
    description: translate({
      message:
        "Our favorite Docusaurus sites that you must absolutely check out!",
      id: "showcase.tag.favorite.description"
    }),
    color: "#e9669e"
  }

  // opensource: {
  //   label: translate({ message: "Open-Source" }),
  //   description: translate({
  //     message: "Open-Source Docusaurus sites can be useful for inspiration!",
  //     id: "showcase.tag.opensource.description"
  //   }),
  //   color: "#39ca30"
  // },

  // product: {
  //   label: translate({ message: "Product" }),
  //   description: translate({
  //     message: "Docusaurus sites associated to a commercial product!",
  //     id: "showcase.tag.product.description"
  //   }),
  //   color: "#dfd545"
  // },

  // design: {
  //   label: translate({ message: "Design" }),
  //   description: translate({
  //     message:
  //       "Beautiful Docusaurus sites, polished and standing out from the initial template!",
  //     id: "showcase.tag.design.description"
  //   }),
  //   color: "#a44fb7"
  // },

  // i18n: {
  //   label: translate({ message: "I18n" }),
  //   description: translate({
  //     message:
  //       "Translated Docusaurus sites using the internationalization support with more than 1 locale.",
  //     id: "showcase.tag.i18n.description"
  //   }),
  //   color: "#127f82"
  // },

  // versioning: {
  //   label: translate({ message: "Versioning" }),
  //   description: translate({
  //     message:
  //       "Docusaurus sites using the versioning feature of the docs plugin to manage multiple versions.",
  //     id: "showcase.tag.versioning.description"
  //   }),
  //   color: "#fe6829"
  // },

  // large: {
  //   label: translate({ message: "Large" }),
  //   description: translate({
  //     message:
  //       "Very large Docusaurus sites, including many more pages than the average!",
  //     id: "showcase.tag.large.description"
  //   }),
  //   color: "#8c2f00"
  // },

  // meta: {
  //   label: translate({ message: "Meta" }),
  //   description: translate({
  //     message: "Docusaurus sites of Meta (formerly Facebook) projects",
  //     id: "showcase.tag.meta.description"
  //   }),
  //   color: "#4267b2" // Facebook blue
  // },

  // personal: {
  //   label: translate({ message: "Personal" }),
  //   description: translate({
  //     message:
  //       "Personal websites, blogs and digital gardens built with Docusaurus",
  //     id: "showcase.tag.personal.description"
  //   }),
  //   color: "#14cfc3"
  // },

  // rtl: {
  //   label: translate({ message: "RTL Direction" }),
  //   description: translate({
  //     message:
  //       "Docusaurus sites using the right-to-left reading direction support.",
  //     id: "showcase.tag.rtl.description"
  //   }),
  //   color: "#ffcfc3"
  // }
};

export const TagList = Object.keys(Tags) as TagType[];

function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, user => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, user => !user.tags.includes("favorite"));
  return result;
}

export const sortedUsers = sortUsers();
