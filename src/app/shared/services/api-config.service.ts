import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {
  url: string = environment.BASE_URL
  constructor(protected httpClient: HttpClient) {}
}
