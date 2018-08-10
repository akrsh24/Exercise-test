import { observable, action } from 'mobx';


class TradeStore {

    @observable
    trade = {
        commodity: '',
        side: '',
        counterParty: '',
        price: '',
        quantity: '',
        location: '',
    }
    @observable
    trades = [];

    @action
    saveTrade(trade) {
        
    }

   

}

export default TradeStore;