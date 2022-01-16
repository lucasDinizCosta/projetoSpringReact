// No Netlify onde será hospedado o frontend será adicionado a seguinte
// variável de ambiente 'REACT_APP_BACKEND_URL' e partir dela que será preenchido
// com o endereço URL do frontend no Heroku, e assim, estabelecendo a comunicação 
// frontend <=> backend
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8090";