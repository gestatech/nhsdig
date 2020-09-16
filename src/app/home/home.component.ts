import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataSource: any[] = [
    {dependency: false, name: 'UK.DM.r4', version: "0.0.41-dev"},
    {dependency: true, name: 'uk.spine.r4', version: "0.0.11-dev"},
    {dependency: true, name: 'uk.core.r4.dev', version: "1.2.0-dev"},
    {dependency: true, name: 'hl7.fhir.r4.core', version: "4.0.1"},
  ];
  displayedColumns: string[] = [ 'name', 'version', 'dependency'];

  dataSource2: any[] = [
    { name: 'EPS API', url: "https://portal.developer.nhs.uk/docs/electronic-prescription-service-api-int/1/overview"},
    { name: 'GP Vaccinations and Emergency Supply', url: "https://developer.nhs.uk/apis/digitalmedicines-1.2.3-private-beta/"},
  ];
  displayedColumns2: string[] = [ 'name'];

  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
