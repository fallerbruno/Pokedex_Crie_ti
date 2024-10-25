import { ButtonContainer } from "./styles";

interface ButtonProps {
  variant: string;
  label: string;
  onClick: () => void;
}

export function Button({ variant, label, onClick, ...rest }: ButtonProps) {
  return (
    <div>
      <ButtonContainer variant={variant} onClick={onClick} {...rest}>
        {label}
      </ButtonContainer>
    </div>
  );
}
