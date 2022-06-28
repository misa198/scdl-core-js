# scdl-core

<p align="center">
  <img src="https://raw.githubusercontent.com/misa198/scdl-core/master/docs/banner.png" width="500px">
</p>

- Module for SoundCloud to download and get info tracks and playlists.
- Support Typescript and Javascript.

![](https://img.shields.io/badge/Author-misa198-green)
![](https://camo.githubusercontent.com/832d01092b0e822178475741271b049a2e27df13/68747470733a2f2f62616467656e2e6e65742f62616467652f2d2f547970655363726970742f626c75653f69636f6e3d74797065736372697074266c6162656c)
[![](https://img.shields.io/npm/dt/scdl-core)](https://www.npmjs.com/package/scdl-core)

# Usage

```js
const fs = require("fs");
const { SoundCloud } = require("scdl-core");

await SoundCloud.connect();
const stream = await SoundCloud.download(
  "https://soundcloud.com/martingarrix/martin-garrix-feat-bonn-no-sleep"
);
stream.pipe(fs.createWriteStream("song.mp3"));
```

# API

## connect

```js
// Used to get the SoundCloud client_id. Call 1 time at the top of your app.
const { SoundCloud } = require("scdl-core");
await SoundCloud.connect();
await SoundCloud.download(
  "https://soundcloud.com/martingarrix/martin-garrix-feat-bonn-no-sleep"
);
stream.pipe(fs.createWriteStream("song.mp3"));
```

## search

```js
const result = await SoundCloud.search({
  query: string,
  limit?: number, // Default: 20
  offset?: number, // Default: 0
  filter?: 'all' | 'albums' | 'playlists' | 'users' | 'tracks' // Default: "all"
});
```

## tracks

#### getTrackByIds

```js
const ids = [578933490, 499766382];
const tracks = await SoundCloud.tracks.getTracksByIds(ids);
```

#### getTrack

```js
const permalink =
  "https://soundcloud.com/martingarrix/martin-garrix-feat-bonn-no-sleep";
const track = await SoundCloud.tracks.getTrack(permalink);
```

#### getTrending

```js
const trendingTracks = await SoundCloud.tracks.getTrending({
  limit?: number, // Default: 20
  offset?: number // Default: 0
});
```

## playlists/albums

#### getPlaylist/getAlbum

```js
const permalink =
  "https://soundcloud.com/martingarrix/sets/martin-garrix-matisse-sadko";
const playlist = await SoundCloud.playlists.getPlaylist(permalink);
```

## users

#### getUser

```js
const permalink = "https://soundcloud.com/martingarrix";
const user = await SoundCloud.users.getUser(permalink);
```

## download

```js
const permalink =
  "https://soundcloud.com/martingarrix/martin-garrix-feat-bonn-no-sleep";
const stream = await SoundCloud.download(permalink);
stream.pipe(fs.createWriteStream("song.mp3"));

// For streaming, you can customize the `highWaterMark` value to reduce lag if the internet is not good.
// Example:
const stream = await SoundCloud.download(permalink, {
  highWaterMark: 1 << 25, // 32Mb, default is 16kb
});
```

#### Use with Discord.js

```javascript
// Discord.js v12
const voiceChannel = message.member.voiceChannel;
voiceChannel
  .join()
  .then((connection) => {
    SoundCloud.download(trackPermalink).then((stream) => {
      connection.play(stream);
    });
  })
  .catch((err) => console.log(err));
```

```javascript
// Discord.js v13
const audioPlayer = createAudioPlayer();
const voiceConnection = joinVoiceChannel({
  channelId,
  guildId,
  adapterCreator,
});
voiceConnection.subscribe(audioPlayer);
const stream = await SoundCloud.download(SONG_URL);
const audioResource = createAudioResource(stream);
audioPlayer.play(audioResource);
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
