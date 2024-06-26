import { routes } from "@/constants/routes";
import Home from "@/pages";
import DocumentCreate from "@/pages/documents/create";
import SingleDocument from "@/pages/documents/single-document";
import Login from "@/pages/login";
import Registration from "@/pages/registration";

export const publicRoutes = [
  {
    path: routes.HOME,
    element: Home,
  },
  {
    path: routes.LOGIN,
    element: Login,
  },
  {
    path: routes.REGISTRATION,
    element: Registration,
  },
  {
    path: routes.SINGLE_DOCUMENT + "/:id",
    element: SingleDocument,
  },
];

export const privateRoutes = [
  {
    path: routes.DOCUMENT_CREATE,
    element: DocumentCreate,
  },
];
