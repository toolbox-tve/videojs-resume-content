import videojs from "video.js";

const dom = videojs.dom || videojs;
const Component = videojs.getComponent("Component");

import "./playResumeButton";

class Container extends Component {
  constructor(player, options) {
    super(player, options);

    let player = this.player();


    console.log('currentTime',this.player_.currentTime());
    console.log('Duration',this.player_.duration());

    this.open = false;
    this.closed = false;

    this.playResumeButton = this.addChild("ResumeContentPlayResumeButton", {
      parent: this
    });

  }

  createEl() {
    const el = dom.createEl("div", {
      className: `vjs-content-resume-container vjs-hidden-`
    });

    return el;
  }

  show() {
    super.show();
    this.open = true;
  }

  hide() {
    super.hide();
    this.open = false;
  }  
}

videojs.registerComponent("ResumeContent", Container);

export default Container;