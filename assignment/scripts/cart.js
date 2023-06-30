console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

const isFull = () => {
    if (basket.length < maxItems) {
        return false;
    } else if (basket.length >= maxItems) {
        return true;
    }
}
// end isFull


const addItem = item => {
    if (isFull(basket) == true) {
        return false
    } else {
        basket.push(item);
        for (each of basket) {
            if (each == item) {
                return true;
            }
        }
    }
}
// end addItem.

console.log(addItem('pencil'));
console.log(addItem('toothbrush'));
console.log('this is what is in my basket:', basket);
console.log(addItem('table'));
console.log(addItem('rolling pin'));
console.log(addItem('oven'));
console.log('this is what is in my basket:', basket);
console.log(addItem('hat'));

const listItems = () => {
    console.log('List of items in my basket:')
    for (let each of basket) {
        console.log(each);
    }
}
// end listItems
listItems();

function removeItem(item) {
    if (basket.indexOf(item) >= 0) {
        return basket.splice(basket.indexOf(item), 1)[0];
     }
    return null;
}

// end removeItem

console.log(`${removeItem('toothbrush')} was REMOVED`);
listItems(basket);

const empty = () => {
    basket.length = 0;
}
// end empty

empty();
console.log(basket);












// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch (e) {
    // Do nothing
}
