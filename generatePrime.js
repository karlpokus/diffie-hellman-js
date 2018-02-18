// https://gist.github.com/ajace/5882370

const isPrime = n => {
	if ( n % 1 || n < 2 ) return false;

	const q = Math.sqrt(n);
	let i = 2;

	for (i; i <= q; i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}

// return first prime after num
const genPrime = num => {
	const isSafe = num => num > 0 && num < Number.MAX_SAFE_INTEGER;
	let prime;

	while (!prime && isSafe(num)) {
		prime = isPrime(num)? num : null;
		num++;
	}
	return prime;
}

module.exports = genPrime;
