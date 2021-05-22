const { SoundCloud } = require("../dist")

const scdl = new SoundCloud();

scdl.search({
  query: string,
  limit: number,
  offset: number,
  filter: 'all' | 'albums' | 'playlists' | 'users' | 'tracks'
})

scdl.info.getUserByPermalink(url)
