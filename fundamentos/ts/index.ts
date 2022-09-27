console.log("hi tscript");

class Drink
{
    private name: string;

    constructor(name: string)
    {
        this.name = name;
    }

    info():string
    {
        return this.name;
    }
}


const drink = new Drink('Cerveza');
console.log(drink.info());


// interface
interface Product {
    price:number;
    getPrice():string;
}

//herencia

class Beer extends Drink implements Product
{
    private alcohol: number;
    price:number;
   
    constructor(name: string, alcohol:number , price:number)
    {
        super(name);
        this.alcohol = alcohol;
        this.price = price;
    }

    info(): string {
        return super.info() + " " + this.alcohol;
    }

    getPrice():string{
        return "$" + this.price;
    }
}

const beer = new Beer('Cerveza', 5, 3);
console.log(beer.info());

class Snack implements Product{
    price:number;
    name:string;
    constructor(name: string, price:number)
    {
        this.price = price;
        this.name = name;
    }

    getPrice():string{
        return "El precio es $" + this.price;
    }
}

const products: Product[] = [
    new Beer("Coronita", 5, 4),
    new Snack("patatas",1),
    new Beer("Mahou", 5, 3),

];

function getPrices(items: Product[]){
    for(const item of items){
        console.log(item.getPrice());
    }
}

getPrices(products);


