'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { WobbleCard } from "@/components/ui/wobble-card";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

import Interview from "@/components/Interview";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import DiscoverPath from "@/components/DiscoverPath";
import { BackgroundBeams } from "@/components/ui/background-beams";
import CardsContainer from "@/components/ui/CardsContainer";

export default function Home() {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];



  return (
    <div className="col-auto row-auto">
      <div className="px-6 py-6 pt-10 col-auto row-auto">
        <h1 className="flex justify-center text-5xl font-bold">One Stop Destination</h1>
        <h1 className="flex justify-center text-5xl font-bold">To Your <span className="text-orange-500">First Job</span></h1>
      </div>
      <p className="flex justify-center px-6 pb-6">Your one-stop destination for DSA practice, interview experiences, and career opportunities.</p>
      <div className="flex justify-center">
        <Button className="px-4 my-2 mr-2 rounded-2xl">Get started</Button>
        <Button variant="secondary" className="my-2 ml-2 rounded-2xl">Join Free</Button>
      </div>
      <div className="flex justify-center py-6 pt-20">
        <Carousel className="w-full max-w-4xl">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 lg:basis-1/2">
                <div className="p-1">
                  <Card className="h-64 w-full">
                    <CardContent className="flex aspect-auto items-center justify-center p-6">
                      <span className="text-4xl font-semibold justify-center items-center"><Image src={`/cors1.webp`} width={800} height={800} alt="Description" className="rounded-lg flex items-center justify-center" /></span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="px-6 py-6 pt-10 col-auto row-auto">
        <h1 className="flex justify-start text-4xl ml-28 font-bold"><span className="text-orange-500">SuperCharge &nbsp;</span>your Technical Skills</h1>
      </div>
      <p className="flex justify-start px-6 pb-6 ml-28 text-gray-600 text-xl">
        Dive into interview-specific Elevate your skills and conquer technical interviews like a champ.<br></br>
        Ready to level up? Let’s do this together.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      </div>
      <Interview />
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          <p className="flex justify-center px-6 text-gray-600 text-xl mb-4">Embrace the Code Master Within</p>
          Embark on a coding adventure with ProElevate! We’ve got the perfect toolkit to make coding a breeze. Just bring your curiosity and a dash of dedication, and let’s dive into the {" "}
          <Highlight className="text-black dark:text-white">
          world of coding fun together!
          </Highlight>
        </motion.h1>
      </HeroHighlight>
      <DiscoverPath />
      <div className="h-[40rem] w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased mx-4 rounded-xl" >
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Join the waitlist
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Welcome to MailJet, the best transactional email service on the web.
            We provide reliable, scalable, and customizable email solutions for
            your business. Whether you&apos;re sending order confirmations,
            password reset emails, or promotional campaigns, MailJet has got you
            covered.
          </p>
          <input
            type="text"
            placeholder="hi@manuarora.in"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
        <BackgroundBeams />
      </div>
      <div className=" bg-gray-100 flex items-center justify-center">
        <CardsContainer />
      </div>
      <div className="px-6 py-6 pt-10 col-auto row-auto pb-0 mb-0">
        <p className="flex justify-center px-6 text-gray-600 text-xl">OUR TESTIMONIALS</p>
        <h1 className="flex justify-center text-4xl font-bold">What&nbsp;<span className="text-orange-500">Students</span>&nbsp;are saying</h1>
      </div>
      <div className="h-[20rem] rounded-md flex flex-col mt-0 antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
