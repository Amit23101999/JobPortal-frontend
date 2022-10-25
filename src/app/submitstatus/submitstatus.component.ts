import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnologywelcomedataService } from '../service/data/technologywelcomedata.service';
import { Job_Status } from './submitstatus.model';

@Component({
  selector: 'app-submitstatus',
  templateUrl: './submitstatus.component.html',
  styleUrls: ['./submitstatus.component.css']
})
export class SubmitstatusComponent implements OnInit {

  id:any;
  anymessage:any;
  responsemessage:any;
  statusobj=new Job_Status();
  constructor(private router:Router,
               private activatroute:ActivatedRoute,
               private technologyservice:TechnologywelcomedataService) { }

  ngOnInit(): void {
    this.id=this.activatroute.snapshot.params['id'];
    this.statusobj.applicant_details_id=this.id;
  }
  statussubmit(){
    console.log(this.statusobj);
    this.responsemessage="Status is Changed Successfully";
    
    let response=this.technologyservice.getcompanyresponsestatusservice(this.statusobj);
    response.subscribe(
      data=>this.anymessage=data
    );
  }
  back(){
    this.router.navigate(['companylogin'])
  }

}
