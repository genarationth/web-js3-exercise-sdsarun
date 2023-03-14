const pay = (cost, fee, interest) => {
    let total = (cost + fee) + (cost * interest / 100);
    return total;
}

const totalCost = (costs) => {
    let totalCostThisMonth = 0;
    for (let item of costs) {
        let fee = 3;
        let interest = 0.1;
        totalCostThisMonth += pay(item, fee, interest);
    }
    return totalCostThisMonth;
}

let costs = [100, 200, 300];
console.log(totalCost(costs));