import { fetchPokemonPending, fetchPokemonError, fetchPokemonSuccess } from '../actions/session';

const url = 'http://localhost:3000/';
const config = {
  mode: 'cors',
  method: 'GET',
};

function indexPokemon() {
  return dispatch => {
    dispatch(fetchPokemonPending());
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchPokemonSuccess(res.results));
        return res.results;
      })
      .catch(error => {
        dispatch(fetchPokemonError(error));
      });
  };
}

export default indexPokemon;