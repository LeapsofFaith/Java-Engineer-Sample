const Discord = require("discord.js"); // location of Client rules and code
const config = require("./config.json"); // location of bot's token & prefix (separate for security)

/*const Info = require('./commands/info.js');
const Help = require('./commands/help.js');
const Whatis = require('./commands/whatis.js');
const Wis = require('./commands/wis.js');
const Blist = require('./commands/blist.js');
const Tlist = require('./commands/tlist.js');
const Sublist = require('./commands/sublist.js');
const TrapCall = require('./commands/trapcall.js');
const Biome = require('./commands/biome.js');
const Type = require('./commands/type.js');
const Subtype = require('./commands/subtype.js');
const Rank = require('./commands/rank.js');
commented out for sake of sample
*/

const bot = new Discord.Client();

// turns the bot on
bot.on("ready", () => {
    console.log("ready!");

    // Sets the "now playing" to say what players should type first to talk to it; working
    bot.user.setPresence({
        status: 'online',
        game: {
            name: "Type ;help"
        }
    });
});

bot.on("message", (message) => {
    /* this keeps the bot from responding to bot posts and anything
    not starting with ';'  */
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    if (message.content.startsWith(config.prefix)) {
        let args = message.content.split(' ');
        let text = message.content.split(/[ ](.+)/)[1];
        let command = message.content.startsWith(config.prefix) ? args[0].substring(config.prefix.length).toLowerCase() : undefined;

        switch (command) {
            // Grimtooth's Info (aka, Grimtooth's Arrogance); working
            case "info":
                // Info.run(message); <--commented out for sake of sample
				// message.reply is what would be called inside Info
				message.reply('I am Grimtooth, mastermind and purveyor of traps!\n ' +
                  'The traps that I provide are the work of a host of distinguished contributors.');
                break;
		}
	}
});

bot.login(config.token); // for sake of confidentiality, I will not be including the config file. My work is my own, and I prefer it not being stolen/discredited.