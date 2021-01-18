const app = (() => {
    const _typeSwitch = document.querySelector(".welcome__checkbox");
    const _pricingNumbers = document.querySelectorAll(".pricing__number");

    let _annual = true;


    _typeSwitch.addEventListener("change", (event) => {

        _annual = !_annual;

        if (!_annual) {
            changePricingNumberToMonth();
        } else {
            changePricingNumberToAnnual();
        }
    })

    function changePricingNumberToAnnual() {
        Array.from(_pricingNumbers).forEach((price) => {
            let value = price.textContent + '9';
            value = (Number.parseInt(value, 10) + 1) * 10;
            value -= 1;
            value += ".99";
            price.textContent = value;
        })
    }

    function changePricingNumberToMonth() {
        Array.from(_pricingNumbers).forEach((price) => {
            let value = price.textContent.slice(0, price.textContent.length - 1);
            value = Number.parseInt(value, 10) / 10;
            price.textContent = value + '9';
        })
    }


})();