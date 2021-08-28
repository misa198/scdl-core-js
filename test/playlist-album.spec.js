const { SoundCloud } = require("../dist");

describe("Get playlist/album", () => {
  it("Returns a playlist/album with valid url", async () => {
    const scdl = new SoundCloud();
    await scdl.connect();

    const permalink =
      "https://soundcloud.com/martingarrix/sets/martin-garrix-matisse-sadko";
    const playlist = await scdl.playlists.getPlaylist(permalink);
    expect(playlist.permalink_url).toEqual(permalink);
  });
});
