

let reward = 0.0002483;
let price = document.getElementById("input_price").innerHTML;
let tokens = document.getElementById("input").value;

function calculateReturns() {
    let balance;
    let input_value = document.getElementById("input").value;
    let format = document.getElementById("input").value;
    let hours = document.getElementById("days").value * 96;
    // let price_input = document.getElementById("input_price").value;
    balance = input_value * Math.pow((1 + reward), hours);
    document.getElementById("balance_apy").innerHTML = balance.toFixed(2);
    document.getElementById("potential_return").innerHTML = "$" + (balance * price).toFixed(2);

    document.getElementById("import_reward").innerHTML = (reward * input_value).toFixed(3);
    document.getElementById("next_reward").innerHTML = (reward * input_value).toFixed(4);
    document.getElementById("roi_5_reward").innerHTML = "$" + ((Number(format) * 1.2656052 * price) / Math.pow(10, 1)).toFixed(2);

    document.getElementById("totalusd").innerHTML = "$ " + (Number(tokens * price) / Math.pow(10, 13)).toFixed(2);
}

document.getElementById('days').addEventListener("input", function(){    
    document.getElementById("time_input").innerHTML = document.getElementById("days").value;
    calculateReturns();
});
calculateReturns();

const skeletons = document.querySelectorAll('.skeleton')
skeletons.forEach((skeleton) => {
    setTimeout(() => {
        skeleton.classList.remove('skeleton')
    }, 2000)
})
