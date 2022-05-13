"use strict"
const tokenAddress = "0x2B6D81975B49e9923c8d7997Fd2cf6399a4f856D";
const wbnb = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
const treasuryAddress = '0x65ba99AcF8Baa5D4E68F5eE41588A49A215527FA';
const pairAddress = '0x86F69BE2623CCb19DF08bCF0c31A24c31690aeeE';

const apiKey = "NIRJMYPQHC9S5KA57GFWK4Z86H27CMDN57";
const apiKey2 ="Z5ICY43DWRMVB12642VWQDVVF5IP36FFR6"
const decimals = 18;


const options= { style: 'currency', currency: 'USD' };
const numberFormat = new Intl.NumberFormat('en-US', options);


let reqHeader = new Headers();
// reqHeader.append('Content-Type', 'application/javascript');
// reqHeader.append('Allow-Control-Allow-Origin', '*');

let initObject = {
    method: 'GET',
    headers: reqHeader,
};

Promise.all([
        fetch("https://api.pancakeswap.info/api/v2/tokens/" + tokenAddress, initObject),
        fetch("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress="+ wbnb + "&address=" + pairAddress +"&tag=latest&apikey="+ apiKey, initObject),
        fetch("https://api.bscscan.com/api?module=account&action=balance&address=" + treasuryAddress +"&tag=latest&apikey="+ apiKey, initObject),
        fetch("https://api.pancakeswap.info/api/v2/tokens/" + wbnb, initObject),
        fetch("https://api.bscscan.com/api?module=stats&action=tokenCsupply&contractaddress=" + tokenAddress + "&apikey" + apiKey2, initObject)

    ]).then( function (responses) {
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then( function (data){
        
        let price = data[0].data.price;
        let pairBalance = data[1].result;
        let treasury = data[2].result;
        let bnbPrice = data[3].data.price;
        let supply = data[4].result;

        console.log(bnbPrice);
        console.log(supply);
        console.log(price);
        console.log(pairBalance);
        console.log(treasury);

        
       
        document.getElementById("treasury").innerHTML = numberFormat.format(((treasury / Math.pow(10, decimals)) * bnbPrice).toFixed(2));
            document.getElementById("pool").innerHTML = "$" + ((pairBalance / Math.pow(10, decimals)) * bnbPrice).toFixed(2);
            document.getElementById("dropbtn").innerHTML = "speed " + "$" + Number(price).toFixed(3);
            document.getElementById("price").innerHTML = "$" + Number(price).toFixed(3);
            document.getElementById("price2").innerHTML = "$" + Number(price).toFixed(3);
            document.getElementById("price3").innerHTML = "$" + Number(price).toFixed(3);

            document.getElementById("input_price").innerHTML = "$" + Number(price).toFixed(3);

            document.getElementById("totalsupply").innerHTML = ((supply) / Math.pow(10, decimals)).toFixed(0);
            document.getElementById("circulatingsupply").innerHTML = ((supply) / Math.pow(10, decimals)).toFixed(0);
            document.getElementById("marketcap").innerHTML = numberFormat.format(((price * ((supply) / Math.pow(10, decimals))).toFixed(0)));
    });
