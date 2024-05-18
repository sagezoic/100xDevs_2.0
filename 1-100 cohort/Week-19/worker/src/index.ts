import { createClient } from "redis";

const client = createClient();
client.connect();

async function main() {
  while (1) {
    const response = await client.brPop("submissions", 0);
    // actually run the code docker exec
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // send it to the pub sub
    console.log("Processed users submission: ", response);
  }
}

main();
