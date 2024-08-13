const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://<username>:<password>@sshalith08.a9odrbw.mongodb.net/?retryWrites=true&w=majority&appName=sshalith08"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/j25wCCLb/IMG-20240626-WA0052.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Sanidu-X" 


global.devs = "94764796750" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94710365812,94785967837";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94710365812";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_48_08_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE4LFxuICAgICAgICA3MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDYxLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyLFxuICAgICAgICAyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NyxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDczLFxuICAgICAgICAxMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyLFxuICAgICAgICA5NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDMyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg1LFxuICAgICAgICA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTksXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDksXG4gICAgICAgIDQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDM5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NixcbiAgICAgICAgMjMxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxKZmw4TnVRY3RiVVZma1RYVEp4b2RTZ211MkVvUDdWWko0dDdNZkxXejg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImlCV0NQM2N2U3l1ajFtem9SWE1ub2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDM2YmU0YzYtNDFhZC00YzJiLWI3YTAtZTE3NzcxODNmNDg0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ4LFxuICAgICAgMjgsXG4gICAgICAxNzcsXG4gICAgICA3MyxcbiAgICAgIDI1MixcbiAgICAgIDE0NCxcbiAgICAgIDY2LFxuICAgICAgOTUsXG4gICAgICAxNSxcbiAgICAgIDAsXG4gICAgICAyMjMsXG4gICAgICAxNjcsXG4gICAgICA5MSxcbiAgICAgIDE3MyxcbiAgICAgIDE0NixcbiAgICAgIDY5LFxuICAgICAgNjAsXG4gICAgICAyMjEsXG4gICAgICA4NixcbiAgICAgIDU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDE5LFxuICAgICAgODEsXG4gICAgICAzNyxcbiAgICAgIDc2LFxuICAgICAgODYsXG4gICAgICA0OCxcbiAgICAgIDQxLFxuICAgICAgMTY0LFxuICAgICAgMixcbiAgICAgIDY0LFxuICAgICAgMjI0LFxuICAgICAgMTgxLFxuICAgICAgMTMzLFxuICAgICAgNDksXG4gICAgICA1LFxuICAgICAgMTE4LFxuICAgICAgNTEsXG4gICAgICAyMixcbiAgICAgIDM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQ3NzZWWFdRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2NDc5Njc1MDoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjYwMDAwMjA3MzkyOTkxOjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lXazBkc0JFSjNCNkxVR0dBOGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ3p6N1hlTHpVQXQ4Q3dGS0pGM3BxeXd0OXZ4dWdNMFI4T0ExVDRlWUQwaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxRklBejVSYWJ3Q01NRlRIbWoyN2k1WXZnMXU0TlpTcHlZRTV5ZUd6bnpCcGFVc2xBZ0UraTFXVXRPZUJjQ1M0clB1aStDZEhTdGgrRHlKMUg0VlJEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVcUlhRXlQbmF1dWJmTjJzQ2hlNTQzclkyNlFnb2J0VVdVSUxoOW9qVStobStlaDVxaXV3WDRTK3lWck5xQ29XL1h6Nzc2L0w5YkllNXU0S2h2eEdBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2NDc5Njc1MDoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjM0NzQwODAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJMjlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUkyOS5qc29uIjogIntcImtleURhdGFcIjpcImluWmlEdEhFSHhWRGpqM2pmNlc2NjZpTXNTeThDTC9sQTE1STB5TTY5aGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDYwNjA4MDA1LFwiY3VycmVudEluZGV4XCI6MTAsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Sanidu-X』```", //*
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Sanidu-X",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
