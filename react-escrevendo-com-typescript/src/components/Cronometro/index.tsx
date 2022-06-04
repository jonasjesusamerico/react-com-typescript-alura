import Botao from "../botao";
import Relogio from "./relogio";
import style from './Cronometro.module.scss'

export function Cronometro() {
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