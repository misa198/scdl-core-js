const { SoundCloud } = require("../dist");

describe("Get playlist/album", () => {
  it("Returns a playlist/album with valid url", async () => {
    const scdl = new SoundCloud();
    await scdl.connect();

    const permalink =
      // "https://soundcloud.com/martingarrix/sets/martin-garrix-matisse-sadko";
      "https://soundcloud.com/sertac-sayrin/sets/pisiko-trap-elektro";
    const playlist = await scdl.playlists.getPlaylist(permalink);
    console.log(playlist.tracks.length);
    expect(playlist.permalink_url).toEqual(permalink);
  });
});
