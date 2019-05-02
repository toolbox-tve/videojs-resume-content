import videojs from 'video.js';
import {version as VERSION} from '../package.json';

import Container from './components/container';

import es from '../lang/es.json';
import pt from '../lang/pt.json';
import en from '../lang/en.json';

videojs.addLanguage('es', es);
videojs.addLanguage('en', en);
videojs.addLanguage('pt', pt);

// Default options for the plugin.
const defaults = {};

// Cross-compatibility for Video.js 5 and 6.
const registerPlugin = videojs.registerPlugin || videojs.plugin;
// const dom = videojs.dom || videojs;

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
const onPlayerReady = (player, options) => {
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
const resumeContent = function(options) {
  this.container = this.addChild('ResumeContent', options);

  this.ready(()=>{
    onPlayerReady(this, videojs.mergeOptions(defaults, options));
  })

  this.on('loadeddata',() => {
    this.container.onPlayerResize()
    let player = this;
    player.pause();
    if(player.currentTime() >= (player.duration()*.90)){
      player.container.show();
    } else {
      player.container.hide();
      setTimeout(()=>{
        console.log('play the player')
        player.play();
      },1000)
    }
  });


};

// Register the plugin with video.js.
registerPlugin('resumeContent', resumeContent);

// Include the version number.
resumeContent.VERSION = VERSION;

export default resumeContent;
