function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const fibSeq = fibonacci(n - 1);
    const nextNumber = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
    fibSeq.push(nextNumber);
    return fibSeq;
}
