import { PayloadPriceChange, PayloadSupportedCurrencies, ResponseTags, IFilter } from "../interface"

export interface GlobalStateType {
	dataSupportedCurrencies: PayloadSupportedCurrencies[]
	dataPriceChange: PayloadPriceChange[]
	dataTags: ResponseTags[]
  filter: IFilter
}

// DEFAULT VALUE GLOBAL STATE
export const globalState: GlobalStateType = {
	dataSupportedCurrencies: [],
  dataPriceChange: [],
  dataTags: [],
  filter: {
    search: '',
    sort: [],
    tag: ''
  }
}
