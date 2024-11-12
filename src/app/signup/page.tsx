"use client";

import React from "react";
import { Button } from "@/subframe/components/Button";
import { TextField } from "@/subframe/components/TextField";

export default function SignUp() {
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-center justify-center gap-2 bg-neutral-50">
      <div className="flex w-full max-w-[384px] flex-col items-center justify-center gap-8 rounded-md border border-solid border-neutral-border bg-white px-12 py-12">
        <p className=" text-3xl font-bold w-40 flex-none">GreenBooker</p>
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-4">
            <Button
              className="h-10 w-full flex-none"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Sign up with Google
            </Button>
            <Button
              className="h-10 w-full flex-none"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Sign up with Apple
            </Button>
          </div>
          <div className="flex w-full items-center justify-center gap-2">
            <div className="flex h-px grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
            <span className="text-caption font-caption text-subtext-color">
              or
            </span>
            <div className="flex h-px grow shrink-0 basis-0 flex-col items-center gap-2 bg-neutral-border" />
          </div>
          <div className="flex w-full flex-col items-start gap-6">
            <TextField
              className="h-auto w-full flex-none"
              variant="outline"
              label="Email"
              helpText=""
            >
              <TextField.Input
                placeholder="Your email address..."
                value=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
            <TextField
              className="h-auto w-full flex-none"
              variant="outline"
              label="Create Password"
              helpText=""
            >
              <TextField.Input
                type="password"
                placeholder="Your password..."
                value=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
            <TextField
              className="h-auto w-full flex-none"
              variant="outline"
              label="Confirm Password"
              helpText=""
            >
              <TextField.Input
                type="password"
                placeholder="Confirm your password..."
                value=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
              />
            </TextField>
          </div>
        </div>
        <Button
          className="h-10 w-full flex-none"
          size="large"
          icon={null}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
        >
          Sign in
        </Button>
        <Button
            className="h-10 w-full flex-none"
            size="large"
            icon={null}
            onClick={() => window.location.href = "/login"}
            variant="neutral-primary"
        >
            Already have an account? Login here
        </Button>
      </div>
    </div>
  );
}