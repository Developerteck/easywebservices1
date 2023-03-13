import React from 'react'
import './rightnav.css'

const RightNav = () => {
  return (
    <div className='rightNav'>
          <select style={{width:"120px"}}>
           <option value="easy web">EASY WEB</option>
           <option value="Noida">Noida</option>
           <option value="Greater Noida">Greater Noida</option>
          </select>
    </div>
  )
}

export default RightNav;