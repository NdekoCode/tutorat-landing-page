import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { VerifyService } from 'src/app/shared/services/verify.service'

import { isExists } from 'src/app/core/utilities/helpers'
import { Alert, AlertColorMap, AlertType } from 'src/app/core/utilities/types'
@Component({
  selector: 'app-verify',
  templateUrl: './verify-user.component.html'
})
export class VerifyUserComponent implements OnInit {
  alertType: AlertType = 'error'
  alert: Alert = {
    isShown: false,
    alertType: 'error',
    alertTitle: '',
    alertMessage: ''
  }
  validVerification: boolean = true
  alertColor: string = ''
  alertBgColor: string = ''
  token!: string
  constructor(
    private route: ActivatedRoute,
    private verifyService: VerifyService
  ) {}
  isSend: boolean = false
  verifiedUser: boolean = false
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
  ngOnInit() {
    this.isSend = true
    this.verifiedUser = false
    this.alertType = this.validVerification ? 'success' : 'error'

    this.route.queryParams.subscribe((params) => {
      this.token = this.route.snapshot.paramMap.get('token') || params['token']
      if (isExists(this.token)) {
        this.verifyService.verifyUser(this.token).subscribe({
          next: (response) => {
            this.verifiedUser = true

            this.alert = {
              isShown: true,
              alertTitle: 'La Verification a reussis',
              alertType: 'success',
              alertMessage: response?.message
            }
            this.alertType = this.validVerification ? 'success' : 'error'
            this.alertColor = this.alertColorMap[this.alertType]
            this.alertBgColor = this.alertBgMap[this.alertType]
          },
          error: (error) => {
            this.validVerification = false
            if (error.statusCode === 401) {
              this.verifiedUser = false
              this.alert = {
                isShown: true,
                alertTitle:
                  "Erreur survenus lors du verification de l'utilisateur",
                alertType: 'error',
                alertMessage: error.error.message
              }
            } else {
              this.alert = {
                isShown: true,
                alertTitle: 'La Verification a échouer',
                alertType: 'error',
                alertMessage: error.error.message
              }
            }

            this.alertType = this.validVerification ? 'success' : 'error'
            this.alertColor = this.alertColorMap[this.alertType]
            this.alertBgColor = this.alertBgMap[this.alertType]
          }
        })
      } else {
        this.alert = {
          isShown: true,
          alertTitle: "Erreur survenus lors du verification de l'utilisateur",
          alertType: 'error',
          alertMessage:
            'Le token que vous avez recuperer dans la requete est vide'
        }
      }
    })
  }
}
