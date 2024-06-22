import React from 'react'
import './modal.css'

const Modal = ({id,header,body,footer,handleclose}) => {
  return (
        <div id ={id || 'Modal'} className='modal'>
        <div className='modal-content'>
            <div className='modal-header'>
            <span className='close' onClick={handleclose}>&times;</span>
            <h2>{header ? header: 'Header'}</h2>
            </div>
            <div className='modal-body'>
{
    body ? body : <p>Body</p>
}
            </div>
            <div className='modal-footer'>
            {
                footer ? footer : <p>Footer</p>
            }
            </div>
            </div>
             
        </div>
  )
}

export default Modal