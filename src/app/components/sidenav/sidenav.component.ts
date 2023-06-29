import { Component } from '@angular/core';
import { sideNavItem } from 'src/app/modules/modules.module';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  sideNaveContent : sideNavItem[] = [
    {
      title:"View Books",
      link: "books/library"
    },
    {
      title:"Manage Books",
      link: "books/maintain"
    },
    {
      title:"Manage Categories",
      link: "books/Categories"
    },
    {
      title:"Return Books",
      link: "books/return"
    },
    {
      title:"View Users",
      link: "users/view"
    },
    {
      title:"All Orders",
      link: "users/all-orders"
    },
    {
      title:"My Orders",
      link: "users/my-orders"
    },

  ]

}
