import { observable, action } from 'mobx';
import addTrade from '../Actions/AddTrade';




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
    saveTrade(newTrade) {
       this.trade=newTrade;
       console.log("new trade is added");
       
    }

   

}

export default TradeStore;