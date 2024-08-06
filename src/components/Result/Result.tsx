import { useLoaderData } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { Question, QuizState } from "../../recoil/quiz";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { H3, Span } from "../styled/Typography";
import { FormControlLabel } from "../Form/FormControlLabel";
import { Otherwise, Show, When } from "../ControlStatements/Show";
import { Radio } from "../Form/Radio";
import { CheckBox } from "../Form/CheckBox";
import { If } from "../ControlStatements/If";
import { MdOutlineClose } from "react-icons/md";
import TextField from "../Form/TextField";

const Title = styled(H3)`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

const Stack = styled.div<{
  spacing?: number;
  flexDirection?: string;
  alignItems?: string;
}>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  gap: ${({ spacing, theme }) => theme.spacing(spacing || 1)};
  align-items: ${({ alignItems }) => alignItems || "start"};
`;
const IconBase = styled.div<{ color: "error" | "success" | "primary" }>`
  color: ${({ theme, color }) => theme[color].main};
  font-size: 24px;
`;

const ResultContainer = styled.div`
  margin: auto;
  padding: ${({ theme }) => theme.spacing(6)};
  width: 80%;
`;
export const Result = () => {
  const questions = useLoaderData() as Question[];
  const [state, setState] = useRecoilState(QuizState);
  return (
    <ResultContainer>
      <Stack spacing={3} flexDirection="column">
        {questions.map((question, i) => {
          return (
            <div style={{ width: "100%" }}>
              <Title>{question.text}</Title>
              <Show>
                <When condition={question.type !== "text"}>
                  <Stack spacing={1} flexDirection="column">
                    {question.options?.map((option, k) => {
                      const answer = state.answers[i] as number[];
                      const checked = answer?.includes(k);

                      const isCorrect = option.isCorrect;

                      return (
                        <Stack spacing={1} alignItems="center">
                          <FormControlLabel
                            disabled={true}
                            control={
                              <Show>
                                <When
                                  condition={question.type === "single_choice"}
                                >
                                  <Radio disabled={true} checked={checked} />
                                </When>
                                <Otherwise>
                                  <CheckBox disabled={true} checked={checked} />
                                </Otherwise>
                              </Show>
                            }
                            label={<Span>{option.text}</Span>}
                          />
                          <If condition={checked || isCorrect}>
                            <IconBase color={isCorrect ? "success" : "error"}>
                              <If condition={isCorrect}>
                                <FaCheck />
                              </If>
                              <If condition={!isCorrect}>
                                <MdOutlineClose />
                              </If>
                            </IconBase>
                          </If>
                        </Stack>
                      );
                    })}
                  </Stack>
                </When>
                <Otherwise>
                  <TextField
                    disabled={true}
                    value={(state.answers[i] as string) || ""}
                  />
                </Otherwise>
              </Show>
            </div>
          );
        })}
      </Stack>
    </ResultContainer>
  );
};
