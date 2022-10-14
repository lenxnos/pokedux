import { Col } from 'antd'
import { useState } from 'react'
import './App.css'
import { PokemonList } from './components/PokemonList'
import Searcher from './components/Searcher'

const POKEMONS_LIST_DATA = Array(10).fill('');


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={POKEMONS_LIST_DATA} />
    </div>
  )
}

export default App
