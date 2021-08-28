const { SoundCloud } = require("../dist");

describe("Get tracks by ids", () => {
  it("Returns an array of objects with a maximum length of <ids.length> and tracks[0] has valid url", async () => {
    const scdl = new SoundCloud();
    await scdl.connect();

    const ids = [578933490, 499766382];
    const tracks = await scdl.tracks.getTracksByIds(ids);
    expect(tracks.length).toBeLessThanOrEqual(ids.length);
    expect(tracks[0].permalink_url).toEqual(
      "https://soundcloud.com/martingarrix/martin-garrix-feat-bonn-no-sleep"
    );
  });
});

describe("Get track by permalink", () => {
  const permalink =
    "https://soundcloud.com/martingarrix/martin-garrix-feat-bonn-no-sleep";

  it("Returns a track with valid url", async () => {
    const scdl = new SoundCloud();
    await scdl.connect();
    const track = await scdl.tracks.getTrack(permalink);
    expect(track.permalink_url).toEqual(permalink);
  });
});

describe("Get trending tracks", () => {
  it("Returns a valid object with a maximum collection length of <limit>", async () => {
    const scdl = new SoundCloud();
    await scdl.connect();

    const limit = 10;
    const tracks = await scdl.tracks.getTrending({
      limit: limit,
    });
    expect(tracks.collection.length).toEqual(limit);
  });
});
