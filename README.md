# videojs-resume-content



## Installation

```sh
npm install --save videojs-resume-content
```

## Usage

To include videojs-resume-content on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-resume-content.min.js"></script>
<script>
  var player = videojs('my-video');

  player.resumeContent();
</script>
```

### Browserify/CommonJS

When using with Browserify, install videojs-resume-content via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-resume-content');

var player = videojs('my-video');

player.resumeContent();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-resume-content'], function(videojs) {
  var player = videojs('my-video');

  player.resumeContent();
});
```

## License

MIT. Copyright (c) Julio Quintana &lt;jquintana1801@gmail.com&gt;


[videojs]: http://videojs.com/
