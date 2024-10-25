import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { natureApi, NatureProps } from "../../../../api/routes/NatureApi";
import { pokemonApi, PokemonType } from "../../../../api/routes/PokedexApi";

interface InputProps {
  name: string;
  sex: "female" | "male";
  shiny: boolean;
  species: string;
  nature_id: number;
  ability: string;
}

export function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputProps>();

  const onSubmit = (data: InputProps) => {
    console.log(data);
  };

  useEffect(() => {
    fetchNatures();
    fetchPokemons();
  }, []);

  const [abilities, setAbility] = useState([
    {
      name: "",
    },
  ]);

  useEffect(() => {
    pokemons.map((specie) => {
      if (specie.name.toLowerCase() === watch("species").toLowerCase()) {
        setAbility([
          {
            name: specie.abilityHidden,
          },
          {
            name: specie.abilityNormal,
          },
        ]);
      }
    });
  }, [watch("species")]);

  const fetchNatures = async () => {
    const response = await natureApi.getNature();
    setNature(response.data);
  };

  const fetchPokemons = async () => {
    const response = await pokemonApi.getPokemon({});
    setPokemons(response.data);
  };

  const [nature, setNature] = useState<NatureProps[]>([]);

  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  return (
    <div>
      <h2>Registre seu pokémon</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nome</label>
          <input placeholder="Nome" {...register("name")} />
        </div>
        <div>
          <label>Nature</label>
          <select {...register("nature_id")}>
            <option disabled selected>
              Selecione uma Nature
            </option>
            {nature.length > 0 &&
              nature.map((nature) => (
                <>
                  <option value={nature.id}>{nature.name}</option>
                </>
              ))}
          </select>
        </div>
        <div>
          <label>Pokémon</label>
          <select {...register("species")}>
            <option disabled selected>
              Selecione um Pokemon
            </option>
            {pokemons.length > 0 &&
              pokemons.map((pokemon) => (
                <>
                  <option value={pokemon.name}>{pokemon.name}</option>
                </>
              ))}
          </select>
        </div>
        <div>
          <label>Habilidades</label>
          <select {...register("ability")}>
            <option disabled selected>
              Selecione uma Habilidade
            </option>
            {abilities.length > 0 &&
              abilities.map((ability) => (
                <>
                  <option value={ability.name}>{ability.name}</option>
                </>
              ))}
          </select>
        </div>
        <div>
          <label>Shiny</label>
          <input type="checkbox" placeholder="Shiny" />
        </div>
      </form>
    </div>
  );
}
