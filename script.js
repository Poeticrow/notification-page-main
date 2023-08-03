"use strict";

const notifications = document.querySelectorAll(".notif-section");
const read = document.querySelector(".mark");
const unreadMessages = document.querySelector(".unread-tag");
const message = document.querySelector(".message");
// const noti1 = document.querySelector(".noti1");
// const noti2 = document.querySelector(".noti2");
// const noti3 = document.querySelector(".noti3");
let unread = 0;

notifications.forEach((notification, i) => {
  if (!notification.classList.contains("unread")) {
    notification.classList.add("unread");
  }
  message.classList.add("hidden");
  unread++;
  unreadMessages.textContent = unread;
});


read.addEventListener("click", function () {
  read.style.color = "hsl(219, 9%, 63%);";
  notifications.forEach((notification) => {
    notification.classList.remove("unread");
    message.classList.remove("hidden");
  });
  unread = 0;
  unreadMessages.textContent = "0";
});

notifications.forEach((notification, i) => {
  notification.addEventListener("click", function () {
    if (notification.classList.contains("unread")) {
      unread--;
    }
    unreadMessages.textContent = unread;
    notification.classList.remove("unread");
    if (
      /*
      notification.querySelector(".message").classList.contains("message") &&*/
      i === 3
    )
      message.classList.remove("hidden");
  });
});

