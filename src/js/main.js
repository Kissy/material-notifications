function toggleNotif() {
    var notif = document.querySelector(".notification");
    if (notif.classList.contains("closed")) {
        notif.classList.remove("closed");
    } else {
        notif.classList.add("closed");
    }
}