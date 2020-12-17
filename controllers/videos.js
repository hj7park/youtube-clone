/*let importModels = require("../models/videomodels");
let vids = importModels.videos;*/

const { videos, findVid } = require("../models/videomodels");

function showPage(req, res, next) {
    res.render("videos.ejs", {videos});
}

function showVideo(req, res, next) {
    let vid = findVid(req.params.id);
    console.log(vid);
    if(!vid){
        res.redirect("/videos");
    }
    else{
        console.log("no");
        res.render("videosCloneSelect.ejs",{vid});
    }
}


module.exports = {
    showPage,
    showVideo
}