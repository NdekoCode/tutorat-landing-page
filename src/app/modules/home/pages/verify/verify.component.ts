import { Component, Input, OnInit } from '@angular/core'
import { AlertColorMap, AlertType } from 'src/app/core/utilities/types'

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html'
})
export class VerifyComponent implements OnInit {
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
  alertType: AlertType = 'error'
  @Input() validVerification: boolean = true
  @Input() isShown: boolean = true
  alertColor: string = ''
  alertBgColor: string = ''
  @Input() alertTitle: string = ''
  @Input() alertMessage: string = ''
  ngOnInit() {
    this.alertType = this.validVerification ? 'success' : 'error'
    this.alertColor = this.alertColorMap[this.alertType]
    this.alertBgColor = this.alertBgMap[this.alertType]
  }
}
