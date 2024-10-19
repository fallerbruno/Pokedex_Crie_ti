import { useState } from "react";
import { EyeStyled, ModalContainer, ModalContent, XStyled } from "./styles";
import { BadgeType } from "../../enum/badgeEnum";
import { GraficChart } from "../GraficChart";

interface ModalProps {
  color: BadgeType;
}

export function Modal({ color }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <EyeStyled size={24} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <ModalContainer>
          <ModalContent color={color}>
            <XStyled onClick={() => setIsOpen(!isOpen)} />
            <GraficChart />
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
}
