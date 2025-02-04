function findmissingnumber(arr) {
  const N = arr.length + 1;  
  const expectedsum = (N * (N + 1)) / 2; 
  const actualsum = arr.reduce((sum, num) => sum + num, 0);
  
  return expectedsum - actualsum;  
}

const result = findmissingnumber([1, 2, 3, 5, 6]);
console.log(result);
