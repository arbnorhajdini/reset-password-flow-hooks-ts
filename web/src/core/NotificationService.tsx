import Noty from 'noty'

function pushNotification (notificationType: any, title: string) {
  new Noty({
    type: notificationType,
    text: title,
    theme: 'mint'
  }).show()
}

export const NotificationService = {
  pushErrorNotification: function (title: string) {
    pushNotification('error', title)
  },
  pushInfoNotification: function (title: string) {
    pushNotification('information', title)
  },
  pushWarningNotification: function (title: string) {
    pushNotification('warning', title)
  },
  pushSuccessNotification: function (title: string) {
    pushNotification('success', title)
  }
}

export default NotificationService
