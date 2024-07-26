import LoginPage from "../pages/auth/LoginPage.vue";
import ForgotPassword from "../pages/auth/ForgotPassword.vue";
import AuthTemplate from "../layouts/AuthTemplate.vue";
import DefaultTemplate from "../layouts/DefaultTemplate.vue";
import HomeAdmin from "../pages/admin/home/HomeAdmin.vue";
import ListUsers from "../pages/users/ListUsers.vue";

export default [
  {
    path: "/",
    component: AuthTemplate,
    children: [
      {
        path: "",
        component: LoginPage,
        name: "auth.login",
      },
      {
        path: "esqueceu-senha",
        component: ForgotPassword,
        name: "forgot.password",
      },
    ],
  },
  {
    path: "/admin",
    component: DefaultTemplate,
    children: [
      {
        path: "",
        component: HomeAdmin,
        name: "admin.home",
      },
      {
        path: "users",
        component: ListUsers,
        name: "users.list",
      },
    ],
  },
];