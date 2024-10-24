import { api } from "../axios/axios";

const resource = "/pokemonsRegister";

interface User {
    name: string,
    email: string
}

interface Nature {
    name: string
}

export interface TradeListProps {
    id: number;
    name: string;
    User: User;
    Nature: Nature;
    species: string;
    ability: string;
    type1: string;
    shiny: boolean;
}

const getTradeList = async () => {
    const data = await api.get(`${resource}`);
    console.log(data);
    return data;
};

export const tradeApi = {
    getTradeList,
};
