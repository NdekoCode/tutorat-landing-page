import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { GLOBAL_CONSTANTS } from 'src/app/core/utilities/constants'
import { AlertColorMap, AlertType } from 'src/app/core/utilities/types'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() alertType: AlertType = 'error'
  @Input() isShown: boolean = false
  @Input() alertTitle: string = ''
  @Input() alertMessage: string = ''

  alertColorMap: AlertColorMap = {
    error: 'bar-error',
    success: 'bar-success',
    warning: 'bar-warning',
    infos: 'bar-infos'
  }
  alertColor: string = ''
  timer: number | undefined
  ngOnInit() {
    this.alertColor = this.alertColorMap[this.alertType]
    this.timer = window.setTimeout(() => {
      this.isShown = false
      window.clearTimeout(this.timer)
    }, GLOBAL_CONSTANTS.ALERT_TIMEOUT)
  }
  closeAlert() {
    this.isShown = !this.isShown
    window.clearTimeout(this.timer)
  }

  ngOnDestroy(): void {
    window.clearTimeout(this.timer as number)
  }
}
