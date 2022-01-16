import MovieStars from 'components/MovieStars'
import './styles.css'

type Props = {
    score: number;
    count: number;
}

// Recebe score e count do tipo Props
function MovieScore({score, count} : Props){
    
    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score}/>
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    );
}

export default MovieScore;