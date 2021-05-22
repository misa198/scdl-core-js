const { SoundCloud } = require("../dist");
const fs = require("fs");

const soundCloud = new SoundCloud();

(async () => {
  await soundCloud.connect();

  // const searchResult = await soundCloud.search({
  //   query: "Tron tim",
  //   filter: "users",
  // });
  // console.log(searchResult.collection[0]);

  // const track = await soundCloud.info.getTrackByPermalink(
  //   "https://soundcloud.com/den1305/den-x-justatee-di-ve-nha?in=den1305/sets/en-v-u"
  // );

  // console.log(track);

  // const playlist = await soundCloud.info.getPlaylistByPermalink(
  //   "https://soundcloud.com/den1305/sets/en-v-u"
  // );

  // fs.writeFileSync(`${__dirname}/data.json`, JSON.stringify(playlist), {
  //   encoding: "utf-8",
  // });

  // console.log(playlist);

  // const tracks = await soundCloud.info.getTracksByIds([
  //   531329904, 912310699, 912120631,
  // ]);
  // console.log(tracks);

  try {
    soundCloud
      .download(
        "https://soundcloud.com/den1305/den-xce-nha?in=den1305/csdkncksdncksdc"
      )
      .then((res) => res.pipe(fs.createWriteStream(`${__dirname}/a.mp3`)));
  } catch (e) {
    console.log("Error");
  }
})();
