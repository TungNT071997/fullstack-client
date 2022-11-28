import classNames from "classnames/bind";
import styles from "./SuggestedItem.module.scss";
const cx = classNames.bind(styles);
function ProductItem() {
  return (
    <li className={cx("item")}>
      <a href="/"> Quần Áo</a>
    </li>
  );
}

export default ProductItem;
