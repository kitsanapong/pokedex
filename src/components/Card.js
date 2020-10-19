import React from 'react'

import CuteImage from '../cute.png'

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
        backgroundColor: '#f3701a',
        borderRadius: 20,
        width: 100,
      }}></div>
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
        boxShadow: '0px 1px 3px #d5d6dc'
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
    </div>
  )
}

export default Card