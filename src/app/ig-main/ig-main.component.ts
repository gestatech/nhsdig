import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ig-main',
  templateUrl: './ig-main.component.html',
  styleUrls: ['./ig-main.component.scss']
})
export class IgMainComponent implements OnInit {

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  constructor(private router: Router
              ) { }

  ngOnInit(): void {
  }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
