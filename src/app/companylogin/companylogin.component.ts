import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../companyregister/companyregister.model';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-companylogin',
  templateUrl: './companylogin.component.html',
  styleUrls: ['./companylogin.component.css']
})
export class CompanyloginComponent implements OnInit {

  constructor(private router:Router,
    private authenticationservice:AuthenticationService) { }
companylogindetails=new Login();
errorMessage :any;
invalidLogin = false;


ngOnInit(): void {
//console.log(this.companylogindetails);
console.log();

}
companyhandlelogin():void{
  this.authenticationservice.authenticatecompany(this.companylogindetails).subscribe(
    data=>console.log(data)
  );
  // console.log(this.errorMessage);
  // console.log(this.companylogindetails);
  
  
 // console.log(this.username);
//  if(this.authenticationservice.authenticatecompany(this.companylogindetails).subscribe(
//   data=>this.errorMessage=(data)
//  ))
// {
//   console.log(this.errorMessage);
  
//   this.router.navigate(['companylogin',this.companylogindetails.companyName]);
// }
// else{
//   this.router.navigate(['']);
// }
//console.log('login successful');
this.router.navigate(['companylogin',this.companylogindetails.companyName]);
this.invalidLogin=false;
}
// else{
// this.invalidLogin=true;
// }
backtohome():void{
this.router.navigate(['']);
}
companyregister():void{
  this.router.navigate(['companyregister']);
}
back():void{
  this.router.navigate(['']);
}

}
