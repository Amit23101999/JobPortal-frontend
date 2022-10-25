import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TechnologywelcomedataService } from '../service/data/technologywelcomedata.service';
import { Login } from './companyregister.model';

@Component({
  selector: 'app-companyregister',
  templateUrl: './companyregister.component.html',
  styleUrls: ['./companyregister.component.css']
})
export class CompanyregisterComponent implements OnInit {
  responsemessage:any;
  companyregisterdetails=new Login();
  constructor(private router:Router,
              private technologyservice:TechnologywelcomedataService) { }

  ngOnInit(): void {
  }
  companysubmit():void{
    this.technologyservice.companyregisterdetailsservice(this.companyregisterdetails).subscribe(
      data=>console.log(data)
    );
    this.responsemessage=" Submit Successfully!!!"
  }
  backclick():void{
    this.router.navigate(['companylogin']);
  }

}
