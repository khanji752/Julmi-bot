module.exports.config = {
  name: "owner",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "... - Long LTD",
  description: "War In Chatbox",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
      "fs-extra": "",
      "axios": ""
  }
}

module.exports.run = async function({ api, args, Users, event}) {
var mention = Object.keys(event.mentions)[0];

let name =  event.mentions[mention];
  var arraytag = [];
      arraytag.push({id: mention});
  var a = function (a) { api.sendMessage(a, event.threadID); }
a("🔰𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊 :-👇👇https://www.facebook.com/profile.php?id=100090277345439-😘😘_𝗡𝗔𝗜𝗜𝗡𝗔_𝗤𝗨𝗘𝗘𝗡__?𝗜 𝗔𝗠 𝗡𝗔𝗔𝗜𝗡𝗔 𝗖𝗔𝗥𝗧𝗢𝗢𝗡 𝗕𝗢𝗧𝗧==
