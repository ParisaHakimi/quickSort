// arr = [1, 5, 23, 4, 32, 78, 0, 32];
function sort(arr) {
  const pivot = Math.round(Math.random() * arr.length);
  //   console.log(pivot);
  let partition = arr.slice(0, pivot);
  //   console.log(partition);

  for (let i = 0; i < pivot; i++) {
    for (let j = pivot; j >= i; j--) {
      let temp;
      if (partition[i] > partition[j]) {
        temp = partition[i];
        partition[i] = partition[j];
        partition[j] = temp;
        // console.log(partition);
        return partition;
      }
    }
  }
}
sort([1, 5, 23, 4, 32, 78, 0, 32]);
