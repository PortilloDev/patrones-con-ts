interface Strategy
{
    login(user: string, password: string): boolean;
}


class LoginContext
{
    private strategy: Strategy;

    constructor(strategy: Strategy)
    {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy)
    {
        this.strategy = strategy;
    }

    login(user: string, password: string) :boolean
    {
        return this.strategy.login(user, password);
    }
}


class LoginDBStrategy implements Strategy
{
    login(user: string, password: string): boolean
    {
        console.log('nos dirigimos a la base de datos')

        if (user === "admin" && password === "123456") {
            return true;
        }

        return true;
    }
}


class LoginServicetrategy implements Strategy
{
    login(user: string, password: string): boolean
    {
        console.log('nos dirigimos a un servicio de autentificación')

        if (user === "admin" && password === "123456") {
            return true;
        }

        return true;
    }
}
const auth = new LoginContext(new LoginDBStrategy());

const response = auth.login('admin', '123456');
auth.setStrategy(new LoginServicetrategy());
auth.login('admin', '123456');
console.log(response);