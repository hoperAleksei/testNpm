const Progress = require("progress")

let bar = new Progress(":bar", {total: 100});
let timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
        console.log("You were faggotted just now");
        clearInterval(timer);
    }

}, 100)
