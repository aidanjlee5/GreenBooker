"use client";

import React from "react";
import { Stepper } from "@/subframe/components/Stepper";
import { TextArea } from "@/subframe/components/TextArea";
import { Select } from "@/subframe/components/Select";
import { Checkbox } from "@/subframe/components/Checkbox";
import { TextField } from "@/subframe/components/TextField";
import { Button } from "@/subframe/components/Button";
import { DefaultPageLayout } from "@/subframe/layouts/DefaultPageLayout";
import CalendarButton from "@/components/CalendarButton";
import { useState } from "react";

function QuizPageWithSteps() {
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex h-full w-full flex-col items-center gap-4 bg-default-background py-12">
        <div className="flex w-full max-w-[576px] flex-col items-start gap-6">
          <div className="flex w-full flex-col items-center">
            <span className="text-heading-2 font-heading-2 text-default-font">
              Plan your Perfect Trip
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-6">
            <div className="flex w-full flex-col items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 pt-4 pb-6 shadow-sm">
              <div className="flex w-full flex-col items-start">
                <span className="w-full text-heading-3 font-heading-3 text-default-font">
                  Itinerary Details
                </span>
                <span className="w-full text-body font-body text-subtext-color">
                  Add preferences for your upcoming trip
                </span>
              </div>
              <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6">
                <div className="flex w-full items-start gap-4">
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
                  <TextField
                        className="h-auto w-full flex-none"
                        label="Leaving From"
                        helpText=""
                      >
                        <TextField.Input
                          placeholder="Charlotte, NC, USA"
                          value=""
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {}}
                        />
                      </TextField>
                    
                      <TextField
                        className="h-auto w-full flex-none"
                        label="Going To"
                        helpText=""
                      >
                        <TextField.Input
                          placeholder="Paris, France"
                          value=""
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {}}
                        />
                      </TextField>

                      <div className="flex w-full items-start gap-4">
                        <div className="flex flex-col space-y-2">
                          <span className="w-full text-xs font-medium font-heading-3 text-default-font">
                            Departure
                          </span>
                          <CalendarButton 
                            date={departureDate}
                            onChange={setDepartureDate}
                          />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <span className="w-full text-xs font-medium font-heading-3 text-default-font">
                            Return
                          </span>
                          <CalendarButton 
                            date={returnDate}
                            onChange={setReturnDate}
                          />
                        </div>
                      </div>

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
                  <div className="flex flex-col items-start gap-4">
                    <Checkbox
                      label="Include Family-Friendly Options"
                      checked={false}
                      onCheckedChange={(checked: boolean) => {}}
                    />
                  </div>
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
              </div>
              </div>
            </div>
              
          <div className="flex w-full justify-center mb-6">
            <Button
              size="medium"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Create my Itinerary
            </Button>
          </div>
        </div>
      </div>
      </div>
    </DefaultPageLayout>
  );
}

export default QuizPageWithSteps;

