//Базовый
//1
function pattern(n) {
    if (n < 1) {
        return
    }
    const arr = [1];
    const cash = ['1'];
    for (let i = 0; i < n - 1; i++) {
        console.log(cash[i]);
        const num = i + 2;
        const str = arr.join('') + num + [...arr].reverse().join('');
        arr.push(num);
        cash.push(str);
    }
    cash.reverse().forEach(s => console.log(s))
}