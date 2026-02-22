import {useState, usesEffect} from 'react'
import style from './BolsaMinutos.module.css'

import Formulario from './componentes/Formulario'
import Tabla from './componentes/Tabla'

export default function BolsaMinutos() {
	

return(


<div className={style.container}>
	<div className={style.contendor_todo}>
	<div className={style.contendor_header} >
		<h1>Bolsa de minutos</h1>
		<button className={style.btn_registrar} >Registrar bolsa</button>
	</div>	

		<Formulario/>

		<Tabla/>
		</div>
</div>

	)
}