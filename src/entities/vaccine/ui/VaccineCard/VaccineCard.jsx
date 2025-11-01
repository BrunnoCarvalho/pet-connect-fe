
import style from "../VaccineCard/VaccineCard.module.css";
export default function VaccineCard({ vaccine , onEdit, onDelete}) {
 
  if (!vaccine) {
    return null;
  }

  const formatDate =(dateString)=>{
    if(!dateString) return 'N/A'
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(date)
  }
  return (
    <div className={style.card}>
      <p>
        <strong>Nome:</strong> {vaccine.name}
      </p>
      <p>
        <strong>Data de Aplicação:</strong> {formatDate(vaccine.applicationDate)}
      </p>
      <p>
        <strong>Próxima Dose:</strong> {formatDate(vaccine.nextDosedate)}
      </p>
      <p>
        <strong>Lote:</strong> {vaccine.lot}
      </p>
        <div className={style.buttons}>
        <button onClick={() => onEdit(vaccine.id)}>Editar</button>
        <button onClick={() => onDelete(vaccine.id)}>Excluir</button>
      </div>
    </div>

  );
}