let videos = [
    {id:"ElmsIGT85tI", title:"Sia - Candy Cane Lane", views:3, thumbnail:"/images/random-dice.jpg"},
    {id:"Dp23mledwW", title:"Gia - Candy Cane Lane", views:23091, thumbnail:"/images/random-dice.jpg"},
    {id:"FgmlqwepC21", title:"Jia - Candy Cane Lane", views:5030, thumbnail:"/images/random-dice.jpg"}
]

function findVid(inputID){
    let vid;
    videos.forEach(function(video){
        if(video.id == inputID)
        {
            vid = video;
        }
    });
    return vid;
}

module.exports ={
    videos,
    findVid
}