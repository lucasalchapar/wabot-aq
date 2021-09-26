let handler = async m => m.reply(`

╭─「 Donasi • Naco 」
│ • https://paypal.me/lucasalchapar?locale.x=es_ES
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
