var notifyConfig = {
    body: '\\ ^o^ /', // 設定內容
    // icon: '/images/favicon.ico', // 設定 icon
    tag: 'newArrival' // 設定標籤
  };
  
  if (Notification.permission === 'default' || Notification.permission === 'undefined') {
    Notification.requestPermission(function(permission) {
      if (permission === 'granted') {
        // 使用者同意授權
        var notification = new Notification('Hi there!', notifyConfig); // 建立通知
      }
    });
  }