"use client";

import React from "react";
import { DefaultPageLayout } from "@/subframe/layouts/DefaultPageLayout";
import {ExploreFeatureCard} from "@/subframe/components/ExploreFeatureCard";
import {SelectListItem} from "@/subframe/components/SelectListItem";
import { Dialog } from "@/subframe/components/Dialog";
import {Button} from "@/subframe/components/Button";


function Itineraries() {
  const [open, setOpen] = React.useState(false)

  return (
    <DefaultPageLayout>
      <div className="flex flex-col w-full items-center justify-items-center space-y-6">
      <Button variant="neutral-secondary" onClick={() => setOpen(true)}>
          Open dialog
      </Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <Dialog.Content>
            <div>Dialog contents</div>
          </Dialog.Content>
        </Dialog>
      
        <ExploreFeatureCard className="w-3/4 rounded-3xl"
          image="https://res.cloudinary.com/subframe/image/upload/v1711417508/shared/wd5ui3rofpbpbjdltzm2.png"
          title="Title"
          desc="Description"
          metadata="Metadata"
        />
      <ExploreFeatureCard className="w-3/4 rounded-3xl"
        image="https://res.cloudinary.com/subframe/image/upload/v1711417508/shared/wd5ui3rofpbpbjdltzm2.png"
        title="Title"
        desc="Description"
        metadata="Metadata"
      />
      </div>
    </DefaultPageLayout>
  );
}

export default Itineraries;


// import { Badge } from "@/subframe/components/Badge";
// import { Avatar } from "@/subframe/components/Avatar";
// import { Button } from "@/subframe/components/Button";
// import { IconWithBackground } from "@/subframe/components/IconWithBackground";
// import { Feed } from "@/subframe/components/Feed";

{/* <div className="container max-w-none flex h-full w-full flex-col items-start bg-default-background py-12">
        <div className="flex w-full items-start gap-8 rounded-md border border-solid border-neutral-border bg-default-background px-12 py-12 shadow-sm mobile:flex-col mobile:gap-8">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-8">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-body-bold font-body-bold text-brand-700">
                Trip-102
              </span>
              <span className="w-full text-heading-2 font-heading-2 text-default-font">
                Explore Barcelona&#39;s Hidden Gems
              </span>
            </div>
            <div className="flex w-full max-w-[576px] flex-wrap items-start gap-4 mobile:flex-row mobile:flex-wrap mobile:gap-4">
              <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-2">
                <span className="text-caption font-caption text-subtext-color">
                  Activity Status
                </span>
                <Badge variant="brand">Upcoming</Badge>
              </div>
              <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-2">
                <span className="text-caption font-caption text-subtext-color">
                  Interest Level
                </span>
                <Badge variant="error">Medium</Badge>
              </div>
              <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-2">
                <span className="text-caption font-caption text-subtext-color">
                  Travel Time
                </span>
                <span className="text-body-bold font-body-bold text-default-font">
                  5hr 45min
                </span>
              </div>
              <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-2">
                <span className="text-caption font-caption text-subtext-color">
                  Planned by
                </span>
                <div className="flex items-start gap-2">
                  <Avatar
                    size="x-small"
                    image="https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/m0kfajqpwkfief00it4v.jpg"
                  >
                    AK
                  </Avatar>
                  <span className="text-body-bold font-body-bold text-default-font">
                    Alice Kim
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-1 mobile:h-auto mobile:w-full mobile:flex-none">
            <Button
              className="mobile:h-8 mobile:grow mobile:shrink-0 mobile:basis-0"
              variant="brand-tertiary"
              icon={null}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Save Itinerary
            </Button>
            <Button
              className="mobile:h-8 mobile:grow mobile:shrink-0 mobile:basis-0"
              icon={null}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Share
            </Button>
          </div>
        </div>
        <div className="container max-w-none flex w-full grow shrink-0 basis-0 flex-wrap items-start gap-16 py-12 mobile:flex-col mobile:flex-wrap mobile:gap-16">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Trip Feed
            </span>
            <Feed>
              <Feed.Item
                leftSlot={
                  <IconWithBackground
                    variant="success"
                    size="medium"
                    icon="FeatherCheck"
                  />
                }
                comment={
                  <Feed.Comment>
                    Can&#39;t miss trying local tapas!
                  </Feed.Comment>
                }
                timestamp="5 minutes ago"
              >
                <span className="text-body-bold font-body-bold text-default-font">
                  Alice Kim
                </span>
                <span className="text-body font-body text-subtext-color">
                  added a new restaurant to the itinerary
                </span>
              </Feed.Item>
              <Feed.Item
                leftSlot={
                  <IconWithBackground
                    variant="error"
                    size="medium"
                    icon="FeatherBuilding"
                  />
                }
                timestamp="8 minutes ago"
              >
                <span className="text-body-bold font-body-bold text-default-font">
                  Ethan Patel
                </span>
                <span className="text-body font-body text-subtext-color">
                  suggested visiting a local museum
                </span>
              </Feed.Item>
              <Feed.Item
                leftSlot={
                  <Avatar
                    variant="warning"
                    size="medium"
                    image="https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/m0kfajqpwkfief00it4v.jpg"
                  >
                    AK
                  </Avatar>
                }
                comment={
                  <>
                    <Feed.Comment>Sounds like a great idea!</Feed.Comment>
                    <Button
                      variant="neutral-tertiary"
                      size="small"
                      icon={null}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Respond
                    </Button>
                  </>
                }
                timestamp="2 hours ago"
              >
                <span className="text-body-bold font-body-bold text-default-font">
                  Alice Kim
                </span>
                <span className="text-body font-body text-subtext-color">
                  commented
                </span>
              </Feed.Item>
              <Feed.Item
                leftSlot={
                  <IconWithBackground
                    variant="brand"
                    size="medium"
                    icon="FeatherMap"
                  />
                }
                timestamp="1 day ago"
                isLast={false}
              >
                <span className="text-body-bold font-body-bold text-default-font">
                  Ethan Patel
                </span>
                <span className="text-body font-body text-subtext-color">
                  noted popular spots on the itinerary
                </span>
              </Feed.Item>
              <Feed.Item
                leftSlot={
                  <IconWithBackground
                    variant="neutral"
                    size="medium"
                    icon="FeatherCompass"
                  />
                }
                timestamp="3 days ago"
                isLast={true}
              >
                <span className="text-body-bold font-body-bold text-default-font">
                  Ethan Patel
                </span>
                <span className="text-body font-body text-subtext-color">
                  created initial trip plan
                </span>
              </Feed.Item>
            </Feed>
          </div>
          <div className="flex max-w-[448px] grow shrink-0 basis-0 flex-col items-start gap-4">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Trip Details
            </span>
            <div className="flex w-full max-w-[448px] flex-col items-start gap-8 rounded-md bg-neutral-50 px-6 py-6">
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Overview
                </span>
                <span className="text-body font-body text-subtext-color">
                  This itinerary covers cultural highlights, renowned
                  restaurants, and scenic views in Barcelona for a delightful
                  experience.
                </span>
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Budget
                </span>
                <span className="text-body font-body text-subtext-color">
                  Estimated cost fits within a medium budget range, offering
                  both premium and budget-friendly options.
                </span>
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="text-body-bold font-body-bold text-default-font">
                  Suggestions
                </span>
                <span className="text-body font-body text-subtext-color">
                  Consider exploring the Gothic Quarter and attending a local
                  cooking class for authentic experiences.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}