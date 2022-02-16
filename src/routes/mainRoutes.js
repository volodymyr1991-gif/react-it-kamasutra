import { lazy } from "react";

 const mainRoutes = [
//   {
//     path: "/",
//     name: "HomePage",
//     exact: true,
//     component: lazy(() =>
//       import(
//         "../components/homePage/HomePage" /* webpackChunkName: "HomePage" */
//       )
//     ),
//   },
  {
    path: "/dialogs",
    name: "Dialogs",
    exact: true,
    component: lazy(() =>
      import(
        "../Components/Dialogs/Dialogs" 
      )
    ),
  },

  {
    path: "/profile",
    name: "Profile",
    exact: true,
    component: lazy(() =>
      import(
        "../Components/Profile/Profile" 
      )
    ),
  },
];

export default mainRoutes