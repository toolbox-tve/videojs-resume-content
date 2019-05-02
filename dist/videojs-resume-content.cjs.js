/*! @name videojs-resume-content @version 0.0.3 @license MIT */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var videojs = _interopDefault(require('video.js'));

var version = "0.0.3";

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var dom = videojs.dom || videojs;
var ClickableComponent = videojs.getComponent('ClickableComponent');

var PlayResumeButton =
/*#__PURE__*/
function (_ClickableComponent) {
  _inheritsLoose(PlayResumeButton, _ClickableComponent);

  function PlayResumeButton(player, options) {
    var _this;

    _this = _ClickableComponent.call(this, player, options) || this;
    _this.parent = options.parent;
    return _this;
  }

  var _proto = PlayResumeButton.prototype;

  _proto.createEl = function createEl() {
    var el = dom.createEl('div', {
      className: "vjs-control vjs-play-resume-button"
    });
    var span = dom.createEl('span', {
      className: 'vjs-icon-play'
    });
    var text = dom.createEl('p');
    var currentTime = videojs.formatTime(this.player().currentTime());
    text.innerHTML = this.localize('resumeContent') + " " + currentTime;
    el.appendChild(span);
    el.appendChild(text);
    return el;
  };

  _proto.handleClick = function handleClick(event) {
    this.parent.closed = true;
    this.parent.hide();
    this.player().play();
  };

  return PlayResumeButton;
}(ClickableComponent);

videojs.registerComponent('ResumeContentPlayResumeButton', PlayResumeButton);

var dom$1 = videojs.dom || videojs;
var ClickableComponent$1 = videojs.getComponent('ClickableComponent');

var PlayResetButton =
/*#__PURE__*/
function (_ClickableComponent) {
  _inheritsLoose(PlayResetButton, _ClickableComponent);

  function PlayResetButton(player, options) {
    var _this;

    _this = _ClickableComponent.call(this, player, options) || this;
    _this.parent = options.parent;
    return _this;
  }

  var _proto = PlayResetButton.prototype;

  _proto.createEl = function createEl() {
    var el = dom$1.createEl('div', {
      className: "vjs-control vjs-play-reset-button"
    });
    var span = dom$1.createEl('span', {
      className: 'vjs-icon-replay'
    });
    var text = dom$1.createEl('p');
    text.innerHTML = this.localize('resetContent');
    el.appendChild(span);
    el.appendChild(text);
    return el;
  };

  _proto.handleClick = function handleClick(event) {
    this.parent.closed = true;
    this.parent.hide();
    this.player().currentTime(0);
    this.player().play();
  };

  return PlayResetButton;
}(ClickableComponent$1);

videojs.registerComponent('ResumeContentPlayResetButton', PlayResetButton);

var dom$2 = videojs.dom || videojs;
var Component = videojs.getComponent("Component");

var Container =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Container, _Component);

  function Container(player, options) {
    var _this;

    _this = _Component.call(this, player, options) || this;
    _this.init = _this.init.bind(_assertThisInitialized(_this));

    _this.init(player);

    _this.playResumeButton = _this.addChild("ResumeContentPlayResumeButton", {
      parent: _assertThisInitialized(_this)
    });
    _this.playResetButton = _this.addChild("ResumeContentPlayResetButton", {
      parent: _assertThisInitialized(_this)
    });
    return _this;
  }

  var _proto = Container.prototype;

  _proto.init = function init(player) {
    /**
     *
     * se deja la siguiente lineas para 
     * tests del developer
     */
    player.currentTime(43);
    this.open = false;
    this.closed = false;
  };

  _proto.createEl = function createEl() {
    var el = dom$2.createEl("div", {
      className: "vjs-content-resume-container vjs-hidden"
    });
    return el;
  };

  _proto.show = function show() {
    _Component.prototype.show.call(this);

    this.open = true;
    this.player().controlBar.hide();
    this.player().bigPlayButton.hide();
  };

  _proto.hide = function hide() {
    _Component.prototype.hide.call(this);

    this.open = false;
    this.player().controlBar.show();
    this.player().bigPlayButton.show();
  };

  return Container;
}(Component);

videojs.registerComponent("ResumeContent", Container);

var resumeContent = "Reanudar contenido en";
var resetContent = "Reproducir desde el comienzo";
var es = {
	resumeContent: resumeContent,
	resetContent: resetContent
};

var resumeContent$1 = "Retomar conteúdo em";
var resetContent$1 = "Tocar desde o começo";
var pt = {
	resumeContent: resumeContent$1,
	resetContent: resetContent$1
};

var resumeContent$2 = "Resume content in";
var resetContent$2 = "Play from start";
var en = {
	resumeContent: resumeContent$2,
	resetContent: resetContent$2
};

videojs.addLanguage('es', es);
videojs.addLanguage('en', en);
videojs.addLanguage('pt', pt); // Default options for the plugin.

var defaults = {}; // Cross-compatibility for Video.js 5 and 6.

var registerPlugin = videojs.registerPlugin || videojs.plugin; // const dom = videojs.dom || videojs;

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 *           A Video.js player object.
 *
 * @param    {Object} [options={}]
 *           A plain object containing options for the plugin.
 */

var onPlayerReady = function onPlayerReady(player, options) {
  player.addClass('vjs-resume-content');
};
/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function resumeContent
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */


var resumeContent$3 = function resumeContent(options) {
  var _this = this;

  this.container = this.addChild('ResumeContent', options);
  this.ready(function () {
    onPlayerReady(_this, videojs.mergeOptions(defaults, options));
  });
  this.on('loadeddata', function () {
    var player = _this;
    player.pause();

    if (player.currentTime() >= player.duration() * .90) {
      player.container.show();
    } else {
      player.container.hide();
      setTimeout(function () {
        console.log('play the player');
        player.play();
      }, 1000);
    }
  });
}; // Register the plugin with video.js.


registerPlugin('resumeContent', resumeContent$3); // Include the version number.

resumeContent$3.VERSION = version;

module.exports = resumeContent$3;
