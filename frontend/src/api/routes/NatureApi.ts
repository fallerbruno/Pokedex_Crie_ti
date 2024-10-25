import { api } from "../axios/axios";

const resource = "/natures";

export interface NatureProps {
   id: number,
   name: string
}

const getNature = async () => {
    const data = await api.get(`${resource}`);
    console.log(data);
    return data;
};

export const natureApi = {
    getNature,
};
