// WAP to create a new array containing only perfect squares from another array 

const nums = [1, 4, 16, 63, 36, 52, 18, 17, 81];
const perfect =[];

for (let i of nums)  {
    if (Number.isInteger(i ** 0.5)) {
    perfect.push(i);
}
}

console.log(perfect);

// WAP to create a new array containing 10% discounted prices from an array of prices
const prices = [100, 210, 280, 399, 550];
const discounted = [];

for (let p of prices) {
    discounted.push(p *0.9);
}

console.log(discounted);

// map

const discountedPrices = prices.map((p) => { return p * 0.9});
console.log(discountedPrices);

const sqrNums = nums.map((n) => { return n**2});

console.log(sqrNums);

const perfectNums = nums.filter((n) => { return Number.isInteger(n ** 0.5)});

console.log(perfectNums);

const prices2 = ['₹423.23', '₹123.452', '₹678.9', '₹999.9982'];
// [423, 123, 678, 999]
const intPrices = prices2.map((p) => { return parseInt(p.slice(1))});
console.log(intPrices);

console.log(parseInt ('₹423.232'.slice(1)));
const names = ['ramu','shamu','pinki','kaliya'];
// Create an array uppercase names



