"use client";

import React, { useState } from "react";
import { Button } from "@/subframe/components/Button";
import { TextField } from "@/subframe/components/TextField";
import { OAuthSocialButton } from "@/subframe/components/OAuthSocialButton";
import { signup } from "./actions";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Reset error state

    // Basic validation
    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      await signup(formData); // Call the signup action
    } catch (err) {
      setError("Signup failed. Please try again."); // Handle signup failure
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="container max-w-none flex h-full w-full flex-col items-center justify-center gap-2 bg-neutral-50">
        <div className="flex w-full max-w-[384px] flex-col items-center justify-center gap-8 rounded-md border border-solid border-neutral-border bg-white px-12 py-12">
          <p className=" text-3xl font-bold w-40 flex-none">GreenBooker</p>
          <div className="flex w-full flex-col items-start gap-6">
            <div className="flex w-full flex-col items-start gap-4">
              <OAuthSocialButton
                className="h-10 w-full flex-none"
                logo="https://res.cloudinary.com/subframe/image/upload/v1711417516/shared/z0i3zyjjqkobzuaecgno.svg"
                onClick={() => {}}
              >
                Sign in with Google
              </OAuthSocialButton>
              <OAuthSocialButton
                className="h-10 w-full flex-none"
                logo="https://res.cloudinary.com/subframe/image/upload/v1711417561/shared/kplo8lv2zjit3brqmadv.png"
                onClick={() => {}}
              >
                Sign in with Apple
              </OAuthSocialButton>
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
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
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
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </TextField>
            </div>
            {error && (
              <p className="text-sm text-red-600">{error}</p> // Error message
            )}
          </div>
          <Button
            className="h-10 w-full flex-none"
            size="large"
            type="submit"
          >
            Sign Up
          </Button>
          <Button
              className="h-10 w-full flex-none"
              size="large"
              onClick={() => window.location.href = "/login"}
              variant="neutral-primary"
          >
              Already have an account? Login here
          </Button>
        </div>
      </div>
    </form>
  );
}