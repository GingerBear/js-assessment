exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var current = start;
    var timer;
    function c() {
      console.log(current);
      current++;
      if (current <= end) {
        timer = setTimeout(c, 100);
      }
    }
    c();
    return {
      cancel: function() {
        clearTimeout(timer);
      }
    }
  }
};
