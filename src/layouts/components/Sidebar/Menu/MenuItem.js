import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);

function MenuItem({ to, title }) {
  return (
    <NavLink className={cx("menu-item")} to={to}>
      <span className={cx("title")}>{title}</span>
    </NavLink>
  );
}

export default MenuItem;
