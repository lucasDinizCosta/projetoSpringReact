import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/request";

function Listing(){

    // definindo a hook dos estados através do useState
    const [pageNumber, setPageNumber] = useState(0);

    // Estado do tipo 'MoviePage'
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    // definindo a hook do useEffect
    // ==> Executa somente quando o componente é totalmente carregado
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=${page.size}&page=${pageNumber}`)
        .then(response => {
            const data = response.data as MoviePage;
            setPage(data);
        });
    }, [pageNumber])        // Quando mudar o pageNumber refará uma nova requisição

    // Forma ERRADA(SEM USAR HOOKS)===> Vem 2 requisições
    // axios.get(`${BASE_URL}/movies?size=12&page=0`)
    //     .then(response => {
    //         const data = response.data as MoviePage;
    //         setPageNumber(data.number)
    //     });


    // const movie = {
    //     id: 1,
    //     image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    //     title: "The Witcher",
    //     count: 2,
    //     score: 4.5
    // };

    return (
        // Por padrão o react só aceita que retorne 1 elemento, para contornar isso pode se
        // adicionar os elementos em uma div, contudo, ocupará espaço no HTML
        // ou em uma tag vazia <>ELEMENTOS AQUI</>
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    {
                        // NOTA: em uma renderização dinâmica de coleção, 
                        // cada elemento renderizado DEVE possuir um atributo 'key'.
                        page.content.map(movie => (
                            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                                <MovieCard movie={movie} />
                            </div>
                        ))
                    }
                    
                </div>
            </div>
        </>
    );
}

export default Listing;