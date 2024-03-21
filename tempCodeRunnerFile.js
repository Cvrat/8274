const  po = {
    a: 1234,
    b: 'dajdaks',
    c:{
        colors:'FF00FF',
        bg:'000000',
        fmcolor:'00FF254',
    }
                                               //sabah otmetka qoyacam YADDIN CIXMASIN!!!
};
console.log(po.c , po.a  , po.b);
console.log(po['c']['colors'])
//delete po.b;
console.log(po);
for (let key in po){
    if(typeof(po[key] === 'object')){
     for(let i in po[key]){
        console.log(`DoGa ${po.key} gosterir ${po[key][i]} `)
     }
    }else{
        console.log(`DoGa ${key} gosterir ${po[key]} `);
    }