exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve, reject) {
      resolve(value);
    });
  },

  manipulateRemoteData : function(url) {
    return new Promise(function(resolve, reject) {
      $.get(url, function(data) {
        var result = data.people.map(function(p) {
          return p.name;
        }).sort();
        resolve(result);
      });
    });
  }
};
