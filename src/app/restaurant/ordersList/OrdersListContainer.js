/**
 * Created by Fujitsu on 6/20/2017.
 */

import {OrdersList} from './OrdersList';

import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {}
};

let mapDispatchToProps = (dispatch) => {
    return {}
};

const OrdersListContainer = connect(mapStateToProps, mapDispatchToProps)(OrdersList);

OrdersListContainer.defaultProps = {
    orders: [
        {
            orderID: 1,
            name: "Abdallah",
            location:"Naji-Al Ali st., Almasyoon Arab Bank Building",
            phoneNumber:"0123456789",
            items: [{
                itemID: 1,
                itemName: "Burger",
                number: 4,
            }, {
                itemID: 2,
                itemName: "Pizza",
                number: 2,
            }, {
                itemID: 3,
                itemName: "Hot Dog",
                number: 1,
            },
            ]
        },
        {
            orderID: 2,
            name: "Ahmad",
            location:"Al-ersal st, Palestine Tower, floor No. 5 apt No. 3",
            phoneNumber:"123456789",
            items: [{
                itemID: 5,
                itemName: "Shawerma",
                number: 4,
            }, {
                itemID: 6,
                itemName: "Pizza",
                number: 3,
            }, {
                itemID: 7,
                itemName: "Chicken Fingers",
                number: 2,
            },
            ]
        },
        {
            orderID: 3,
            name: "Ahmad",
            location:"Al-ersal st, Palestine Tower, floor No. 5 apt No. 3",
            phoneNumber:"123456789",
            items: [{
                itemID: 5,
                itemName: "Shawerma",
                number: 4,
            }, {
                itemID: 6,
                itemName: "Pizza",
                number: 3,
            }, {
                itemID: 7,
                itemName: "Chicken Fingers",
                number: 2,
            },
            ]
        },
        {
            orderID: 4,
            name: "Ahmad",
            location:"Al-ersal st, Palestine Tower, floor No. 5 apt No. 3",
            phoneNumber:"123456789",
            items: [{
                itemID: 5,
                itemName: "Shawerma",
                number: 4,
            }, {
                itemID: 6,
                itemName: "Pizza",
                number: 3,
            }, {
                itemID: 7,
                itemName: "Chicken Fingers",
                number: 2,
            },
            ]
        },
        {
            orderID: 5,
            name: "Ahmad",
            location:"Al-ersal st, Palestine Tower, floor No. 5 apt No. 3",
            phoneNumber:"123456789",
            items: [{
                itemID: 5,
                itemName: "Shawerma",
                number: 4,
            }, {
                itemID: 6,
                itemName: "Pizza",
                number: 3,
            }, {
                itemID: 7,
                itemName: "Chicken Fingers",
                number: 2,
            },
            ]
        },
        {
            orderID: 6,
            name: "Ahmad",
            location:"Al-ersal st, Palestine Tower, floor No. 5 apt No. 3",
            phoneNumber:"123456789",
            items: [{
                itemID: 5,
                itemName: "Shawerma",
                number: 4,
            }, {
                itemID: 6,
                itemName: "Pizza",
                number: 3,
            }, {
                itemID: 7,
                itemName: "Chicken Fingers",
                number: 2,
            },
            ]
        },
        {
            orderID: 7,
            name: "Ahmad",
            location:"Al-ersal st, Palestine Tower, floor No. 5 apt No. 3",
            phoneNumber:"123456789",
            items: [{
                itemID: 5,
                itemName: "Shawerma",
                number: 4,
            }, {
                itemID: 6,
                itemName: "Pizza",
                number: 3,
            }, {
                itemID: 7,
                itemName: "Chicken Fingers",
                number: 2,
            },
            ]
        }

    ]
};

export {OrdersListContainer};