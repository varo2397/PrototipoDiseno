import {Component, ElementRef, OnInit} from '@angular/core';

import { WindowService } from '../../Services/window-size-service';

declare const $: any;
@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css'],
  providers:[WindowService]
})
export class UserNavbarComponent implements OnInit {

  private toggleButton: any;
  private sidebarVisible: boolean;
  private isMobile : boolean;

  constructor(private element: ElementRef,
              private windowService: WindowService){

    windowService.width$.subscribe((value:any) => {
      this.isMobile = (value < 991) ? true : false;
    });
  }

  ngOnInit(){
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function(){
      toggleButton.classList.add('toggled');
    }, 500);
    body.classList.add('nav-open');

    this.sidebarVisible = true;
  };
  sidebarClose() {
    const body = document.getElementsByTagName('body')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    body.classList.remove('nav-open');
  };
  sidebarToggle() {
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  };


}
