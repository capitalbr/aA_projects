// Write a function, lucasNumberMemo(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively with memoization.
//
// Examples:
//
// lucasNumberMemo(0)   // => 2
// lucasNumberMemo(1)   // => 1
// lucasNumberMemo(40)  // => 228826127
// lucasNumberMemo(41)  // => 370248451
// lucasNumberMemo(42)  // => 599074578
function lucasNumberMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 0) return 2;
    if (n === 1) return 1;
    memo[n] = lucasNumberMemo(n - 1, memo) + lucasNumberMemo(n - 2, memo);
    // memo[n] = lucasNumberMemo(n - 1, memo) + memo[n-2];
    return memo[n];
}


// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// After you pass the first 3 examples, you'll likely need to memoize your code 
// in order to pass the 4th example in a decent runtime.
//
// Examples:
//  
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100
// function minChange(coins, amount, memo = {}) {
//     if (amount === 0 || coins.length === 0) return 0;
//     let numCurrCoin = Math.floor(amount / coins[coins.length - 1]); 
//     let remainingCoins = coins.slice(0, coins.length - 2);
//     let reducedAmount = amount - (numCurrCoin * coins[coins.length - 1]);
//     let notReducedCall = minChange(remainingCoins, amount, memo)
//     let reducedCall = minChange(remainingCoins, reducedAmount, memo);
//     if (numCurrCoin > 0) {
//         // memo[[remainingCoins, amount]] = minChange(remainingCoins, amount, memo);
//         // memo[[remainingCoins, reducedAmount]] = minChange(remainingCoins, reducedAmount, memo);
//         // if (memo[[remainingCoins, amount]] < numCurrCoin + memo[[remainingCoins, reducedAmount]]) {
//         if (notReducedCall > 0 && notReducedCall < numCurrCoin + reducedCall) {
//             return notReducedCall;
//             // return memo[[remainingCoins, amount]];
//         } else {
//             return numCurrCoin + reducedCall;
//             // return numCurrCoin + memo[[remainingCoins, reducedAmount]];
//         }
//     } else {
//         return notReducedCall;
//     }
// }


// function minChange(coins, amount, memo = {}) {
//     if (coins.length === 0) return 0;
//     let numCurrCoin = Math.floor(amount / coins[coins.length - 1]);
//     let currentCoin = coins[coins.length-1]

//     let val = minChange(coins.slice(0, coins.length -2), amount);
//     if (val === 0) return undefined;
//     for (let i = 1; i < numCurrCoin - 1; i++){
//         let tempVal = i + minChange(coins.slice(0, coins.length - 2), amount - currentCoin * i); //coins[i]
//         if (tempVal && val && tempVal < val) val = tempVal;
//     }
//     return val

// }

function minChange(coins, amount, memo = {}) {
    if (amount === 0) return 0;

    if (amount in memo) return memo[amount];

    let num_coins = []
    coins.forEach(coin => {
        if (coin <= amount) {
            num_coins.push(minChange(coins, amount - coin, memo) + 1);
        }
    });

    memo[amount] = Math.min(...num_coins);
    return memo[amount];
}

module.exports = {
    lucasNumberMemo,
    minChange
};

