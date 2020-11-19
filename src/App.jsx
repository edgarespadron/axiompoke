import { useState,} from 'react';
import ShowPokemon from './components/displaypokemon';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {

  const [ pokemon, setPokemon ] = useState(null);

  const getPokemon = () => {
    
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(res =>{
          setPokemon(res.data.results)
        })
  }

  return (
    <div className="my-5 mx-auto">

      <div className="d-flex justify-content-center">
        <button 
          className="btn btn-danger"
          onClick={ getPokemon }
        >Fetch Pokemon</button>
      </div>
    
      { pokemon ?
        pokemon.map((p,i) => {
          return <ShowPokemon
                    pokemon={p}
                    key={i}
                />
        }) : <div></div>
      }

    </div>
  );
}

export default App;