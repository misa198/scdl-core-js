const { SoundCloud } = require("../dist");

const soundCloud = new SoundCloud();

(async () => {
  await soundCloud.connect();

  const searchResult = await soundCloud.search({
    query: "Tron tim",
    filter: "users",
  });
  console.log(searchResult.collection[0]);
})();
