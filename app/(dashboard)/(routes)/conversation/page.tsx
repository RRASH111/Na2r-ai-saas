"use client";

import axios from "axios";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { ChatCompletionRequestMessage } from "openai";

import { MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form"


import { formSchema } from "./constants"

import { 
            Form, 
            FormControl, 
            FormField, 
            FormItem 
        } from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/heading"
import { Empty } from "@/components/empty"
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";

const ConversationPage = () => {
    const router = useRouter()
    const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          prompt: ""
        }    
    })

    const isLoding = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const userMessage: ChatCompletionRequestMessage = {
                role: "user",
                content: values.prompt
            }
            const newMessages = [...messages, userMessage]

            const response = await axios.post("/api/conversation", {
                messages: newMessages,
            });

            setMessages((current) => [...current, userMessage, response.data])

            form.reset();
        } catch (error:any) {
            // TODO: Open Pro Modal
            console.log(error)
        } finally {
            router.refresh()

        }
    }

  return (
    <div>
        <Heading
            title="Conversation"
            description="Our most advanced conversation model"
            icon={MessageSquare}
            iconColor="text-violet-500"
            bgColor="bg-violet-500/10"
        />
        <div>
            <div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="
                        rounded-lg
                        border
                        w-full
                        p-4
                        px-3
                        md:px-6
                        foucs-within:shadow-sm
                        grid
                        grid-cols-12
                        gap-2
                        "
                    >
                        <FormField
                            name="prompt"
                            render={({field}) => (
                                <FormItem className="col-span-12 lg:col-span-10">
                                    <FormControl className="m-0 p-0">
                                        <Input
                                            className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                            disabled={isLoding}
                                            placeholder="who is serdar ?"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoding}>
                            Generate
                        </Button>
                    </form>
                </Form>
            </div>
                <div className="space-y-4 mt-4">
                    {isLoding && (
                        <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                            <Loader/>
                        </div>
                    )}
                    {messages.length == 0 && !isLoding && (
                        <Empty label="No Conversation yet."/>
                    )}
                    <div className="flex flex-col-reverse gap-y-4">
                                {messages.map((messages) => (
                                    <div 
                                    key={messages.content}
                                    className={cn(
                                        "p-8 w-full flex items-start gap-x-8 rounded-lg",
                                        messages.role === "user" ? "bg-white border border-black/10" : "bg-muted"
                                        )}
                                    >
                                        {messages.role === "user" ? <UserAvatar/> :<BotAvatar/>}
                                        <p className="test-sm">
                                        {messages.content}
                                        </p>
                                    </div>
                                ))}
                    </div>          
                </div>
        </div>
    </div>
  )
}

export default ConversationPage