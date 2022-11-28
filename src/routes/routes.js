import config from "../config";

import Home from "../pages/Home/Home";
import Product from "../pages/Products/Product";
import Login from "../pages/Login";
import Sign from "../pages/Sign";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.login, component: Login },
  { path: config.routes.sign, component: Sign },
  { path: config.routes.product, component: Product },
];

export { publicRoutes };
