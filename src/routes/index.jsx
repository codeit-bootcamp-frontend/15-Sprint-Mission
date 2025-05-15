import mainRoutes from "./public/mainRoutes";
import authRoutes from "./public/authRoutes";
import supportRoutes from "./public/supportRoutes";
import itemRoutes from "./itemRoutes";
import communityRoutes from "./communityRoutes";

const routes = [
  ...mainRoutes,
  ...authRoutes,
  ...supportRoutes,
  ...communityRoutes,
  itemRoutes,
];

export default routes;
