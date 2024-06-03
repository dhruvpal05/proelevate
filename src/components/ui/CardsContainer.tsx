import React from "react";
import Card from "./NewCard";

const CardsContainer: React.FC = () => {
    const cards = [
        { title: "Card 1", description: "This is the description for card 1." },
        { title: "Card 2", description: "This is the description for card 2." },
        { title: "Card 3", description: "This is the description for card 3." },
        { title: "Card 4", description: "This is the description for card 4." },
    ];

    return (
        <div>
            <div className="px-6 py-6 pt-10 col-auto row-auto pb-0 mb-0">
                <h1 className="flex justify-center text-4xl font-bold">Archive your career&nbsp;<span className="text-orange-500">ambitions</span></h1>
                <p className="flex justify-center px-6 text-gray-600 text-center text-xl">Realize your career aspirations by connecting with top companies through hiring challenges and<br>
                </br> accessing a range of full-time and part-time job opportunities and internships.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-6">
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} description={card.description} />
                ))}
            </div>
        </div>
    );
};

export default CardsContainer;
