import s from "./InfoCard.module.scss";
import Swal from "sweetalert2";

const InfoCard = (props) => {

  const mostrarAlerta = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });

    Toast.fire({
      icon: "success",
      title: props.alertMessage || "Inscrito com sucesso!",
    });
  };

  return (
    <article className={s.article}>
      <img src={props.img} alt={props.alt} />
      <h2>{props.subtitulo}</h2>
      <p>{props.paragrafo1}</p>
      <p>{props.paragrafo2}</p>
      <button onClick={mostrarAlerta}>
        {props.btn}
      </button>
    </article>
  );
};

export default InfoCard;
