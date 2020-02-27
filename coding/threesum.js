var threeSumClosest = function(A, B) {
  A.sort((a, b) => {
    return a - b;
  });
  let closest = A[0] + A[1] + A[2];
  for (let i = 0; i < A.length - 2; i++) {
    let L = i + 1,
      R = A.length - 1;
    //   console.log(i)

    while (L < R) {
      let sum = A[i] + A[L] + A[R];
      if (Math.abs(B - sum) < Math.abs(B - closest)) {
        closest = sum;
      }
      if (sum > B) {
        R--;
      } else if (sum < B) {
        L++;
      } else {
        return closet;
      }
      
    }
  }
  return closest;
};
console.log(threeSumClosest([-1, 2, 1, -4], 1));
