const { SoundCloud } = require("../dist");

const soundCloud = new SoundCloud();

(async () => {
  await soundCloud.connect();

  const searchResult = await soundCloud.search({
    query: "Tron tim",
    filter: "tracks",
  });
  console.log(searchResult);
})();
