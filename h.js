const numberoffilms = +prompt("skolko filmov vi uje prosmotreli",'');



const personalmovieDB = {
    count : numberoffilms,
    movies : {},
    actors :{},
    genre :[],
    privat:false

};

// primer 
let result = '';
const length = 7;

for (let k = 1 ; k  <  length ; k++){


    for (let g = 0 ; g<k; g++){
        result +='*';
    } 
    
    result += '\n';
}   
console.log(result);
console.log('g');
// циклы 

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}

fifthTask() //5 


function n( ){
    for (let  n = 5 ; n< 11 ; n++){
        console.log(n);
    }
};
    
n()

function  l (){
    for (l = 20 ;  l>=10 ; l--){
        if(l === 13 ) break;
        console.log(l);


    }
}
l()

function f (){
    for(f = 2 ; f <=10 ; f ++){
        if(f % 2 === 0) {
            console.log(f);
        }
    
    }
     
}
f()

function p (){
    let p = 2 ;
    while(p<=16){
        if(p % 2 ===1){
            p++;
            continue;
        }else{
            console.log(p);
        }
        p++
    }
}
p()

first: for(let x  = 0 ; x<3 ; x++){
    console.log(`First levele: ${x}`);
    for (let v = 0 ; v<3 ; v++){
        console.log(`Second level: ${v}`);
    for (let y = 0  ; y < 3 ; y++){
        if(y === 2) continue first;
        console.log(`Third level: ${y}`);

    }
  }
}
for(let i = 0 ; i<2 ; i++){
    const a = prompt('a?', '').trim()
          b = prompt('b?','').trim()
    if(a != null && b != null && a!= '' && b!= '' && a.length < 50  ){
        personalmovieDB.movies[a] = b
        console.log('bitdi');


    }else{
        console.log('refresh');
        i-- ; 

    }

    
};

if(personalmovieDB.count < 10){
    console.log('dashdhas');
}else if(personalmovieDB.count > 10 && personalmovieDB < 30 ){
    console.log('hjsjsj');
}else if(personalmovieDB.count > 30 ){
    console.log('eGGoG');
}else{
    console.log('owibka');
}

console.log(personalmovieDB);
console.log(23);
const plo = prompt('', ' ');
const y = str.split(plo);
y.sort()
console.log(y.join('  ;   '))