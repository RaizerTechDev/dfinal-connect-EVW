import { Link } from "react-router-dom";
import logo from "../../assets/icones/logo.png";
import style from "./Header.module.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function menuMobile() {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuAberto(false);
      }
    }
    window.addEventListener("resize", menuMobile);
    return () => window.removeEventListener("resize", menuMobile);
  }, []);
  return (
    <>
      <header className={style.header}>
        <Link to={"/"}>
          <img
            className={style.imgLogo}
            src={logo}
            alt="Imagem de logo do site connect sendo representada por uma mão segurando um coração, simbolizando apoio"
          />
        </Link>
        {!isMobile && (
          <nav className={style.nav}>
            <Link className={style.Link} to={"/doacao"}>
              Doação
            </Link>
            <Link className={style.Link} to={"/voluntariado"}>
              Voluntariado
            </Link>
            <Link className={style.Link} to={"/mentoria"}>
              Mentoria
            </Link>
            <Link className={style.Link} to={"/eventosEPalestras"}>
              Eventos
            </Link>
          </nav>
        )}
        <img
          className={style.imgUser}
           src="https://media.licdn.com/dms/image/v2/D4E03AQGZrIgB7Q36Ow/profile-displayphoto-scale_400_400/B4EZlOtr7LIIAg-/0/1757962229693?e=1771459200&v=beta&t=jbwUes5lwH5JBobuJLF8lYfY-VH3lBdKO_-k_pawjSE"
                alt="Avatar do usuário"
          onClick={() => setMenuAberto(!menuAberto)}
        />
      </header>
      <nav className={menuAberto ? style.openedNavUser :style.closedNavUser}>
        <Link to={"/usuario"} onClick={() => setMenuAberto(false)}>
          Rafael Raizer
        </Link>
        <Link onClick={() => setMenuAberto(false)}>Meus Voluntariado</Link>
        <Link onClick={() => setMenuAberto(false)}>Configurações de Conta</Link>
        {isMobile && (
          <div>
            <Link to={"/doacao"} onClick={() => setMenuAberto(false)}>
              Doação
            </Link>
            <Link to={"/voluntariado"} onClick={() => setMenuAberto(false)}>
              Voluntariado
            </Link>
            <Link to={"/mentoria"} onClick={() => setMenuAberto(false)}>
              Mentoria
            </Link>
            <Link
              to={"/eventosEPalestras"}
              onClick={() => setMenuAberto(false)}
            >
              Eventos
            </Link>
          </div>
        )}
        <Link onClick={() => setMenuAberto(false)}>Sair</Link>
      </nav>
    </>
  );
};

export default Header;
