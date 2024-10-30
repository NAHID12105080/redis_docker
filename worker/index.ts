import { createClient } from "redis";

const client = createClient();
client.connect();

async function main() {
  while (1) {
    const response = await client.brPop("submissions", 0);

    await new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });
    console.log("Processing submission");
    // Process the submission
    // ...
  }
}

main();
