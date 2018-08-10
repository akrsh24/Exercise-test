
const trades = [
    {
        idd: 1,
        commodity: 'Iron',
        side: 'Buy',
        price: 50,
        quantity: 100,
        counterparty: 'Akarsh',
        location: 'IND'
    },
    {
        idd: 2,
        commodity: 'Lead',
        side: 'Sell',
        price: 150,
        quantity: 200,
        counterparty: 'Anushka',
        location: 'ARG'
    },
];
// const trade = {};
let nextId = 3;
export const resolvers = {
    Query: {
        trades: () => {
            return trades;
        }

        // trade: (root, { id }) => {
        //     return channels.find(channel => channel.id === id);
        // },
    },

    // Mutation: {
    //     addTrade: (root, { trade }) => {
    //         const newTrade = {
    //             idd: nextId++,
    //             commodity: trade.commodity,
    //             side: trade.side,
    //             counterparty: trade.counterparty,
    //             price: trade.price,
    //             quantity: trade.quantity,
    //             location: trade.location
    //         };
    //         trades.push(newTrade);
    //         return newChannel;
    //     },
    // },
};