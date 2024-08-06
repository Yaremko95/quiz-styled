import { produce } from "immer";
import { useEffect, useMemo, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Answer, Question, QuizState } from "../../recoil/quiz";
import { If } from "../ControlStatements/If";
import { Otherwise, Show, When } from "../ControlStatements/Show";
import { CheckBox } from "../Form/CheckBox";
import { FormControlLabel } from "../Form/FormControlLabel";
import { Radio } from "../Form/Radio";
import TextField from "../Form/TextField";
import { Button } from "../styled";
import { Small, Span } from "../styled/Typography";
import ProgressBar from "./Progress";
import {
  ActionsContainer,
  Img,
  InnerContainer,
  Layout,
  OptionsContainer,
  QuestionContainer,
  Box,
  Title,
} from "./styled";
import { Transition } from "./Transition";

export const SingleQuestion = () => {
  const questions = useLoaderData() as Question[];
  const [state, setState] = useRecoilState(QuizState);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [show, setShow] = useState(true);
  const currentQuestion = questions[state.currentIndex];

  const [selectedOptions, setSelectedOptions] = useState<Answer>(null);

  useEffect(() => {
    setSelectedOptions(state.answers[state.currentIndex] || null);
  }, [state.currentIndex, state.answers]);

  const handleAnswer = () => {
    setShow(false);
    setDirection("right");
    setTimeout(() => {
      setState(
        produce((draft) => {
          if (selectedOptions) {
            draft.answers[state.currentIndex] = selectedOptions;
          }
          if (state.currentIndex < questions.length - 1) {
            draft.currentIndex += 1;
          } else {
            draft.status = "completed";
          }
        })
      );
      setShow(true);
    }, 500);
  };

  const handlePrevious = () => {
    setShow(false);
    setDirection("left");
    setTimeout(() => {
      if (state.currentIndex > 0) {
        setState(
          produce((draft) => {
            draft.currentIndex -= 1;
          })
        );
      }
      setShow(true);
    }, 500);
  };

  const percentage = useMemo(() => {
    const answered = Object.values(state.answers).filter(
      (a) => a && a.length
    ).length;
    return (answered / questions.length) * 100;
  }, [state.answers]);

  return (
    <Layout>
      <QuestionContainer>
        <ProgressBar percentage={percentage} />
        <Box>
          <Transition
            key={state.currentIndex}
            show={show}
            direction={direction}
          >
            <Title>{currentQuestion.text}</Title>
            <InnerContainer>
              <Show>
                <When condition={currentQuestion.type !== "text"}>
                  <OptionsContainer>
                    <Small>
                      {currentQuestion.type === "single_choice"
                        ? "Choose one"
                        : "Choose multiple"}
                    </Small>
                    {currentQuestion.options?.map((option, i) => (
                      <FormControlLabel
                        key={i}
                        checked={((selectedOptions as number[]) || []).includes(
                          i
                        )}
                        control={
                          <Show>
                            <When
                              condition={
                                currentQuestion.type === "single_choice"
                              }
                            >
                              <Radio
                                checked={(
                                  (selectedOptions as number[]) || []
                                ).includes(i)}
                                onChange={() => setSelectedOptions([i])}
                              />
                            </When>
                            <Otherwise>
                              <CheckBox
                                checked={(
                                  (selectedOptions as number[]) || []
                                ).includes(i)}
                                onChange={(e) => {
                                  const updatedOptions = e.target.checked
                                    ? [
                                        ...((selectedOptions as number[]) ||
                                          []),
                                        i,
                                      ]
                                    : (
                                        (selectedOptions as number[]) || []
                                      ).filter((id) => id !== i);
                                  setSelectedOptions(updatedOptions);
                                }}
                              />
                            </Otherwise>
                          </Show>
                        }
                        label={<Span>{option.text}</Span>}
                      />
                    ))}
                  </OptionsContainer>
                </When>
                <Otherwise>
                  <TextField
                    value={(selectedOptions as string) || ""}
                    placeholder="Type your answer here"
                    onChange={(e) => setSelectedOptions(e.target.value)}
                  />
                </Otherwise>
              </Show>
              <If condition={Boolean(currentQuestion.img)}>
                <Img src={currentQuestion.img} />
              </If>
            </InnerContainer>
          </Transition>
        </Box>
        <ActionsContainer>
          <If condition={state.currentIndex > 0}>
            <Button variant="outlined" onClick={handlePrevious}>
              Previous
            </Button>
          </If>
          <Button variant="contained" onClick={handleAnswer}>
            {state.currentIndex < questions.length - 1 ? "Next" : "Finish"}
          </Button>
        </ActionsContainer>
      </QuestionContainer>
    </Layout>
  );
};
