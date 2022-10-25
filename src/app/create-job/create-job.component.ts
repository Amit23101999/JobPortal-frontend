import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnologywelcomedataService } from '../service/data/technologywelcomedata.service';
import { ActiveJobs } from './createjob.model';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  companyformdetail=new ActiveJobs();
  // companymessage:any;
  constructor(private router:Router,
    private technologywelcomedata:TechnologywelcomedataService,
    private activateroute:ActivatedRoute) { }
 
  ngOnInit(): void {
  }
  // postjobdetails(): void{
  //  
  // }
  companyformsubmit(company:any){
    let response=this.technologywelcomedata.postcompanyformdetailservice(this.companyformdetail);
    response.subscribe(
      data=>this.companyformdetail=data
    );
     this.router.navigate(['postjob',company]);
  }

}
