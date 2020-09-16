import { Component, OnInit } from '@angular/core';
import resource from '../../assets/MedicationRequestBundle.json';

@Component({
  selector: 'app-message-definition',
  templateUrl: './message-definition.component.html',
  styleUrls: ['./message-definition.component.scss']
})
export class MessageDefinitionComponent implements OnInit {

  public fhirResource= resource;

  dataSource: any[] = [
    { profile: 'DM-MedicationRequest', url: '/profile/DM-MedicationRequest', min : "1", max: '*' },
    { profile: 'DM-Patient', url: '/profile/DM-MedicationRequest', min : "1", max: '1' },
    { profile: 'DM-Provenance', url: '/profile/DM-MedicationRequest', min: "0",max: '1'},
    { profile: 'DM-CommunicationRequest', url: '/profile/DM-MedicationRequest', min : "0", max: '*' }
  ];
  displayedColumns: string[] = [ 'profile', 'min', 'max'];

  constructor() { }

  ngOnInit(): void {
  }

}
