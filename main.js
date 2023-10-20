require('dotenv').config({ path: "./key/.env" });

const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages, 
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMessageReactions
    ] 
  });

const triggerWords = [`<@${process.env.vmdl}>`,"픠","쁴","프이","ㅍㅇ","ㄱㅇㅇ","쁘이","ㅃㅇ","ㅍㅇ ㄱㅇㅇ","프이 귀여워..","프이 귀여워...","프이 귀여워","귀여워..","귀여워","귀여워...","프이 ㄱㅇㅇ..","프이 ㄱㅇㅇ...","ㄱㅇㅇ..","ㄱㅇㅇ..."] 
const NO = ["OOLO","O OLO","ㅇ ㅇㄴㅇ","ㅇㄴㄷ","ㅇㅇㄴㅇ","아닌데","아닌대","응 아니야","응아니야","안귀여워","응 안귀여워"] 
const wordsArray = ["맞는대",'ㅁㄴㄷ', '맞는데', '응 겁나 귀여워', '응 귀여워', '응 우주 최강 귀요미'];
const cute = ["역시 우주 최강 귀요미","응애 프이 귀여워...","프이 귀여워..","프이는 역시 귀여워..."]

const YES = []

for (let i = 0; i < 3; i++) {
  YES.push(wordsArray[i]);
}

let cutevmdl = cute[Math.floor(Math.random() * cute.length)];
let YesrandomWord = YES[Math.floor(Math.random() * YES.length)];
let randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

setInterval(() => {
  cutevmdl = cute[Math.floor(Math.random() * cute.length)];
  YesrandomWord = YES[Math.floor(Math.random() * YES.length)];
  randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
}, 1000); 

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate,async msg => {

  if (msg.author.id === process.env.vmdl) {
    try {
      await msg.react(process.env.react)
    } catch (error) {
      console.log("Error: ".error)
    }
  }

  for (const word of triggerWords) {
    if (msg.content.includes(word)) {
      if (msg.author.bot) return;
      switch(word){
        case "프이 ㄱㅇㅇ":
          await msg.channel.send("ㄹㅇㅋㅋ")
          break
        case "프이 귀여워":
          await msg.channel.send("ㄹㅇㅋㅋ")
          break
        case "ㅍㅇ ㄱㅇㅇ...":
          await msg.channel.send("ㄹㅇㅋㅋ")
          break
        default:
          await msg.channel.send(cutevmdl)
          break
      }
      break; 
    }
  }

  for (const Noword of NO) {
    if (msg.content === Noword && msg.author.id === process.env.vmdl) {
      switch(Noword){
        case "응 아니야":
          await msg.channel.send(YesrandomWord)
          break
        case "OOLO":
          await msg.channel.send(YesrandomWord)
          break
        case "O OLO":
          await msg.channel.send(YesrandomWord)
          break
        case "ㅇ ㅇㄴㅇ":
          await msg.channel.send(YesrandomWord)
          break
        case "ㅇㄴㄷ":
          await msg.channel.send(YesrandomWord)
          break
        case "ㅇㅇㄴㅇ":
          await msg.channel.send(YesrandomWord)
          break
        case "아닌데":
          await msg.channel.send(YesrandomWord)
          break
        case "아닌대":
          await msg.channel.send(YesrandomWord)
          break
        case "응 아니야":
          await msg.channel.send(YesrandomWord)
          break
        case "응아니야":
          await msg.channel.send(YesrandomWord)
          break
        default:
          await msg.channel.send(randomWord)
          break
      }
      break;
    }
  }
});

client.login(process.env.Token);