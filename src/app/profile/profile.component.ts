import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/login/auth.service';
import { UserService } from '../authentication/login/user.service';
import { Order, ProfileService } from './profile.service';
import { Key } from '../shopping/cart/cart.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  activeTab: string = 'profile';
  loggedInUser;
  orderList: Order[] = [];
  profileKey: Key;


  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private profileService: ProfileService
  ) {}
  ngOnInit(): void {
    this.loggedInUser = this.userService.getLoggedInUser();
    this.profileKey = {
      name: 'orderInfo',
      id: this.loggedInUser.id,
    }
    this.orderList = this.profileService.getOrderInformation(this.profileKey);
    console.log(this.orderList);
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
  onSaveChanges(): void {
    this.router.navigate(['/home']);
  }
}
