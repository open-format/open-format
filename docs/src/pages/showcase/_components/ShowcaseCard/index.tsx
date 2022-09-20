/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Image from '@theme/IdealImage';
import FavoriteIcon from '@site/src/components/svgIcons/FavoriteIcon';
import {
  Tags,
  TagList,
  type TagType,
  type User,
  type Tag,
} from '@site/src/data/users';
import {sortBy} from '@site/src/utils/jsUtils';
import Tooltip from '../ShowcaseTooltip';

const GRADIENTS = [
  "conic-gradient(from 180deg at 58.33% 50%, rgb(109, 84, 225) 0deg, rgb(25, 67, 157) 91.02deg, rgb(243, 99, 255) 180.24deg, rgb(26, 130, 252) 269.01deg, rgb(109, 84, 225) 360deg)",
  "conic-gradient(from 180deg at 58.33% 50%, rgb(107, 202, 238) 0deg, rgb(107, 202, 238) 91.02deg, rgb(46, 182, 125) 180.24deg, rgb(74, 21, 75) 269.01deg, rgb(107, 202, 238) 360deg)",
  "conic-gradient(from 180deg at 50% 50%, rgb(107, 202, 238) -48.75deg, rgb(242, 78, 30) 35.62deg, rgb(162, 89, 255) 153.75deg, rgb(26, 188, 254) 232.5deg, rgb(107, 202, 238) 311.25deg, rgb(242, 78, 30) 395.63deg)",
  "conic-gradient(from 180deg at 50% 50%, rgb(255, 255, 255) -48.75deg, rgb(226, 238, 253) 35.62deg, rgb(66, 107, 246) 153.75deg, rgb(131, 194, 233) 232.5deg, rgb(255, 255, 255) 311.25deg, rgb(226, 238, 253) 395.63deg)",
  "conic-gradient(from 180deg at 50% 50%, rgb(255, 255, 255) -48.75deg, rgb(242, 78, 30) 35.62deg, rgb(162, 89, 255) 153.75deg, rgb(254, 108, 26) 232.5deg, rgb(255, 255, 255) 311.25deg, rgb(242, 78, 30) 395.63deg)",
]

const TagComp = React.forwardRef<HTMLLIElement, Tag>(
  ({label, color, description}, ref) => (
    <li ref={ref} title={description}>
      <span>{label.toLowerCase()}</span>
      <span style={{backgroundColor: color}} />
    </li>
  ),
);

function ShowcaseCardTag({tags}: {tags: TagType[]}) {
  const tagObjects = tags.map((tag) => ({tag, ...Tags[tag]}));

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag),
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        const id = `showcase_card_tag_${tagObject.tag}`;

        return (
          <Tooltip
            key={index}
            text={tagObject.description}
            anchorEl="#__docusaurus"
            id={id}>
            <TagComp key={index} {...tagObject} />
          </Tooltip>
        );
      })}
    </>
  );
}

function ShowcaseCard({user}: {user: User}) {
  return (
    <li
      key={user.title}
      className="relative grid auto-rows-min grid-cols-1 items-center rounded-xl overflow-hidden border border-black dark:bg-[#0d0d0d]">
      <div className="relative aspect-[8/5] overflow-hidden">
        <div className="relative h-full flex justify-center items-center z-10">
          <Image img={user.preview} alt={user.title} />
        </div>
      </div>
      <div className="px-8 py-6 pb-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold tracking-tighter text-black dark:text-gray-100 mb-0">
            {user.title}
          </h3>
          {user.tags.includes('favorite') && (
            <FavoriteIcon size="small" />
          )}
          {user.source && (
            <Link href={user.source} className="relative z-20 text-black hover:text-black/80 dark:text-gray-100 dark:hover:text-gray-400">
              <div className="flex items-center">
                <span className="sr-only">GitHub</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  fontSize="1.25rem"
                  aria-hidden="true"
                  focusable="false"
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
              </div>
            </Link>
          )}
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          {user.description}
        </p>
        {user.website && (
          <Link href={user.website} className="absolute inset-0 z-10">
            <span className="sr-only">{user.title}</span>
          </Link>
        )}
      </div>

    </li>
  );
}

export default React.memo(ShowcaseCard);
