import React from 'react'

function AddCardModal(props) {
  const {
    isOpen = false,
    onRequestClose = () => {},
  } = props
  return (
    <div
      className="add-card-modal"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        zIndex: 3,
        display: isOpen? 'inline' : 'none',
      }}
      onClick={() => { onRequestClose() }}
    >hello</div>
  )
}

export default AddCardModal