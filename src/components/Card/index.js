import React from 'react'

import CuteImage from '../../cute.png'

import './Card.css'

function PowerBar(props) {
  const { name = 'HP', barPercentage = 0 } = props
  return (
    <div
      className="d-flex flex-row"
      style={{ width: '100%' }}
    >
      <div
        style={{
          width: '20%'
        }}
      >{name}</div>
      <div style={{
        backgroundColor: '#e3e3e3',
        borderRadius: 20,
        width: '75%',
        boxShadow: '0px 1px 1px #d4d4d4',
        height: 20,
      }}>
        <div style={{
          backgroundColor: '#f3701a',
          borderRadius: 20,
          width: `${barPercentage}%`,
          height: 20,
        }}/>
      </div>
    </div>
  )
}

function Happiness(props) {
  const { value = 0 } = props
  const intValue = Math.ceil(value)
  return (
    <div className="cost-wrapper d-flex flex-row">
      {Array.from(Array(intValue)).map((v, index) => {
        return <img key={index} className="cost mr-1" src={CuteImage} width="32px"/>
      })}
    </div>
  )
}

function Name(props) {
  const { data = {} } = props
  return (
    <div
      className="card-name"
      style={{
        fontSize: 28,
        fontFamily: 'Gaegu',
        textTransform: 'uppercase',
      }}
    >{data.name}</div>
  )
}

function Card(props) {
  const {
    data = {},
    style = {},
    buttonText = 'X',
    buttonClick = () => {},
  } = props
  const HP = data.hp && data.hp !== 'None'? parseInt(data.hp) > 100? 100 : parseInt(data.hp) : 0
  const SRT = data.attacks? data.attacks.length*50 : 0
  const WEEK = data.weaknesses? data.weaknesses.length*100 : 0
  const DMGValue = data.attacks? data.attacks.reduce((acc, move) => {
    if (move.damage !== '') return acc + parseInt(move.damage.replace(/\D/g, ""))
    else return acc
  }, 0) : 0
  const DMG = DMGValue > 100? 100 : DMGValue

  const WeekToCalHappy = data.weaknesses? data.weaknesses.length : 0
  const HAPPY = (HP/10 + DMGValue/10 + 10 - WeekToCalHappy)/5

  // console.log(data)
  // console.log(HP)
  // console.log(DMGValue)
  // console.log(WeekToCalHappy)
  // console.log(HAPPY)
  // console.log('================')
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
        ...style,
      }}
    >
      <div className="d-flex align-items-center">
        <img
          src={data.imageUrl}
          height="180px"
          width="129px"
        />
      </div>
      <div className="d-flex flex-column justify-content-between p-3" style={{ width: '100%' }}>
        <Name data={data}/>
        <PowerBar name="HP" barPercentage={HP} />
        <PowerBar name="STR" barPercentage={SRT} />
        <PowerBar name="WEEK" barPercentage={WEEK} />
        <PowerBar name="DMG" barPercentage={DMG} />
        <Happiness value={HAPPY} />
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
        onClick={buttonClick}
      >{buttonText}</div>
    </div>
  )
}

export default Card