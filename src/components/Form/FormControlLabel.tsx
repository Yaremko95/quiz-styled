import { InputProps } from "./CheckBox";
import { LabelText, LabelWrapper } from "./styled";

interface FormControlLabelProps  {
    control: React.ReactElement;
    label: string |React.ReactElement;
   
  }
  
  
  export const FormControlLabel: React.FC<FormControlLabelProps & InputProps> = ({
    control,
    label,
    checked,
    disabled,

  }) => (
    <LabelWrapper checked={checked} disabled={disabled} >
      {control}
      <LabelText>{label}</LabelText>
    </LabelWrapper>
  );
  