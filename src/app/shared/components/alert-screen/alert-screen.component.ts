import { Component, Input, OnInit } from '@angular/core'
import { AlertColorMap, AlertType } from 'src/app/core/utilities/types'

@Component({
  selector: 'app-alert-screen',
  templateUrl: './alert-screen.component.html',
  styleUrls: ['./alert-screen.component.scss']
})
export class AlertScreenComponent implements OnInit {
  @Input() alertType: AlertType = 'error'
  @Input() isShown: boolean = false
  @Input() alertTitle: string = ''
  @Input() alertMessage: string = ''
  alertColor: string = ''
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

  @Input() validVerification: boolean = true
  alertBgColor: string = ''
  ngOnInit() {
    this.alertType = this.validVerification ? 'success' : 'error'
    this.alertColor = this.alertColorMap[this.alertType]
    this.alertBgColor = this.alertBgMap[this.alertType]
  }
}
