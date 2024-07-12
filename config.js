//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY01WS0FmdjZNTm1FWjFsekx4ZWVyN0N0Y2QyZ0xoN1ptcUF0OTZFM1hIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2dSc1dXbTNqbjlMZ0hLVHk4a2RMMis4K3R2VjRqTmtOUEFTVnVQU3Fnbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQ3E2QmJFSXlRKzc3eWM0NXZSd3E1bUdSa2NzK3MzUnh2aTF3bittQm1NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqT0d5SU55OGcxMVU5LzdGWDNZRHNCbmNCVXUzekN6WVJIWFhPWkxrMGxZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllLOWt2UVZlUlhvUXRoTVF4cXVrR0dZUFVkNW9XcGdkOEQ3b3RjNUNla0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBWbTF4RGtaUkxDRThPQk1uOGtNSHhIS1dpRGswbG1JMHRzK2tjc3VmQm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUJYMWFuM29yNDN2d1Q2Wit5aDJUbFFxUEEvUjQ0RENVZEdDeGRtb3IzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHdDWEZSTnVEdzFYeVViSnZFaEcvVTRMelJHNERMa0pTZlBpS1hXbW5IZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZTSlZxc3l1czZwbXlrYUZIeThCVmt0bXZuWFFXZkdVNENqQnpzWEhVc2NUNlhiZk0zTG91R0I2VXBGKzR0bUgyKy9WNGo4MGhBV1lSM1RvYjFlVUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjYsImFkdlNlY3JldEtleSI6IjR2WTREM1NhemhVT3JaOW5RWktWa3Z6Qm9FaVR3Z3NycUtYR1BJcTE4U2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTUyNDg2MDBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUU4QkY0QjE2QTQwMzEyMDdFMjQ5QzI3MEY3NTM5QkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDc5Mjk0Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTUyNDg2MDBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzlCMkU0MjVBQTlFODM0NzFCMzI5MDdGNjM2RENBQjYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDc5Mjk0M31dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZTdSLVNySEtSMjJjZU0yOVk0ZXV5QSIsInBob25lSWQiOiJmYjM2YjcxNi1hZGM2LTQwZWItOGU1NC04MjEzNzQ0NmU5OGYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2VKU2x5Y2FvQmhERWdMT3FGNnBMSmZ4QUpJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBCUWJCS3dGTXhibWtaa0lGbzZpUVArVDhKTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJYMU1ZMTY1NiIsIm1lIjp7ImlkIjoiOTQ3MTUyNDg2MDA6OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJva2lkdSBzZWhhbnNhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKdTdrSzBGRU9EdXhMUUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTUVhsTXIvcm9sbmx0Smd6RzZuWlY3NGJSWWdnMHc2QnJKV0NSZ2ZmUTNZPSIsImFjY291bnRTaWduYXR1cmUiOiJxeVRMWjl1WTFEQXhIZWV6djVRUjY5Y1MybGFEb3JBZGt1bFkySDZmTmorZWtuWnFBYXpkUHVEcHJqMHNiUGdJWnNnbkVvVVRxVnoyK2hQWGo5SklBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMEFSYmYxT3hwRmpYcXpTek41bnU5MFc5anp2T1cwN1BERFZ4b0F6amZCc0VjdjEyK1lNOFRCaVJlWFZZTC9vcG11U2hITGJQZEVtbjAzdmNhNUZPQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxNTI0ODYwMDo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVrRjVUSy82NkpaNWJTWU14dXAyVmUrRzBXSUlOTU9nYXlWZ2tZSDMwTjIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA3OTI5NDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRlV0In0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
