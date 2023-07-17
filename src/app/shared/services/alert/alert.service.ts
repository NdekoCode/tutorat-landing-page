import { Injectable } from '@angular/core'
import { ALERT_BG_COLORS, ALERT_COLORS } from 'src/app/core/utilities/constants'
import { Alert, AlertColorMap, AlertType } from 'src/app/core/utilities/types'

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alertColor: string = ''
  alertBgColor: string = ''
  alertType: AlertType = 'error'
  alert: Alert = {
    isShown: false,
    alertType: 'error',
    alertTitle: '',
    alertMessage: ''
  }
  alertColorMap: AlertColorMap = {
    error: ALERT_COLORS.error,
    success: ALERT_COLORS.success,
    warning: ALERT_COLORS.warning,
    infos: ALERT_COLORS.infos
  }

  alertBgMap: AlertColorMap = {
    error: ALERT_BG_COLORS.error,
    success: ALERT_BG_COLORS.success,
    warning: ALERT_BG_COLORS.warning,
    infos: ALERT_BG_COLORS.infos
  }

  addAlert(
    alertTitle: string,
    alertMessage: string,
    alertType: AlertType = 'error'
  ) {
    this.alert = {
      isShown: true,
      alertTitle,
      alertType,
      alertMessage
    }
  }

  initializeAlertColors() {
    this.alertColor = this.alertColorMap[this.alertType]
    this.alertBgColor = this.alertBgMap[this.alertType]
  }
}
