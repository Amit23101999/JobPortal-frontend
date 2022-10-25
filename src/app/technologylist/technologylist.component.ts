import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveJobs, TechnologywelcomedataService } from '../service/data/technologywelcomedata.service';

@Component({
  selector: 'app-technologylist',
  templateUrl: './technologylist.component.html',
  styleUrls: ['./technologylist.component.css']
})
export class TechnologylistComponent implements OnInit {

  activejobs:ActiveJobs | any;
  constructor(private router:Router,
              private technologywelcomedata:TechnologywelcomedataService) { }

  ngOnInit(): void {
    this.technologywelcomedata.readtechnologydataservice().subscribe(
      data => this.activejobs=data
    );
  }
  applylink(id:any):void{
    //console.log(" JobCode :--> "+ id);
    this.router.navigate(['applyform',id]);
  }
  back(){
    this.router.navigate(['jobsseekerlogin']);
  }

}
