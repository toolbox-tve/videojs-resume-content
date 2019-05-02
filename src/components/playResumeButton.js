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

    this.button = el;

    this.span = dom.createEl('span', {
      className: 'vjs-icon-play'
    });

    this.text = dom.createEl('p');

    const currentTime = videojs.formatTime(this.player().currentTime());

    this.text.innerHTML =  `${this.localize('resumeContent')} ${currentTime}`

    el.appendChild(this.span);
    el.appendChild(this.text);
    return el;
  }

  handleClick(event) {
    this.parent.closed = true;
    this.parent.hide();
    this.player().play()
  }

  resize() {

    if(!this.player_ && !this.player_.el_)
      return;

    const width = this.player_.el_.offsetWidth;

    if (this.lastWidth !== width) {
      this.lastWidth = width;
    } else {
      return;
    }

    if (width < 200) {
      this.text.style.fontSize = '10px';
      this.span.style.fontSize = '10px';
      this.span.style.marginLeft = '10px';

      this.button.style.height = "24px";
    } else if (width < 300) {
      this.text.style.fontSize = '12px';
      this.span.style.fontSize = '12px';
      this.span.style.marginLeft = '12px';

      this.button.style.height = "24px";
      this.button.style.width = "70%";
      this.button.style.left = "15%";
    } else if (width < 400) {
      this.text.style.fontSize = '16px';
      this.span.style.fontSize = '16px';
      this.span.style.marginLeft = '16px';

      this.button.style.height = "32px";
      this.button.style.width = "70%";
      this.button.style.left = "15%";
    } else if (width < 500) {
      this.text.style.fontSize = '18px';
      this.span.style.fontSize = '18px';
      this.span.style.marginLeft = '18px';

      this.button.style.height = "32px";
      this.button.style.width = "90%";
      this.button.style.left = "10%";
    } else if (width < 700) {
      this.text.style.fontSize = '22px';
      this.span.style.fontSize = '22px';
      this.span.style.marginLeft = '22px';

      this.button.style.height = "32px";
      this.button.style.width = "90%";
      this.button.style.left = "10%";
    } else if (width < 1000) {
      this.text.style.fontSize = '22px';
      this.span.style.fontSize = '22px';
      this.span.style.marginLeft = '22px';

      this.button.style.height = "32px";
      this.button.style.width = "70%";
      this.button.style.left = "15%";
    } else {
      this.text.style.fontSize = '28px';
      this.span.style.fontSize = '28px';
      this.span.style.marginLeft = '28px';

      this.button.style.width = "80%";
      this.button.style.left = "20%";
      this.button.style.height = "48px";
    }
  }
}

videojs.registerComponent('ResumeContentPlayResumeButton', PlayResumeButton);

export default PlayResumeButton;