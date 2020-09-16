import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-system',
  templateUrl: './code-system.component.html',
  styleUrls: ['./code-system.component.scss']
})
export class CodeSystemComponent implements OnInit {

  dataSource: any[] = [
    { code : "continuous", routerLink: "/codesystem/medicationrequest-course-of-therapy", system: "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy", display: "Continuous long term therapy"},
    { code : "acute", routerLink: "/codesystem/medicationrequest-course-of-therapy",system: "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy", display: "Short course (acute) therapy"},
    { code : "continuous-repeat-dispensing", routerLink: "/codesystem/medicationrequest-course-of-therapy", system: "https://fhir.nhs.uk/R4/CodeSystem/medicationrequest-course-of-therapy", display: "Continuous long term (repeat dispensing)"},
  ];
  displayedColumns: string[] = [ 'code', 'system', 'display'];

  constructor() { }

  ngOnInit(): void {
  }

}
