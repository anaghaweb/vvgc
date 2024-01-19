"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "../ui/button"
import {useState} from 'react'
import { SuccessfulSubscribe } from "./success"
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
import { Card, CardTitle , CardContent, CardFooter } from "../ui/card"
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
     let response = await fetch('/api/subscribe', {
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
<SuccessfulSubscribe />
    )
  }
  else {
  return (
  
    <Card className="bg-sky-950 min-w-44">
      <CardTitle  className="text-center text-xl text-white mb-3">Subscribe</CardTitle >

    <Form {...form}>
      <CardContent className="min-w-64 ">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      

        {/* EMAIL */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="your email id" {...field}  />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        {/* PHONE */}

     
        <Button className="bg-green-700 mx-auto" type="submit" disabled={submitting}>
         {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" /> } 
          {submitting ? 'Please wait ': 'Subscribe'}
          
          </Button>
      </form>
      </CardContent>
    </Form>
    </Card>
  )
}}
