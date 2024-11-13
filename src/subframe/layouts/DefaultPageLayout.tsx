"use client";
/*
 * Documentation:
 * Default Page Layout — https://app.subframe.com/b4a8594fc5dd/library?component=Default+Page+Layout_a57b1c43-310a-493f-b807-8cc88e2452cf
 * Sidebar with large items — https://app.subframe.com/b4a8594fc5dd/library?component=Sidebar+with+large+items_70c3656e-47c2-460e-8007-e198804e8862
 * Dropdown Menu — https://app.subframe.com/b4a8594fc5dd/library?component=Dropdown+Menu_99951515-459b-4286-919e-a89e7549b43b
 * Alert — https://app.subframe.com/b4a8594fc5dd/library?component=Alert_3a65613d-d546-467c-80f4-aaba6a7edcd5
 */

import React from "react";
import Link from "next/link";
import * as SubframeCore from "@subframe/core";
import { SidebarWithLargeItems } from "../components/SidebarWithLargeItems";
import { Button } from "@/subframe/components/Button";
import { DropdownMenu } from "../components/DropdownMenu";
import { Alert } from "../components/Alert";

interface DefaultPageLayoutRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const DefaultPageLayoutRoot = React.forwardRef<
  HTMLElement,
  DefaultPageLayoutRootProps
>(function DefaultPageLayoutRoot(
  { children, className, ...otherProps }: DefaultPageLayoutRootProps,
  ref
) {

  return (
    <div
      className={SubframeCore.twClassNames(
        "flex h-screen w-full items-center",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <SidebarWithLargeItems
        className="mobile:hidden"
        header={
        <div className="flex flex-row space-x-0">
          <p className=" text-3xl font-bold flex-none text-brand-primary">Green</p>
          <p className=" text-3xl font-bold flex-none">Booker</p>
        </div>
          // <img
          //   className="h-8 w-8 flex-none object-cover"
          //   src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
          // />
        }
        footer={
           <Button
              className="h-10 w-full flex-none"
              variant="destructive-secondary"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
           >
            Sign out
           </Button>
        }
      >
      <div className="flex flex-col w-full">
        <Link href="/">
          <SidebarWithLargeItems.NavItem icon="FeatherHome">
            Home
          </SidebarWithLargeItems.NavItem>
        </Link>
        <Link href="/itineraries">
          <SidebarWithLargeItems.NavItem icon="FeatherInbox">
            Itineraries
          </SidebarWithLargeItems.NavItem>
        </Link>
      </div>
        {/* <SidebarWithLargeItems.NavItem icon="FeatherBarChart2">
          Profile
        </SidebarWithLargeItems.NavItem>
        {/* <SidebarWithLargeItems.NavItem icon="FeatherBell">
          Notifications
        </SidebarWithLargeItems.NavItem> */}
        {/* <SubframeCore.DropdownMenu.Root>
          <SubframeCore.DropdownMenu.Trigger asChild={true}>
            <SidebarWithLargeItems.NavItem icon="FeatherMoreHorizontal">
              More
            </SidebarWithLargeItems.NavItem>
          </SubframeCore.DropdownMenu.Trigger>
          <SubframeCore.DropdownMenu.Portal>
            <SubframeCore.DropdownMenu.Content
              side="right"
              align="end"
              sideOffset={4}
              asChild={true}
            >
              <DropdownMenu>
                <SidebarWithLargeItems.NavItem icon="FeatherUser">
                  Profile
                </SidebarWithLargeItems.NavItem>
                <SidebarWithLargeItems.NavItem icon="FeatherSettings">
                  Settings
                </SidebarWithLargeItems.NavItem>
              </DropdownMenu>
            </SubframeCore.DropdownMenu.Content>
          </SubframeCore.DropdownMenu.Portal>
        </SubframeCore.DropdownMenu.Root> */}
      </SidebarWithLargeItems>
      {children ? (
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch overflow-y-auto bg-default-background">
          {children}
        </div>
      ) : null}
    </div>
  );
});

export const DefaultPageLayout = DefaultPageLayoutRoot;
