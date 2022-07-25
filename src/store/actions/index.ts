import axios from "axios";
import { Dispatch } from "redux";
import md5 from "md5";

export const marvelPersonagens: any = () => (dispatch: Dispatch) => {
  const privateKey = "chave_privada";
  const publicKey = "chave_publica";
  const time = Number(new Date());

  const hash = md5(time + privateKey + publicKey);

  const baseUrl = "URL do projeto";

  axios
    .get(`${baseUrl}ts=${time}&apikey=${publicKey}&hash=${hash}`)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};
