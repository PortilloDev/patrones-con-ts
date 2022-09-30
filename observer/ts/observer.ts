interface IObserver<T>{
    refresh(value: T) : void;
}

interface  ISubject<T>{
    observers: IObserver<T>[];
    subscribe(observer: IObserver<T>): void;
    unsubscribe(observer: IObserver<T>): void;
    notify(observer: T): void;
}

class Subject<T> implements ISubject<T>{
    observers: IObserver<T>[];

    constructor(){
        this.observers = [];
    }

    subscribe(observer: IObserver<T>): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: IObserver<T>): void {
        this.observers = this.observers.filter(obs => obs! == observer);
    }

    notify(value: T): void {
        this.observers.forEach(e=>{
            e.refresh(value);
        });
    }
}


class Observer<T> implements IObserver<T>{
    private fn:(value: T) => void;

    constructor(fn: (value: T) => void){
        this.fn = fn;
    }

    refresh(value: T): void {
        this.fn(value);
    }
}

const subject = new Subject<number>();
const obs1 = new Observer<number>((n)=>{
    console.log(`Hello ${n}`);
});

const obs2 = new Observer<number>((n)=>{
    console.log(`Hi ${n}`);
});


subject.subscribe(obs1);
subject.subscribe(obs2);
subject.notify(1.2);
subject.notify(30);

const subjectString = new Subject<string>();
const obsString1 = new Observer<string>((s)=>{
    console.log(`${s.toUpperCase()}`);
});
const obsString2 = new Observer<string>((s)=>{
    console.log(`${s.toLowerCase()}`);
});

subjectString.subscribe(obsString1);
subjectString.subscribe(obsString2);

subjectString.notify('es viernes');
subjectString.notify('No lo se O SI');