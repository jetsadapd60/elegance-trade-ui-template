import { TradeTyp } from "./enum";

// interface Order {
//     pulity: "" | "";
//     type: "" | "";
//     price: string;
//     weight: string;
//     value: string;
// }

export interface BuySellConfrim {
    tradeType: TradeTyp;
    pulity: "" | "";
    type: "" | "";
    price: string;
    weight: string;
    value: string;
}