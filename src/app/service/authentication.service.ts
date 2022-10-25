import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../companyregister/companyregister.model';
import { TechnologywelcomedataService } from './data/technologywelcomedata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpclient:HttpClient,
              private technologyservice:TechnologywelcomedataService) { }
  authenticate(id:any){
    if(id==='123456789'){
      sessionStorage.setItem("userloginauthenticate",id);
      return true;
    }
    else{
      return false;
    }
  }
  authenticatecompany(companylogindetails:any){
    sessionStorage.setItem("companyloginauthenticate",companylogindetails);
   return this.httpclient.post('http://localhost:8080/login',companylogindetails);
    // if(username==='mjunction'){
    //   sessionStorage.setItem("companyloginauthenticate",username);
    //   return true;
    // }
    // else{
    //   return false;
    // }
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("userloginauthenticate");
    return !(user === null);
  }
  logout(){
    sessionStorage.removeItem("userloginauthenticate");
    sessionStorage.removeItem("companyloginauthenticate");
  }
}
