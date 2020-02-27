function anagrams(A) {
  for (let i = 0; i < A.length; i++) {
    A[i] = A[i]
      .split("")
      .sort()
      .join("");
  }
  let ans = [];
  for (let i = 0; i < A.length; i++) {
    let temp = [i + 1];
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] == A[j]) {
        temp.push(j + 1);
        A[j] = "";
      }
    }
     if (A[i] != "") {
      ans.push(temp);
      console.log(temp)
     }
  }

  return ans;
}

console.log(anagrams(["cat", "dog", "tac", "god"]));
