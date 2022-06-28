const { SoundCloud } = require("../dist");

describe("Get user", () => {
  it("Returns a user with valid url", async () => {
    await SoundCloud.connect();
    const permalink = "https://soundcloud.com/martingarrix";
    const user = await SoundCloud.users.getUser(permalink);
    expect(user.permalink_url).toEqual(permalink);
  });
});
