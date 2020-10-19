import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import Card from './components/Card'
import AddCardModal from './components/AddCardModal'

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

function Header() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        fontSize: 36,
      }}
    >
      My Pokedex
    </div>
  )
}

function MyCardList() {
  return (
    <div
      className="d-flex flex-row flex-wrap justify-content-between"
      style={{
        overflow: 'scroll',
        height: 'calc(768px - 56px - 56px - 59px)',
      }}
    >
    </div>
  )
}

function Footer(props) {
  const { onClick = () => {} } = props
  return (
    <div
      className="bottom-fotter d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: '#ec5656',
        width: '100%',
        height: 56,
      }}
    >
      <div
        style={{
          color: 'white',
          fontSize: 62,
          height: 90,
          width: 90,
          borderRadius: '50%',
          textAlign: 'center',
          backgroundColor: '#ec5656',
          zIndex: 2,
          marginBottom: 35,
          cursor: 'pointer',
        }}
        onClick={onClick}
      >+</div>
    </div>
  )
}

function App() {
  const [pokedex, setPokedex] = useState([])
  const [addCardModal, setAddCardModal] = useState({ isOpen: true })
  return (
    <div className="App">
      <div className="container-fluid d-flex flex-column p-0">
        <Header/>
        <MyCardList/>
        <Footer onClick={() => { setAddCardModal({ isOpen: true }) }}/>
      </div>
      <AddCardModal
        {...addCardModal}
        onRequestClose={() => { setAddCardModal({ isOpen: false }) }}
        addCard={(card) => { setPokedex([...pokedex, card]) }}
      />
    </div>
  )
}

export default App
