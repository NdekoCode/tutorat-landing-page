import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {
  userId!: number
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id']
  }
}
