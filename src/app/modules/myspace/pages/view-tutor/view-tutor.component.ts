import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-view-tutor',
  templateUrl: './view-tutor.component.html',
  styleUrls: ['./view-tutor.component.scss']
})
export class ViewTutorComponent implements OnInit {
  activeFragment!: string
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        document.querySelector('#' + fragment)?.scrollIntoView()
      }
    })
  }

  isLinkActive(fragment: string): boolean {
    return this.activeFragment === fragment
  }
}
