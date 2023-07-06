import { TestBed } from '@angular/core/testing'
import { AlertService } from './alert.service'

describe('AlertService', () => {
  let service: AlertService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(AlertService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should initialize alert colors correctly', () => {
    service.alertType = 'error'
    service.initializeAlertColors()
    expect(service.alertColor).toBe('error-color')
    expect(service.alertBgColor).toBe('bg-error')

    service.alertType = 'success'
    service.initializeAlertColors()
    expect(service.alertColor).toBe('success-color')
    expect(service.alertBgColor).toBe('bg-success')

    service.alertType = 'warning'
    service.initializeAlertColors()
    expect(service.alertColor).toBe('warning-color')
    expect(service.alertBgColor).toBe('bg-warning')

    service.alertType = 'infos'
    service.initializeAlertColors()
    expect(service.alertColor).toBe('infos-color')
    expect(service.alertBgColor).toBe('bg-infos')
  })

  it('should add alert correctly', () => {
    service.addAlert('Test Title', 'Test Message', 'success')
    expect(service.alert.isShown).toBe(true)
    expect(service.alert.alertTitle).toBe('Test Title')
    expect(service.alert.alertMessage).toBe('Test Message')
    expect(service.alert.alertType).toBe('success')
  })
})
