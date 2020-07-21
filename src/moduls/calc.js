const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcCount = document.querySelector('.calc-count'),
        calcDay = document.querySelector('.calc-day'),
        totalValue = document.getElementById('total');
    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value;
        const cquareValue = +calcSquare.value;
        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }
        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }
        if (typeValue && cquareValue) {
            total = price * typeValue * cquareValue * countValue * dayValue;
        }
        totalValue.textContent = total;
    };
    calcBlock.addEventListener('change', e => {
        const target = e.target;
        if (target === calcType || target === calcSquare ||
       target === calcCount || target === calcDay) {
            countSum();
        }
    });
    document.oninput = () => {
        const calcSquare = document.querySelector('.calc-square'),
            calcCount = document.querySelector('.calc-count'),
            calcDay = document.querySelector('.calc-day');
        calcSquare.value = calcSquare.value.replace(/[^\+\d]/g, '');
        calcCount.value = calcCount.value.replace(/[^\+\d]/g, '');
        calcDay.value = calcDay.value.replace(/[^\+\d]/g, '');
    };
};
export default calc;