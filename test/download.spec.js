const { SoundCloud } = require("../dist");

const concat = (stream, callback) => {
  let body = "";
  stream.on("data", (chunk) => {
    const textChunk = chunk.toString("utf8");
    body += textChunk;
  });
  stream.on("error", callback);
  stream.on("end", () => {
    callback(null, body);
  });
};

describe("Download tracks", () => {
  it("Stream is readable", async () => {
    const scdl = new SoundCloud();
    await scdl.connect();

    const permalink =
      "https://soundcloud.com/martingarrix/martin-garrix-feat-bonn-no-sleep";
    const stream = await scdl.download(permalink);
    concat(stream, (err, body) => {
      expect(err).toBeNull();
      expect(Boolean(body)).toEqual(true);
    });
  });
});
