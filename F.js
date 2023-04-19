function add_user(){
    var username=document.getElementById("username").value;
    localStorage.setItem("user_name",username);
    window.location="index2.html"
}