import React, { useContext } from 'react'
import { ApplicationContext } from '../../context/ApplicationContextProvider'

function Header() {
   const {state: {basket}} = useContext(ApplicationContext);
  return (
    <div className='flex items-center justify-between container mx-auto my-4'>
        <span>TACHES</span>
        <span>Panier x {basket.length}</span>
    </div>
  )
}

export default Header