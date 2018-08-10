class Store {
    constructor(initialState) {
        this.state = {
            sname: '',
            scity: '',
            rname: '',
            rcity: ''
        }
    }

    setState(type, state) {
        if (type === 'sender'){
            this.setState({
                sname: state.name,
                scity: state.city
            })
        }
        else if(type==='receiver'){
            this.setState({
                rname:state.name,
                rcity:state.city
            })
        }
    }

    getState() {
        return this.state;
    }
}

const store = new Store([]);
export default store;