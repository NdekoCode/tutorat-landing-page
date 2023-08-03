import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { DocumentType } from 'src/app/core/utilities/types'
import { ApiConfigService } from '../api-config/api-config.service'

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  constructor(private apiConfig: ApiConfigService) {}
  getDocumentTypes(): Observable<DocumentType[]> {
    return this.apiConfig.http.get<DocumentType[]>(
      this.apiConfig.url + '/users/document-types'
    )
  }
}
