const express = require("express");
const app = express();

const axios = require("axios");
const cheerio = require("cheerio");

/*const url = "https://halkarz.com";


async function getData(){
    const arr = [];
    try {
        const response = await axios.get(url);
        const $= cheerio.load(response.data);
        const halk_arz = $("article");

        halk_arz.each(function(){
            arz_name = $(this).find("div h3 a").text();
            dates = $(this).find("div span time").text();
            if(dates!== ''){
                arr.push({arz_name,dates});
            }
            
        });
        
    } catch (error) {
        console.log(error);
    }
    return arr;
}
*/
app.get("/api/", function (req, res) {
    /*let data = getData();
    data.then(function(result){
        result = JSON.stringify(result);
        res.send(result);
    });*/
    res.send("ok");
});

app.listen(8080, _ => {
    console.log("server started on port 8080");
});