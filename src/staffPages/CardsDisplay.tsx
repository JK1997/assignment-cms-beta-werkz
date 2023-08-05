import React from "react";
import { Card } from "./Card";

interface CardsDisplayProps {
    movieCard: any;
    loading: boolean;
}
const CardsDisplay = ({ movieCard, loading }: CardsDisplayProps) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="displayCard">
            {movieCard?.map((title: { title: any; backdrop_path: string; vote_average: string; }) => {
                return (
                    <Card
                        title={title.title}
                        imageurl={"https://image.tmdb.org/t/p/w500" + title.backdrop_path}
                        body={"Rating: " + title.vote_average}
                    />
                );
            })}
        </div>
    );
};

export default CardsDisplay;
