/**
 * Created by Abdallah on 6/20/2017.
 */

/*CSS*/
import './style.css'

/* Components */
import {OrdersListContainer} from '../';

/*Modules*/
import React from 'react';
import ScrollArea from "react-scrollbar";

export class Notification extends React.Component {
    render() {
        return (
            <ScrollArea className="notifications-slider" vertical={true} horizontal={false} smoothScrolling={true}>
                <OrdersListContainer/>
            </ScrollArea>
        )
    }
}