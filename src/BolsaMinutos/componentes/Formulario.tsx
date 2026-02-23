import React, { useEffect, useState } from "react";
import type { Bolsa } from "../Bolsa";
import type { Usuario } from "../usuarios";
import style from "../BolsaMinutos.module.css";

interface Props {
  addNew: (bolsa: Bolsa) => void;
  updateBag: (bolsa: Bolsa) => void;
  usuarios: Usuario[];
  bolsaEditar: Bolsa | null;
}

export default function Formulario({
  addNew,
  updateBag,
  bolsaEditar,
  usuarios
}: Props) {
  const [tipo, setTipo] = useState("");
  const [minutos_asignados, setMinutos] = useState("");
  const [periodo_inicio, setInicio] = useState("");
  const [periodo_fin, setFin] = useState("");
  const [usuario_id, setUsuarioId] = useState<number | "">("");

  useEffect(() => {
    if (bolsaEditar) {
      setTipo(bolsaEditar.tipo);
      setMinutos(String(bolsaEditar.minutos_asignados));
      setInicio(bolsaEditar.periodo_inicio);
      setFin(bolsaEditar.periodo_fin);
      setUsuarioId(bolsaEditar.usuario_id);
    }
  }, [bolsaEditar]);

  const crearNueva = (e: React.FormEvent) => {
    e.preventDefault();

    if (!usuario_id) return alert("Seleccione un usuario");

    const bolsa: Bolsa = {
      cumster_id: bolsaEditar
        ? bolsaEditar.cumster_id
        : Date.now(),
      tipo,
      minutos_asignados: Number(minutos_asignados),
      periodo_inicio,
      periodo_fin,
      usuario_id: Number(usuario_id)
    };

    if (bolsaEditar) {
      updateBag(bolsa);
    } else {
      addNew(bolsa);
    }

    setTipo("");
    setMinutos("");
    setInicio("");
    setFin("");
    setUsuarioId("");
  };

  return (
    <div className={style.contenedor_formulario}>
      <form onSubmit={crearNueva}>
        <div>
          <label>Usuario</label>
          <select
            value={usuario_id}
            onChange={e =>
              setUsuarioId(
                e.target.value === ""
                  ? ""
                  : Number(e.target.value)
              )
            }
          >
            <option value="">Seleccione usuario</option>
            {usuarios.map(usuario => (
              <option key={usuario.id} value={usuario.id}>
                {usuario.nombre}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Tipo</label>
          <input
            type="text"
            value={tipo}
            onChange={e => setTipo(e.target.value)}
          />
        </div>

        <div>
          <label>Minutos asignados</label>
          <input
            type="number"
            value={minutos_asignados}
            onChange={e => setMinutos(e.target.value)}
          />
        </div>

        <div>
          <label>Periodo inicio</label>
          <input
            type="datetime-local"
            step="1"
            value={periodo_inicio}
            onChange={e => setInicio(e.target.value)}
          />
        </div>

        <div>
          <label>Periodo fin</label>
          <input
            type="datetime-local"
            step="1"
            value={periodo_fin}
            onChange={e => setFin(e.target.value)}
          />
        </div>

        <button type="submit">
          {bolsaEditar ? "Actualizar" : "Registrar"}
        </button>
      </form>
    </div>
  );
}
