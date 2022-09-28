class SaleContext 
{
    constructor(strategy)
    {
        this.strategy = strategy;
    }

    setStrategy(strategy)
    {
        this.strategy = strategy;
    }

    calculate(amount)
    {
        return this.strategy.calculate(amount);
    }
}


class RegularSaleStrategy
{
    constructor(tax)
    {
        this.tax = tax;
    }

    calculate(amount)
    {
        return amount + (amount * this.tax);
    }
}


class DiscountSaleStrategy
{
    constructor(tax, discount)
    {
        this.tax = tax;
        this.discount = discount;
    }

    calculate(amount)
    {
        return amount + (amount * this.tax) - this.discount;
    }
}

class ForeingSaleStrategy
{
    getDollarPrice()
    {
        return 20;
    }

    calculate(amount)
    {
        return amount * this.getDollarPrice();
    }
}





const regularSale = new RegularSaleStrategy(0.16);
const discountSale = new DiscountSaleStrategy(0.16, 5);
const foreingSale = new ForeingSaleStrategy(0.16, 5);

const sale = new SaleContext(regularSale);

console.log(sale.calculate(20));

sale.setStrategy(discountSale);
console.log(sale.calculate(20));

sale.setStrategy(foreingSale);
console.log(sale.calculate(20));
