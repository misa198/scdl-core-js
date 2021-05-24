# scdl-core

<p align="center">
  <img src="https://raw.githubusercontent.com/misa198/scdl-core/master/docs/images/sc-logo.png">
</p>

- Module for SoundCloud to download and get info tracks and playlists.
- Support Typescript and Javascript.

![](https://img.shields.io/badge/Author-misa198-green)
![](https://camo.githubusercontent.com/832d01092b0e822178475741271b049a2e27df13/68747470733a2f2f62616467656e2e6e65742f62616467652f2d2f547970655363726970742f626c75653f69636f6e3d74797065736372697074266c6162656c)

# Usage

```js
const fs = require("fs");
const { SoundCloud } = require("scdl-core");

const scdl = new SoundCloud();
scdl.connect().then(() => {
  scdl
    .download(
      "https://soundcloud.com/martingarrix/martin-garrix-feat-bonn-no-sleep"
    )
    .then((stream) => stream.pipe(fs.createWriteStream("song.mp3")));
});
```

# API

## connect

```js
// SoundCloud API require a client_id.
// When you instantiate scdl object, you need to call connect method to get client_id

scdl.connect().then(() => {
  // Do something
});
```

## search

```js
const result = await scdl.search({
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
const tracks = await scdl.tracks.getTracksByIds(ids);
```

#### getTrack

```js
const permalink =
  "https://soundcloud.com/martingarrix/martin-garrix-feat-bonn-no-sleep";
const track = await scdl.tracks.getTrack(permalink);
```

#### getTrending

```js
const trendingTracks = await scdl.tracks.getTrending({
  limit?: number, // Default: 20
  offset?: number // Default: 0
});
```

## playlists/albums

#### getPlaylist/getAlbum

```js
const permalink =
  "https://soundcloud.com/martingarrix/sets/martin-garrix-matisse-sadko";
const playlist = await scdl.playlists.getPlaylist(permalink);
```

## user

#### getUser

```js
const permalink = "https://soundcloud.com/martingarrix";
const user = await scdl.info.getUser(permalink);
```

## download

```js
const permalink =
  "https://soundcloud.com/martingarrix/martin-garrix-feat-bonn-no-sleep";
const stream = await scdl.download(permalink);
stream.pipe(fs.createWriteStream("song.mp3"));
```

#### Use with Discord.js

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
