import React, { useEffect, useState } from 'react'

import SearchIcon from '../../search.png'
import Card from '../Card'
import Axios from 'axios'

function NameSearch(props) {
  const { value = '', setValue } = props
  return (
    <div
      className="d-flex flex-row justify-content-between mt-3 mx-3"
      style={{
        border: '1px solid #e6e6e6'
      }}
    >
      <input
        className="px-1"
        placeholder="Find pokemon"
        value={value}
        onChange={(e) => { setValue(e.target.value) }}
        style={{
          height: 36,
          fontFamily: 'Gaegu',
          fontSize: 16,
          width: '100%',
          borderStyle: 'none',
          outlineStyle: 'none',
          textTransform: 'uppercase'
        }}
      />
      <img
        src={SearchIcon}
        style={{
          width: 36
        }}
      />
    </div>
  )
}

function TypeSearch(props) {
  const { value = '', setValue } = props
  return (
    <div className="mt-1 mx-3">
      <select
        value={value}
        onChange={(e) => { setValue(e.target.value) }}
        style={{
          width: '100%',
          height: 36,
          border: '1px solid #e6e6e6',
          fontFamily: 'Gaegu',
          fontSize: 16,
        }}
      >
        <option value="All">ALL</option>
        <option value="Psychic">Psychic</option>
        <option value="Fighting">Fighting</option>
        <option value="Fairy">Fairy</option>
        <option value="Normal">Normal</option>
        <option value="Grass">Grass</option>
        <option value="Metal">Metal</option>
        <option value="Water">Water</option>
        <option value="Lightning">Lightning</option>
        <option value="Darkness">Darkness</option>
        <option value="Fire">Fire</option>
      </select>
    </div>
  )
}

function ResultList(props) {
  const { results = [], addCard = () => {} } = props
  return (
    <div
      className="d-flex flex-column p-3"
      style={{
        height: 'calc(100% - 70px)',
        overflow: 'scroll',
      }}
    >
      {results.map((card) => {
        return (
          <Card
            key={card.id}
            data={card}
            style={{ width: '100%' }}
            buttonText="Add"
            buttonClick={() => { addCard(card) }}
          />
        )
      })}
    </div>
  )
}

function AddCardModal(props) {
  const {
    isOpen = false,
    onRequestClose = () => {},
    addCard = () => {},
    existingCards = [],
  } = props
  const [results, setResults] = useState([])
  const [nameSearch, setNameSearch] = useState('')
  const [typeSearch, setTypeSearch] = useState('All')
  useEffect(() => {
    Axios.get('http://localhost:3030/api/cards').then().then((res) => {
      if (res && res.data && res.data.cards) setResults(res.data.cards)
      else setResults([])
    })
  }, [])
  useEffect(() => {
    Axios.get(`http://localhost:3030/api/cards?limit=30&name=${nameSearch}`).then().then((res) => {
      if (res && res.data && res.data.cards) setResults(res.data.cards)
      else setResults([])
    })
  }, [nameSearch])

  const existingCardID = existingCards.map(card => card.id)
  const aviableResults = results.filter(card => existingCardID.indexOf(card.id) === -1)
  return (
    <div
      className="add-card-modal align-items-center justify-content-center"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 3,
        display: isOpen? 'flex' : 'none',
      }}
      onClick={() => { onRequestClose() }}
    >
      <div
        className="modal-content"
        style={{
          width: '90%',
          height: '90%',
          backgroundColor: 'white',
          borderRadius: 5,
        }}
        onClick={(e) => { e.stopPropagation() }}
      >
        <NameSearch value={nameSearch} setValue={setNameSearch} />
        <TypeSearch value={typeSearch} setValue={setTypeSearch}/>
        <ResultList results={aviableResults} addCard={addCard}/>
      </div>
    </div>
  )
}

export default AddCardModal