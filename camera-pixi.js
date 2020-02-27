function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function linear(t) {
  return +t;
}

function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}

function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);

var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}

function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}

function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}

var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}

var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);

var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);



var easing = /*#__PURE__*/Object.freeze({
  __proto__: null,
  easeLinear: linear,
  easeQuad: quadInOut,
  easeQuadIn: quadIn,
  easeQuadOut: quadOut,
  easeQuadInOut: quadInOut,
  easeCubic: cubicInOut,
  easeCubicIn: cubicIn,
  easeCubicOut: cubicOut,
  easeCubicInOut: cubicInOut,
  easePoly: polyInOut,
  easePolyIn: polyIn,
  easePolyOut: polyOut,
  easePolyInOut: polyInOut,
  easeSin: sinInOut,
  easeSinIn: sinIn,
  easeSinOut: sinOut,
  easeSinInOut: sinInOut,
  easeExp: expInOut,
  easeExpIn: expIn,
  easeExpOut: expOut,
  easeExpInOut: expInOut,
  easeCircle: circleInOut,
  easeCircleIn: circleIn,
  easeCircleOut: circleOut,
  easeCircleInOut: circleInOut,
  easeBounce: bounceOut,
  easeBounceIn: bounceIn,
  easeBounceOut: bounceOut,
  easeBounceInOut: bounceInOut,
  easeBack: backInOut,
  easeBackIn: backIn,
  easeBackOut: backOut,
  easeBackInOut: backInOut,
  easeElastic: elasticOut,
  easeElasticIn: elasticIn,
  easeElasticOut: elasticOut,
  easeElasticInOut: elasticInOut
});

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck$1;

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass$1;

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty$1;

var Task =
/*#__PURE__*/
function () {
  /**
   * The method to be called when processing this task.
   * 
   * @property {Function}
   */

  /**
   * Indicates whether this task will only run once before being deleted or not.
   * 
    * @private
    * 
   * @property {boolean}
   */

  /**
   * If true this indicates to Hypergiant that it needs to be deleted on the next pass.
    * 
    * @private
   * 
   * @property {boolean}
   */

  /**
   * The number of times that this task has been called.
    * 
    * @private
   * 
   * @property {number}
   */

  /**
   * Indicates whether this task is currently paused or not.
   * 
   * @property {boolean}
   */

  /**
   * @param {Function} fn The method to attach to this task.
   * @param {boolean} once Indicates whether this task will only run once before being deleted or not.
   */
  function Task(fn, once) {
    classCallCheck(this, Task);

    defineProperty(this, "fn", void 0);

    defineProperty(this, "_once", void 0);

    defineProperty(this, "_delete", false);

    defineProperty(this, "_timesCalled", 0);

    defineProperty(this, "paused", false);

    this.fn = fn;
    this._once = once;
  }
  /**
   * Returns whether the task should run only once or not.
   * 
   * @returns {boolean}
   */


  createClass(Task, [{
    key: "run",

    /**
     * Runs the method associated with this task.
     * 
     * @param {...*} args Any other data that should be passed to this task.
     */
    value: function run() {
      if (this.paused) return;
      this.fn.apply(this, arguments);
      this._timesCalled++;
      if (this._once) this._delete = true;
    }
  }, {
    key: "once",
    get: function get() {
      return this._once;
    }
    /**
     * Returns whether the task should be deleted or not.
     * 
     * @returns {boolean}
     */

  }, {
    key: "delete",
    get: function get() {
      return this._delete;
    }
    /**
     * Returns the number of times that this task has been called.
     * 
     * @returns {number}
     */

  }, {
    key: "timesCalled",
    get: function get() {
      return this._timesCalled;
    }
  }]);

  return Task;
}();

/**
 * Hypergiant is used to create signals that run a task when emitted.
 *
 * One of the biggest advtantages that signals have over native JavaScript events is that they don't rely 
 * on correct typing.
 */

var Hypergiant =
/*#__PURE__*/
function () {
  function Hypergiant() {
    classCallCheck(this, Hypergiant);

    defineProperty(this, "_tasks", new Set());
  }

  createClass(Hypergiant, [{
    key: "add",

    /**
     * Add a new signal.
     * 
     * @param {Function} fn The method that should be called when the signal is dispatched.
     * @param {boolean} [once=false] Indicates whether this signal should only be dispatched once and then deleted.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */
    value: function add(fn) {
      var once = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this._tasks.add(new Task(fn, once));

      return this;
    }
    /**
     * Dispatch this Hypergiant event and run all of the tasks associated
     * with it along with any data passed to it.
     * 
     * @param {...*} args Any other data that should be passed to the tasks associated with this Hypergiant instance.
     */

  }, {
    key: "dispatch",
    value: function dispatch() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._tasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var task = _step.value;
          task.run.apply(task, arguments);
          if (task["delete"]) this._tasks["delete"](task);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    /**
     * Removes a task from this signal by name.
     *
     * @param {Function} task The task to remove.
     *
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "remove",
    value: function remove(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._tasks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var task = _step2.value;
          var taskFnToString = task.fn.toString();

          if (fnToString === taskFnToString) {
            this._tasks["delete"](task);

            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return this;
    }
    /**
     * Removes all tasks from this signal.
     *
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "removeAll",
    value: function removeAll() {
      this._tasks.clear();

      return this;
    }
    /**
     * Pauses a task attached to this signal until it is unpaused.
     * 
     * This means that the paused task will not be called and just be silent until the `enable` method is called
     * on it returning it back to its normal state.
     * 
     * @param {Function} task The task to pause.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "pause",
    value: function pause(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this._tasks[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var task = _step3.value;
          var taskFnToString = task.fn.toString();

          if (!task.paused && fnToString === taskFnToString) {
            task.paused = true;
            break;
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return this;
    }
    /**
     * Resumes a task from a paused state.
     * 
     * @param {Function} task The paused task.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "resume",
    value: function resume(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this._tasks[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var task = _step4.value;
          var taskFnToString = task.fn.toString();

          if (task.paused && fnToString === taskFnToString) {
            task.paused = false;
            break;
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return this;
    }
    /**
     * Makes a task a noop function.
     * 
     * @param {Function} task The task to make noop.
     * 
     * @returns {Hypergiant} Returns this for chaining.
     */

  }, {
    key: "noop",
    value: function noop(fn) {
      var fnToString = fn.toString();
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = this._tasks[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var task = _step5.value;
          var taskFnToString = task.fn.toString();

          if (fnToString === taskFnToString) {
            task.fn = function () {};

            break;
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return this;
    }
  }, {
    key: "tasks",

    /**
     * Returns the tasks created for this signal.
     * 
     * @returns {Set<Task>}
     */
    get: function get() {
      return this._tasks;
    }
    /**
     * Returns the number of tasks currently assigned to this signal.
     * 
     * @returns {number}
     */

  }, {
    key: "numTasks",
    get: function get() {
      return this._tasks.size;
    }
  }]);

  return Hypergiant;
}();

/**
 * A generic object that contains the properties and methods of all effects.
 */

var Effect =
/*#__PURE__*/
function () {
  /**
   * The container that the effect is happening on.
   * 
   * @property {PIXI.Container}
   */

  /**
   * The duration of thie effect.
   * 
   * @private
   * 
   * @property {number}
   * 
   * @default 0
   */

  /**
   * A timestamp of when this effect was started.
   * 
   * @property {DOMHighResTimeStamp}
   * 
   * @default 0;
   */

  /**
   * A timestamp of when this effect was last run.
   * 
   * @property {DOMHighResTimeStamp}
   * 
   * @default 0
   */

  /**
   * A reference to the singal that is dispatched when this effect is finished.
   * 
   * @property {Hypergiant}
   */

  /**
   * Indicates whether requestAnimationFrame is being used or not.
   * 
   * @property {boolean}
   * 
   * @default false
   */

  /**
   * A reference to the requestAnimationFrame id if RAF is being used.
   * 
   * @property {number} 
   */

  /**
   * @param {PIXI.Container} container The container that the effect is happening on.
   */
  function Effect(container) {
    _classCallCheck(this, Effect);

    _defineProperty(this, "container", void 0);

    _defineProperty(this, "duration", 0);

    _defineProperty(this, "started", 0);

    _defineProperty(this, "current", 0);

    _defineProperty(this, "finished", new Hypergiant());

    _defineProperty(this, "useRAF", false);

    _defineProperty(this, "id", void 0);

    this.container = container;
  }
  /**
   * Starts the requestAnimationFrame loop to use this effect if a Ticker is not provided.
   */


  _createClass(Effect, [{
    key: "start",
    value: function start() {
      var _this = this;

      this.useRAF = true;
      this.finished.add(function () {
        return cancelAnimationFrame(_this.id);
      });
      this.update();
    }
    /**
     * Updates the effect frame by frame.
     * 
     * @param {number} [delta] The delta value passed by the game loop.
     */

  }]);

  return Effect;
}();

/**
 * A panning effect that makes the camera focus on a point in the container.
 */

var PanTo =
/*#__PURE__*/
function (_Effect) {
  _inherits(PanTo, _Effect);

  /**
   * The easing function to use.
   * 
   * @private
   * 
   * @property {Function}
   */

  /**
   * The color to fade to.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * A reference to the camera's filter.
   * 
   * @private
   * 
   * @property {PIXI.Sprite}
   */

  /**
   * @param {PIXI.Container} container A reference to the container to apply the fade effect to.
   * @param {PIXI.Sprite} filter A reference to the camera filter used to apply this effect.
   * @param {number} color The hex of the color to fade to.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   * @param {Function} easing The easing function to use.
   */
  function PanTo(container, filter, color, duration, easing) {
    var _this;

    _classCallCheck(this, PanTo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PanTo).call(this, container));

    _defineProperty(_assertThisInitialized(_this), "_easing", void 0);

    _defineProperty(_assertThisInitialized(_this), "_color", void 0);

    _defineProperty(_assertThisInitialized(_this), "_filter", void 0);

    _this._filter = filter;
    _this._color = color;
    _this.duration = duration;
    _this._easing = easing;

    _this._setupBackground();

    return _this;
  }
  /**
   * Updates the status of this effect on a frame by frame basis.
   */


  _createClass(PanTo, [{
    key: "update",
    value: function update() {
      var _this2 = this;

      if (this.criteriaMet()) {
        this._filter.alpha = 1;
        this.finished.dispatch();
        return;
      }

      this.current = performance.now();
      var timeDiffPercentage = this.current / this.duration;

      var percentageThroughAnimation = this._easing(timeDiffPercentage);

      var fadeAmount = 1 * percentageThroughAnimation;
      this._filter.alpha = fadeAmount;
      if (this.useRAF) this.id = requestAnimationFrame(function () {
        return _this2.update();
      });
    }
    /**
     * Checks to see if the fade effect is done or not.
     * 
     * @returns {boolean} Returns true if the fade effect is done or not.
     */

  }, {
    key: "criteriaMet",
    value: function criteriaMet() {
      if (this._filter.alpha >= 0.99) return true;
      return false;
    }
    /**
     * Sets up the sprite that's used for the background.
     * 
     * @private
     */

  }, {
    key: "_setupBackground",
    value: function _setupBackground() {
      this._filter.width = this.container.width;
      this._filter.height = this.container.height;
      this._filter.tint = this._color;
      this._filter.alpha = 0;
      this.container.addChild(this._filter);
    }
  }]);

  return PanTo;
}(Effect);

/**
 * A Shake effect involves shaking the camera at various amounts up to a sepcified intensity.
 */
var Shake =
/*#__PURE__*/
function (_Effect) {
  _inherits(Shake, _Effect);

  /**
   * The intensity of the shake, from 1-10.
   * 
   * @private
   * 
   * @property {number}
   * 
   * @default 5
   */

  /**
   * A reference to the initial pivot of the container.
   * 
   * @private
   * 
   * @property {Vector}
   */

  /**
   * @param {PIXI.Container} container A reference to the container to apply the shake effect to.
   * @param {number} intensity The intensity of the shake, from a scale of 1 to 10.
   * @param {number} duration The duration of the shake effect.
   */
  function Shake(container, intensity, duration) {
    var _this;

    _classCallCheck(this, Shake);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Shake).call(this, container));

    _defineProperty(_assertThisInitialized(_this), "_intensity", 5);

    _defineProperty(_assertThisInitialized(_this), "_initialPivot", void 0);

    _this._intensity = intensity;
    _this.duration = duration;
    _this._initialPivot = {
      x: _this.container.pivot.x,
      y: _this.container.pivot.y
    };
    _this.started = performance.now();
    return _this;
  }
  /**
   * Updates the status of the shake.
   */


  _createClass(Shake, [{
    key: "update",
    value: function update() {
      var _this2 = this;

      this.current = performance.now();

      if (this.criteriaMet()) {
        this.container.pivot.x = this._initialPivot.x;
        this.container.pivot.y = this._initialPivot.y;
        this.finished.dispatch();
        return;
      }

      var dx = Math.random() * this._intensity;

      var dy = Math.random() * this._intensity;

      this.container.pivot.x = dx;
      this.container.pivot.y = dy;
      if (this.useRAF) this.id = requestAnimationFrame(function () {
        return _this2.update();
      });
    }
    /**
     * Checks to see if the shake effect is done.
     * 
     * @returns {boolean} Returns true if the shake effect is done or not.
     */

  }, {
    key: "criteriaMet",
    value: function criteriaMet() {
      if (this.current - this.started >= this.duration) return true;
      return false;
    }
  }]);

  return Shake;
}(Effect);

/**
 * A panning effect that makes the camera focus on a point in the container.
 */
var PanTo$1 =
/*#__PURE__*/
function (_Effect) {
  _inherits(PanTo, _Effect);

  /**
   * The (x, y) coordinate pair to pan to.
   * 
   * @private
   * 
   * @property {Vector}
   */

  /**
   * The difference in coordinates from the current and the desired.
   * 
   * @private
   * 
   * @property {Vector}
   */

  /**
   * Indicates whether the desired x is greater than the current x or not.
   * 
   * @private
   * 
   * @property {boolean}
   * 
   * @default false
   */

  /**
   * Indicates whether the desired y is greater than the current y or not.
   * 
   * @private
   * 
   * @property {boolean}
   * 
   * @default false
   */

  /**
   * @param {PIXI.Container} container A reference to the container to apply the panto effect to.
   * @param {number} x The x coordinate to pan to.
   * @param {number} y The y coordinate to pan to.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   */
  function PanTo(container, x, y, duration) {
    var _this;

    _classCallCheck(this, PanTo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PanTo).call(this, container));

    _defineProperty(_assertThisInitialized(_this), "_coordinates", void 0);

    _defineProperty(_assertThisInitialized(_this), "_difference", void 0);

    _defineProperty(_assertThisInitialized(_this), "_xIsGreater", false);

    _defineProperty(_assertThisInitialized(_this), "_yIsGreater", false);

    _this._coordinates = {
      x: x,
      y: y
    };
    _this.duration = duration;
    if (_this._coordinates.x > _this.container.pivot.x) _this._xIsGreater = true;
    if (_this._coordinates.y > _this.container.pivot.y) _this._yIsGreater = true;
    _this._difference = {
      x: Math.abs(_this._coordinates.x - _this.container.pivot.x),
      y: Math.abs(_this._coordinates.y - _this.container.pivot.y)
    };
    return _this;
  }
  /**
   * Updates the status of this effect on a frame by frame basis.
   */


  _createClass(PanTo, [{
    key: "update",
    value: function update() {
      var _this2 = this;

      if (this.criteriaMet()) {
        this.finished.dispatch();
        return;
      }

      this.current = performance.now();
      var timeDiffPercentage = this.current / this.duration;
      var timeDiffPercentageNegative = (this.duration - this.current) / this.duration;
      var xPanAmount = this._xIsGreater ? this._difference.x * timeDiffPercentage : this._difference.x * timeDiffPercentageNegative;
      var yPanAmount = this._yIsGreater ? this._difference.y * timeDiffPercentage : this._difference.y * timeDiffPercentageNegative;
      this.container.pivot.x = xPanAmount;
      this.container.pivot.y = yPanAmount;
      if (this.useRAF) this.id = requestAnimationFrame(function () {
        return _this2.update();
      });
    }
    /**
     * Checks to see if the panto criteria has been met so that the effect can end.
     * 
     * @returns {boolean} Returns true if the panto effect is finished or false otherwise.
     */

  }, {
    key: "criteriaMet",
    value: function criteriaMet() {
      if (this.container.pivot.x > this._coordinates.x - 5 && this.container.pivot.x < this._coordinates.x + 5 && this.container.pivot.y > this._coordinates.y - 5 && this.container.pivot.y < this._coordinates.x + 5) return true;
      return false;
    }
  }]);

  return PanTo;
}(Effect);

/**
 * A zooming effect that involves the camera zooming in to a particular point on the container.
 */
var ZoomTo =
/*#__PURE__*/
function (_Effect) {
  _inherits(ZoomTo, _Effect);

  /**
   * The zoom level to zoom to with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
   * 
   * @private
   * 
   * @property {Vector}
   */

  /**
   * A reference to the easing function to use for this effect.
   * 
   * @private
   * 
   * @property {Function}
   */

  /**
   * A reference to the initial zoom level.
   * 
   * @private
   * 
   * @property {Vector}
   */

  /**
   * Indicates whether the desired x zoom level is greater than the current zoom level or not.
   * 
   * @private
   * 
   * @property {boolean}
   */

  /**
   * Indicates whether the desired y zoom level is greater than the current zoom level or not.
   * 
   * @private
   * 
   * @property {boolean}
   */

  /**
   * @param {PIXI.Container} container A reference to the container to apply the zoomto effect to.
   * @param {number} xZoomLevel The zoom level to zoom horizontally with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
   * @param {number} yZoomLevel The zoom level to zoom vertically with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
   * @param {number} duration The amount of time, in milliseconds, that the effect should take.
   * @param {Function} easing The easing function that should be used.
   */
  function ZoomTo(container, xZoomLevel, yZoomLevel, duration, easing) {
    var _this;

    _classCallCheck(this, ZoomTo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ZoomTo).call(this, container));

    _defineProperty(_assertThisInitialized(_this), "_desiredZoomLevel", void 0);

    _defineProperty(_assertThisInitialized(_this), "_easing", void 0);

    _defineProperty(_assertThisInitialized(_this), "_initialZoomLevel", void 0);

    _defineProperty(_assertThisInitialized(_this), "_xIsGreater", false);

    _defineProperty(_assertThisInitialized(_this), "_yIsGreater", false);

    _this._desiredZoomLevel = {
      x: xZoomLevel,
      y: yZoomLevel
    };
    _this.duration = duration;
    _this._easing = easing;
    _this._initialZoomLevel = {
      x: _this.container.scale.x,
      y: _this.container.scale.y
    };
    if (_this._desiredZoomLevel.x > _this._initialZoomLevel.x) _this._xIsGreater = true;
    if (_this._desiredZoomLevel.y > _this._initialZoomLevel.y) _this._yIsGreater = true;
    return _this;
  }
  /**
   * Updates the status of this effect on a frame by frame basis.
   */


  _createClass(ZoomTo, [{
    key: "update",
    value: function update() {
      var _this2 = this;

      if (this.criteriaMet() || this.current > this.duration) {
        this.finished.dispatch();
        return;
      }

      this.current = performance.now();
      var timeDiffPercentage = this.current / this.duration;

      var percentageThroughAnimation = this._easing(timeDiffPercentage);

      var xZoomAmount = this._desiredZoomLevel.x * percentageThroughAnimation;
      var yZoomAmount = this._desiredZoomLevel.y * percentageThroughAnimation;
      this.container.scale.x = this._xIsGreater ? this._initialZoomLevel.x + xZoomAmount / 2 : this._initialZoomLevel.x - xZoomAmount;
      this.container.scale.y = this._yIsGreater ? this._initialZoomLevel.y + yZoomAmount / 2 : this._initialZoomLevel.y - yZoomAmount;
      if (this.useRAF) this.id = requestAnimationFrame(function () {
        return _this2.update();
      });
    }
    /**
     * Checks to see if the container's current zoom level is very close to the desired zoom level.
     * 
     * We can't use container zoom == desired zoom because with the game loop we might miss that exact moment so we check a very small window.
     * 
     * @private
     * 
     * @returns {boolean} Returns true if the zoom criteria is met or false otherwise.
     */

  }, {
    key: "criteriaMet",
    value: function criteriaMet() {
      if (this.container.scale.x > this._desiredZoomLevel.x - 0.01 && this.container.scale.x < this._desiredZoomLevel.x + 0.01 && this.container.scale.y > this._desiredZoomLevel.y - 0.01 && this.container.scale.y < this._desiredZoomLevel.y + 0.01) return true;
      return false;
    }
  }]);

  return ZoomTo;
}(Effect);

/**
 * Camera that can be applied to a game/animation made with pixijs.
 */
var Camera =
/*#__PURE__*/
function () {
  /**
   * The container this camera is focusing on.
   *
   * @private
   *
   * @property {PIXI.Container}
   */

  /**
   * A reference to the options passed to camera pixi on initialization.
   * 
   * @private
   * 
   * @private {Options}
   */

  /**
   * A reference to the PIXI Ticker, if it's being used.
   * 
   * @private
   * 
   * @property {PIXI.Ticker}
   */

  /**
   * A reference to the PIXI Sprite to use for applying certain effects.
   * 
   * @private
   * 
   * @property {PIXI.Sprite}
   */

  /**
   * @param {PIXI.Container} container The container this camera is focusing on.
   * @param {PIXI.Ticker} options A reference to the PIXI Ticker, if it's being used.
   */
  function Camera(container, options) {
    _classCallCheck(this, Camera);

    _defineProperty(this, "_container", void 0);

    _defineProperty(this, "_options", void 0);

    _defineProperty(this, "_ticker", void 0);

    _defineProperty(this, "_filter", void 0);

    this._container = container;
    this._options = options;
    if (this._options.ticker) this._ticker = this._options.ticker;
    if (this._options.sprite && this._options.texture) this._filter = new this._options.sprite(this._options.texture.WHITE);
  }
  /**
   * Creates a new shake effect that can be used.
   * 
   * @param {number} [intensity=5] The intensity of the shake, from a scale of 1 to 10.
   * @param {number} [duration=Infinity] The duration of the shake effect.
   */


  _createClass(Camera, [{
    key: "shake",
    value: function shake() {
      var intensity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
      var shake = new Shake(this._container, intensity, duration);

      this._addToTicker(shake);
    }
    /**
     * Zooms in or out to a specified area.
     * 
     * @param {number} xZoomLevel The zoom level to zoom horizontally with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
     * @param {number} yZoomLevel The zoom level to zoom vertically with values larger than 1 being zoomed in and values smaller than 1 being zoomed out.
     * @param {number} duration The amount of time, in milliseconds, that the effect should take.
     * @param {Function} [easing=easeLinear] The easing function that should be used.
     */

  }, {
    key: "zoomTo",
    value: function zoomTo(xZoomLevel, yZoomLevel, duration) {
      var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : linear;
      var zoomTo = new ZoomTo(this._container, xZoomLevel, yZoomLevel, duration, easing);

      this._addToTicker(zoomTo);
    }
    /**
     * Pans to a specific coordinate.
     * 
     * @param {number} x The x coordinate to pan to.
     * @param {number} y The y coordinate to pan to.
     * @param {number} duration The amount of time, in milliseconds, that the effect should take.
     */

  }, {
    key: "panTo",
    value: function panTo(x, y, duration) {
      var panTo = new PanTo$1(this._container, x, y, duration);

      this._addToTicker(panTo);
    }
    /**
     * Fades in or out.
     * 
     * @param {number} color The hex code of the color to fade in or out of.
     * @param {number} duration The amount of time until the fade completes.
     * @param {number} [opacity=100] The percent to fade to. 100% is fully faded and 0% fully visible.
     * @param {Function} [easing=easeLinear] The easing function that should be used.
     */

  }, {
    key: "fade",
    value: function fade(color, duration) {
      var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : linear;
      if (!this._optionalPackagesExist()) return;
      var fade = new PanTo(this._container, this._filter, color, duration, easing);

      this._addToTicker(fade);
    }
    /**
     * Adds an effect to the PIXI Ticker if it's being used and removes it when necessary.
     * 
     * @private
     * 
     * @param {Effect} effect The effect to add to the Ticker.
     */

  }, {
    key: "_addToTicker",
    value: function _addToTicker(effect) {
      var _this = this;

      var effectBound = effect.update.bind(effect);

      if (this._ticker) {
        var _this$_ticker2;

        effect.finished.add(function () {
          var _this$_ticker;

          return (_this$_ticker = _this._ticker) === null || _this$_ticker === void 0 ? void 0 : _this$_ticker.remove(effectBound);
        });
        (_this$_ticker2 = this._ticker) === null || _this$_ticker2 === void 0 ? void 0 : _this$_ticker2.add(effectBound);
      } else effect.start();
    }
    /**
     * Checks to see if the sprite and texture options are present for effects that use them.
     * 
     * @private
     * 
     * @returns {boolean} Returns true if the optional packages are present or false otherwise with an error.
     */

  }, {
    key: "_optionalPackagesExist",
    value: function _optionalPackagesExist() {
      if (!this._filter) {
        console.warn('Skipping effect, PIXI.Sprite and PIXI.Texture object must be provided to use this effect.');
        return false;
      }

      return true;
    }
  }]);

  return Camera;
}();

/**
 * A reference to the options passed to camera-pixi on initialization.
 */
var Options =
/**
 * A reference to the PIXI.Sprite object.
 * 
 * This is necessary for some effects such as fade effects.
 * 
 * @property {PIXI.Sprite}
 */

/**
 * A reference to the PIXI.Texture object.
 * 
 * This is used along with the PIXI.Sprite option to set textures for some of the effects.
 * 
 * @property {PIXI.Texture}
 */

/**
 * A reference to the PIXI ticker if it's being used.
 * 
 * If the PIXI ticker is not used then updates will have to be called manually.
 * 
 * @property {PIXI.Ticker}
 */

/**
 * @param {Object} options The optionas passed to camera-pixi on initialization.
 */
function Options(options) {
  _classCallCheck(this, Options);

  _defineProperty(this, "sprite", void 0);

  _defineProperty(this, "texture", void 0);

  _defineProperty(this, "ticker", void 0);

  Object.assign(this, options);
};

/**
 * A camera with effects for your PIXI application that makes no assumption of how you use PIXI.
 */

var PIXICamera =
/*#__PURE__*/
function () {
  /**
   * A reference to the options passed on initialization.
   * 
   * @private
   * 
   * @property {Options}
   */

  /**
   * A reference to the easing functions that can be used.
   * 
   * @private
   * 
   * @property {*}
   */

  /**
   * @param {Object} [options]
   * @param {PIXI.Sprite} [options.sprite] A reference to the PIXI sprite object used for some effects such as fade.\
   * @param {PIXI.Texture} [options.texture] A reference to the PIXI.Texture object. This is used along with the PIXI.Sprite option to set textures for some of the effects.
   * @param {PIXI.Ticker} [options.ticker] A reference to the PIXI ticker if it's being used. If the PIXI ticker is not used then updates will have to be called manually.
   */
  function PIXICamera() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, PIXICamera);

    _defineProperty(this, "_options", void 0);

    _defineProperty(this, "_EASING", easing);

    this._options = new Options(options);
  }
  /**
   * Returns the easing functions that can be selected from.
   * 
   * @returns {*}
   */


  _createClass(PIXICamera, [{
    key: "camera",

    /**
     * Creates a new camera that is focused on a container.
     *
     * @param {PIXI.Camera} container The container to focus the camera and its effects on.
     *
     * @returns {Camera}
     */
    value: function camera(container) {
      var cam = new Camera(container, this._options);
      return cam;
    }
  }, {
    key: "EASING",
    get: function get() {
      return this._EASING;
    }
  }]);

  return PIXICamera;
}();

export default PIXICamera;
