"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@modules/common/components/ui/button";
import { useState } from "react";
import { SuccessfulSubmit } from "../success";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@modules/common/components/ui/form";

import { Textarea } from "@modules/common/components/ui/textarea";
import { Input } from "@modules/common/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@modules/common/components/ui/card";
import { Loader2 } from "lucide-react";

export function FeedbackForm() {

  const formSchema = z.object({
    // username: z.string().min(4, {
    //   message: "Username must be at least 2 characters.",
    // }),
    email: z.string().email({ message: "Invalid email address" }),
    // phone: z.string().min(7, { message: "please enter a valid phone number" }),
    message: z.string().min(4, {
      message: "type your feedback",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // username: "",
      email: "",
      // phone: "",
      message: "",
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
    let response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    setTimeout(() => {}, 2000);

    if (response.status === 200) {
      setSuccess((prev) => !prev);
      setSubmitting((prev) => !prev);
      form.reset();
    }
  }

  if (success) {
    return <SuccessfulSubmit />;
  } else {
    return (
     
        <Form {...form}>       
          
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              {/* <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

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
              {/* PHONE */}

              {/* <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Phone Number" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              {/* MESSAGE */}

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    
                    <FormControl>
                      <Textarea
                        placeholder="Your feedback..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                variant="secondary"
                type="submit"
                disabled={submitting}
                className="bg-blue-700 hover:bg-blue-900 text-white"
              >
                {submitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {submitting ? "Please wait " : "Send"}
              </Button>
            </form>
         
        </Form>
     
    );
  }
}
