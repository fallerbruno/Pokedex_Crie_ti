import { useEffect, useState } from "react";
import { CardTrade } from "./components/CardTrade";
import { TradeContainer } from "./styles";
import { tradeApi, TradeListProps } from "../../api/routes/tradeApi";

export function Trade() {
  const [tradeList, setTradeList] = useState<TradeListProps[]>([]);

  useEffect(() => {
    fetchTradeList();
  }, []);

  const fetchTradeList = async () => {
    const response = await tradeApi.getTradeList();
    setTradeList(response.data);
  };

  return (
    <TradeContainer>
      {tradeList.length > 0 ? (
        <div>
          {tradeList.map((trade) => (
            <CardTrade
              color={trade.type1}
              nature={trade.Nature?.name}
              ability={trade.ability}
              name={trade.User?.name}
              email={trade.User?.email}
              species={trade.species}
              key={trade.id}
              shiny={trade.shiny}
            />
          ))}
        </div>
      ) : (
        <div>
          <span>loading...</span>
        </div>
      )}
    </TradeContainer>
  );
}
