class Subject
{
    constructor()
    {
        this.observers = [];
    }

    subscribe(observer){
        this.observers.push(observer);
    }

    unsubscribe(observer){
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data){
        this.observers.forEach(e=>{
            e.refresh(data);
        });
    }
}

class Observer {
    constructor(fn){
        this.fn = fn;
    }

    refresh(data){
        this.fn(data);
    }
}

const s = new Subject();

const observer1 = new Observer(d=> console.log('observador1 ' + d));
const observer2 = new Observer(d=>{
    div1.innerHTML = d;
});

const observer3 = new Observer(d=>{
    div2.innerHTML = d.split("").reverse().join("");
});
s.subscribe(observer1);
s.subscribe(observer2);
s.subscribe(observer3);
s.unsubscribe(observer1);

function change(){
    s.notify(myText.value);
}