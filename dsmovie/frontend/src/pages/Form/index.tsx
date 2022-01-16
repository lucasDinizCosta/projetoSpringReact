import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';

function Form(){

    // Utiliza os parametros da URL para exibir o 
    // filme correto no formulário
    const params = useParams();

    return (
        <FormCard movieId={`${params.movieId}`}/>
    );
}

export default Form;