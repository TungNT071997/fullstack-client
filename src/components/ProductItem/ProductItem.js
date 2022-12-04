import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./ProductItem.module.scss";
import Image from "../Image";
const cx = classNames.bind(styles);
function ProductItem({ data }) {
  return (
    <Link to={`/product`} className={cx("wrapper")}>
      <img className={cx("avatar")} src={data.image} alt="tungg" />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>{data.name}</span>
        </h4>
        <span className={cx("username")}>{data.name}</span>
      </div>
    </Link>
  );
}

export default ProductItem;
