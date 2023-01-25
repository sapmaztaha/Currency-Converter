// ! https://api.exchangerate.host/latest API adress


function displayMessages(message,type)
{
    const cardBody = document.querySelector(".body");
    const div = document.createElement("div");
    
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);

    EuroValue.style.cssText = "background-color:#FF7100"

    setTimeout
    (
        function ()
        {
            div.remove();
            EuroValue.style.cssText = "background-color:white"
        },
        1200
    )
}

document.querySelector("#change").addEventListener("click",convert);

const EuroValue = document.getElementById("amount")

function convert()
{
    const xrh = new XMLHttpRequest();

    xrh.open("GET","https://api.exchangerate.host/latest");

    xrh.send();

    xrh.onload = function()
    {
        
        const response = JSON.parse(this.responseText)

        const tl  = response.rates.TRY;
        const btc = response.rates.BTC;
        const jpy = response.rates.JPY;
        const usd = response.rates.USD;
        const omr = response.rates.OMR;
        const pyg = response.rates.PYG;

        const amount = Number(document.querySelector("#amount").value);

        if(EuroValue.value == "")
        {
            displayMessages("Turuncu Alanı Doldurunuz","danger");
            
        }
        else
        {
            document.querySelector("#try").value = amount * tl;
            document.querySelector("#btc").value = amount * btc;
            document.querySelector("#jpy").value = amount * jpy;
            document.querySelector("#usd").value = amount * usd;
            document.querySelector("#omr").value = amount * omr;
            document.querySelector("#pyg").value = amount * pyg;

            console.log(response)
        } 
    }
}



