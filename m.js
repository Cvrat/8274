//zadanii na vipolnenie
//vklucaet tolko zadaniya

function l(a){
    if(a === 0 || a<0){
        console.log('error');
    }

    let s = 0;
    let v = 0;

    v = a * a * a ;
    s = 6*(a*a);
    return `s: ${s} ; v : ${v}`;                   //ES6

}

//l(24);
console.log(l(4));
// vipolneno
function sayHello(a) {
     return `Привет, ${a}!`;
    
    

}
console.log(sayHello('kimvar'));
//vipolneno
function returnNeighboringNumbers(a) {
    let b  = a -1;
    let c = a + 1 ;
    console.log(a);
    console.log(b);
    console.log(c);
    return [ a, b, c];
}
console.log(returnNeighboringNumbers(35));            
//vipolneno
function o(a , b){
    let c  =  0 ;
    while(c<b){
        a = a +  a ;
        c++;
        console.log(a);
        console.log(c);
    }
    return (a, b ,c);
}
console.log(o(3,4))
//vipolneno

function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for ( let i = 0 ; i < arr.length;i++){                       // vklucil dlya osmotra koda 
        result[i]= arr[i];
        console.log(i);
        console.log(result);

    }
    return result;
}

firstTask();

function secondTask() {
    

    const data = [5, 10, 'Shopping', 20, 'Homework'];
    
    for (let i = 0 ; i<data.length; i++){
        if(typeof(data[i] === 'number')){
            data[i] = data[i] *2 ; 
        } else if(typeof(data[i] === 'string')){
            data[i] = '${data[i] - done ';

        }
    }
    console.log(data);
      return data;
}
secondTask()
//vipolneno
console.log(45);
// primenene callback a 
function uti(g,k){
    console.log('g');
    k();                      // callback 
}
function yti(){
    console.log('dadasd');
    setTimeout(function(){
        console.log('312');
    },10000)
};
uti('dshadjsa' , yti);
////////////////////////////////////////////////////////////////////////////////////////////////////////
function getTimeFromMinutes(argu) {
    if (typeof(argu) !== 'number' || argu < 0 || !Number.isInteger(argu)) {
        return "Ошибка, проверьте данные";
    }
    let a = argu / 60 ; 
    a  = Math.floor(a);
    let b = argu % 60 ;
    let aStr = '';
    switch (a) {
        case 0: 
            aStr = 'часов';
            break;
        case 1:
            aStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            aStr = 'часа';
            break;
        default:
            aStr = 'часов';
    }
    
    return `Это ${a} ${aStr} и ${b} минут`;
}
console.log(getTimeFromMinutes());
function findMaxNumber(a , b , c , d ) {
    if(typeof(a) !=  'number' ||
       typeof(b) !=  'number' ||
       typeof(c) !=  'number' ||
       typeof(d) !=  'number' ){
        return 0 ;
    }else{
        return Math.max(a, b ,c, d);
        
    }

}
console.log(findMaxNumber(1 , 15, 17 , 19 ))
///////////////////////////////////////////////////////////////////////////////////////////
const  po = {
    a: 1234,
    b: 'dajdaks',   
    c:{
        colors:'FF00FF',
        bg:'000000',
        fmcolor:'00FF254',
    },
    mkui: function(){
        console.log('dajdjd');
    }
                                              
};
po.mkui();
console.log(po.c , po.a  , po.b);
console.log(po['c']['colors'])
//delete po.b;
console.log(po);
let c = 0 ; 
for (let key in po){
    if(typeof(po[key]) === 'object'){
     for(let i in po[key]){
        console.log(`DoGa ${i} gosterir ${po[key][i]} `)
        c++;
     }  
    }else{
        console.log(`DoGa ${key} gosterir ${po[key]} `);
        c++;
    }
  
};  
console.log(c);
console.log(Object.keys(po));
//////////////////////////////////////////////////////////////////////
const plo = prompt('', ' ');
const y = str.split(plo);
y.sort()
console.log(y.join('  ;   '))

const Kjii = [2,4,5,6,7,8,10,15];
Kjii.sort(fahf);
console.log(Kjii);
function    fahf(a,b){
    return a+ b ; 
}

const huii = {
    a:10,
    b:90,
}
const okil = huii ;
huii.a = 15;
console.log(huii)
const obju = {
    a:5,
    b:7,
};

//const copy = obju;
//copy.a = 10;
//console.log(copy);
function copy(mainObj){
    let Objcopy = {};
    let key;
    for(key in mainObj){
        Objcopy[key] = mainObj[key];
        //return mainObj;
    }    
    return mainObj;
}

const numbers = {
    a:2,
    b:1,
    c:{
        m:13,
        n:471
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 11 ;
console.log(newNumbers);
const add =  {
    j:18,
    s : 19,
}

console.log(Object.assign(numbers , add));
console.log(Object.assign({} , add , numbers));
///////////////////////////////////////////
const oldArray = ['a' , 'b' , 'c'];
const newArray = oldArray.slice();
newArray[1] = 'qelyan';
console.log(newArray);
console.log(oldArray);
//////////////////////////////////////////////////////////////
const video = ['https://www.youtube.com'],
      blogs = ['wordpress' , 'live'],
      internet = [...video  , ...blogs  , 'vk '];     //operator spread dobavlyaet elementi massimov 

console.log(internet);
function log(a , b, c ){  
    console.log(a) ;
    console.log(b);
    console.log(c);
    

}
const num = [ 2 , 5, 8, 9, 10 ];
log(...num);
///////////////////////////////////////////////////////
///OOP nasledovanie 
let str = 'some ';
let strOvj = new String(str);
console.log(str);
console.log(strOvj);

const soldier = {
    health :400 , 
    armor : 100 ,
    h: function(){
        console.log('k');
    }
};
const jonh = Object.create(soldier);
//const jonh = {
    //halth :100 
//}

//jonh.__proto__ = soldier           ///ustarevwiy format 
Object.setPrototypeOf( jonh , soldier );
console.log(jonh.armor)
jonh.h();
//////////////////////////////////////////////////////////////////////
