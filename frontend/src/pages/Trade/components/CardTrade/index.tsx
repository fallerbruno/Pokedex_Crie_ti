import { CardTradeContainer, CardTradeContent } from "./styles";

interface CardTradeProps {
  color: string;
  nature: string;
  ability: string;
  email: string;
  name: string;
  species: string;
}

export function CardTrade({
  color,
  nature,
  ability,
  email,
  name,
  species,
}: CardTradeProps) {
  return (
    <CardTradeContainer $color={color}>
      <CardTradeContent>
        <img src="https://pm1.aminoapps.com/6434/a5f7322cdf21c4de36c7e2c48c926e4c433fe5e4_hq.jpg" />
        <div>
          <p>Nature: {nature}</p>
          <p>Ability: {ability}</p>
          <p>Specie: {species}</p>
          <p>User Email: {email}</p>
          <p>User Name: {name}</p>
        </div>
      </CardTradeContent>
      <div>
        <button>ação1</button>
        <button>ação2 </button>
      </div>
    </CardTradeContainer>
  );
}
