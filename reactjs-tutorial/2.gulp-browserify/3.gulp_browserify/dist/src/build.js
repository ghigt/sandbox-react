(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/ghigt/Projects/react/sandbox/reactjs-tutorial/2.gulp-browserify/3.gulp_browserify/src/js/App.js":[function(require,module,exports){
var Parent = require('./Parent');

React.render(React.createElement(Parent, null), document.getElementById('app'));

},{"./Parent":"/Users/ghigt/Projects/react/sandbox/reactjs-tutorial/2.gulp-browserify/3.gulp_browserify/src/js/Parent.js"}],"/Users/ghigt/Projects/react/sandbox/reactjs-tutorial/2.gulp-browserify/3.gulp_browserify/src/js/Child.js":[function(require,module,exports){
var Child = React.createClass({displayName: "Child",
  render: function() {
    return (
      React.createElement("div", null, 
        "and this is the ", React.createElement("b", null, this.props.name), "."
      )
    )
  }
});

module.exports = Child

},{}],"/Users/ghigt/Projects/react/sandbox/reactjs-tutorial/2.gulp-browserify/3.gulp_browserify/src/js/Parent.js":[function(require,module,exports){
var Child = require('./Child');

var Parent = React.createClass({displayName: "Parent",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("div", null, "This is the parent."), 
        React.createElement(Child, {name: "child"})
      )
    )
  }
});

module.exports = Parent;

},{"./Child":"/Users/ghigt/Projects/react/sandbox/reactjs-tutorial/2.gulp-browserify/3.gulp_browserify/src/js/Child.js"}]},{},["/Users/ghigt/Projects/react/sandbox/reactjs-tutorial/2.gulp-browserify/3.gulp_browserify/src/js/App.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZ2hpZ3QvUHJvamVjdHMvcmVhY3Qvc2FuZGJveC9yZWFjdGpzLXR1dG9yaWFsLzIuZ3VscC1icm93c2VyaWZ5LzMuZ3VscF9icm93c2VyaWZ5L3NyYy9qcy9BcHAuanMiLCIvVXNlcnMvZ2hpZ3QvUHJvamVjdHMvcmVhY3Qvc2FuZGJveC9yZWFjdGpzLXR1dG9yaWFsLzIuZ3VscC1icm93c2VyaWZ5LzMuZ3VscF9icm93c2VyaWZ5L3NyYy9qcy9DaGlsZC5qcyIsIi9Vc2Vycy9naGlndC9Qcm9qZWN0cy9yZWFjdC9zYW5kYm94L3JlYWN0anMtdHV0b3JpYWwvMi5ndWxwLWJyb3dzZXJpZnkvMy5ndWxwX2Jyb3dzZXJpZnkvc3JjL2pzL1BhcmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFFakMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxNQUFNLEVBQUEsSUFBQSxDQUFHLENBQUEsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7OztBQ0Z6RCxJQUFJLDJCQUEyQixxQkFBQTtFQUM3QixNQUFNLEVBQUUsV0FBVztJQUNqQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUE7QUFBQSxRQUFBLGtCQUFBLEVBQ2Esb0JBQUEsR0FBRSxFQUFBLElBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQVMsQ0FBQSxFQUFBLEdBQUE7QUFBQSxNQUNwQyxDQUFBO0tBQ1A7R0FDRjtBQUNILENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSzs7O0FDVnRCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzs7QUFFL0IsSUFBSSw0QkFBNEIsc0JBQUE7RUFDOUIsTUFBTSxFQUFFLFVBQVU7SUFDaEI7TUFDRSxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBO1FBQ0gsb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQSxxQkFBeUIsQ0FBQSxFQUFBO1FBQzlCLG9CQUFDLEtBQUssRUFBQSxDQUFBLENBQUMsSUFBQSxFQUFJLENBQUMsT0FBTyxDQUFBLENBQUcsQ0FBQTtNQUNsQixDQUFBO0tBQ1A7R0FDRjtBQUNILENBQUMsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBQYXJlbnQgPSByZXF1aXJlKCcuL1BhcmVudCcpO1xuXG5SZWFjdC5yZW5kZXIoPFBhcmVudCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsInZhciBDaGlsZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgYW5kIHRoaXMgaXMgdGhlIDxiPnt0aGlzLnByb3BzLm5hbWV9PC9iPi5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hpbGRcbiIsInZhciBDaGlsZCA9IHJlcXVpcmUoJy4vQ2hpbGQnKTtcblxudmFyIFBhcmVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlRoaXMgaXMgdGhlIHBhcmVudC48L2Rpdj5cbiAgICAgICAgPENoaWxkIG5hbWU9XCJjaGlsZFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcmVudDtcbiJdfQ==
