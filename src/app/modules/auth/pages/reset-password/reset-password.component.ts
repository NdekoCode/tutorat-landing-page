import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { GLOBAL_CONSTANTS } from 'src/app/core/utilities/constants'
import {
  ConfirmedValidator,
  passwordValidator
} from 'src/app/core/utilities/forms'
import { isExists } from 'src/app/core/utilities/helpers'
import { Timer } from 'src/app/core/utilities/types'
import { AlertService } from 'src/app/shared/services/alert/alert.service'
import { AuthService } from 'src/app/shared/services/auth/auth.service'
import { VerifyService } from 'src/app/shared/services/auth/verify.service'
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  userPassword = {
    password: '',
    confirmPassword: ''
  }
  timer: Timer
  isChange: boolean = false
  isLoading: boolean = false
  submitForm: boolean = false
  public newPasswordForm!: FormGroup
  viewPassword() {
    this.isChange = !this.isChange
  }
  validVerification: boolean = true
  token!: string
  // eslint-disable-next-line max-params
  constructor(
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private verifyService: VerifyService,
    private authService: AuthService,
    private alertService: AlertService
  ) {}
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
  isSend: boolean = false
  verifiedUser: boolean = false

  hideAlertVerify: boolean = false
  ngOnInit() {
    this.newPasswordForm = this._fb.group(
      {
        ...passwordValidator,
        confirmPassword: ['', [Validators.required]]
      },
      {
        validator: ConfirmedValidator('password', 'confirmPassword')
      }
    )
    this.isSend = true
    this.verifiedUser = false
    this.alertService.alertType = this.validVerification ? 'success' : 'error'

    this.route.queryParams.subscribe((params) => {
      this.token = this.route.snapshot.paramMap.get('token') || params['token']
      if (isExists(this.token)) {
        this.verifyService.verifyResetPasswordToken(this.token).subscribe({
          next: (response) => {
            this.verifiedUser = true
            this.hideAlertVerify = false
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

  saveNewPassword() {
    this.submitForm = false
    this.isLoading = true

    if (this.newPasswordForm.valid) {
      this.authService
        .resetPassword(this.token, this.newPasswordForm.value)
        .subscribe({
          next: (response) => {
            this.submitForm = true
            this.isLoading = false

            this.alertService.initializeAlertColors()
            this.alertService.addAlert(
              'Modification reussis',
              'Vous avez modifier votre mot de passe avec succés ',
              'success'
            )
            setTimeout(() => {
              clearTimeout(this.timer)
            }, GLOBAL_CONSTANTS.AUTH_TIMEOUT_LOGIN)
          },
          error: (err) => {
            this.submitForm = true
            this.isLoading = false

            this.alertService.initializeAlertColors()
            this.alertService.addAlert(
              'Erreur survenus lors de la modification',
              err.error.message
            )
          }
        })
    }
  }
  ngOnDestroy(): void {
    window.clearTimeout(this.timer as number)
  }
}
