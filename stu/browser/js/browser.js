var login = document.getElementById('login');
var over = document.getElementById('over');
function show()
{
    login.style.display = "block";
    over.style.display = "block";
}
function hide()
{
    login.style.display = "none";
    over.style.display = "none";
}
if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<9){
    show();
}