import Header from "../components/Headers/Header";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "../components/Sidebar/Sidebar";
import Slider from "../components/slider/Slider";
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      {/* <Slider className={cx("slider")} /> */}
      <div className={cx("container")}>
        <div className="grid">
          <div className={cx("grid-row", "app-content")}>
            <div className={cx("grid-col-2")}>
              <Sidebar />
            </div>

            <div className={cx("grid-col-10")}>
              <div className={cx("filter")}>
                <span className={cx("filter-label")}>Sắp xếp theo</span>
                <button className={cx("btn", "btn-filter")}>Phổ biến</button>
                <button className={cx("btn", "btn-filter", "btn-color")}>
                  Mới nhất
                </button>
                <button className={cx("btn", "btn-filter")}>Bán chạy</button>
              </div>
              <div className={cx("grid-col-2-4")}>
                {/* <div className={cx("content")}>{children}</div> */}
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
