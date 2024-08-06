import { useRecoilValue } from "recoil";
import { QuizState } from "../recoil/quiz";

import { Otherwise, Show, When } from "../components/ControlStatements/Show";
import { SingleQuestion } from "../components/SingleQuestion/SingleQuestion";

import { Result } from "../components/Result/Result";

const MainPage = () => {
  const state = useRecoilValue(QuizState);

  return (
    <Show>
      <When condition={state.status === "in_progress"}>
        <SingleQuestion />
      </When>
      <Otherwise>
        <Result />
      </Otherwise>
    </Show>
  );
};

export default MainPage;
