import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";


const Interview = () => {
    const Skeleton = () => (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    );
    const items = [
        {
            title: "The Power of Communication",
            description: "Understand the impact of effective communication in our lives.",
            header: <Skeleton />,
            icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Pursuit of Knowledge",
            description: "Join the quest for understanding and enlightenment.",
            header: <Skeleton />,
            icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Joy of Creation",
            description: "Experience the thrill of bringing ideas to life.",
            header: <Skeleton />,
            icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Spirit of Adventure",
            description: "Embark on exciting journeys and thrilling discoveries.",
            header: <Skeleton />,
            icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
        },
    ];
    return (
        <div>
            <div className="px-6 py-6 pt-10 col-auto row-auto">
                <h1 className="flex justify-start text-4xl ml-28 font-bold">Most Viewed interview<span className="text-orange-500">&nbsp;experiences </span></h1>
            </div>
            <p className="flex justify-start px-6 pb-6 ml-28 text-gray-600 text-xl">
                Dive into interview-specific Elevate your skills and conquer technical interviews like a champ.<br></br>
                Ready to level up? Let’s do this together.
            </p>
            <BentoGrid className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className="md:col-span-1 min-h-[16rem]" // Increased card length using Tailwind CSS
                    />
                ))}
            </BentoGrid>
        </div>
    )
}

export default Interview