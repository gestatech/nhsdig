import { Component, OnInit } from '@angular/core';
import countries from '../../assets/MedicationRequestBundle.json';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  public fhir = countries;

  public basicFlavoredMarkdown = `

  | Url |
  |-----|
  | https://fhir.nhs.uk/R4/StructureDefinition/DM-CommunicationRequest |

  ### Dose Syntax

  Inssert some text here that describes what to do

  ### Controlled Drugs

  Schedule A drugs can only be prescribed with blah blah



 `;

  ngOnInit(): void {
  }

}
