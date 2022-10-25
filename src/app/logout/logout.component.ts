import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router,
              private authenticationservice:AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationservice.logout();
  }
  backtohome():void{
    this.router.navigate(['']);
  }

}
