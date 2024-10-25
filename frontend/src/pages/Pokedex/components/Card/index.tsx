import { useState } from "react";
import {
  AbilityContainer,
  CardAction,
  CardBody,
  CardContainer,
  CardContent,
  CardContentGrid,
  CardContentHeader,
  CardInfo,
  CardTypes,
  SparkleStyled,
} from "./styles";
import { BadgeType, getBadgeUrl } from "../../../../enum/badgeEnum";
import { Modal } from "../../../../components/Modal";
import { GraficChart } from "../../../../components/GraficChart";

interface CardProps {
  sprite: string;
  name: string;
  type1: BadgeType;
  type2: BadgeType;
  spriteShiny: string;
  hp: number;
  atk: number;
  spatk: number;
  def: number;
  spdef: number;
  speed: number;
  abilityHidden: string;
  abilityNormal: string;
}

export function Card({
  sprite,
  name,
  type1,
  type2,
  spriteShiny,
  hp,
  atk,
  spatk,
  def,
  spdef,
  speed,
  abilityHidden,
  abilityNormal,
}: CardProps) {
  const [isShiny, setIsShiny] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <CardContainer color={type1} $isShiny={isShiny}>
        <CardAction>
          <Modal color={type1} setIsOpen={setIsOpen} isOpen={isOpen}>
            <CardContent>
              <CardContentHeader>
                <span>{name}</span>
              </CardContentHeader>
              <CardContentGrid>
                <div>
                  <span>Version Normal</span>
                  <img src={sprite} />
                </div>
                <div>
                  <span>Version Shiny</span>
                  <img src={spriteShiny} />
                </div>
                <GraficChart
                  atk={atk}
                  def={def}
                  hp={hp}
                  spatk={spatk}
                  spdef={spdef}
                  speed={speed}
                />
                <AbilityContainer>
                  <span>Abilities</span>
                  {abilityNormal && <span>Normal: {abilityNormal}</span>}
                  {abilityHidden && <span>Hidden: {abilityHidden}</span>}
                </AbilityContainer>
              </CardContentGrid>
            </CardContent>
          </Modal>
          <SparkleStyled size={24} onClick={() => setIsShiny(!isShiny)} />
        </CardAction>
        <CardBody>
          <img src={isShiny ? spriteShiny : sprite} />
          <CardInfo>
            <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
            <CardTypes>
              <img src={getBadgeUrl(type1)} />
              {type2 && <img src={getBadgeUrl(type2)} />}
            </CardTypes>
          </CardInfo>
        </CardBody>
      </CardContainer>
    </div>
  );
}
