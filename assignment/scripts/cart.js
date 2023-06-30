console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

// check to see if the basket is full
const isFull = () => basket.length < maxItems ? false : true;
// end isFull

// add an item to the basket
const addItem = item => {
    if (isFull(basket) === true) {
        return false
    } else {
        basket.push(item);
        for (let each of basket) {
            if (each === item) {
                return true;
            }
        }
    }
}
// end addItem.

console.log('Was pencil added?', addItem('pencil'));
console.log('Was toothbrush added?', addItem('toothbrush'));
console.log('this is what is in my basket:', basket);
console.log('Was table added?', addItem('table'));
console.log('Was rolling pin added?', addItem('rolling pin'));
console.log('Was oven added?', addItem('oven'));
console.log('this is what is in my basket:', basket);
console.log('Was hat added?', addItem('hat'));

// log a list of all items in basket
const listItems = () => {
    console.log('List of items in my basket:')
    for (let each of basket) {
        console.log(each);
    }
}
// end listItems

listItems();

// remove an item from basket
const removeItem = item => basket.indexOf(item) >= 0 ? basket.splice(basket.indexOf(item), 1)[0] : null;
// end removeItem

console.log(`${removeItem('toothbrush')} was REMOVED`);
listItems(basket);

// empty the basket
const empty = () => basket.length = 0;
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
