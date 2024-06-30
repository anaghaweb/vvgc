"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@modules/common/components/ui/button";
import { useState } from "react";
import { SubscribeSuccess } from "../success";
import { Input } from "@modules/common/components/ui/input"; 
import { Loader2 } from "lucide-react";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@modules/common/components/ui/form";

export function SubscribeForm() {
  const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const {
    isDirty,
    isValid,
    formState,
    isSubmitted,
    isSubmitting,
    isSubmitSuccessful,
  } = form;

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // submit form
  async function onSubmit(values) {
    setSubmitting(true);
    let response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    setTimeout(() => { }, 2000);

    if (response.status === 200) {
      setSuccess((prev) => !prev);
      setSubmitting((prev) => !prev);
      form.reset();
    }
  }

  if (success) {
    return <SubscribeSuccess />;
  } else {
    return (
      <div className="bg-sky-950 min-w-36">
        <Form {...form}>
          <div className="min-w-56 ">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="inline-flex items-start justify-start h-full"
            >
              {/* EMAIL */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Your Email id" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="bg-green-700 border-none rounded-none hover:bg-blue-700"
                type="submit"
                disabled={submitting}
              >
                {submitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {submitting ? "Please wait " : "Subscribe"}
              </Button>
            </form>
          </div>
        </Form>
      </div>
    );
  }
}
