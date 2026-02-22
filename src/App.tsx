import { useState } from 'react'
import BolsaMinutos from './BolsaMinutos/BolsaMinutos.tsx'
import style from  './BolsaMinutos/BolsaMinutos.module.css'



function App() {


  return (
    <div  className={style.contenedor} >

<BolsaMinutos/>

    </div>
  )
}

export default App
