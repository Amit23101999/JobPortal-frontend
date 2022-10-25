import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username:any;
  constructor(private router:Router,
              private authenticationservice:AuthenticationService,
              private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.username=this.activateRoute.snapshot.params['username'];
    console.log(this.username)
  }
  create(): void{
    this.router.navigate(['createjob']);
  }
  post(): void{
    this.router.navigate(['postjob',this.username]);
  }
  backtohome():void{
    this.authenticationservice.logout();
    this.router.navigate([''])
  }
  backhome():void{
    this.router.navigate([''])
  }
}
