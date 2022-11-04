import { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

import BookDetails from "components/BookDetails";
import Main from "components/Main";

type RoutePaths = {
  [key: string]: string;
};

type RouteItem = {
  id: string;
  path: string;
  component: ReactNode;
};

const routePaths: RoutePaths = {
  main: "/",
  bookDetails: "book/:id",
};

const allRoutes: RouteItem[] = [
  {
    id: "MAIN",
    path: routePaths.main,
    component: <Main />,
  },
  {
    id: "BOOKDETAILS",
    path: routePaths.bookDetails,
    component: <BookDetails />,
  },
];

const routes = () => {
  const unknownPath = <h3 className="text-center">Page not found</h3>;

  return (
    <Routes>
      {allRoutes.map((routeItem) => {
        return <Route key={routeItem.id} path={routeItem.path} element={routeItem.component} />;
      })}
      <Route path="*" element={unknownPath} />
    </Routes>
  );
};

export default routes;
