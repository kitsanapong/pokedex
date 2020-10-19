import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import Card from './components/Card'

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
        height: 'calc(768px - 56px - 59px)',
      }}
    >
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid d-flex flex-column">
          <Header/>
          <MyCardList/>
        </div>
      </div>
    )
  }
}

export default App
