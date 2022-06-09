// https://cythilya.github.io/2017/07/09/notification/
// var notifyConfig = {
//     body: '\\ ^o^ /', // 設定內容
//     // icon: '/images/favicon.ico', // 設定 icon
//     tag: 'newArrival' // 設定標籤
//   };
  
//   if (Notification.permission === 'default' || Notification.permission === 'undefined') {
//     Notification.requestPermission(function(permission) {
//       if (permission === 'granted') {
//         // 使用者同意授權
//         var notification = new Notification('Hi there!', notifyConfig); // 建立通知
//       }
//     });
//   }

var geolocation = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDMZFlOqfBKjKdKCcaFp_lx0XuetbGyg5c';
(function() {
    xhr = new XMLHttpRequest();
    xhr.open('POST', geolocation);
    xhr.onload = function () {
        var response = JSON.parse(this.responseText);
        console.log(response);
        console.log(response.location.lat);
        console.log(response.location.lng);
        if(response.location.lat == 25.0114095 && response.location.lng == 121.4618415){
          alert(response);
        }
    }
    xhr.send();
})();