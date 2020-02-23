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
 * Defines the object that is used to pass options to the `shake` effect.
 */
var ShakeOptions =
/**
 * The duration, in milliseconds, of how long the camera should shake for.
 * 
 * @property {number}
 *
 * @default Infinity
 */

/**
 * The intensity of the shake, from a scale of 1 to 10.
 * 
 * @property {number}
 * 
 * @default 5
 */

/**
 * The scale that should be used when shaking the container.
 * 
 * It is recommended to use a scale of at least 1.2 so that you can't see the edges of the game container.
 * 
 * @property {number}
 * 
 * @default 1.2
 */

/**
 * @param {Object} options The options passed from the `shake` method.
 */
function ShakeOptions(options) {
  _classCallCheck(this, ShakeOptions);

  _defineProperty(this, "duration", Infinity);

  _defineProperty(this, "intensity", 5);

  _defineProperty(this, "scale", 1.2);

  Object.assign(this, options);
};

/**
 * A Shake effect involves shaking the camera at various amounts up to a sepcified intensity.
 */

var Shake =
/*#__PURE__*/
function () {
  /**
   * A reference to the containers involved in this effect.
   * 
   * @private
   * 
   * @property {PIXI.Container}
   */

  /**
   * A reference to the options for this effect.
   * 
   * @private
   * 
   * @property {ShakeOptions}
   */

  /**
   * The timestamp of when this effect was created.
   *
   * @private
   *
   * @property {DOMHighResTimeStamp}
   *
   * @default performance.now
   */

  /**
   * The timestamp of the last time this effect was run.
   *
   * @private
   *
   * @property {DOMHighResTimeStamp}
   */

  /**
   * The signal that is dispatched when this effect is finished.
   *
   * @private
   *
   * @property {Hypergiant}
   */

  /**
   * @param {PIXI.Container} container The container to apply the shake effect to.
   * @param {Object} [options]
   * @param {number} [options.intensity=5] The intensity of the shake, from a scale of 1 to 10.
   * @param {number} [options.scale=1.2] The scale that should be used when shaking the container. It is recommended to use a scale of at least 1.01 so that you can't see the edges of the game container.
   * @param {number} [options.duration=Infinity] The duration of the shake effect.
   */
  function Shake(container, options) {
    _classCallCheck(this, Shake);

    _defineProperty(this, "_container", void 0);

    _defineProperty(this, "_options", void 0);

    _defineProperty(this, "_started", performance.now());

    _defineProperty(this, "_lastRun", 0);

    _defineProperty(this, "_finished", new Hypergiant());

    this._container = container;
    this._options = new ShakeOptions(options);
  }
  /**
   * Returns the finished signal.
   *
   * @returns {Hypergiant}
   */


  _createClass(Shake, [{
    key: "update",

    /**
     * Updates the status of the shake.
     * 
     * If this effect is still active it runs the effect otherwise it just moves on.
     * 
     * @param {number} delta The delta value passed by the game loop.
     */
    value: function update(delta) {
      console.log('shaking');
      var current = performance.now();

      if (current >= this._options.duration) {
        this._finished.dispatch();

        return;
      }

      this._lastRun = performance.now();

      this._run(delta);
    }
    /**
     * The actual shake effect used by start and update to run the effect.
     * 
     * @private
     * 
     * @param {number} delta The delta value passed by the game loop.
     */

  }, {
    key: "_run",
    value: function _run(delta) {
      var dx = Math.random() * this._options.intensity;

      var dy = Math.random() * this._options.intensity;

      this._container.scale.x = this._options.scale;
      this._container.scale.y = this._options.scale;
      this._container.pivot.x = dx;
      this._container.pivot.y = dy;
    }
  }, {
    key: "finished",
    get: function get() {
      return this._finished;
    }
  }]);

  return Shake;
}();

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
   * Keeps track of all of the camera effects in use.
   * 
   * @private
   * 
   * @property {Array<Shake>}
   * 
   * @default []
   */

  /**
   * @param {PIXI.Container} container The container this camera is focusing on.
   */
  function Camera(container) {
    _classCallCheck(this, Camera);

    _defineProperty(this, "_container", void 0);

    _defineProperty(this, "_effects", []);

    this._container = container;
  }
  /**
   * Used in the game loop to update the camera effect animations.
   * 
   * @param {number} delta The delta value passed by the game loop.
   */


  _createClass(Camera, [{
    key: "update",
    value: function update(delta) {
      console.log('effect updating');

      this._effects.map(function (effect) {
        return effect.update(delta);
      });
    }
    /**
     * Creates a new shake effect that can be used.
     * 
     * @param {PIXI.Container} container The container to apply this effect to.
     * @param {Object} [options]
     * @param {number} [options.intensity=5] The intensity of the shake, from a scale of 1 to 10.
     * @param {number} [options.scale=1.2] The scale that should be used when shaking the container. It is recommended to use a scale of at least 1.01 so that you can't see the edges of the game container.
     * @param {number} [options.duration=Infinity] The duration of the shake effect.
     * 
     * @returns {Shake} Returns the shake effect.
     * 
     * @example
     * 
     * const worldShake = cameraPIXI.shake(app.stage, 10);
     */

  }, {
    key: "shake",
    value: function shake(container) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var shake = new Shake(container, options);
      shake.finished.add(function () {
        return _this._removeFromEffects(shake);
      });
    }
    /**
     * Zooms in or out to a specified area.
     * 
     * @param {PIXI.Container} container The container to apply this effect to.
     * @param {number} zoom The zoom multiplier to use. A zoom multipler less than 1 will cause the camera to zoom out.
     * @param {number} [speed=5] A value between 1-10 that specifies the speed of the zoom.
     */

  }, {
    key: "zoomTo",
    value: function zoomTo(container, zoom) {
      setInterval(function () {
        if (container.scale.x < zoom) {
          container.scale.x += 0.1;
          container.scale.y += 0.1;
        }
      }, 50);
    }
    /**
     * Adds the effect to the list of effects.
     * 
     * @private
     * 
     * @param {Shake} effect The effect to add to the list of effects.
     */

  }, {
    key: "_addToEffects",
    value: function _addToEffects(effect) {
      this._effects.push(effect);
    }
    /**
     * Removes an effect from the list of effects.
     *
     * @private
     *
     * @param {Shake} effect The effect to remove from the list of effects.
     */

  }, {
    key: "_removeFromEffects",
    value: function _removeFromEffects(effect) {
      this._effects = this._effects.filter(function (eff) {
        return eff != effect;
      });
    }
  }]);

  return Camera;
}();

/**
 * TODO
 */

var PIXICamera =
/*#__PURE__*/
function () {
  function PIXICamera() {
    _classCallCheck(this, PIXICamera);

    _defineProperty(this, "_cameras", []);
  }

  _createClass(PIXICamera, [{
    key: "update",

    /**
     * Updates all cameras and runs all of the effects.
     *
     * @param {DOMHighResTimeStamp} time The time from the game loop.
     */
    value: function update(time) {
      this._cameras.map(function (camera) {
        return camera.update(time);
      });
    }
    /**
     * Creates a new camera that is focused on a container.
     *
     * @param {PIXI.Camera} container The container to focus the camera and its effects on.
     *
     * @returns {Camera}
     */

  }, {
    key: "camera",
    value: function camera(container) {
      var cam = new Camera(container);

      this._cameras.push(cam);

      return cam;
    }
  }]);

  return PIXICamera;
}();

export default PIXICamera;
