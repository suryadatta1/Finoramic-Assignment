//param A : array of integers
//param B : integer
//return an integer
function threeSumClosest(A, B) {
  A.sort((a, b) => {
    return a - b;
  });
  var res = Number.MAX_VALUE;

  for (i = 0; i < A.length - 2; i++) {
    if (i == 0 || A[i] > A[i - 1]) {
      var left = i + 1;
      var right = A.length - 1;

      while (left < right) {
        if (B === A[i] + A[left] + A[right]) {
          return A[i] + A[left] + A[right];
        }
        if (Math.abs(B - (A[i] + A[left] + A[right])) < Math.abs(B - res)) {
          res = A[i] + A[left] + A[right];

          if (A[i] + A[left] + A[right] < B) {
            left++;
          } else {
            right--;
          }
        } else if (A[i] + A[left] + A[right] < B) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return res;
}
console.log(threeSumClosest([-1, 2, 1, -4],1));
