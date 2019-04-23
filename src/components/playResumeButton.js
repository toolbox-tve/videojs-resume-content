import videojs from 'video.js';

const dom = videojs.dom || videojs;
const ClickableComponent = videojs.getComponent('ClickableComponent');

class PlayResumeButton extends ClickableComponent {
  constructor(player, options) {
    super(player, options);

    this.parent = options.parent;
  }

  createEl() {
    const el = dom.createEl('div', {
      className: `vjs-control vjs-play-resume-button`
    });

    const span = dom.createEl('span', {
      className: 'vjs-icon-play'
    });

    const text = dom.createEl('p', {
      className: 'vjs-text-play'
    });

    text.innerHTML = this.localize('resumeContent')

    el.appendChild(span);
    el.appendChild(text);
    return el;
  }

  handleClick(event) {
    this.parent.closed = true;
    this.parent.hide();
    this.player().play()
  }
}

videojs.registerComponent('ResumeContentPlayResumeButton', PlayResumeButton);

export default PlayResumeButton;