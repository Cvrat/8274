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
    return `s: ${s} ; v : ${v}`;

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
