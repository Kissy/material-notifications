function toggleNotif() {
    var notif = document.querySelector(".notification-container");
    if (notif.classList.contains("notification-closed")) {
        notif.classList.remove("notification-closed");
    } else {
        notif.classList.add("notification-closed");
    }
}