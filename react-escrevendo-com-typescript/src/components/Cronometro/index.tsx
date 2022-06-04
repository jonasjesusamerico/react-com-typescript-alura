import Botao from "../botao";
import Relogio from "./relogio";
import style from './Cronometro.module.scss'
import { ITarefa } from "../../types/tarefa";
import { useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";

interface Props {
  selecionado: ITarefa | undefined
}

export function Cronometro({ selecionado }: Props) {
  const [tempo, setTempo] = useState<Number>();
  if (selecionado?.tempo) {
    setTempo(tempoParaSegundos(selecionado?.tempo))
  }
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolhe um card e inicie o cronômetro</p>

      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao>Começar!</Botao>
    </div>
  )
}