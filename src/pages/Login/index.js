import classNames from "classnames/bind";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);
function Login() {
  return (
    <div className={cx("Wrapper")}>
      <div className={cx("login-box")}>
        <h2>Login</h2>
        <form>
          <div className={cx("user-box")}>
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className={cx("user-box")}>
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
