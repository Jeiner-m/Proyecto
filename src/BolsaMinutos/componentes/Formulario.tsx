import style from '../BolsaMinutos.module.css'

export default function Formulario() {
	
return(
<div className={style.contenedor_formulario}>

<form action="">
   <div className={style.input_label} >
   	<label htmlFor="">Tipo</label>
   <input type="text"  />
   </div>
   <div className={style.input_label} >
   	<label htmlFor="">Minutos asignados</label>
   <input type="text"  />
   </div>
   <div className={style.input_label} >
   	<label htmlFor="">Periodo incio</label>
   <input type="text" />
   </div>
   <div className={style.input_label} >
   	<label htmlFor="">Periodo final</label>
   <input type="text"  />
   </div>

   <div>
   	<button>Registrar</button>
   </div>
</form>

</div>


	)


}