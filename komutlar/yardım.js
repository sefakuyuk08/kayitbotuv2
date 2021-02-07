const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const sefacode= new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`sefa`, client.user.avatarURL) 
      .setDescription('**[Youtube](https://youtube.com/sefacode)**')
      .addField('** Komutlar (2)**', '`erkek`, `kız`')
    .setFooter(``, client.user.avatarURL)
    message.channel.send(sefacode).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yardım'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım Menüsü',
      description: 'bilgi',
};