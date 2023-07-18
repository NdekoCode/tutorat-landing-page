import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { VerifyService } from 'src/app/shared/services/auth/verify.service'

import { isExists } from 'src/app/core/utilities/helpers'
import { AlertService } from 'src/app/shared/services/alert/alert.service'
@Component({
  selector: 'app-verify',
  templateUrl: './verify-user.component.html'
})
export class VerifyUserComponent implements OnInit {
  validVerification: boolean = true
  token!: string
  constructor(
    private route: ActivatedRoute,
    private verifyService: VerifyService,
    private alertService: AlertService
  ) {}
  isSend: boolean = false
  verifiedUser: boolean = false

  get alert() {
    return this.alertService.alert
  }
  get alertBgColor() {
    return this.alertService.alertBgColor
  }
  get alertColorMap() {
    return this.alertService.alertColorMap
  }
  get alertColor() {
    return this.alertService.alertColor
  }
  get alertBgMap() {
    return this.alertService.alertBgMap
  }
  ngOnInit() {
    this.isSend = true
    this.verifiedUser = false
    this.alertService.alertType = this.validVerification ? 'success' : 'error'

    this.route.queryParams.subscribe((params) => {
      this.token = this.route.snapshot.paramMap.get('token') || params['token']
      if (isExists(this.token)) {
        this.verifyService.verifyUser(this.token).subscribe({
          next: (response) => {
            this.verifiedUser = true
            this.alertService.addAlert(
              'La Verification a reussis',
              response?.message,
              'success'
            )

            this.alertService.alertType = this.validVerification
              ? 'success'
              : 'error'
            this.alertService.initializeAlertColors()
          },
          error: (error) => {
            this.validVerification = false
            if (error.statusCode === 401) {
              this.verifiedUser = false
              this.alertService.addAlert(
                "Erreur survenus lors du verification de l'utilisateur",
                error.error.message
              )
            } else {
              this.alertService.addAlert(
                'La Verification a échouer',
                error.error.message
              )
            }

            this.alertService.alertType = this.validVerification
              ? 'success'
              : 'error'
            this.alertService.initializeAlertColors()
          }
        })
      } else {
        this.alertService.addAlert(
          "Erreur survenus lors du verification de l'utilisateur",
          'Le token que vous avez recuperer dans la requete est vide'
        )
      }
    })
  }
}
