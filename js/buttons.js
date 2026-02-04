document.getElementById("tb-home").setAttribute("data-window", "window-home")

document.getElementById("window-home").setAttribute("data-tbicon", "tb-home")

document.getElementById("home-close").setAttribute("data-window", "window-home")
document.getElementById("home-max").setAttribute("data-window", "window-home")
document.getElementById("home-min").setAttribute("data-window", "window-home")



function closeByID(id){
    var elem = document.getElementById(id)
    var winid = elem.getAttribute("data-window")
    document.getElementById(winid).classList.add("hidden")
    document.getElementById(document.getElementById(winid).getAttribute("data-tbicon")).classList.remove("open");
}
function openByTBID(tbid){
    var elem = document.getElementById(tbid)
    var winid = elem.getAttribute("data-window")
    if (document.getElementById(winid).classList.contains("hidden")){
        document.getElementById(winid).classList.remove("hidden")
        elem.classList.add("open")
        elem.classList.add("active")
    }
}
function toggleByTBID(tbid){
    var elem = document.getElementById(tbid)
    var winid = elem.getAttribute("data-window")
    if (elem.classList.contains("open")){
        if (document.getElementById(winid).classList.contains("hidden")){
            document.getElementById(winid).classList.remove("hidden")
            elem.classList.add("active")
        }
        else {
            document.getElementById(winid).classList.add("hidden")
            elem.classList.remove("active")
        }
    }
}

function minimizeByID(id){
    var elem = document.getElementById(id)
    var winid = elem.getAttribute("data-window")
    document.getElementById(winid).classList.add("hidden")
    document.getElementById(document.getElementById(winid).getAttribute("data-tbicon")).classList.remove("active");
}

function maximizeByID(id){
    var elem = document.getElementById(id)
    var winid = elem.getAttribute("data-window")
    document.getElementById(winid).style.height = "100%";
    document.getElementById(winid).querySelector(".window-body").style.height = "100%";
    document.getElementById(winid).style.width = "100%";
    document.getElementById(winid).querySelector(".window-body").style.width = "100%";
    document.getElementById(document.getElementById(winid).getAttribute("data-tbicon")).classList.remove("active");
}

document.getElementById("home-close").addEventListener('click', () => {closeByID("home-close")});
document.getElementById("home-min").addEventListener('click', () => {minimizeByID("home-min")});
document.getElementById("home-max").addEventListener('click', () => {maximizeByID("home-max")});

document.getElementById("tb-home").addEventListener('dblclick', () => {openByTBID("tb-home")});
document.getElementById("tb-home").addEventListener('click', () => {toggleByTBID("tb-home")});
