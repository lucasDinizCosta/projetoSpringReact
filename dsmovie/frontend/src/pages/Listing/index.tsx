import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/request";

function Listing(){

    // definindo a hook do useState
    const [pageNumber, setPageNumber] = useState(0);

    // definindo a hook do useEffect
    // ==> Executa somente quando o componente é totalmente carregado
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(response => {
            const data = response.data as MoviePage;
            setPageNumber(data.number)
            console.log(data);
            
        });
    }, [])

    // Forma ERRADA(SEM USAR HOOKS)===> Vem 2 requisições
    // axios.get(`${BASE_URL}/movies?size=12&page=0`)
    //     .then(response => {
    //         const data = response.data as MoviePage;
    //         setPageNumber(data.number)
    //     });


    return (
        // Por padrão o react só aceita que retorne 1 elemento, para contornar isso pode se
        // adicionar os elementos em uma div, contudo, ocupará espaço no HTML
        // ou em uma tag vazia <>ELEMENTOS AQUI</>
        <>
            <p>{pageNumber}</p>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                </div>
                
            </div>
        </>
    );
}

export default Listing;