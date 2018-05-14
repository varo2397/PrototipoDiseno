import {Component, ElementRef, OnInit} from '@angular/core';
import {WindowService} from '../../Services/window-size-service';


declare const $: any;
@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css'],
  providers:[WindowService]
})
export class UserSidebarComponent implements OnInit {

  isMobile : boolean;
  constructor(private windowService: WindowService){

    windowService.width$.subscribe((value:any) => {
      this.isMobile = (value > 991) ? false : true;
    });
  }

  ngOnInit() {
    console.log(this.isMobile);
  }



}
