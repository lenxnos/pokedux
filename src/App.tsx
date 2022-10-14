import { Col } from 'antd'
import { useEffect, useState } from 'react'
import { getPokemon } from './api/getPokemon'
import './App.css'
import { PokemonList } from './components/PokemonList'
import Searcher from './components/Searcher'
import { PokemonType } from './models/Pokemons'
import logo from './statics/logo.svg'

function App() {

  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonsRes = await getPokemon()
      const items = pokemonsRes || [];
      setPokemons(items);
    }
    fetchPokemon();
  }, []);

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
