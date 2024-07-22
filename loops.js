// for loop
// while loop
//do while loop

for(let i=0;i<10;i++){
    console.log(i);
}

//WAP to print all number divisible by 7 in range of 50 to 100
//WAP to print all number divisible by 5 and 7 in range of 50 to 100
for(let i=50;i<100;i++){
    if(i%7 === 0 ){
console.log(i);
}
}

//for of loop
console.log('--------for of loop--------');
const num =[3,5,8,3,2,1,7,4]
for(let i of num){
    console.log(i);
}


// While loop
console.log('--------while loop--------');
let a=12;
while(a < 24){
    console.log(a);
    a++;
} 


// do while loop
console.log('-------- do while loop--------');
let b=10;
do{
    console.log(b);
    b++;
} while (b < 10);
