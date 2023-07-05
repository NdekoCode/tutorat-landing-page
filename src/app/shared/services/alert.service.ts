import { Injectable } from '@angular/core'
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
    error: 'error-color',
    success: 'success-color',
    warning: 'warning-color',
    infos: 'infos-color'
  }

  alertBgMap: AlertColorMap = {
    error: 'bg-error',
    success: 'bg-success',
    warning: 'bg-warning',
    infos: 'bg-infos'
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
