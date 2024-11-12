"use client";

import React from "react";
import { DefaultPageLayout } from "@/subframe/layouts/DefaultPageLayout";
import { IconWithBackground } from "@/subframe/components/IconWithBackground";
import * as SubframeCore from "@subframe/core";
import { Button } from "@/subframe/components/Button";
import { ToggleGroup } from "@/subframe/components/ToggleGroup";
import { LineChart } from "@/subframe/components/LineChart";
import { BarChart } from "@/subframe/components/BarChart";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import { Table } from "@/subframe/components/Table";
import { Badge } from "@/subframe/components/Badge";

function ItineraryAnalytics() {
  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex h-full w-full flex-col items-start gap-8 bg-default-background py-12">
        <div className="flex w-full items-start gap-4 mobile:flex-col mobile:items-center mobile:justify-start mobile:gap-6">
          <IconWithBackground size="medium" icon="FeatherMapPin" />
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 mobile:flex-col mobile:items-center mobile:justify-start mobile:gap-2">
            <span className="text-heading-2 font-heading-2 text-default-font mobile:text-center">
              Itinerary Analytics
            </span>
            <div className="flex flex-wrap items-start gap-6 mobile:flex-col mobile:flex-wrap mobile:items-center mobile:justify-start mobile:gap-1">
              <div className="flex items-center gap-1">
                <SubframeCore.Icon
                  className="text-body font-body text-subtext-color"
                  name="FeatherWallet"
                />
                <div className="flex flex-col items-start">
                  <span className="text-body font-body text-subtext-color">
                    Budget Insights
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <SubframeCore.Icon
                  className="text-body font-body text-subtext-color"
                  name="FeatherClock"
                />
                <span className="text-body font-body text-subtext-color">
                  Real-time Updates
                </span>
              </div>
              <div className="flex items-center gap-1">
                <SubframeCore.Icon
                  className="text-body font-body text-subtext-color"
                  name="FeatherCheckCircle"
                />
                <div className="flex flex-col items-start">
                  <span className="text-body font-body text-subtext-color">
                    No Warnings
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-wrap items-start gap-2 mobile:flex-col mobile:flex-wrap mobile:items-start mobile:justify-center mobile:gap-2">
          <Button
            className="mobile:h-8 mobile:w-full mobile:flex-none"
            variant="brand-secondary"
            size="medium"
            icon="FeatherShare2"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Share Itinerary
          </Button>
          <Button
            className="mobile:h-8 mobile:w-full mobile:flex-none"
            variant="neutral-secondary"
            size="medium"
            icon="FeatherEye"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            View Details
          </Button>
          <Button
            className="mobile:h-8 mobile:w-full mobile:flex-none"
            variant="neutral-secondary"
            size="medium"
            icon="FeatherPauseCircle"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Pause Trip
          </Button>
          <Button
            className="mobile:h-8 mobile:w-full mobile:flex-none"
            variant="neutral-secondary"
            size="medium"
            icon="FeatherSliders"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Customize
          </Button>
        </div>
        <div className="flex w-full flex-wrap items-start gap-4 mobile:flex-col mobile:flex-wrap mobile:gap-4">
          <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
            <span className="line-clamp-1 w-full text-body font-body text-subtext-color">
              Total Spend
            </span>
            <span className="w-full text-heading-3 font-heading-3 text-default-font">
              $3500
            </span>
          </div>
          <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
            <span className="line-clamp-1 w-full text-body font-body text-subtext-color">
              Last Update
            </span>
            <span className="w-full text-heading-3 font-heading-3 text-default-font">
              5 minutes ago
            </span>
          </div>
          <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
            <span className="line-clamp-1 w-full text-body font-body text-subtext-color">
              New Suggestions
            </span>
            <span className="w-full text-heading-3 font-heading-3 text-default-font">
              4
            </span>
          </div>
        </div>
        <div className="flex w-full items-start gap-6 mobile:flex-col mobile:gap-6">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
            <div className="flex w-full items-center gap-2">
              <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                Time Allocation
              </span>
              <ToggleGroup value="" onValueChange={(value: string) => {}}>
                <ToggleGroup.Item icon={null} value="dfd52c36">
                  24h
                </ToggleGroup.Item>
                <ToggleGroup.Item icon={null} value="da1fc5d4">
                  7d
                </ToggleGroup.Item>
                <ToggleGroup.Item icon={null} value="68615271">
                  1mo
                </ToggleGroup.Item>
              </ToggleGroup>
            </div>
            <LineChart
              className="h-64 w-full flex-none mobile:h-auto mobile:w-full mobile:flex-none"
              categories={["Biology", "Business", "Psychology"]}
              data={[
                { Year: "2015", Psychology: 120, Business: 110, Biology: 100 },
                { Year: "2016", Psychology: 130, Business: 95, Biology: 105 },
                { Year: "2017", Psychology: 115, Business: 105, Biology: 110 },
                { Year: "2018", Psychology: 125, Business: 120, Biology: 90 },
                { Year: "2019", Psychology: 110, Business: 130, Biology: 85 },
                { Year: "2020", Psychology: 135, Business: 100, Biology: 95 },
                { Year: "2021", Psychology: 105, Business: 115, Biology: 120 },
                { Year: "2022", Psychology: 140, Business: 125, Biology: 130 },
              ]}
              index={"Year"}
            />
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
            <div className="flex w-full items-center gap-2">
              <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                Budget Usage
              </span>
              <ToggleGroup value="" onValueChange={(value: string) => {}}>
                <ToggleGroup.Item icon={null} value="eb44e759">
                  24h
                </ToggleGroup.Item>
                <ToggleGroup.Item icon={null} value="7ca17ca8">
                  7d
                </ToggleGroup.Item>
                <ToggleGroup.Item icon={null} value="2ed297c9">
                  1mo
                </ToggleGroup.Item>
              </ToggleGroup>
            </div>
            <BarChart
              className="h-64 w-full flex-none mobile:h-auto mobile:w-full mobile:flex-none"
              categories={["Biology", "Business", "Psychology"]}
              data={[
                { Year: "2015", Psychology: 120, Business: 110, Biology: 100 },
                { Year: "2016", Psychology: 130, Business: 95, Biology: 105 },
                { Year: "2017", Psychology: 115, Business: 105, Biology: 110 },
                { Year: "2018", Psychology: 125, Business: 120, Biology: 90 },
                { Year: "2019", Psychology: 110, Business: 130, Biology: 85 },
                { Year: "2020", Psychology: 135, Business: 100, Biology: 95 },
                { Year: "2021", Psychology: 105, Business: 115, Biology: 120 },
                { Year: "2022", Psychology: 140, Business: 125, Biology: 130 },
              ]}
              index={"Year"}
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
          <div className="flex w-full items-center gap-2">
            <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
              Analysis Dashboard
            </span>
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <Button
                  variant="neutral-secondary"
                  icon={null}
                  iconRight="FeatherFilter"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Filter by
                </Button>
              </SubframeCore.DropdownMenu.Trigger>
              <SubframeCore.DropdownMenu.Portal>
                <SubframeCore.DropdownMenu.Content
                  side="bottom"
                  align="end"
                  sideOffset={4}
                  asChild={true}
                >
                  <DropdownMenu>
                    <DropdownMenu.DropdownItem icon={null}>
                      Activity Type
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={null}>
                      Destination
                    </DropdownMenu.DropdownItem>
                    <DropdownMenu.DropdownItem icon={null}>
                      Past Trips
                    </DropdownMenu.DropdownItem>
                  </DropdownMenu>
                </SubframeCore.DropdownMenu.Content>
              </SubframeCore.DropdownMenu.Portal>
            </SubframeCore.DropdownMenu.Root>
          </div>
          <div className="flex w-full flex-col items-start gap-6 overflow-hidden overflow-auto mobile:overflow-auto mobile:max-w-full">
            <Table
              header={
                <Table.HeaderRow>
                  <Table.HeaderCell>Time Frame</Table.HeaderCell>
                  <Table.HeaderCell>Budget</Table.HeaderCell>
                  <Table.HeaderCell>Duration</Table.HeaderCell>
                  <Table.HeaderCell>Category</Table.HeaderCell>
                </Table.HeaderRow>
              }
            >
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-neutral-700">
                    Last 24 hours
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-neutral-500">
                    $500
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-neutral-500">
                    3h 15m
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge>Budget</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-neutral-700">
                    Last 7 days
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-neutral-500">
                    $2000
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-neutral-500">
                    1d 10h
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge>Family</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-neutral-700">
                    Last 30 days
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-neutral-500">
                    $4500
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-neutral-500">
                    5d 3h
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge>Adventure</Badge>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <span className="text-body-bold font-body-bold text-neutral-700">
                    Last 365 days
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-neutral-500">
                    $12000
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <span className="text-body font-body text-neutral-500">
                    15d 4h
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <Badge>Luxury</Badge>
                </Table.Cell>
              </Table.Row>
            </Table>
          </div>
          <div className="flex w-full items-center justify-center gap-4">
            <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color">
              Showing 1 – 3 of 9
            </span>
            <div className="flex items-center justify-center gap-2">
              <Button
                variant="neutral-secondary"
                size="medium"
                icon={null}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Previous
              </Button>
              <Button
                variant="neutral-secondary"
                size="medium"
                iconRight={null}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default ItineraryAnalytics;