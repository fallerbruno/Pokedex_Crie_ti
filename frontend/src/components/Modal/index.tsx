import { EyeStyled, ModalContainer, ModalContent, XStyled } from "./styles";
import { BadgeType } from "../../enum/badgeEnum";
import { Button } from "../Button";

interface ModalProps {
  color: BadgeType;
  children: React.ReactNode;
  button?: boolean;
  setIsOpen: (arg0: boolean) => void;
  isOpen: boolean;
  label?: string;
}

export function Modal({
  color,
  children,
  button,
  isOpen,
  setIsOpen,
  label,
}: ModalProps) {
  return (
    <>
      {button ? (
        <Button variant="primary" label={label ?? "Novo"} onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <EyeStyled size={24} onClick={() => setIsOpen(!isOpen)} />
      )}
      {isOpen && (
        <ModalContainer>
          <ModalContent color={color}>
            <XStyled onClick={() => setIsOpen(!isOpen)} />
            {children}
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
}
