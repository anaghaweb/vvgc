"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "../ui/button"
import {useState} from 'react'
import { SuccessfulSubmit } from "./success"
 import { Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,} from "../ui/form"
import { Textarea } from "../ui/textarea"
import {Input} from '../ui/input'
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card"
import { Loader2 } from "lucide-react"


export function FeedbackForm() {
   
const formSchema = z.object({
  username: z.string().min(4, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({message:"Invalid email address"}),
  phone: z.string().min(7,{message:"please enter a valid phone number"}),
  message:z.string().min(4,{
    message:"Message cannot be empty"
  }),
})
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email:"",
      phone:"",
      message:"",
    },
  })
const {isDirty, isValid, formState, isSubmitted, isSubmitting, isSubmitSuccessful} = form;
  
  const [submitting, setSubmitting ]= useState(false);
  const [success, setSuccess] = useState(false);

  // submit form
  async function onSubmit (values) {
    setSubmitting(true)
     let response = await fetch('/api/feedback', {
      method:'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      },
      body: JSON.stringify(values)
  })
  
  setTimeout(()=>{
    
  }, 2000)
  

  if (response.status === 200){
    
    setSuccess((prev)=>!prev);
    setSubmitting ((prev)=>!prev);
    form.reset()
  }

  }

  if(success){
    return(
<SuccessfulSubmit />
    )
  }
  else {
  return (
  
    <Card>
      <CardHeader className="text-center text-xl">Feedback Form</CardHeader>

    <Form {...form}>
      <CardContent className="min-w-80 sm:w-96">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field}  />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />

        {/* EMAIL */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field}  />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        {/* PHONE */}

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Phone Number" {...field}  />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />

        {/* MESSAGE */}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Feedback message</FormLabel>
              <FormControl>
                <Textarea placeholder="type your feedback here" {...field}  />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-blue-800" type="submit" disabled={submitting}>
         {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" /> } 
          {submitting ? 'Please wait ': 'Submit'}
          
          </Button>
      </form>
      </CardContent>
    </Form>
    </Card>
  )
}}
