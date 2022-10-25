import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveJobs, TechnologywelcomedataService } from '../service/data/technologywelcomedata.service';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {

  companyName:any;
  id:any;
  postedjob:ActiveJobs|any;
  //updatedpostedjob:UpdateActiveJobs|any;
  constructor(private activateroute:ActivatedRoute,
              private technologyservice:TechnologywelcomedataService) { }

  ngOnInit(): void {
    this.companyName=this.activateroute.snapshot.params['companyName'];
    //this.postedjob.companyName=this.companyName;
    this.id=this.activateroute.snapshot.params['id'];
    this.technologyservice.getcompanyformdetailservice(this.id).subscribe(
      data=>this.postedjob=data
    );
  }
  // updatesubmit(id:any){
  //   //console.log(this.postedjob);
  //   //this.postedjob.id=id1;
  //   this.id=id;
  //   //console.log(id1);
  //   // this.updatedpostedjob.role=this.postedjob.role;
  //   // this.updatedpostedjob.exp=this.postedjob.exp;
  //   // this.updatedpostedjob.descrp=this.postedjob.descrp;
  //   // this.updatedpostedjob.salary=this.postedjob.salary;
  //   console.log(this.postedjob);
  //   console.log(this.id);
    
    
  //   this.technologyservice.companyupdatejobservice(this.id,this.postedjob).subscribe(
  //     data=>
  //     console.log(data)
  //   );
  //     //console.log(this.postedjob);
      
  //     //console.log('hi');
  //   // this.technologyservice.postcompanyformdetailservice(this.postedjob).subscribe(
  //   //   data=>console.log(data)
  //   // );
  // }

}
