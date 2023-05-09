const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://halkarz.com";

const arr = [];
async function getData(){
    try {
        const response = await axios.get(url);
        const $= cheerio.load(response.data);
        const halk_arz = $("article");

        halk_arz.each(function(){
            arz_name = $(this).find("div h3 a").text();
            dates = $(this).find("div span time").text();
            arr.push({arz_name,dates});
        });
        
    } catch (error) {
        console.log(error);
    }
    return arr;
}



module.exports = getData();