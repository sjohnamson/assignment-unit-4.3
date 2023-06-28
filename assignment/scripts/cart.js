console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
    basket.push(item);
    for (each of basket) {
        if (each == item) {
            return true;
        }
    }
}
// end addItem.

console.log(addItem('pencil'));
console.log(addItem('toothbrush'));
console.log(addItem('table'));
console.log(addItem('rolling pin'));
console.log(addItem('oven'));
console.log('this is what is in my basket:', basket);

const listItems = (list) => {
    for (each of list) {
        console.log(each);
    }
}
// end listItems

console.log(listItems(basket));

const empty = (list) => {
    list.length = 0;
}
// end empty

empty(basket);
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
} catch(e) {
    // Do nothing
}
