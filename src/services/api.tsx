import axios  from 'axios';
import md5 from 'md5';

const privateKey = 'chave_privada';
const publicKey = 'chave_publica';
const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const baseUrl = 'URL do projeto';

const api = () => {

    axios.get(
        `${baseUrl}ts=${time}&apikey=${publicKey}&hash=${hash}` 
    )
    .then(response => console.log(response))
    .catch(error => console.log(error))

}

export default api
