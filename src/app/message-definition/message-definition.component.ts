import { Component, OnInit } from '@angular/core';
import countries from '../../assets/MedicationRequestBundle.json';

@Component({
  selector: 'app-message-definition',
  templateUrl: './message-definition.component.html',
  styleUrls: ['./message-definition.component.scss']
})
export class MessageDefinitionComponent implements OnInit {

  public fhir= countries;

  public basicFlavoredMarkdown = `

 ### Event Coding


 | Category |
 |--|
 | consequence |

 ### Focus


 | Profile | Min | Max |
 |--|--|--|
 |  DM-MedicationRequest}} | 1 | 4 |
 |  DM-Patient | 1 | 1 |
 | DM-Provenance *MUST* for \`$process-message\` API |   0 | 1 |
 | DM-CommunicationRequest | 0 | * |
 `;
  /*

 | [Spine-Practitioner](https://simplifier.net/guide/NHSDigitalSpine/Spine-Practitioner) | 1 | * |
 | [Spine-PractitionerRole](https://simplifier.net/guide/NHSDigitalSpine/Spine-PractitionerRole) | 1 | * |
 | [Spine-Organization](https://simplifier.net/guide/NHSDigitalSpine/Spine-Organization) | 1 | * |


 `;
*/
  constructor() { }

  ngOnInit(): void {
  }

}
