import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./HeaderNav.module.scss";
import config from "../../../../config";

const cx = classNames.bind(styles);
function HeaderNav() {
  return (
    <nav className={cx("header-nav")}>
      <ul className={cx("header-nav-list")}>
        <li className={cx("header-nav-list-item", "header-nav-list-item-sepa")}>
          Vào cửa hàng trên ứng dụng TickID
        </li>
        <li className={cx("header-nav-list-item")}>Kết Nối</li>
      </ul>
      <ul className={cx("header-nav-list")}>
        <li className={cx("header-nav-list-item")}>
          <a href="">Thông Báo</a>
        </li>
        <li className={cx("header-nav-list-item")}>
          <a href="">Trợ Giúp</a>
        </li>
        <Link to={config.routes.sign}>
          <li
            className={cx(
              "header-nav-list-item",
              "header-nav-list-item-bold",
              "header-nav-list-item-sepa"
            )}
          >
            Đăng Ký
          </li>
        </Link>
        <Link to={config.routes.login}>
          <li
            className={cx("header-nav-list-item", "header-nav-list-item-bold")}
          >
            Đăng Nhập
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default HeaderNav;
