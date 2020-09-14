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
  || repeatInformation.numberOfRepeatPrescriptionsAllowed (extension) | The number of repeat issues authorised if specified. <br> <b>MUST</b> be present where a repeat is authorised for a defined number of issues. <br> <b>MUST</b> NOT be specified where the number of repeat issues has not been defined. Therefore, the numberOfRepeats allowed is the total number of allowed issues.   |
  || repeatInformation.authorisationExpiryDate (extension) | The date a repeat prescription authorisation will expire. |
  | legalAuthenticator |  | A reference to a PractitionerRole used to provide a link to the person (another prescriber) who countersigns the prescription, where legally necessary, before it becomes dispensable. This is a requirement in law and the instances of it are likely to increase.  |
  | Responsible Practitioner | responsiblePractitioner (extension) | Potentially not used in FHIR EPS. <br><br> A reference to the healthcare professional who has direct responsibility for the patient.  |
  | Prescription Endorsements | presecriptionEndorsement (extension) | Endorsements required by NHS Prescription Services of the NHS Business Services Authority (NHSBSA) to aid its eimbursement and remuneration process for the Electronic Prescription Service (EPS).  |
  || identifier | An UUID identifer for {{link:https://fhir.nhs.uk/Id/prescription-order-item-number}} <b>MUST</b> be present |
  || status | The status of the authorisation. |
  || statusReason | The reason for the current status. **MUST** be present for cancelled prescription items. {{pagelink:DM-MedicationRequest-Status-Reason}} |
  | Patient class | category | {{link:https://fhir.nhs.uk/R4/ValueSet/DM-medicationrequest-category}} <br> In secondary care this will be equivalent to the episode/spell class (e.g. inpatient, outpatient, emergency, etc) |
  | Medication Code (SNOMED) | medicationCodeableConcept | Refer to the DM+D implementation guidance documents for more information related to the use of dm+d, including that related to the use of “native” dm+d. These are available from the dm+d web site (http://www.dmd.nhs.uk). <br> <br> Where a medication item is not in the dm+d, current FP10 processes must be followed and no EPS prescription message will be generated. <br> ValueSet should allow [VMP, AMP and VTM concepts](link:https://developer.nhs.uk/apis/dose-syntax-implementation-1-3-2-alpha/#fast-healthcare-interoperability-resources-fhir-and-interopen)   |
  || medicationCodeableConcept.display | DM+D name, not SNOMED CT preferred name |
  | Patient | subject | Reference to a {{pagelink:DM-Patient}} which is a SDS (and so PDS) compliant profile  |
  | Authored On | authoredOn | Authorisation date, when the medication was authorised. <br> Unless there is a distinct user-modifiable date and time for the authorisation, this is the audit trail dateTime for when the authorisation was entered.  |
  | Prescription Author | requestor [Spine-PractitionerRole](https://simplifier.net/guide/NHSDigitalSpine/Spine-PractitionerRole) | Person and their organization requesting authorisation for prescription.  |
  || groupIdentifier | The short form prescription identifier {{link:https://fhir.nhs.uk/Id/prescription-order-number }}  |
  || groupIdentifier.extension (PrescriptionOrderUUID) | Contains the UUID form of the prescription order number  {{link:https://fhir.nhs.uk/Id/prescription}}  |
  || courseOfTherapyType | Code from {{link:https://fhir.nhs.uk/R4/ValueSet/DM-medicationrequest-course-of-therapy}} <br>This field provides an explicit repeat/acute flag rather than deriving it from presence of extension elements or repeatNumber. <br> In exceptional cases where for legacy data there is no prescriptionType recorded in the system then this MUST be populated with the text ‘No information available’. <br> This was extension(prescriptionType) in CareConntect FHIR STU3 MedicationRequest.  |
  || basedOn | Only MedicationRequests with \`intent=plan\` can be referenced  |
  || notes | All notes that are associated with this medication record. Sometimes labelled Pharmacy text or instructions for pharmacy. <br> Should be only be used for information relevant to this prescription and should not be used for patient communication (consider adding Communication resource for items such as surgery opening times or advice to book blood tests). <br> markdown is allowed here but HL7v3 does not support this  |
  || dosageInstructions |  |
  || dosageInstructions.patientInstruction | Additional instructions for patient - that is, RHS of prescription label. |
  || dispenseRequest.performer.identifier (nominatedPharmacy) | Nominated Pharmacy. Patients preferred Pharmacy can be sourced from Patient Demographics Service. Use ODS/ANANA Codes \`https://fhir.nhs.uk/Id/ods-organization-code\` only. |
  || dispenseRequest.performerSiteType (extension) |  |
  || dispenseRequest.controlledDrugsWords (extension) | Is mandatory for scheduled drugs (MedicationRequest.category indicates a scheduled drug).   |
  || dispenseRequest.validityPeriod.start | Use one of the following dates in order of descending preference: <br> - The prescription issue date recorded in the patient record <br> - The date the prescription was recorded. |
  || dispenseRequest.validityPeriod.end | Use one of the following dates in order of descending preference: <br> - The prescription end date recorded in the patient record <br> - The prescription end date derived from period.start and the duration |
  || dispenseRequest.quantity | The quantity to dispense.  |
  || substitution | Should default to false in most cases.  |
  | Digital Signature | eventHistory | <b>MUST</b> for \`$process-message\` API |


 `;

  ngOnInit(): void {
  }

}
