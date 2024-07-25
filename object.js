const user = {
name :'Akmal',
email :'akmal@gmail.com',
password : 'abc123'
};

console.log(user.email);
console.log(user['nam']);
user.email = 'akmal.ahmad1209@gmail.com';

console.log(user);
console.log(user.address);

user.address = 'Lucknow';
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const brand = 'Samsung';
const model = 'S24';
const price = '105000';
const colors = ['red', 'black', 'Grey', 'white'];

const smartphone = {brand : brand,  model, price, colors };
console.log(smartphone);

const { address} = user;
console.log(address);

console.log(smartphone.price);
console.log(smartphone.colors[1]);

smartphone.colors.push ('blue');
console.log(smartphone.colors);

smartphone.colors[2] = 'moonwhite';
console.log(smartphone);

const smartphoneList = [
    {
        brand: 'Samsung',
        model: 'S24',
        price: 105000,
        colors: ['green','gray']
    },
    {
        brand: 'Realme',
        model: 'Realme12x',
        price: 120000,
        colors: ['green','gray']
    },
    {
        brand: 'Google',
        model: 'Pixel 8',
        price: 56000,
        colors: ['red','blue', 'white']
    },
    {
        brand: 'Apple',
        model: 'Iphone 15',
        price: 125000,
        colors: ['black','white']
    },
    {
        brand: 'Motorola',
        model: 'G8',
        price: 105000,
        colors: ['green','blue']
    },

];


//1. acess the price of apple iphone
//2. acess the last color of google pixel
console.log(smartphoneList[2].price);
console.log(smartphoneList[3].colors.at(-2));
console.log(smartphoneList[4].colors[smartphoneList[3].colors.length-1]);

const myphones = smartphoneList.filter( ( phone ) => { return phone.price<=50000} );
console.log(myphones);

// filter all samsung phones
const query = 's';
// const samsungPhones = smartphoneList.filter( ( phone ) => { return phone.brand.toLowerCase() === query.toLowerCase() });
const samsungPhones = smartphoneList.filter( ( phone ) => { return phone.brand.toLowerCase().includes(query.toLowerCase())} );
console.log(samsungPhones);

// filter all phone with white color

console.log([2, 3, 4].includes(3));









































