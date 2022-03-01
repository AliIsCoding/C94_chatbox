function addUser() {

    user_name = document.getElementById("user_name").ariaValueMax;

    localStorage.setItem("user_name", user_name);

    window.location = "chatbox_room.html"
}