import React from 'react'

import SearchIcon from '../../search.png'
import Card from '../Card'

function Search() {
  return (
    <div
      className="d-flex flex-row justify-content-between mt-3 mx-3"
      style={{
        border: '1px solid #e6e6e6'
      }}
    >
      <input
        className="px-1"
        defaultValue="Find pokemon"
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

function ResultList() {
  return (
    <div
      className="d-flex flex-column p-3"
      style={{
        height: 'calc(100% - 70px)',
        overflow: 'scroll',
      }}
    >
      <Card
        style={{ width: '100%' }}
        buttonText="Add"
      />
      <Card
        style={{ width: '100%' }}
        buttonText="Add"
      />
      <Card
        style={{ width: '100%' }}
        buttonText="Add"
      />
      <Card
        style={{ width: '100%' }}
        buttonText="Add"
      />

    </div>
  )
}

function AddCardModal(props) {
  const {
    isOpen = false,
    onRequestClose = () => {},
  } = props
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
        <Search/>
        <ResultList/>
      </div>
    </div>
  )
}

export default AddCardModal