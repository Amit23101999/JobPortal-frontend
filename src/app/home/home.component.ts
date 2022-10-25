import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,
              public authenticationservice:AuthenticationService) { }

  ngOnInit(): void {
    console.log();
  }
  companylogin():void{
    this.router.navigate(['companylogin']);
    
  }
  jobseekerlogin():void{
    this.router.navigate(['jobsseekerlogin']);
   
  }

}
