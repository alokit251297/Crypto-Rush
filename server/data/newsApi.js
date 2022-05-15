const axios = require("axios");

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("a2ac0345b5e44eb58f870194dc41922b");

async function getNewsByKeyword(keyword) {
  if (typeof keyword != "string") {
    throw `Invalid tupe of Keyword`;
  }

  // let result = await axios.get(
  //   `https://newsapi.org/v2/everything?q=${KeyWord}&sortBy=popularity&apiKey=a2ac0345b5e44eb58f870194dc41922b`
  // );
  var config = {
    method: "get",
    url: `https://api.newscatcherapi.com/v2/search?q=${keyword}&search_in=summary&countries=US&page_size=10`,
    headers: {
      "x-api-key": "pYnTwM8RzjFVqVMHuWZH8xbz4mNU4e8NoppwV0neUcI",
    },
  };

  let result = await axios(config);
  return result.data.articles;
}

//getNewsByKeyword();

module.exports = {
  getNewsByKeyword,
};
