const { promises } = require("fs");

const { join } = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = (str) => str.split("").reverse().join("");

const otherWayRound = async () => {
  try {
    const files = await promises.readdir(inbox);

    for (const file of files) {
      const inboxFile = join(inbox, file);
      const outboxFile = join(outbox, file);
      const data = await promises.readFile(inboxFile, "utf8");

      await promises.writeFile(outboxFile, reverseText(data));

      console.log(`${file} was successfully saved in the outbox!`);
    }
  } catch (err) {
    console.log(err);
  }
};

otherWayRound();
