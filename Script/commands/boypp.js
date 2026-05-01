const fs = require("fs-extra");
const request = require("request");

module.exports.config = {
 name: "boy pp",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐒𝐀𝐇𝐔",
 description: "Send a random Facebook boy profile picture",
 commandCategory: "Random-IMG",
 usages: "boy pp",
 cooldowns: 2,
 dependencies: {
 "request": "",
 "fs-extra": ""
 }
};

module.exports.run = async ({ api, event }) => {
 const imgLinks = [
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg",
 "https://i.postimg.cc/SsRYWS7D/lumii-20210228-1553458655264327672772936144.jpg"
 ];

 const selectedImage = imgLinks[Math.floor(Math.random() * imgLinks.length)];
 const filePath = `${__dirname}/cache/fb_boy.jpg`;

 const callback = () => {
 api.sendMessage({
 body: " Facebook Boy Profile 🤌",
 attachment: fs.createReadStream(filePath)
 }, event.threadID, () => fs.unlinkSync(filePath));
 };

 request(encodeURI(selectedImage)).pipe(fs.createWriteStream(filePath)).on("close", callback);
};