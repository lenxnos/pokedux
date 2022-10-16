import { Col, Spin } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { getPokemon } from './api/getPokemon'
import './App.css'
import { PokemonList } from './components/PokemonList'
import Searcher from './components/Searcher'
import { getPokemonsWithDetails, setLoading } from './redux/actions'
import { selectLoading } from './redux/reducers'
import { selectPokemons } from './redux/reducers/pokemons'
import logo from './statics/logo.svg'

function App() {
  const pokemons = useSelector(selectPokemons);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch<Dispatch<any>>();

  useEffect(() => {
    const fetchPokemon = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon()
      const items = pokemonsRes || [];
      dispatch(getPokemonsWithDetails(items));
      dispatch(setLoading(false));
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
      {isLoading ?
        (
          <Col offset={12}>
            <Spin spinning size='large' />
          </Col>
        ) : <PokemonList pokemons={pokemons} />}
    </div>
  )
}

export default App
