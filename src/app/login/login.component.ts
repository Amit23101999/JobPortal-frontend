import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applicant_details } from '../applyform/applyform.model';
import { AuthenticationService } from '../service/authentication.service';
import { TechnologywelcomedataService } from '../service/data/technologywelcomedata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
              private authenticationservice:AuthenticationService,
              private technologyservice:TechnologywelcomedataService) { }
  //id:string='123456789';
  id:any;
  status:any;
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  ngOnInit(): void {
    console.log();
    
  }
  handlelogin():void{
    //this.userid=this.authenticationservice.authenticate(this.id);

    //this.id=this.userid.id;
    this.technologyservice.getseekerapplystatusservice(this.id).subscribe(
      data=>this.status=data
    );
    // if(this.authenticationservice.authenticate(this.id)){
     // this.router.navigate(['welcomeuserlogin',this.id]);
    //   //console.log('login successful');
    //   this.invalidLogin=false;
    // }
    // else{
    //     this.invalidLogin=true;
    // }
  }
  technologylogin():void{
    this.router.navigate(['technologylist']);
  }
  mediacllogin():void{
    this.router.navigate(['medicallist']);
  }
  humanresourcelogin():void{
    this.router.navigate(['humanresourcelist']);
  }
  marketinglogin():void{
    this.router.navigate(['marketinglist']);
  }
  home():void{
    this.router.navigate(['']);
  }
}
