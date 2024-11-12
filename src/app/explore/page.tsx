"use client";

import React from "react";
import { DefaultPageLayout } from "@/subframe/layouts/DefaultPageLayout";
import * as SubframeCore from "@subframe/core";
import { TextField } from "@/subframe/components/TextField";
import { Tabs } from "@/subframe/components/Tabs";
import { ExploreFeatureCard } from "@/subframe/components/ExploreFeatureCard";
import { IconWithBackground } from "@/subframe/components/IconWithBackground";
import { ExploreCard } from "@/subframe/components/ExploreCard";
import { Button } from "@/subframe/components/Button";

function ExplorePage() {
  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex h-full w-full flex-col items-center gap-4 bg-default-background py-12">
        <div className="flex w-full max-w-[768px] flex-col items-center gap-6">
          <div className="flex w-full max-w-[576px] flex-col items-center justify-center gap-6 px-6 py-6">
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <SubframeCore.Icon
                className="text-heading-1 font-heading-1 text-default-font"
                name="FeatherMapPin"
              />
              <span className="w-full text-heading-1 font-heading-1 text-default-font text-center mobile:text-heading-1 mobile:font-heading-1">
                Explore GreenBooker
              </span>
              <span className="text-body font-body text-subtext-color text-center">
                Discover tailor-made itineraries and activities that match your
                travel preferences and budget. Embark on memorable journeys with
                ease.
              </span>
            </div>
            <TextField
              className="h-auto w-full flex-none"
              label=""
              helpText=""
              icon="FeatherCompass"
            >
              <TextField.Input
                placeholder="Search activities or destinations"
                value=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
          </div>
          <div className="flex w-full flex-col items-start gap-12">
            <div className="flex w-full flex-col items-start gap-12 overflow-auto mobile:h-auto mobile:w-auto mobile:flex-none mobile:overflow-auto mobile:self-stretch mobile:w-initial">
              <Tabs>
                <Tabs.Item active={true}>Featured Trips</Tabs.Item>
                <Tabs.Item active={false}>Local Favorites</Tabs.Item>
                <Tabs.Item active={false}>New Discoveries</Tabs.Item>
              </Tabs>
            </div>
            <div className="flex w-full flex-col items-center gap-16">
              <div className="flex w-full flex-col items-start gap-4">
                <div className="flex w-full flex-col items-start gap-1">
                  <span className="w-full text-heading-2 font-heading-2 text-default-font">
                    Traveler&#39;s Favorites
                  </span>
                  <span className="w-full text-body font-body text-subtext-color">
                    Top-rated activities and destinations curated by GreenBooker
                    editors
                  </span>
                </div>
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="flex w-full items-start gap-4 mobile:flex-col mobile:gap-4">
                    <ExploreFeatureCard
                      image="https://res.cloudinary.com/subframe/image/upload/v1711417508/shared/wd5ui3rofpbpbjdltzm2.png"
                      title="Grand Canyon Sunrise"
                      desc="Experience the magical sunrise at the Grand Canyon with guided tours."
                      metadata="By Wanderlust Tours"
                    />
                    <ExploreFeatureCard
                      image="https://res.cloudinary.com/subframe/image/upload/v1711417509/shared/ruza1qipiqoaiwdo6vrg.png"
                      title="San Francisco Cable Ride"
                      desc="Cruise through the iconic streets of San Francisco on a classic cable car."
                      metadata="By City Escapes"
                    />
                  </div>
                  <div className="flex w-full items-start gap-4 mobile:flex-col mobile:gap-4">
                    <ExploreFeatureCard
                      image="https://res.cloudinary.com/subframe/image/upload/v1711417510/shared/esj02idt9sf1mhn7xuw8.png"
                      title="Bangkok Food Crawl"
                      desc="Embark on a culinary journey through the bustling streets of Bangkok."
                      metadata="By Taste Adventures"
                    />
                    <ExploreFeatureCard
                      image="https://res.cloudinary.com/subframe/image/upload/v1711417511/shared/t4qorgih4yjwudzjfkxq.png"
                      title="Bali Yoga Sunset"
                      desc="Unwind with a sunset yoga session on the tranquil beaches of Bali."
                      metadata="By Zen Retreats"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <div className="flex w-full flex-col items-start gap-1">
                  <span className="w-full text-heading-2 font-heading-2 text-default-font">
                    Top Picks of the Week
                  </span>
                  <span className="w-full text-body font-body text-subtext-color">
                    Most popular itineraries and activities this week
                  </span>
                </div>
                <div className="flex w-full flex-col items-start gap-1">
                  <div className="flex w-full items-start gap-4 mobile:flex-col mobile:gap-4">
                    <ExploreCard
                      count="1"
                      title="Grand Canyon Sunrise"
                      desc="Experience the magical sunrise at the Grand Canyon with guided tours."
                      metadata="By Wanderlust Tours"
                    >
                      <IconWithBackground
                        variant="success"
                        size="large"
                        icon="FeatherSunrise"
                      />
                    </ExploreCard>
                    <ExploreCard
                      count="2"
                      title="San Francisco Cable Ride"
                      desc="Cruise through the iconic streets of San Francisco on a classic cable car."
                      metadata="By City Escapes"
                    >
                      <IconWithBackground
                        variant="warning"
                        size="large"
                        icon="FeatherPieChart"
                      />
                    </ExploreCard>
                  </div>
                  <div className="flex w-full items-start gap-4 mobile:flex-col mobile:gap-4">
                    <ExploreCard
                      count="3"
                      title="Bangkok Food Crawl"
                      desc="Embark on a culinary journey through the bustling streets of Bangkok."
                      metadata="By Taste Adventures"
                    >
                      <IconWithBackground size="large" icon="FeatherSoup" />
                    </ExploreCard>
                    <ExploreCard
                      count="4"
                      title="Bali Yoga Sunset"
                      desc="Unwind with a sunset yoga session on the tranquil beaches of Bali."
                      metadata="By Zen Retreats"
                    >
                      <IconWithBackground
                        variant="error"
                        size="large"
                        icon="FeatherBriefcase"
                      />
                    </ExploreCard>
                  </div>
                  <div className="flex w-full items-start gap-4 mobile:flex-col mobile:gap-4">
                    <ExploreCard
                      count="5"
                      title="Appalachian Adventure"
                      desc="Hike the breathtaking trails of the Appalachian Mountains."
                      metadata="By Nature Treks"
                    >
                      <IconWithBackground
                        variant="neutral"
                        size="large"
                        icon="FeatherMountain"
                      />
                    </ExploreCard>
                    <ExploreCard
                      count="6"
                      title="Arizona Stargazing"
                      desc="Camp under the stars in the serene deserts of Arizona."
                      metadata="By Desert Dreams"
                    >
                      <IconWithBackground size="large" icon="FeatherTent" />
                    </ExploreCard>
                  </div>
                  <Button
                    className="h-10 w-full flex-none"
                    variant="neutral-secondary"
                    size="large"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    See all trips
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default ExplorePage;