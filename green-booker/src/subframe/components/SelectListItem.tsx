"use client";
/*
 * Documentation:
 * Select List Item — https://app.subframe.com/b4a8594fc5dd/library?component=Select+List+Item_be40ece2-fc8a-4ee0-aaf6-aec6847d7386
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface SelectListItemRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  image?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  metadata?: React.ReactNode;
  className?: string;
}

const SelectListItemRoot = React.forwardRef<
  HTMLElement,
  SelectListItemRootProps
>(function SelectListItemRoot(
  {
    image,
    title,
    subtitle,
    metadata,
    className,
    ...otherProps
  }: SelectListItemRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/be40ece2 flex w-full cursor-pointer items-center gap-4 rounded-md px-4 py-4 hover:bg-neutral-50 active:bg-neutral-100",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex items-start gap-2">
        {image ? (
          <img
            className="h-12 w-12 flex-none object-cover [clip-path:circle()]"
            src={image}
          />
        ) : null}
      </div>
      <div className="flex grow shrink-0 basis-0 flex-col items-start">
        {title ? (
          <span className="w-full text-body-bold font-body-bold text-default-font">
            {title}
          </span>
        ) : null}
        {subtitle ? (
          <span className="w-full text-caption font-caption text-subtext-color">
            {subtitle}
          </span>
        ) : null}
      </div>
      <div className="flex items-center justify-end gap-4">
        {metadata ? (
          <span className="text-body-bold font-body-bold text-default-font text-right">
            {metadata}
          </span>
        ) : null}
      </div>
    </div>
  );
});

export const SelectListItem = SelectListItemRoot;
