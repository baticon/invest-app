import style from "./header.module.css";
import { ReactComponent as Logo } from "../../media/jusan_logo.svg";

const Header = (stocks: any) => {
  return (
    <header className={style.header}>
      <a href="https://www.jusaninvest.kz/">
        <Logo className={style.logo}></Logo>
      </a>
      <a href="https://www.jusaninvest.kz/ipo.html">IPO</a>
      <a href="https://www.jusaninvest.kz/tariffs">Тарифы</a>
      <a href="https://www.jusaninvest.kz/ipif">ПИФы</a>
      <a href="https://www.jusaninvest.kz/pension">Пенсионные активы</a>
      <a href="https://www.jusaninvest.kz/academy">Обучение</a>
      <a href="https://www.jusaninvest.kz/junior">Junior</a>
      <a href="https://www.jusaninvest.kz/radar">Radar</a>
      <div>
        <div className={style.user}>Login</div>
        <span>Sing up</span>
      </div>
    </header>
  );
};

export default Header;
