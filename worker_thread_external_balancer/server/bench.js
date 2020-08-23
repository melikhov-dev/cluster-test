function fib(n) {
    if (n > 40) {
        throw new TypeError('Fib: N is greater than 40.');
    }
    const s = [1];
    let c = 1;
    let p = 0;
    let i = n - 1;
    while (i) {
        c += p;
        p = c - p;
        s.push(c);
        i -= 1;
    }
    return s;
}

// Check if int is prime
function prime(n) {
    if (n % 1 !== 0) {
        return false;
    } else if (n <= 1) {
        return false;
    } else if (n <= 3) {
        return true;
    } else if (n % 2 === 0) {
        return false;
    }
    const dl = Math.sqrt(n);
    for (let d = 3; d <= dl; d += 2) {
        if (n % d === 0) {
            return false;
        }
    }
    return true;
}

function reversePrime(arr) {
    let l = arr.length - 1;
    const r = [];
    while (l >= 0) {
        if (prime(arr[l])) {
            r.push(arr[l]);
        }
        l -= 1;
    }
    return r;
}

function expand(arr) {
    const ol = arr.length;
    let oc = 0;
    const l = ol * 10;
    const r = [];
    for (let i = 0; i < l; i += 1) {
        r.push(arr[oc] + (i * 100));
        if (oc < ol - 1) {
            oc += 1;
        } else {
            oc = 0;
        }
    }
    return r;
}

function bubble(arr) {
    const r = arr;
    for (let i = 0; i < arr.length; i += 1) {
        for (let y = 0; y < arr.length - 1; y += 1) {
            if (arr[y + 1] < arr[y]) {
                const t = arr[y];
                r[y] = arr[y + 1];
                r[y + 1] = t;
            }
        }
    }
    return r;
}

function toString(arr) {
    const r = [];
    for (let i = 0; i < arr.length; i += 1) {
        r.push(arr[i].toString());
    }
    return r;
}

module.exports = function CPU(times) {
    // Keeps it to a 32 bit int
    const num = 40;
    const r = [];
    for (let c = 0; c < times; c += 1) {
        const d = toString(bubble(expand(reversePrime(fib(num)))));
        r.push(d[d.length - 1]);
    }
    return r;
}
