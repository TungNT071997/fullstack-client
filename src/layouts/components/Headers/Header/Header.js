import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import HeaderNav from "../HeaderNav";
import Search from "../Search";
const cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx("header")}>
      <div className={cx("grid")}>
        <HeaderNav />
        <Search />
      </div>
    </header>
  );
}

export default Header;
