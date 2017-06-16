/**
 * Created by Fujitsu on 6/16/2017.
 */

export function calulateItemsSum(items) {
    let sum = 0;
    for (let i in items) {
        sum += (items[i].price * items[i].number);
    }
    return sum;
}
