const counterValue = {
    value: 0,
    increment() {
        // console.log('inc->', this);
        this.value += 1;
    },
    decrement() {
        // console.log('dec->', this);
        this.value -= 1;
    },
};
const decrementBtn = document.querySelector("#counter > button:nth-child(1)");
const incrementBtn = document.querySelector("#counter > button:nth-child(3)");
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener('click', function () {
    counterValue.decrement();
    console.log(counterValue);
    valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', function () {
    counterValue.increment();
    console.log(counterValue);
    valueEl.textContent = counterValue.value;
});
