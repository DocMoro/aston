//Базовый
//1
function pattern(n) {
    if (n < 1) {
        return
    }
    const cash = ['1'];
    for (let i = 0; i < n - 1; i++) {
        console.log(cash[i])
        const length = cash[i].length / 2; 
        const str = cash[i].slice(0, Math.ceil(length)) 
        + (i + 2) + cash[i].slice(Math.floor(length));
        cash.push(str);
    }
    cash.reverse().forEach(s => console.log(s))
}