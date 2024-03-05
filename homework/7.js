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

//Продвинутый
//1
class PaginationUtil {
    constructor(arr, size) {
        this.size = size > 1 ? size : 1;
        this.pages = [];
        for (let i = 0; i < Math.ceil(arr.length / this.size); i++) {
            this.pages[i] = arr.slice((i * this.size), (i * this.size) + this.size);
        }
    }

    pageCount() {
        return this.pages.length
    }

    itemCount() {
        const len = this.pages.length;
        if (len === 0) {
            return 0
        }
        let count = (len - 1) * this.size;
        count = count + this.pages[len - 1].length;
        return count
    }

    pageItemCount(iPage) {
        const page = this.pages[iPage];
        if (!page) {
            return -1
        }
        return page.length
    }

    pageIndex(iEl) {
        const iPage = Math.floor(iEl / this.size);
        if (!this.pages[iPage]) {
            return -1
        }
        return iPage
    }
}