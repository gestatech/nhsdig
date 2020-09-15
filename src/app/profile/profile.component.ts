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
  These validation rules are taken from [EPS Prescribing Systems Compliance Specification v6.11](https://digital.nhs.uk/binaries/content/assets/website-assets/services/electronic-prescription-service/eps-prescribing-system-mvp/eps-prescribing-systems-compliance-specification-v6_11.pdf)

  Note the rules for \`DM-MedicationRequest\` when used within \`prescription-order-update\` messages are slightly different, they can be found here: {{pagelink:DM-MedicationRequestcancel}}


  | Source Data Item | Target FHIR Element | Additional Conformance |
  |------------------|---------------------|------------------------|
  | Prescription Type | epsPrescriptionType (extension) | An extension containing a code from {{link:https://fhir.nhs.uk/R4/CodeSystem/prescription-type}}.  |
  | repeat authorisation | repeatInformation (extension) | For repeat-prescribing and repeat-dispensing prescriptions only {{link:https://fhir.nhs.uk/R4/StructureDefinition/Extension-UKCore-MedicationRepeatInformation}}.<br><b>MUST</b> be absent for acute medications. |
  | Number Of Repeat Prescriptions Issued | repeatInformation.numberOfRepeatPrescriptionsIssued (extension) |  Running total of number of issues made against a repeat authorisation.   |


 `;

  ngOnInit(): void {
  }

}
