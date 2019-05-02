import videojs from "video.js";

const dom = videojs.dom || videojs;
const Component = videojs.getComponent("Component");

import "./playResumeButton";
import "./playResetButton";

class Container extends Component {
  constructor(player, options) {
    super(player, options);

    this.init = this.init.bind(this);

    this.init(player);

    this.playResumeButton = this.addChild("ResumeContentPlayResumeButton", {
      parent: this
    });

    this.playResetButton = this.addChild("ResumeContentPlayResetButton", {
      parent: this
    });

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
    const el = dom.createEl("div", {
      className: `vjs-content-resume-container vjs-hidden`
    });

    return el;
  }

  show() {
    super.show();
    this.open = true;
    this.player().controlBar.hide()
    this.player().bigPlayButton.hide()
  }

  hide() {
    super.hide();
    this.open = false;
    this.player().controlBar.show()
    this.player().bigPlayButton.show()
  }  
}

videojs.registerComponent("ResumeContent", Container);

export default Container;