import { useEffect, useState } from "react";
import { CardTradeContainer, CardTradeContent } from "./styles";
import { pokemonApi } from "../../../../api/routes/PokedexApi";

interface CardTradeProps {
  color: string;
  nature: string;
  ability: string;
  email: string;
  name: string;
  species: string;
  shiny: boolean;
}

interface pokemonProps {
  sprite: string;
  spriteShiny: string;
}

export function CardTrade({
  color,
  nature,
  ability,
  email,
  name,
  species,
  shiny,
}: CardTradeProps) {
  const [pokemon, setPokemon] = useState<pokemonProps>();

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    const response = await pokemonApi.getPokemon({ name: species });
    setPokemon(response.data[0]);
  };

  return (
    <CardTradeContainer $color={color}>
      <CardTradeContent>
        <img src={shiny ? pokemon?.spriteShiny : pokemon?.sprite} />
        <div>
          <p>Nature: {nature}</p>
          <p>Ability: {ability}</p>
          <p>Specie: {species}</p>
          <p>Shiny: {shiny ? "Sim" : "Não"}</p>
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
