//WAP to check if a number is prime

const n1 = 8;

for(let i = 2; i<n1; i++){
if(n1%i === 0){
    console.log('not prime');
    prime = false;
    break;

}
}

if(prime) console.log('prime');

//WAP to reverse a number

let n2 = 21657;
let reverse = 0;

while(n2>0){
    let d = n2%10;
    reverse = reverse*10 + d;
    n2 = parseInt(n2/10);
}

console.log(reverse);

//WAP to print fibonacci series
let[a,b]=[0,1];
console.log(a);
console.log(b);

for(let i = 0; i<8; i++) {
    let c = a+b;
    console.log(c);
    //a=b;
    //b=c;
    [a,b] =[b,c];
}

