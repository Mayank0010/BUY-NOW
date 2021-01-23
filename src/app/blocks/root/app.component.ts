import { Component, OnDestroy, OnInit } from '@angular/core';


import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  title(title: any) {
    throw new Error("Method not implemented.");
  }
  
  user: Observable<User>;
  userSubscription: Subscription;
  constructor(private authService: AuthService, private router: Router){
  
  }
  ngOnInit(): void {
    this.user = this.authService.user;
    this.userSubscription = this.authService
      .findMe()
      .subscribe(user => (this.user = user));
  }
  
  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }
  ngOnDestroy(): void {
    if(this.userSubscription){
      this.userSubscription.unsubscribe();
    }
  }
}
