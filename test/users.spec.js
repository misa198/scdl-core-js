const { SoundCloud } = require("../dist");

describe("Get user", () => {
  it("Returns a user with valid url", async () => {
    const scdl = new SoundCloud();
    await scdl.connect();

    const permalink = "https://soundcloud.com/martingarrix";
    const user = await scdl.users.getUser(permalink);
    expect(user.permalink_url).toEqual(permalink);
  });
});
