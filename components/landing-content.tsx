"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
    {
        name: "Ahmad",
        avatar: "A",
        title: "Arctic Engineer",
        description: "I can't believe how seamless and engaging my conversations with Na2r AI have been. It feels like chatting with a real human! Moreover, the AI-generated Code, music, and videos are incredibly impressive. Na2r AI is my go-to platform for all things AI!"
      },
      {
        name: "Rawad",
        avatar: "M",
        title: "Music Producer",
        description: "Na2r AI has transformed the way I compose music. I can now experiment with various music styles and genres using the AI music generation feature. It's like having an AI music collaborator! Na2r AI is a game-changer for musicians!"
      },
      {
        name: "Maya",
        avatar: "S",
        title: "Social Media Influencer",
        description: "Na2r AI has taken my social media content to the next level. The AI-generated photos and videos make my posts stand out, attracting more followers and engagement. Interacting with Na2r AI has been a delightful experience!"
      },
      {
        name: "Khaled",
        avatar: "D",
        title: "Developer, CodeGenius",
        description: "Using Na2r AI's conversational AI has been a revelation. It understands my queries accurately and provides relevant Code suggestions instantly. The AI is like having a knowledgeable coding buddy. Na2r AI is a must-have for developers!"
      },
      {
        name: "Sarah",
        avatar: "S",
        title: "Content Creator",
        description: "Na2r AI has revolutionized my content creation process. The AI-generated music and videos are a game-changer for my YouTube channel. The conversational AI is incredibly engaging, making it a valuable addition to my website. Highly recommended!"
      },
      {
        name: "Jason",
        avatar: "J",
        title: "Tech Enthusiast",
        description: "As a tech enthusiast, I'm blown away by the possibilities that Na2r AI offers. The AI-generated Code is impressively accurate and saves me hours of coding. The AI-generated music is a joy to listen to. Na2r AI is a fascinating platform!"
      }
]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-[#D8C0AE] font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#cb1d1ab6] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-[#D5C0AE] text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}