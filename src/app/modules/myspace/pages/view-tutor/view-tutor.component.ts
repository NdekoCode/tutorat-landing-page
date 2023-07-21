import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-view-tutor',
  templateUrl: './view-tutor.component.html',
  styleUrls: ['./view-tutor.component.scss']
})
export class ViewTutorComponent implements OnInit {
  activeFragment!: string
  userId!: number
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.userId = this.route.snapshot.params['id']
  }

  isLinkActive(fragment: string): boolean {
    return this.activeFragment === fragment
  }
}
