import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { UsersTabList, HelpDeskTabList, AdminTabList, TabTitle} from 'src/app/Model/tabTitle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  links = UsersTabList;
  background: ThemePalette = undefined;
  activeTab = TabTitle.userInfo;
  Tabs = TabTitle;
  role = '';

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.role = sessionStorage.getItem("roleId");
    switch(this.role) {
      case 'HD': this.links = HelpDeskTabList;
      break;
      case 'WA': this.links = AdminTabList;
      break;
      default : this.links = UsersTabList;
      break;
    }
  }

  onLogOut() {
    if(sessionStorage.getItem('login') === 'true') {
      sessionStorage.setItem('login', 'false');
      sessionStorage.removeItem('psno');
      sessionStorage.removeItem('roleId');
      this.route.navigate(['/Login']);
    }
  }

}
