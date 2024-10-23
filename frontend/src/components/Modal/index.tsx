import { useState } from "react";
import { EyeStyled, ModalContainer, ModalContent, XStyled } from "./styles";
import { BadgeType } from "../../enum/badgeEnum";

interface ModalProps {
  color: BadgeType;
  children: React.ReactNode;
}

export function Modal({ color, children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <EyeStyled size={24} onClick={() => setIsOpen(!isOpen)} />
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
