import { RouteObject } from "react-router-dom";
import MainPage from "../pages/MainPage";

import questions from "../data/questions.json";
import ErrorPage from "../pages/ErrorPage";
import { Question } from "../recoil/quiz";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    loader: () => {
      if (questions.length === 0) {
        throw new Response("NotFound", {
          status: 404,
        });
      }
      return questions as Question[];
    },
  },
];
