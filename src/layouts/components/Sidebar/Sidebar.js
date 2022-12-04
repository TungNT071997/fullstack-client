import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import config from "../../../config";
import SuggestedItem from "../../../components/SuggestedItem/SuggestedItem";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);
function Sidebar() {
  let icon = <FontAwesomeIcon icon={faList} />;
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <SuggestedItem label="Danh Mục Sản Phẩm" icon={icon} />
        <SuggestedItem label="Bộ Lọc Tìm Kiếm" />
      </Menu>
    </aside>
  );
}

export default Sidebar;
