import { AppBar, IconButton, Pagination, Toolbar, Typography } from "@mui/material";
import axios from "axios";
import React, {useEffect, useState } from "react";
import CardsDisplay from "./CardsDisplay";

export default function ButtonAppBar() {
    const [loading, setLoading] = useState(false);

    let [movieCard, setmovieCard] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(10);

    useEffect(() => {
        const getMovieDetails = async () => {
            setLoading(true);
            const dataFromServer = await axios.get(
                `https://api.themoviedb.org/3/movie/popular?api_key=e11085cff59023d052e3a69484d6cd19&page=${currentPage}`
            );
            const responeFromServer = dataFromServer.data.results;
            setmovieCard(responeFromServer);
            setLoading(false);
        };

        getMovieDetails();
    }, [currentPage]);

    // Get currCards
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = movieCard.slice(indexOfFirstCard, indexOfLastCard);

    // Change page
    const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

    const handleChange = (event: any, value: React.SetStateAction<number>) => {
        setCurrentPage(value);
    };

    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">
                        AppBar
                    </Typography>
                    <IconButton>
                        1
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <CardsDisplay movieCard={movieCard} loading={loading} />
            <Pagination count={10} page={currentPage} onChange={handleChange} />
        </React.Fragment>
    );
}
