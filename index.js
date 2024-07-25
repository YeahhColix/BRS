const { AoiClient, LoadCommands } = require("aoi.js");

const client = new AoiClient({
  token: "MTI2NTkxMDEzMTgyOTI0ODA0MA.GrmiLf.YsgQbm6dwkMLbzOy_MtaeGcuV14b0a8oDfsHyY",
  prefix: "BRS_",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "2e415cf286cee87c6ba3e2ab9b0438b2",
  }
});

client.command({
name: "ping",
code: `Pong! $pingms`
});


const loader = new LoadCommands(client);
loader.load(client.cmd, "./commands")