const client = require("../index");

client.on("ready", async () => {
  console.log(`${client.user.username} Is Online`);
  client.user.setActivity({
    name: `@${client.user.username}`,
    type: "WATCHING",
  });

  // loading database
  require('../handlers/Database')(client)

  client.guilds.cache.forEach(async (guild) => {
    await client.updateembed(client, guild)
  })
});
