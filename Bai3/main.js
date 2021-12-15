function sumDigits(n) {
    if (n < 10) return n;
    const sum = n.toString().split('').reduce((acc, e) => acc + Number.parseInt(e), 0);
    return sumDigits(sum);
}

const ans = sumDigits(9875)
console.log(ans)