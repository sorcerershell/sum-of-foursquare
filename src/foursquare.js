
export default function foursquare(n) {
  let sum;
  
  for (let i = 0; i<= n; i++) {
    for (let j = 0; j<= n; j++) {
      for (let k = 0; k<= n; k++) {
        for (let l = 0; l<= n; l++) {
          sum = i*i + j*j + k*k + l*l;
          if (sum === n) {
            return [i, j, k, l];
          }
        }
      }
    }
  }
}