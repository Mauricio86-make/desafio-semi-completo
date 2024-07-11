
// 1 PASO ==> VERIFICAR SE O JAVASCRIPT ESTA LINCADO COM HTML COM  UM console.log("funcinando")
//console.log("funcionando")

// 2 PASO ==> LINCAR O BOTÃO COM HTML A TRAVEZ DA --const ConvertButton = document.querySelector(".Convert-Button")--
const ConvertButton = document.querySelector(".Convert-Button")
//nome da variavel    //procurando o html       //id do buton
const currencySelect = document.querySelector(".currency-Select")


// console.log(ConvertButton)
function ConvertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValuetoConvert = document.querySelector(".currency-value-to-convert") //valor real
    const currencyValueConverted = document.querySelector(".currency-value") //outras moedas

    console.log(currencySelect.value)
    const DolarToday = 5.2
    const EuroToday = 6.2
    const LibrasToday = 3.2
    const BitcoinToday = 0.13


    if (currencySelect.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / DolarToday)
    }

    if (currencySelect.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / EuroToday)
    }

    if (currencySelect.value == "Libras") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / LibrasToday)
    }

    if (currencySelect.value == "Bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / BitcoinToday)
    }

    currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function ChangeCurrency() {
    const CurrencyName = document.getElementById("Currency-Name")
    const currencyimage = document.querySelector(".currency-img")

    if (currencySelect.value == "Dolar") {
        CurrencyName.innerHTML = "Dolar americano"
        currencyimage.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "Euro") {
        CurrencyName.innerHTML = "Euro"
        currencyimage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "Libras") {
        CurrencyName.innerHTML = "Libras"
        currencyimage.src = "./assets/libra 1.png"
    }
    if (currencySelect.value == "Bitcoin") {
        CurrencyName.innerHTML = "Bitcoin"
        currencyimage.src = "./assets/bitcoin.png"
    }
    ConvertValues()
}

currencySelect.addEventListener("change", ChangeCurrency)
ConvertButton.addEventListener("click", ConvertValues)