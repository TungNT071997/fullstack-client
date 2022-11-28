import classNames from "classnames/bind";
import ProductItem from "./ProductItem";
import styles from "./SuggestedItem.module.scss";
const cx = classNames.bind(styles);
function SuggestedItem({ label, icon }) {
  return (
    <div className={cx("wrapper-suggested-item")}>
      <p className={cx("label")}>
        <i>{icon}</i> {label}
      </p>

      <ProductItem />
      <ProductItem />
      <ProductItem />
      <p className={cx("more-btn")}>xem tất cả</p>
    </div>
  );
}

export default SuggestedItem;
