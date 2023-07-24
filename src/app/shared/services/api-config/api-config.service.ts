import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  url: string = environment.BASE_URL
  constructor(private httpClient: HttpClient, public router: Router) {}
  get http() {
    return this.httpClient
  }
}
