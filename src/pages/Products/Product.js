import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar, faCheck } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";

const cx = classNames.bind(styles);
function Product() {
  return (
    <div className={cx("product-item")}>
      <div
        className={cx("product-item-img")}
        style={{
          backgroundImage: `url("https://cf.shopee.vn/file/1a32d71426b5299936d59909870e92b6_tn")`,
        }}
      ></div>
      <h4 className={cx("product-item-name")}>
        Bộ Quần Áo Mặc Nhà Thể Thao Nam Mùa Hè Phong Cách Cao Cấp ZERO
      </h4>
      <div className={cx("product-item-price")}>
        <span className={cx("product-item-price-old")}>1.200.000đ</span>
        <span className={cx("product-item-price-current")}>999.000đ</span>
      </div>
      <div className={cx("product-item-action")}>
        <span className={cx("product-item-like")}>
          <FontAwesomeIcon icon={faHeart} />
        </span>
        <div className={cx("product-item-rating")}>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <span className={cx("product-item-sold")}>88 đã bán </span>
      </div>
      <div className={cx("product-item-origin")}>
        <span className={cx("product-item-brand")}>Whoo</span>
        <span className={cx("product-item-origin-name")}>Hàn Quốc</span>
      </div>

      <div className={cx("product-item-favorite")}>
        <FontAwesomeIcon
          icon={faCheck}
          className={cx("product-item-favorite-icon")}
        />
        <span>Yêu Thích</span>
      </div>
      <div className={cx("product-item-sale-off")}>
        <span className={cx("product-item-sale-percent")}>43%</span>
        <span className={cx("product-item-sale-label")}>GIẢM</span>
      </div>
    </div>
  );
}

export default Product;
