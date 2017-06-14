/**
 * Created by Fujitsu on 6/7/2017.
 */

/* Components */
import {Cart} from "./Cart";

/* Modules */
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

let CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);
CartContainer.defaultProps = {
    restaurantID: -1,
    restaurantName: "KFC",
    sum: 100,
    delivery: 20,
    total: 120,
    items: [{
        id: 1,
        number: 2,
        price: 10,
        name: "burger",
    },
        {
            id: 2,
            number: 1,
            price: 5,
            name: "wing",
        }
    ]
};
export {CartContainer};
