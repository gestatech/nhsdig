import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ig-main',
  templateUrl: './ig-main.component.html',
  styleUrls: ['./ig-main.component.scss']
})
export class IgMainComponent implements OnInit {

  constructor(private router: Router
              ) { }

  ngOnInit(): void {
  }

}
