function calculate()
{
    //gather all input
    // ask how many people are paying for the total bill and save it to its own variable
    let peopleEating = parseFloat( prompt("How many people paying for the pizza?") );
    // ask how many pizzas, save the answer to a variable
    let pizzas = parseFloat( prompt("How many pizzas total?") );
    // as well as for toppings
    let toppings = parseFloat( prompt("How many toppings total?") );

    // do some math

    // figure out the cost of pizzas
    let pizzaPay = pizzas * 15.00;
    // total money cost for topping by multiplying amount of pizzas and the price for each pizza
    let toppingsPay = toppings * 1.25;
    // the grand total payment needed for all the food and topping requested
    let beforeSplit = pizzaPay + toppingsPay;
    // how much each person is paying, by diving the grand total by the amount of people paying
    let totalPay = beforeSplit / peopleEating;

    // OUTPUT!
    // the total given, and made sure to show two decimals
    alert(`Total cost of order is ${beforeSplit.toFixed(2)}`);
    // to fixed as well for two decimals
    alert(`How much each person pays is ${totalPay.toFixed(2)}`);

    // all done!
}