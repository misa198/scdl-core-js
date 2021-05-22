# scdl-core

<p align="center">
  <img src="https://raw.githubusercontent.com/misa198/scdl-core/master/docs/images/sc-logo.png">
</p>

- Module for SoundCloud to download and get info tracks and playlists.
- Support Typescript and Javascript.

# Usage

```js
const fs = require("fs");
const { SoundCloud } = required("scdl-core");

const scdl = new SoundCloud();
scdl.connect().then(() => {
  scdl
    .download(
      "https://soundcloud.com/r3hab/the-chainsmokers-coldplay-something-just-like-this-r3hab-remix"
    )
    .pipe(fs.createWriteStream("audio.mp3"));
});
```

# API

### search(options)

```js
scdl.search({
  query: string,
  limit?: number, // Default: 10
  offset?: number, // Default: 0
  filter?: 'all' | 'albums' | 'playlists' | 'users' | 'tracks' // Default: "all"
})
```

### info

#### tracks

```js
scdl.info.getTracksByIds(ids: number[]);
```

#### track

```js
scdl.info.getTrackByPermalink(permalink: string);
```

#### playlist/album

```js
scdl.info.getPlaylistByPermalink(permalink: string)
```

#### user

```js
scdl.info.getUserByPermalink(permalink: string)
```

#### download

```js
scdl.download(trackPermalink: string)
```

Use with Discord.js

```js
const voiceChannel = message.member.voiceChannel;
voiceChannel
  .join()
  .then((connection) => {
    scdl.download(trackPermalink).then((stream) => {
      connection.play(stream);
    });
  })
  .catch((err) => console.log(err));
```

# Install

```bash
npm install scdl-core --save
```

Or for Yarn users:

```bash
yarn add scdl-core
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
