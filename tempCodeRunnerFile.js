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
