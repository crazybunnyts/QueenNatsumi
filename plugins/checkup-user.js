const Natsumi = require('../events');
const {MessageType} = require('queen-natsumi-web-api');
const Config = require('../config');


Natsumi.addCommand({pattern: 'check', fromMe: false, deleteCommand: true, desc: 'verify 🤖',}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] ="0420 ◅▻ 🇱🇰👸✥▬NATSUMI▬✥👸🇱🇰 ◅▻ CONFIRMED 🤖 2021|>";
    r_text[2] ="0421 ◅▻ 🇱🇰👸✥▬NATSUMI▬✥👸🇱🇰 ◅▻ CONFIRMED 🤖 2022|>";
    r_text[3] ="0771 ◅▻ 🇱🇰👸✥▬NATSUMI▬✥👸🇱🇰 ◅▻ CONFIRMED 🤖 2023|>";
    r_text[4] ="0891 ◅▻ 🇱🇰👸✥▬NATSUMI▬✥👸🇱🇰 ◅▻ CONFIRMED 🤖 2024|>";
    r_text[5] ="0957 ◅▻ 🇱🇰👸✥▬NATSUMI▬✥👸🇱🇰 ◅▻ CONFIRMED 🤖 2025|>";
    r_text[6] ="0582 ◅▻ 🇱🇰👸✥▬NATSUMI▬✥👸🇱🇰 ◅▻ CONFIRMED 🤖 2026|>";
    r_text[7] ="0719 ◅▻ 🇱🇰👸✥▬NATSUMI▬✥👸🇱🇰 ◅▻ CONFIRMED 🤖 2027|>";
    r_text[8] ="0269 ◅▻ 🇱🇰👸✥▬NATSUMI▬✥👸🇱🇰 ◅▻ CONFIRMED 🤖 2028|>";
  

    var i = Math.floor(8*Math.random())

    await message.client.sendMessage(
        message.jid,(r_text[i])+'.', MessageType.text);

    }));
