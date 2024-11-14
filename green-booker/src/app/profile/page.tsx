"use client";

import React from "react";
import { DrawerLayout } from "@/subframe/layouts/DrawerLayout";
import { Avatar } from "@/subframe/components/Avatar";
import { Badge } from "@/subframe/components/Badge";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import * as SubframeCore from "@subframe/core";
import { IconButton } from "@/subframe/components/IconButton";
import { Button } from "@/subframe/components/Button";
import { Tabs } from "@/subframe/components/Tabs";
import { ButtonPlaceholder } from "@/subframe/components/ButtonPlaceholder";
import { Tooltip } from "@/subframe/components/Tooltip";
import { Progress } from "@/subframe/components/Progress";
import { TextField } from "@/subframe/components/TextField";
import { TimelineDivider } from "@/subframe/components/TimelineDivider";
import { Breadcrumbs } from "@/subframe/components/Breadcrumbs";

function ActivityTrackingDetails() {
  return (
    <DrawerLayout open={false} onOpenChange={() => {}}>
      <div className="flex h-full w-full flex-col items-start bg-default-background">
        <div className="flex w-full flex-col items-start gap-8 px-6 py-6">
          <div className="flex w-full flex-wrap items-start gap-4">
            <Avatar size="x-large">A</Avatar>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 pt-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-heading-2 font-heading-2 text-default-font">
                    Alex Chen
                  </span>
                  <Badge variant="success">Active</Badge>
                </div>
                <SubframeCore.DropdownMenu.Root>
                  <SubframeCore.DropdownMenu.Trigger asChild={true}>
                    <IconButton
                      size="small"
                      icon="FeatherMoreHorizontal"
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    />
                  </SubframeCore.DropdownMenu.Trigger>
                  <SubframeCore.DropdownMenu.Portal>
                    <SubframeCore.DropdownMenu.Content
                      side="bottom"
                      align="end"
                      sideOffset={4}
                      asChild={true}
                    >
                      <DropdownMenu>
                        <DropdownMenu.DropdownItem icon="FeatherMessageCircle">
                          Send Feedback
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon="FeatherCalendar">
                          Book a Tour
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon="FeatherHeart">
                          Add to Favorites
                        </DropdownMenu.DropdownItem>
                        <DropdownMenu.DropdownItem icon="FeatherUser">
                          View Full Profile
                        </DropdownMenu.DropdownItem>
                      </DropdownMenu>
                    </SubframeCore.DropdownMenu.Content>
                  </SubframeCore.DropdownMenu.Portal>
                </SubframeCore.DropdownMenu.Root>
              </div>
              <div className="flex w-full flex-wrap items-start gap-6">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Preferred Location
                  </span>
                  <span className="line-clamp-1 w-full text-caption font-caption text-subtext-color">
                    Seoul, South Korea
                  </span>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Travel Style
                  </span>
                  <span className="line-clamp-1 w-full text-caption font-caption text-subtext-color">
                    Cultural Explorer
                  </span>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Email
                  </span>
                  <span className="line-clamp-1 w-full text-caption font-caption text-subtext-color">
                    alex@greenbooker.com
                  </span>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <span className="whitespace-nowrap text-body-bold font-body-bold text-default-font">
                    Time Zone
                  </span>
                  <span className="line-clamp-1 w-full text-caption font-caption text-subtext-color">
                    KST (UTC+9)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="h-10 w-full flex-none"
            size="large"
            icon="FeatherShare"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Share Experience
          </Button>
        </div>
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start">
          <div className="flex w-full items-end">
            <div className="flex h-px w-6 flex-none flex-col items-center gap-2 bg-neutral-200" />
            <Tabs>
              <Tabs.Item active={true}>Activities (5)</Tabs.Item>
              <Tabs.Item active={false}>Recommended Trips (3)</Tabs.Item>
              <Tabs.Item>Profile Settings</Tabs.Item>
            </Tabs>
          </div>
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-12 bg-default-background px-8 py-8 overflow-auto mobile:px-6 mobile:py-6">
            <div className="flex w-full flex-col items-start gap-4">
              <span className="w-full text-heading-3 font-heading-3 text-default-font">
                Favorited Trips
              </span>
              <ButtonPlaceholder icon="FeatherPlus">Add Trip</ButtonPlaceholder>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full items-center gap-2">
                <span className="text-heading-3 font-heading-3 text-default-font">
                  Recent Trips
                </span>
                <SubframeCore.Tooltip.Provider>
                  <SubframeCore.Tooltip.Root>
                    <SubframeCore.Tooltip.Trigger asChild={true}>
                      <SubframeCore.Icon
                        className="text-body font-body text-neutral-400"
                        name="FeatherInfo"
                      />
                    </SubframeCore.Tooltip.Trigger>
                    <SubframeCore.Tooltip.Portal>
                      <SubframeCore.Tooltip.Content
                        side="top"
                        align="center"
                        sideOffset={4}
                        asChild={true}
                      >
                        <Tooltip>Help</Tooltip>
                      </SubframeCore.Tooltip.Content>
                    </SubframeCore.Tooltip.Portal>
                  </SubframeCore.Tooltip.Root>
                </SubframeCore.Tooltip.Provider>
                <span className="text-caption font-caption text-subtext-color">
                  Within Last 7 Days
                </span>
              </div>
              <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background shadow-sm">
                <div className="flex w-full items-center gap-2 px-4 py-4">
                  <div className="flex grow shrink-0 basis-0 items-center gap-4">
                    <div className="flex flex-col items-start gap-6 rounded-full border-2 border-solid border-brand-primary">
                      <div className="flex h-3 w-3 flex-none flex-col items-start gap-2 rounded-full border border-solid border-white bg-brand-600" />
                    </div>
                    <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                      Paris Culinary Delights
                    </span>
                  </div>
                  <Progress value={100} />
                  <span className="text-body-bold font-body-bold text-brand-700">
                    100% Completed
                  </span>
                </div>
                <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
                <div className="flex w-full items-center gap-2 px-4 py-4">
                  <div className="flex grow shrink-0 basis-0 items-center gap-4">
                    <div className="flex flex-col items-start gap-6 rounded-full border-2 border-solid border-brand-primary">
                      <div className="flex h-3 w-3 flex-none flex-col items-start gap-2 rounded-full border border-solid border-white bg-brand-600" />
                    </div>
                    <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                      Tokyo Autumn Attractions
                    </span>
                  </div>
                  <Progress value={75} />
                  <span className="text-body-bold font-body-bold text-brand-700">
                    75% Completed
                  </span>
                </div>
                <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full flex-wrap items-center justify-between">
                <span className="text-heading-3 font-heading-3 text-default-font">
                  Activity Log
                </span>
                <div className="flex items-center gap-1">
                  <TextField
                    variant="filled"
                    label=""
                    helpText=""
                    icon="FeatherSearch"
                  >
                    <TextField.Input
                      placeholder="Search Activities"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                  <Button
                    variant="neutral-tertiary"
                    icon="FeatherFilter"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Filter
                  </Button>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <TimelineDivider>Today</TimelineDivider>
                <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background shadow-sm">
                  <div className="flex w-full flex-col items-start gap-2 border-b border-solid border-neutral-border px-4 py-4">
                    <div className="flex flex-col items-start gap-2">
                      <Breadcrumbs>
                        <Breadcrumbs.Item>Europe</Breadcrumbs.Item>
                        <Breadcrumbs.Divider />
                        <Breadcrumbs.Item>France</Breadcrumbs.Item>
                        <Breadcrumbs.Divider />
                        <Breadcrumbs.Item>Paris</Breadcrumbs.Item>
                      </Breadcrumbs>
                    </div>
                    <div className="flex items-center gap-2">
                      <SubframeCore.Icon
                        className="text-heading-3 font-heading-3 text-subtext-color"
                        name="FeatherCheckCircle"
                      />
                      <span className="text-heading-3 font-heading-3 text-default-font">
                        Seine River Cruise
                      </span>
                      <IconButton
                        size="small"
                        icon="FeatherExternalLink"
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {}}
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-wrap items-center justify-between px-4 py-4">
                    <span className="text-body font-body text-default-font">
                      User completed &#39;Scenic Bicycle Tour&#39;
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Today 11:45 am
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <div className="flex w-full items-center">
                  <div className="flex h-px grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-200" />
                  <div className="flex h-6 items-center gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-2">
                    <span className="whitespace-nowrap text-caption-bold font-caption-bold text-subtext-color">
                      Yesterday
                    </span>
                  </div>
                  <div className="flex h-px grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-200" />
                </div>
                <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background shadow-sm">
                  <div className="flex w-full flex-col items-start gap-2 border-b border-solid border-neutral-border px-4 py-4">
                    <div className="flex flex-col items-start gap-2">
                      <Breadcrumbs>
                        <Breadcrumbs.Item>Asia</Breadcrumbs.Item>
                        <Breadcrumbs.Divider />
                        <Breadcrumbs.Item>Japan</Breadcrumbs.Item>
                      </Breadcrumbs>
                    </div>
                    <div className="flex items-center gap-2">
                      <SubframeCore.Icon
                        className="text-heading-3 font-heading-3 text-subtext-color"
                        name="FeatherCheckCircle"
                      />
                      <span className="text-heading-3 font-heading-3 text-default-font">
                        Shinjuku Night Tour
                      </span>
                      <IconButton
                        size="small"
                        icon="FeatherExternalLink"
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {}}
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-wrap items-center justify-between px-4 py-4">
                    <span className="text-body font-body text-default-font">
                      You added a new activity
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Yesterday 3:23 pm
                    </span>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background shadow-sm">
                  <div className="flex w-full flex-col items-start gap-2 border-b border-solid border-neutral-border px-4 py-4">
                    <div className="flex flex-col items-start gap-2">
                      <Breadcrumbs>
                        <Breadcrumbs.Item>South America</Breadcrumbs.Item>
                        <Breadcrumbs.Divider />
                        <Breadcrumbs.Item>Brazil</Breadcrumbs.Item>
                        <Breadcrumbs.Divider />
                        <Breadcrumbs.Item>Rio de Janeiro</Breadcrumbs.Item>
                      </Breadcrumbs>
                    </div>
                    <div className="flex items-center gap-2">
                      <SubframeCore.Icon
                        className="text-heading-3 font-heading-3 text-subtext-color"
                        name="FeatherCheckCircle"
                      />
                      <span className="text-heading-3 font-heading-3 text-default-font">
                        Copacabana Beach Day
                      </span>
                      <IconButton
                        size="small"
                        icon="FeatherExternalLink"
                        onClick={(
                          event: React.MouseEvent<HTMLButtonElement>
                        ) => {}}
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-wrap items-center justify-between px-4 py-4">
                    <span className="text-body font-body text-default-font">
                      You edited the activity details
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      Yesterday 10:12 am
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DrawerLayout>
  );
}

export default ActivityTrackingDetails;