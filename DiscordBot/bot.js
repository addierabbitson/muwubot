const logger = require('winston');
const auth = require('./auth.json');
const Discord = require("discord.js");
// const client = new Discord.Client();
// var Discord = require('discord.io');
const bot = new Discord.Client({
   login: auth.token,
   disableEveryone: true
});
bot.login(auth.token);

logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

/*bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pongu uwu'
                });
            break;
         }
     }
}); */

bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let lookingForDm = "613218568619819018";
    let selfAssignRoles = "613137179756986411";
    let dmsClose = "613135906089730048";
    let dmsOpen = "613135855522938898";
    let dmsAsk = "613135951350202369";

    const uwu_imgs = [
        'https://media.tenor.com/images/a29c962911c89179678940fd671c388a/tenor.gif',
        'https://media.tenor.com/images/94e120d5d40d30b62eb5d80a5a7aac6f/tenor.gif',
        'https://thumbs.gfycat.com/ShoddyPrestigiousAnemonecrab-size_restricted.gif',
        'https://media.giphy.com/media/cmfPVbDIySspNIi2L8/giphy.gif',
        'https://media.giphy.com/media/iNwDIhUl9S6j42lJz7/giphy.gif',
        'https://i.redd.it/5uyfvw6c7nc21.gif',
        'https://thumbs.gfycat.com/PossibleUntriedAsianconstablebutterfly-size_restricted.gif',
        'https://memestatic.fjcdn.com/gifs/Owo_49c29f_6788346.gif',
        'https://art.pixilart.com/d18734f91ba4773.gif',
        'http://pa1.narvii.com/6689/72dea5414274b3009e2467c35eb94ab29a2a33ad_00.gif'
    ]

    const noods_imgs = [
        'https://media.tenor.com/images/64022ca49735b8aa742d5d464a311adc/tenor.gif',
        'https://giphy.com/gifs/aww-tiny-hiss-Y9F87zGXhb7zi',
        'https://media0.giphy.com/media/PR5pSVpG0PL9K/giphy.gif',
        'https://media1.tenor.com/images/5bd848735bbb12a2b7fa0561de918a0c/tenor.gif',
        'https://media2.giphy.com/media/HgzX46c3funJu/giphy.gif',
        'https://media2.giphy.com/media/lNaQoLFs02w9y/giphy.gif',
        'https://i.pinimg.com/originals/b0/83/a3/b083a3941a60a81dda7e29710397f869.gif',
        'https://thumbs.gfycat.com/WelldocumentedUntimelyAsp-size_restricted.gif',
        'https://media3.giphy.com/media/88EAY5lvJ2Ew0/giphy.gif'
    ]

    if (message.content.includes(" PM") || message.content.includes(" pm") || message.content.includes(" Pm") || message.content.includes("PM ") || message.content.includes("pm ") || message.content.includes("Pm ") || message.content.includes("PM?") || message.content.includes("pm?") || message.content.includes("Pm?") || message.content.includes("DM?") || message.content.includes("dm?") || message.content.includes("Dm?") || message.content.includes("Dm ") || message.content.includes("DM ") || message.content.includes("dm ") || message.content.includes(" Dm") || message.content.includes(" DM") || message.content.includes(" dm") && message.channel.name !== "looking-for-dm") {
        message.channel.send("pls go to " + bot.channels.get(lookingForDm) + " when asking about dms!! " + bot.users.get(message.member.user.id));
    }

    if (message.content.includes("uwu") || message.content.includes("Uwu") || message.content.includes("UWU") || message.content.includes("UwU") || message.content.includes("uWu")) {
        message.channel.send({
            file: uwu_imgs[Math.floor(Math.random() * uwu_imgs.length)]
        });
    }

    if (message.content.includes("send noods") || message.content.includes("Send noods") || message.content.includes("Send Noods") || message.content.includes("SEND NOODS") || message.content.includes("SEND NUDES") || message.content.includes("send nudes") || message.content.includes("Send nudes") || message.content.includes("send Nudes") || message.content.includes("Send Nudes")) {
        message.channel.send("here is ur noodles uwu ", {
            file: noods_imgs[Math.floor(Math.random() * noods_imgs.length)]
        });
    }

    if (!message.member.roles.has(dmsOpen) && !message.member.roles.has(dmsClose) && !message.member.roles.has(dmsAsk)) {
        message.channel.send("pls set ur roles in " + bot.channels.get(selfAssignRoles) + " " + bot.users.get(message.member.user.id));
    }
});

// HERE IS BOT LINK:
// https://discordapp.com/oauth2/authorize?&client_id=613595748897914890&scope=bot&permissions=8