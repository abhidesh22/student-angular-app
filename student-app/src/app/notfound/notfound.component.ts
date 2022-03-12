import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {
  path!: string;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.data.pipe(
      take(1)
    ).subscribe((data: any) => {
      this.path = data.path;
    });
  }

}