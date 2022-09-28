//Explicación y ejemplo practico

const data = [
    {
        name: "Mahou",
        country: "Spain",
        info: "Spanish beer",
        img: "https://es.wikipedia.org/wiki/Cerveza#/media/Archivo:Helles_im_Glas-Helles_(pale_beer).jpg"
    },
    {
        name: "Coronita",
        country: "Mexico",
        info: "Mexico beer",
        img: "https://es.wikipedia.org/wiki/Cerveza#/media/Archivo:Amsterdam_-_Beer_House_-_0303.jpg"
    },
    {
        name: "Budwaiser",
        country: "Usa",
        info: "Usa beer",
        img: "https://es.wikipedia.org/wiki/Cerveza#/media/Archivo:Lager_beer_in_glass.jpg"
    }
];

class InfoContext
{
    constructor(strategy, data, element)
    {
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }

    setStrategy(strategy)
    {
        this.strategy = strategy;
    }

    show(){
        this.strategy.show(this.data, this.element);
    }
}

class ListStrategy
{
    show(data, element)
    {
        element.innerHTML = data.reduce((ac, beer)=>{
            return ac +    
                `<div>
                    <h2>${beer.name}</h2
                    <p>${beer.country} </p>
                </div>
                <hr>`;
        }, "");
   
    }
}

class ListWithImageStrategy
{
    show(data, element)
    {
        element.innerHTML = data.reduce((ac, beer)=>{
            return ac +    
                `<div>
                     <h2>${beer.name}</h2
                     <img width="10%" src="${beer.img}">
                </div>
                <hr>`;
        }, "");
   
    }
}

class DetailListStrategy
{
    show(data, element)
    {
        element.innerHTML = data.reduce((ac, beer)=>{
            return ac +    
                `<div>
        
                    <h2>${beer.name}</h2
                    <p>${beer.country} </p>
                    <p>${beer.info} </p>
                
                </div>
                <hr>`;
        }, "");
   
    }
}

const strategy = [
    new ListStrategy(),
    new DetailListStrategy(),
    new ListWithImageStrategy()
];

//content es el id de la etiqueta div en html
const info = new InfoContext(new ListStrategy(), data, content);

info.show();


slcOptions.addEventListener("change", (event)=>{
    const option = event.target.value;
    info.setStrategy(strategy[option]);
    info.show();
});