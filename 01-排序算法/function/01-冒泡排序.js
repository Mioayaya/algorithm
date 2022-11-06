const arr = [3,4,21,22,11,54,2,154,321,21,2321,442];

function bubble(arr,type=0) {
  let _arr = arr;
  for(let i=0;i<_arr.length-1;i++) {
    for(let j=i+1;j<_arr.length;j++) {
      // 升序
      if(type==0) {
        if(_arr[i]>_arr[j]) {
          _arr[i] = _arr[i]+_arr[j];
          _arr[j] = _arr[i]-_arr[j];
          _arr[i] = _arr[i]-_arr[j];
        }
      }
      // 降序
      else {
        if(_arr[i]<_arr[j]) {
          _arr[i] = _arr[i]+_arr[j];
          _arr[j] = _arr[i]-_arr[j];
          _arr[i] = _arr[i]-_arr[j];
        }
      }
    }
  }
  return _arr;
}

// 优化后
function bubbleSort(arr,type=0) {
  let _arr = arr;
  let _isswap = 0;
  for(let i=0;i<_arr.length-1;i++) {
    _isswap = 0;
    console.log(i);
    for(let j=i+1;j<_arr.length;j++) {
      // 升序
      if(type==0) {
        if(_arr[i]>_arr[j]) {
          _arr[i] = _arr[i]+_arr[j];
          _arr[j] = _arr[i]-_arr[j];
          _arr[i] = _arr[i]-_arr[j];
          _isswap = 1;
        }
      }
      // 降序
      else {
        if(_arr[i]<_arr[j]) {
          _arr[i] = _arr[i]+_arr[j];
          _arr[j] = _arr[i]-_arr[j];
          _arr[i] = _arr[i]-_arr[j];
          _isswap = 1;
        }
      }
    }
    console.log(i,_isswap);
    if(_isswap) return _arr;
  }
  return _arr;
}

console.log(bubble(arr,0));
console.log(bubbleSort(arr,0));