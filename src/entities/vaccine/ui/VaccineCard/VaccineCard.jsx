
import style from "../VaccineCard/VaccineCard.module.css";
export default function VaccineCard({ vaccine }) {
 
  if (!vaccine) {
    return null;
  }

  return (
    <div className={style.card}>
      <p>
        <strong>Nome:</strong> {vaccine.name}
      </p>
      <p>
        <strong>Data de Aplicação:</strong> {vaccine.applicationDate}
      </p>
      <p>
        <strong>Próxima Dose:</strong> {vaccine.nextDoseDate}
      </p>
      <p>
        <strong>Lote:</strong> {vaccine.lot}
      </p>
        <div className={style.buttons}>
          <button></button>
          <button></button>
        </div>
    </div>

  );
}