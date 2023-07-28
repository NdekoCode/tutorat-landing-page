import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment'
import { UploadService } from '../upload.service'

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  url: string = environment.BASE_URL
  constructor(
    private httpClient: HttpClient,
    public router: Router,
    private uploadService: UploadService
  ) {}
  get http() {
    return this.httpClient
  }
  get upload() {
    return this.uploadService
  }
}
