console.log("date.js required");

exports.getDate = ()=>{
    const date = new Date();
    const options = {day: "numeric", weekday: "long", month: "long"};

    return date.toLocaleDateString("en-US", options)
}


exports.getDay = ()=>{
    const date = new Date();
    const options = {weekday: "long"};

    return date.toLocaleDateString("en-US", options)
}