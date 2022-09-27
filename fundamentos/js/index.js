
// función primer orden
function sum(a, b){
    return a+b;
}

let resultado = sum(1,3);
console.log(resultado);

const fSum = sum;

let res = fSum(5,6);
console.log(res);

// función de orden superior

function operation (fn, a, b) {
    console.log("se hace algo");
    console.log(fn(a,b));
}

operation(sum, 10, 20);


//arrow function

let fanonimus = function(){
    console.log("función algo")
}

// podemos pasarlo a l siguiente proceso
//si solo tiene una linea se puede ejecutar sin llaves

let fA = () => console.log('algo para ti');

fA();

operation((a,b)=>a*b, 30, 20);

operation((a,b)=>{
    const c = a + b;
    return c*2;
}, 1, 2);


//foreach

const names = ['Iván', "Alicia", "Álvaro", "Sergio"];

names.forEach((name)=> console.log(name));
names.forEach((name)=> console.log(name.toUpperCase()));

//map

const namesUpper = names.map((name)=>name.toUpperCase());
console.log(namesUpper);

//reduce
const numbers = [5,4,7,1,10];

//0 sería el valor inicial de la variable ac
const total = numbers.reduce((ac, number)=>{
    return ac + (number*2);
}, 0);

console.log(total);


//Programación Orientada a objetos
//Clase

class Drink {
    constructor(name) {
        this.name = name;
    }

    info(){
        return "Maravillosa " + this.name;
    }
}

//funcional 
function Drink2(name) {
    this.name= name;
    this.info = function(){
        return "Maravillosa " + this.name;
    }
}

const drink = new  Drink("Cerveza");
console.log(drink.info());

const drink2 = new  Drink2("Cerveza tostada");
console.log(drink2.info());


//herencia

class Beer extends Drink 
{
    constructor(name, alcohol) {
        super(name);
        this.alcohol = alcohol;
    }
    info(){
        return super.info() + ' con ' + this.alcohol + ' grados';
    }
}
const beer = new  Beer("Mahou", 5);
console.log(beer.info());