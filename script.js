"use strict"


const notifications = document.querySelectorAll('.notif-section');
const read = document.querySelector('.mark');
const unreadMessages = document.querySelector('.unread-tag');
const message = document.querySelector('.message')


const readM = (not, i) => {
    not.classList.remove('unread')
    if(i = 3) {
        message.classList.remove('hidden')
    } else (
        message.classList.add('hidden')
        )
}
window.addEventListener('DOMContentLoaded', function() {
    
    // const newNotifs = notifs.map(notif => notif.classList.add('unread'))
    
    notifications.forEach((notification,i , arr) => {
        // notification.className += 'unread'
        // notification.classList.add('unread')
        // if(i = 3) {
        //     message.classList.add('hidden')
        // }
        if(!notification.classList.contains('unread')) {
        notification.className += ' unread'
    }
})
})

const notifs = Array.from(notifications)


read.addEventListener('click', function() {
    // console.log('clicked')
    notifications.forEach((notification, i, arr) => {
       readM(notification, i)
    })
})

notifications.forEach((notification, i, arr) => notification.addEventListener('click', function() {
    readM(notification, i)
    }))



// const unreadMess = newNotifs.filter((notif)=> {
//     notif.classList.contains('unread')
// })
 console.log(notifs);
//  console.log(unreadMess);
 

const take = notifs[6].classList.contains('unread');


console.log(take);






