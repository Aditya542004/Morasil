const Moralis = require("moralis").default;

const fs = require("fs");

async function uploadToIpfs() {
  await Moralis.start({
    apiKey: "PHEryqNiOj4fgUjj0QqOElB57dn3rUzKIIgsCtx28dKO8Eff6jVt8R1Fq3OHVU4C"
  });

  const uploadArray = [
    {
      path: "ganpati.jpeg",
      content: fs.readFileSync("./ganpati.jpeg", { encoding: "base64" }),
    },
  ];

  const response = await Moralis.EvmApi.ipfs.uploadFolder({
    abi: uploadArray,
  });

  console.log(response.result);
}

uploadToIpfs();