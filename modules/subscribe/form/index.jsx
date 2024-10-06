"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@modules/common/components/ui/button";
import { useState } from "react";
import { SubscribeSuccess } from "../successMessage";
import { Input } from "@modules/common/components/ui/input"; 
import { Loader2 } from "lucide-react";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
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
       <section  className="flex flex-col gap-4 col-span-full items-center bg-inherit size-full">
      <div className="bg-inherit min-w-36">
        <Form {...form}>
          <div className=" min-w-56">
            {/* <FormLabel className="text-gray-200 tracking-tight font-thin font-roboto font-sm leading-5">Subscribe to our weekly Newsletter</FormLabel> */}
            <form
            className="flex flex-col gap-2"
              onSubmit={form.handleSubmit(onSubmit)}>
              {/* EMAIL */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                variant="secondary"
                type="submit"
                disabled={submitting}
                className="bg-blue-700 hover:bg-blue-900 text-white max-w-fit"
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
      </section>
    );
  }
}
