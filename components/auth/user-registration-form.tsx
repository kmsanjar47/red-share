"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  InputWithLabel,
  RadioGroupWithLabel,
  SelectWithLabel,
} from "../shared";
import GoogleIcon from "../icon/google-icon";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isDonor, setIsDonor] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-5">
          <div className="grid gap-3">
            <InputWithLabel
              label="Full name"
              placeholder="Your name"
              type="text"
              autoCapitalize="true"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
              required
            />
            <InputWithLabel
              label="Phone"
              placeholder="01x-xxx-xxxx"
              type="tel"
              autoComplete="phone"
              disabled={isLoading}
              required
            />
            <InputWithLabel
              label="Email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
            <InputWithLabel
              label="Address"
              placeholder="Your current address"
              type="text"
              autoComplete="address"
              disabled={isLoading}
              required
            />
            <RadioGroupWithLabel
              label="Siging up as: "
              items={["Donor", "Recipient"]}
              onValueChange={(value) => setIsDonor(value === "Donor")}
              required
            />

            {isDonor && (
              <SelectWithLabel
                label="Blood Group"
                placeholder="Select Blood Group"
                values={[
                  "A (+ve)",
                  "A (-ve)",
                  "B (+ve)",
                  "B (-ve)",
                  "AB (+ve)",
                  "AB (-ve)",
                  "O (+ve)",
                  "O (-ve)",
                ]}
                required
              />
            )}
            <InputWithLabel type="file" label="Upload your photo" />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <GoogleIcon className="mr-2 h-3.5 w-3.5" />
        )}{" "}
        Continue with Google
      </Button>
    </div>
  );
}
