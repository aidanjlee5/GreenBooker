import { useState } from "react";
import { Popover } from "@subframe/core";
import { Button } from "@/src/subframe/components/Button";
import { Calendar } from "@/src/subframe/components/Calendar";

export default function CalendarButton({ date, onChange }) {

  return (
      <Popover.Root>
        <Popover.Trigger asChild={true}>
          <Button variant="neutral-primary">
            {date ? date.toLocaleDateString() : "Select a date"}
          </Button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            side="bottom"
            align="center"
            sideOffset={4}
            asChild={true}
          >
            <div className="flex flex-col items-start gap-1 rounded border border-solid border-neutral-border bg-default-background pt-3 pr-3 pb-3 pl-3 shadow-overlay">
              <Calendar
                mode={"single"}
                selected={date}
                onSelect={onChange}
              />
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
  )
}