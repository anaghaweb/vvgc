"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "../ui/button"
import {useState} from 'react'
import { SuccessfulSubmit } from "./success"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/Components/ui/form"
import { Textarea } from "../ui/textarea"
import {Input} from '../ui/input'
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card"
import { Loader2 } from "lucide-react"



export function SubscribeForm() {
   
const formSchema = z.object({
 
  email: z.string().email({message:"Invalid email address"}),
 
})
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
     
      email:"",
     
    },
  })
const {isDirty, isValid, formState, isSubmitted, isSubmitting, isSubmitSuccessful} = form;
  
  const [submitting, setSubmitting ]= useState(false);
  const [success, setSuccess] = useState(false);

  // submit form
  async function onSubmit (values) {
     let response = await fetch('/api/feedback', {
      method:'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      },
      body: JSON.stringify(values)
  })
  setSubmitting(true)
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
      <CardHeader className="text-center text-xl">Subscribe</CardHeader>

    <Form {...form}>
      <CardContent className="min-w-80 sm:w-96">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      

        {/* EMAIL */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subscribe to our mailing list</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field}  />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        {/* PHONE */}

     
        <Button className="bg-blue-800" type="submit" disabled={submitting}>
         {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" /> } 
          {submitting ? 'Please wait ': 'Subscribe'}
          
          </Button>
      </form>
      </CardContent>
    </Form>
    </Card>
  )
}}
