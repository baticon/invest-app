export interface IStockProps {
  stocks: {
    currency: string;
    description: string;
    displaySymbol: string;
    figi: string;
    isin: null;
    mic: string;
    shareClassFIGI: string;
    symbol: string;
    symbol2: string;
    type: string;
  }[];
  page: number;
}
