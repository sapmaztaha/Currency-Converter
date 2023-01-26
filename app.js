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

        if(EuroValue.value == "")
        {
            displayMessages("Turuncu Alanı Doldurunuz","danger");
        }

        else
        {
            currencyGenerate("try", response.rates.TRY);
            currencyGenerate("btc", response.rates.BTC);
            currencyGenerate("jpy", response.rates.JPY);
            currencyGenerate("usd", response.rates.USD);
            currencyGenerate("omr", response.rates.OMR);
            currencyGenerate("pyg", response.rates.PYG);
        } 
        
        function currencyGenerate(elementID, currencyType){
            const amount = Number(document.querySelector("#amount").value);
            document.getElementById(elementID).value = amount * currencyType;
        }
    }
}
