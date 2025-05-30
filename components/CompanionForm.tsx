"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { subjects } from "@/constants"
import { Textarea } from "./ui/textarea"
import { createCompanion } from "@/lib/actions/companion.actions"
import { redirect } from "next/navigation"

const formSchema = z.object({
  name: z.string().min(1, {message: 'Companion is required'}),
  subject: z.string().min(1, {message: 'Companion is required'}),
  topic: z.string().min(1, {message: 'Companion is required'}),
  voice: z.string().min(1, {message: 'Companion is required'}),
  style: z.string().min(1, {message: 'Companion is required'}),
  duration: z.coerce.number().min(1, {message: 'Companion is required'}),
  })

const CompanionForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject:'',
    topic:'',
    voice:'',
    style:'',
    duration:15,
    },
  })
  const onSubmit = async(values: z.infer<typeof formSchema>) => {
  const companion = await createCompanion(values)
  if(companion){
    redirect(`/companions/${companion.id}`);
  }
  else{
    console.log('Failed to create a companion')
    redirect('/')
  }
  }
 return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter the companion name" {...field} className="input"  />
              </FormControl>
             <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value} >
  <SelectTrigger className="input capitalize">
    <SelectValue placeholder="Select the Subject" />
  </SelectTrigger>
  <SelectContent>
    {
        subjects.map((sub)=>(
            <SelectItem value={sub} key={sub} className="capitalize">{sub}</SelectItem>
        ))
    }
    
  </SelectContent>
</Select>

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What should the companion help with?</FormLabel>
              <FormControl>
                <Textarea placeholder="Ex. Derivatives and Integrals" {...field} className="input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       
        <FormField
          control={form.control}
          name="voice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voice</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value} >
  <SelectTrigger className="input capitalize">
    <SelectValue placeholder="Select the Voice" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value='male' className="capitalize">Male</SelectItem>
    <SelectItem value='female' className="capitalize">Female</SelectItem>
    
  </SelectContent>
</Select>

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Style</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value} >
  <SelectTrigger className="input capitalize">
    <SelectValue placeholder="Select the Style" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value='formal' className="capitalize">Formal</SelectItem>
    <SelectItem value='informal' className="capitalize">Casual</SelectItem>
    
  </SelectContent>
</Select>

              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated session duration in minutes</FormLabel>
              <FormControl>
                <Input type="number" placeholder="15" {...field} className="input" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full cursor-pointer">Build Your Companion</Button>
      </form>
    </Form>
  )
}

export default CompanionForm