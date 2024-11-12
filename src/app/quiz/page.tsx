"use client";

import React from "react";
import { Stepper } from "@/subframe/components/Stepper";
import { TextArea } from "@/subframe/components/TextArea";
import { Select } from "@/subframe/components/Select";
import { Checkbox } from "@/subframe/components/Checkbox";
import { TextField } from "@/subframe/components/TextField";
import { Button } from "@/subframe/components/Button";

function QuizPageWithSteps() {
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-center gap-4 bg-default-background py-12">
      <div className="flex w-full max-w-[576px] flex-col items-start gap-12">
        <div className="flex w-full flex-col items-center">
          <span className="text-heading-2 font-heading-2 text-default-font">
            Discover Your Ideal Trip
          </span>
          <span className="text-body font-body text-subtext-color">
            Answer a few questions to receive personalized itineraries based on
            your travel preferences.
          </span>
        </div>
        <Stepper>
          <Stepper.Step
            variant="active"
            firstStep={true}
            stepNumber="1"
            label="Your Profile"
          />
          <Stepper.Step
            variant="default"
            stepNumber="2"
            label="Location Preferences"
          />
          <Stepper.Step
            lastStep={true}
            stepNumber="3"
            label="Activity Types"
          />
        </Stepper>
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 pt-4 pb-6 shadow-sm">
            <div className="flex w-full flex-col items-start">
              <span className="w-full text-heading-3 font-heading-3 text-default-font">
                Your Profile
              </span>
              <span className="w-full text-body font-body text-subtext-color">
                What kind of adventurer are you?
              </span>
            </div>
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6">
              <div className="flex w-full items-start gap-4">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
                  <TextArea
                    className="h-auto min-h-[96px] w-full flex-none"
                    label="Preferred Activities"
                    helpText=""
                  >
                    <TextArea.Input
                      placeholder="e.g., Hiking, Museums, Culinary Tours"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLTextAreaElement>
                      ) => {}}
                    />
                  </TextArea>
                </div>
              </div>
              <div className="flex w-full items-start gap-4">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <Select
                    label="Travel Style"
                    placeholder="Select your travel style"
                    helpText=""
                    value={undefined}
                    onValueChange={(value: string) => {}}
                  >
                    <div className="flex w-full flex-col items-start">
                      <Select.Item value="Luxury">Luxury</Select.Item>
                      <Select.Item value="Adventure">Adventure</Select.Item>
                      <Select.Item value="Relaxation">Relaxation</Select.Item>
                      <Select.Item value="Cultural">Cultural</Select.Item>
                    </div>
                  </Select>
                </div>
              </div>
              <div className="flex w-full items-start gap-4">
                <div className="flex flex-col items-start gap-4">
                  <Checkbox
                    label="Include Family-Friendly Options"
                    checked={false}
                    onCheckedChange={(checked: boolean) => {}}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 pt-4 pb-6 shadow-sm">
            <div className="flex w-full flex-col items-start">
              <span className="w-full text-heading-3 font-heading-3 text-default-font">
                Travel Details
              </span>
              <span className="w-full text-body font-body text-subtext-color">
                Provide details about your upcoming trip.
              </span>
            </div>
            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6">
              <div className="flex w-full items-start gap-4">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1">
                  <Select
                    label="Budget Range"
                    placeholder="Select your budget"
                    helpText=""
                    value={undefined}
                    onValueChange={(value: string) => {}}
                  >
                    <div className="flex w-full flex-col items-start">
                      <Select.Item value="$500 - $1000">
                        $500 - $1000
                      </Select.Item>
                      <Select.Item value="$1000 - $2000">
                        $1000 - $2000
                      </Select.Item>
                      <Select.Item value="$2000+">$2000+</Select.Item>
                    </div>
                  </Select>
                </div>
              </div>
              <div className="flex w-full items-start gap-4">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
                  <TextField
                    className="h-auto w-full flex-none"
                    label="Travel Time Frame"
                    helpText=""
                  >
                    <TextField.Input
                      placeholder="e.g., 1 week, 2 weeks"
                      value=""
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {}}
                    />
                  </TextField>
                </div>
              </div>
              <div className="flex w-full items-start gap-4">
                <div className="flex flex-col items-start gap-4">
                  <Checkbox
                    label="Save this trip to your profile"
                    checked={false}
                    onCheckedChange={(checked: boolean) => {}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-start justify-between">
          <Button
            variant="neutral-secondary"
            size="medium"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Back
          </Button>
          <Button
            size="medium"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuizPageWithSteps;