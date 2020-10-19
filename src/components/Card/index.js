import React from 'react'

import CuteImage from '../../cute.png'

import './Card.css'

function PowerBar(props) {
  const { name = 'HP' } = props
  return (
    <div className="d-flex flex-row">
      <div
        style={{
          width: 50
        }}
      >{name}</div>
      <div style={{
        backgroundColor: '#e3e3e3',
        borderRadius: 20,
        width: 150,
        boxShadow: '0px 1px 1px #d4d4d4',
      }}>
        <div style={{
          backgroundColor: '#f3701a',
          borderRadius: 20,
          width: 100,
          height: 26,
        }}/>
      </div>
    </div>
  )
}

function Cost() {
  return (
    <div className="cost-wrapper d-flex flex-row">
      <img className="cost mr-1" src={CuteImage} width="32px"/>
      <img className="cost mr-1" src={CuteImage} width="32px"/>
      <img className="cost mr-1" src={CuteImage} width="32px"/>
      <img className="cost mr-1" src={CuteImage} width="32px"/>
    </div>
  )
}

function Name() {
  return (
    <div
      className="card-name"
      style={{
        fontSize: 28,
        fontFamily: 'Gaegu',
        textTransform: 'uppercase',
      }}
    >Deoxys ex</div>
  )
}

function Card() {
  return (
    <div
      className="card d-flex flex-row"
      style={{
        height: 200,
        width: 'calc(50% - 5px)',
        backgroundColor: '#f3f4f7',
        marginBottom: 10,
        padding: '0px 10px',
        position: 'relative',
      }}
    >
      <div className="d-flex align-items-center">
        <img
          src="https://images.pokemontcg.io/ex8/98_hires.png"
          height="180px"
        />
      </div>
      <div className="d-flex flex-column justify-content-between p-3">
        <Name/>
        <PowerBar/>
        <PowerBar/>
        <PowerBar/>
        <Cost/>
      </div>
      <div
        className="close"
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          fontSize: 24,
          color: '#dc7777',
          cursor: 'pointer',
        }}
      >X</div>
    </div>
  )
}

export default Card