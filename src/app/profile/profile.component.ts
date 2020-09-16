import { Component, OnInit } from '@angular/core';
import resource from '../../assets/MedicationRequest.json';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  public fhirResource = resource;



  public basicFlavoredMarkdown = `



  ### Dose Syntax

  Inssert some text here that describes what to do

  ### Controlled Drugs

  Schedule A drugs can only be prescribed with blah blah



 `;

  ngOnInit(): void {
  }

}
