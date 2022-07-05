import { ReactComponent as Logo } from "../../media/jusan_logo.svg";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <a href="https://www.jusaninvest.kz/">
        <Logo className={style.logo}></Logo>
      </a>
      <p>Author: Batyrbek Kantarbayev</p>
      <p>
        <span>
          {" "}
          This is a trial academic web project. For actual information on jusan
          invest please follow this link:&nbsp;&nbsp;
        </span>
        <a className={style.link} href="https://www.jusaninvest.kz/">
          https://www.jusaninvest.kz/
        </a>
      </p>
    </footer>
  );
};

export default Footer;
