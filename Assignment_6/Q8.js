function gcd(a, b) {
  
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
}


const result = gcd(12, 18);
console.log(result); 
