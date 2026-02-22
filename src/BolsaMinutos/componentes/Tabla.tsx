import style from '../BolsaMinutos.module.css'

export default function Tabla() {
	return(

   <div className={style.contenedor_tabla}>
   	   
   	  <table>
   	  	<thead>
   	  		<tr>
   	  			<th>Tipo</th>
   	  			<th>Minutos agignados</th>
   	  			<th>Perido inicio</th>
   	  			<th>Periodo fin</th>
   	  		</tr>
   	  	</thead>
   	  	<tbody>
   	  		<tr>
   	  			<td>Plan</td>
   	  			<td>1.0000</td>
   	  			<td>2026-02-01 T00:00:00</td>
   	  			<td>2026-02-28 T23:59:59</td>
   	  		</tr>
   	  	</tbody>
   	  </table>

   </div>
  
 )

}