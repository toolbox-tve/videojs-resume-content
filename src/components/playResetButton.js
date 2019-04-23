import videojs from 'video.js';

const dom = videojs.dom || videojs;
const ClickableComponent = videojs.getComponent('ClickableComponent');

class PlayResetButton extends ClickableComponent {
  constructor(player, options) {
    super(player, options);

    this.parent = options.parent;
  }

  createEl() {
    const el = dom.createEl('div', {
      className: `vjs-control vjs-play-reset-button`
    });

    const span = dom.createEl('span', {
      className: 'vjs-icon-replay'
    });

    const text = dom.createEl('p');

    text.innerHTML = this.localize('resetContent')

    el.appendChild(span);
    el.appendChild(text);
    return el;
  }

  handleClick(event) {
    this.parent.closed = true;
    this.parent.hide();
    this.player().currentTime(0);
    this.player().play()
  }
}

videojs.registerComponent('ResumeContentPlayResetButton', PlayResetButton);

export default PlayResetButton;