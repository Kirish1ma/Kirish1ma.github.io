var previewUtil = (function (exports, markdownIt$1) {
  'use strict';

  markdownIt$1 = markdownIt$1 && Object.prototype.hasOwnProperty.call(markdownIt$1, 'default') ? markdownIt$1['default'] : markdownIt$1;

  var helpers = {
    getNextHeadingLevel(currentLevel) {
      return parseInt(currentLevel, 10) + 1;
    },
    getReadingTime(text) {
      const wordsPerMinute = 200;
      const numberOfWords = text.split(/\s/g).length;
      return Math.ceil(numberOfWords / wordsPerMinute);
    }
  };

  // Stolen from https://stackoverflow.com/a/31615643
  const appendSuffix = n => {
    var s = ['th', 'st', 'nd', 'rd'],
      v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  var dateFilter = function dateFilter(value) {
    const dateObject = new Date(value);

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayWithSuffix = appendSuffix(dateObject.getDate());

    return `${dayWithSuffix} ${months[dateObject.getMonth()]} ${dateObject.getFullYear()}`;
  };

  const markdownIt = markdownIt$1({
    html: true,
    breaks: true,
    linkify: true
  });

  var markdownFilter = function markdown(value) {
    return markdownIt.render(value);
  };

  var w3DateFilter = function w3cDate(value) {
    const dateObject = new Date(value);

    return dateObject.toISOString();
  };

  exports.dateFilter = dateFilter;
  exports.helpers = helpers;
  exports.markdownFilter = markdownFilter;
  exports.w3DateFilter = w3DateFilter;

  return exports;

}({}, markdownIt$1));
