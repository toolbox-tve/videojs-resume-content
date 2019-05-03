import videojs from 'video.js';

const dom = videojs.dom || videojs;
const Component = videojs.getComponent('Component');

import './playResumeButton';
import './playResetButton';

class Container extends Component {
  constructor(player, options) {
    super(player, options);

    this.init = this.init.bind(this);
    this.init(player);

    this.bindedOnPlayerResize = this.onPlayerResize.bind(this);

    options.parent = this;

    this.playResumeButton = this.addChild('ResumeContentPlayResumeButton', options);

    this.playResetButton = this.addChild('ResumeContentPlayResetButton', options);

    this.player_.on('resize', this.bindedOnPlayerResize);

  }

  onPlayerResize() {
    this.playResumeButton.resize();
    this.playResetButton.resize();
  }

  init(player) {
    /**
     *
     * se deja la siguiente lineas para
     * tests del developer
     */
    // player.currentTime(42);

    this.open = false;
    this.closed = false;

  }

  createEl() {
    const el = dom.createEl('div', {
      className: 'vjs-content-resume-container vjs-hidden'
    });

    return el;
  }

  show() {
    super.show();
    this.open = true;
    this.player_.removeClass('vjs-paused');
    this.player_.controlBar.hide();
    this.player_.bigPlayButton.hide();
  }

  hide() {
    super.hide();
    this.open = false;
    this.player_.controlBar.show();
    this.player_.bigPlayButton.show();
  }
}

videojs.registerComponent('ResumeContent', Container);

export default Container;
