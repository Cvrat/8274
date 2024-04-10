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