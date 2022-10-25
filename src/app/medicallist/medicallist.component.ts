import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { ActiveJobs, TechnologywelcomedataService } from '../service/data/technologywelcomedata.service';

@Component({
  selector: 'app-medicallist',
  templateUrl: './medicallist.component.html',
  styleUrls: ['./medicallist.component.css']
})
export class MedicallistComponent implements OnInit {

  activejobs:ActiveJobs | any;
  constructor(private router:Router,
              private technologywelcomedata:TechnologywelcomedataService) { }

  ngOnInit(): void {
    this.technologywelcomedata.readmedicaldataservice().subscribe(
      data => this.activejobs=data
    );
  }
  applylink(id:any):void{
    this.router.navigate(['applyform',id]);
  }
  back(){
  this.router.navigate(['jobsseekerlogin']);
  }
}
