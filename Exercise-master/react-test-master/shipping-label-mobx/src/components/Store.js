import { observable, action } from 'mobx';

export default class UserStore {

    @observable
    details = {
        sender: {
            name: '',
            city: ''
        },
        receiver: {
            name: '',
            city: ''
        },
        transaction: {
            price: '',
            quantity: ''
        },
        next: '',
        previous: ''
    }

    @action
    handleType(type) {
        if (type === 'sender') {
            this.details.next = '/receiver';
            this.details.previous = '/'
        }
        else if (type === 'receiver') {
            this.details.next = '/transaction';
            this.details.previous = '/sender'
        }
        else if (type === 'transaction') {
            this.details.next = '/display';
            this.details.previous = '/receiver'
        }
        else if (type === 'display') {
            this.details.next = '/';
            this.details.previous = '/transaction';

        }
    }
    @action
    handleSenderName(value) {

    }
    @action
    handleName(type, value) {
        if (type === 'sender') {
            this.details.sender.name = value;
            console.log(this.details.sender.name);
        }
        else if (type === 'receiver') {
            this.details.receiver.name = value;
            console.log(this.details.receiver.name);
        }
    }

    @action
    handleCity(type, value) {
        if (type === 'sender') {
            this.details.sender.city = value;
            console.log(this.details.sender.city);
        }
        else if (type === 'receiver') {
            this.details.receiver.city = value;
            console.log(this.details.receiver.city);
        }
    }

    @action
    handleClear(type, e) {
        if (type === 'sender') {
            this.details.sender = {
                name: '',
                city: ''
            }
        }
        else if (type === 'receiver') {
            this.details.receiver = {
                name: '',
                city: ''
            }
        }
        else if (type === 'transaction') {
            this.details.transaction = {
                price: '',
                quantity: ''
            }
        }
    }

    @action
    handlePrice(value) {
        this.details.transaction.price = value
    }

    @action
    handleQuantity(value) {
        this.details.transaction.quantity = value
    }
}
