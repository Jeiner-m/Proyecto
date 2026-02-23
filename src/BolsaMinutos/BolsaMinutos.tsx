import React, { useState } from "react";
import style from "./BolsaMinutos.module.css";
import Formulario from "./componentes/Formulario";
import Tabla from "./componentes/Tabla";
import type { Bolsa } from "./Bolsa";
import { usuarios } from "./usuarios";

export default function BolsaMinutos() {
  const [bolsas, setBolsas] = useState<Bolsa[]>([
    {
      cumster_id: 1,
      tipo: "Plan Básico",
      minutos_asignados: 2000,
      periodo_inicio: "2026-02-01T00:00:00",
      periodo_fin: "2026-02-28T23:59:59",
      usuario_id: 1
    },
    {
      cumster_id: 2,
      tipo: "Plan Premium",
      minutos_asignados: 4000,
      periodo_inicio: "2026-02-01T00:00:00",
      periodo_fin: "2026-02-28T23:59:59",
      usuario_id: 2
    }
  ]);

  const [bolsaEditar, setBolsaEditar] = useState<Bolsa | null>(null);

  const addNew = (bolsa: Bolsa) => {
    setBolsas([...bolsas, bolsa]);
  };

  const deleteBag = (cumster_id: number) => {
    setBolsas(bolsas.filter(b => b.cumster_id !== cumster_id));
  };

  const updateBag = (bolsaActualizada: Bolsa) => {
    const nuevas = bolsas.map(b =>
      b.cumster_id === bolsaActualizada.cumster_id ? bolsaActualizada : b
    );
    setBolsas(nuevas);
    setBolsaEditar(null);
  };

  const manejarEditar = (bolsa: Bolsa) => {
    setBolsaEditar(bolsa);
  };

  return (
    <div className={style.container}>
      <div className={style.contendor_todo}>
        <div className={style.contendor_header}>
          <h1>Bolsa de minutos</h1>
        </div>

        <Formulario
          addNew={addNew}
          updateBag={updateBag}
          bolsaEditar={bolsaEditar}
          usuarios={usuarios}
        />

        <Tabla
          bolsas={bolsas}
          deleteBag={deleteBag}
          manejarEditar={manejarEditar}
          usuarios={usuarios}
        />
      </div>
    </div>
  );
}
