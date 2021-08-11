import Noty from 'noty'

function pushNotification (notificationType, title) {
  new Noty({
    type: notificationType,
    text: title,
    theme: 'mint'
  }).show()
}

export const NotificationService = {
  pushErrorNotification: function (title) {
    pushNotification('error', title)
  },
  pushInfoNotification: function (title) {
    pushNotification('information', title)
  },
  pushWarningNotification: function (title) {
    pushNotification('warning', title)
  },
  pushSuccessNotification: function (title) {
    pushNotification('success', title)
  }
}

export default NotificationService
