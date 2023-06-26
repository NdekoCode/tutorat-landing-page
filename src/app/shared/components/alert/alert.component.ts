import { Component, OnInit } from '@angular/core'
import { AlertColorMap, AlertType } from 'src/app/core/utilities/types'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  alertType: AlertType = 'error'
  alertColorMap: AlertColorMap = {
    error: 'bg-red-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-600',
    infos: 'bg-blue-600'
  }
  isShown: boolean = false
  alertColor: string = ''
  alertTitle: string = ''
  alertMessage: string = ''
  timer: number | undefined
  ngOnInit() {
    this.alertColor = this.alertColorMap[this.alertType]
    this.timer = window.setTimeout(() => {
      this.isShown = false
      window.clearTimeout(this.timer)
    }, 1500)
  }
  closeAlert() {
    this.isShown = !this.isShown
  }
}
