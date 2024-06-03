import React from 'react'
import { HoverEffect } from "@/components/ui/card-hover-effect";

const DiscoverPath = () => {
    const projects = [
        {
            title: "Stripe",
            description:
                "A technology company that builds economic infrastructure for the internet.",
            link: "https://stripe.com",
        },
        {
            title: "Netflix",
            description:
                "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
            link: "https://netflix.com",
        },
        {
            title: "Google",
            description:
                "A multinational technology company that specializes in Internet-related services and products.",
            link: "https://google.com",
        },
        {
            title: "Meta",
            description:
                "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
            link: "https://meta.com",
        },
    ];
    return (
        <div>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>
        </div>
    )
}

export default DiscoverPath