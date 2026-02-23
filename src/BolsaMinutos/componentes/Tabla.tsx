import React from "react";
import type { Bolsa } from "../Bolsa";
import type { Usuario } from "../usuarios";
import style from "../BolsaMinutos.module.css";

interface Props {
  bolsas: Bolsa[];
  deleteBag: (cumster_id: number) => void;
  manejarEditar: (bolsa: Bolsa) => void;
  usuarios: Usuario[];
}

export default function Tabla({
  bolsas,
  deleteBag,
  manejarEditar,
  usuarios
}: Props) {
  const getUserName = (usuario_id: number) => {
    const usuario = usuarios.find(u => u.id === usuario_id);
    return usuario ? usuario.nombre : "No encontrado";
  };

  return (
    <div className={style.contenedor_tabla}>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Usuario</th>
            <th>Minutos</th>
            <th>Inicio</th>
            <th>Fin</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {bolsas.map(bolsa => (
            <tr key={bolsa.cumster_id}>
              <td>{bolsa.tipo}</td>
              <td>{getUserName(bolsa.usuario_id)}</td>
              <td>{bolsa.minutos_asignados}</td>
              <td>{bolsa.periodo_inicio}</td>
              <td>{bolsa.periodo_fin}</td>
              <td>
                <button
                  onClick={() => deleteBag(bolsa.cumster_id)}
                >
                  Eliminar
                </button>
                <button
                  onClick={() => manejarEditar(bolsa)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
