import { Col } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { getPokemon, getPokemonDetails } from './api/getPokemon'
import './App.css'
import { PokemonList } from './components/PokemonList'
import Searcher from './components/Searcher'
import { PokemonDetailDTO } from './models/Pokemons'
import { getPokemonsWithDetails, setPokemons } from './redux/actions'
import { selectPokemons } from './redux/reducers/pokemons'
import logo from './statics/logo.svg'

function App() {
  const pokemons = useSelector(selectPokemons);
  const dispatch = useDispatch<Dispatch<any>>();

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonsRes = await getPokemon()
      const items = pokemonsRes || [];
      dispatch(getPokemonsWithDetails(items));
    }
    fetchPokemon();
  }, [dispatch]);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img className='App__Logo' src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default App
