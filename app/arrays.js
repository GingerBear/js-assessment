exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
       if (arr[i] === item) {
         return i;
       }
    }
    return -1;
  },

  sum : function(arr) {
    var s = 0;

    for (var i = 0; i < arr.length; i++) {
       s += arr[i];
    }

    return s;
  },

  remove : function(arr, item) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
       if (arr[i] !== item) {
         newArr.push(arr[i]);
       }
    }

    return newArr;
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (item === arr[i]) {
        count++;
      }
    }

    return count;
  },

  duplicates : function(arr) {
    arr = arr.sort();
    var result = [];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i-1] && result.indexOf(arr[i])) {
         result.push(arr[i]);
      }
    }
    return result;
  },

  square : function(arr) {
    return arr.map(function(item) {
       return item * item;
    });
  },

  findAllOccurrences : function(arr, target) {
    var result = [];
    arr.forEach(function(item, i) {
      if (item === target) {
         result.push(i);
      }
    });

    return result;
  }
};
