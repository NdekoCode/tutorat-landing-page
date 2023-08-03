import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Course } from 'src/app/core/utilities/types'
import { ApiConfigService } from '../api-config/api-config.service'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private apiConfig: ApiConfigService) {}
  getAllCourses(): Observable<Course[]> {
    return this.apiConfig.http.get<Course[]>(
      this.apiConfig.url + '/users/all-courses'
    )
  }
}
