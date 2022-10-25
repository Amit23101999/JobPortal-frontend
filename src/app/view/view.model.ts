export class Applicant_details {
    jobCode:number;
    company:any;
    // id:number;
    name: any;
    email:any;
    phone:any;
    dob:any;
    qualification:any;
    exp:any;
}
export class job_status{
    constructor(
      public status:string,
      public applicant_details_id:number
    ){}
  }