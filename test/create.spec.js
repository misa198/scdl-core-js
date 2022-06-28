const { SoundCloud } = require("../dist");

describe("Create", () => {
  const query = "Martin Garrix";
  const limit = 5;

  it("create a valid SoundCloud object that can return result when search", async () => {
    await SoundCloud.connect();
    const result = await SoundCloud.search({
      query,
      limit,
    });
    expect(result.collection.length).toBeLessThanOrEqual(limit);
  });
});
