const { SoundCloud } = require("../dist");

describe("Connect", () => {
  const filters = ["albums", "all", "playlists", "tracks", "users"];
  const query = "Martin Garrix";
  const limit = 5;

  it("Returns a valid object with a maximum collection length of <limit>", async () => {
    const soundCloud = new SoundCloud();
    await soundCloud.connect();

    for (const filter of filters) {
      const result = await soundCloud.search({
        query,
        filter,
        limit,
      });
      expect(result.collection.length).toBeLessThanOrEqual(limit);
    }
  });
});
