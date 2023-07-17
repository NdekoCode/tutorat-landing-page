import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-overview',
  templateUrl: './u-overview.component.html'
})
export class UOverviewComponent implements OnInit {
  userId!: number
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id']
  }
}
