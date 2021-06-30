import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees:any;
  employee= new Employee();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getEmployeesData();
  }
getEmployeesData(){

  this.dataService.getdata().subscribe( (res: any) => {

    this.employees=res; 

  });

}
insertData(){

  this.dataService.insertData(this.employee).subscribe(res=>{
    this.getEmployeesData();
  })

}
deleteData(id: string){

this.dataService.deleteData(id).subscribe(res => { 

  this.getEmployeesData();

})

}

}
function id(id: any) {
  throw new Error('Function not implemented.');
}

