/* eslint-disable @typescript-eslint/array-type */
// Download Redox | Developer | Test Tools | Redox Data Model API | Typescript
declare module "redox-datamodels" {
  export namespace ClinicalSummary {
    type PatientQuery = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
      };
      Location: {
        Department: string;
      };
    };
    type PatientQueryResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Header: {
        Document: {
          Author: {
            ID: string;
            IDType: string;
            FirstName: string;
            LastName: string;
            Credentials: Array<string>;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Office: string;
            };
            Type: string;
            Location: {
              Type: string;
              Facility: string;
              FacilityIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Department: string;
              DepartmentIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Room: string;
            };
          };
          ID: string;
          SetID: string;
          VersionNumber: number;
          RelatesTo: Array<{
            Code: string;
            ID: string;
            SetID: string;
            VersionNumber: number;
          }>;
          Locale: string;
          Title: string;
          DateTime: string;
          Type: string;
          TypeCode: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          Confidentiality: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          Custodian: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Name: never;
            Type: {
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
              AltCodes: Array<{
                Code: string;
                CodeSystem: string;
                CodeSystemName: string;
                Name: string;
              }>;
            };
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            Telecom: Array<{
              Value: never;
              Use: never;
              System: never;
            }>;
          };
        };
        Patient: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
            Type: string;
          }>;
          Demographics: {
            FirstName: string;
            MiddleName: string;
            LastName: string;
            DOB: string;
            SSN: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              County: string;
              Country: string;
              ZIP: string;
            };
            PhoneNumber: {
              Home: string;
              Mobile: string;
            };
            EmailAddresses: Array<{
              Address: string;
            }>;
            Language: string;
            Race: string;
            RaceCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
            Ethnicity: string;
            EthnicGroupCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
            Religion: string;
            MaritalStatus: string;
            IsDeceased: boolean;
            DeathDateTime: string;
          };
          Organization: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Name: never;
            Type: {
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
              AltCodes: Array<{
                Code: string;
                CodeSystem: string;
                CodeSystemName: string;
                Name: string;
              }>;
            };
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            Telecom: Array<{
              Value: never;
              Use: never;
              System: never;
            }>;
          };
        };
        PCP: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Type: string;
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
      };
      AdvanceDirectivesText: string;
      AdvanceDirectives: Array<{
        Type: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        StartDate: string;
        EndDate: string;
        ExternalReference: string;
        VerifiedBy: Array<{
          FirstName: string;
          LastName: string;
          Credentials: string;
          DateTime: string;
        }>;
        Custodians: Array<{
          FirstName: string;
          LastName: string;
          Credentials: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            Country: string;
            ZIP: string;
          };
        }>;
      }>;
      AllergyText: string;
      Allergies: Array<{
        Type: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Substance: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Reaction: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Severity: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          Text: string;
        }>;
        Severity: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Criticality: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Status: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        IsNegativeIndicator: boolean;
        StartDate: string;
        EndDate: string;
        Comment: string;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      CareTeams: Array<{
        Name: string;
        Status: string;
        Types: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        }>;
        Organization: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Name: never;
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          Telecom: Array<{
            Value: never;
            Use: never;
            System: never;
          }>;
        };
        Encounter: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Status: string;
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          DateTime: string;
          EndDateTime: string;
        };
        Members: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          Telecom: Array<{
            Value: never;
            Use: never;
            System: never;
          }>;
          StartDateTime: string;
          EndDateTime: string;
          Roles: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          }>;
        }>;
      }>;
      EncountersText: string;
      Encounters: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Status: string;
        Type: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        DateTime: string;
        EndDateTime: string;
        Providers: Array<{
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
        }>;
        Locations: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Telecom: Array<{
            Value: never;
            Use: never;
            System: never;
          }>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            Country: string;
            ZIP: string;
          };
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Name: string;
        }>;
        Diagnosis: Array<{
          StartDate: string;
          EndDate: string;
          Status: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          IsNegativeIndicator: boolean;
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Comments: Array<{
            Text: string;
          }>;
        }>;
        ReasonForVisit: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        }>;
        DischargeDisposition: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
      }>;
      FamilyHistoryText: string;
      FamilyHistory: Array<{
        Relation: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          Demographics: {
            Sex: string;
            DOB: string;
          };
          IsDeceased: boolean;
        };
        Problems: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          DateTime: string;
          AgeAtOnset: string;
          IsCauseOfDeath: boolean;
        }>;
      }>;
      FunctionalStatusText: string;
      FunctionalStatus: {
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: string;
          CodedValue: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Value: string;
          Units: string;
          ReferenceRange: {
            Low: number;
            High: number;
            Text: string;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
        Supplies: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
      };
      GoalsText: string;
      Goals: Array<{
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        DateTime: string;
        CodedValue: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Value: string;
        Units: string;
        StartDate: string;
        EndDate: string;
        Priority: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        AchievementStatus: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Milestones: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: string;
          CodedValue: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Value: string;
          Units: string;
          StartDate: string;
          EndDate: string;
          Priority: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          AchievementStatus: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
        }>;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      HealthConcernsText: string;
      HealthConcerns: Array<{
        ConcernType: string;
        Category: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        StartDate: string;
        EndDate: string;
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Value: never;
        Units: never;
        Interpretation: string;
        TargetSite: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: string;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      ImmunizationText: string;
      Immunizations: Array<{
        DateTime: string;
        Route: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: string;
        Product: {
          Manufacturer: string;
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          LotNumber: string;
        };
        Dose: {
          Quantity: string;
          Units: string;
        };
      }>;
      InsurancesText: string;
      Insurances: Array<{
        Plan: {
          ID: string;
          IDType: string;
          Name: string;
          Type: string;
        };
        MemberNumber: string;
        Company: {
          ID: string;
          IDType: string;
          Name: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: string;
        };
        GroupNumber: string;
        GroupName: string;
        EffectiveDate: string;
        ExpirationDate: string;
        PolicyNumber: string;
        Priority: string;
        AgreementType: string;
        CoverageType: string;
        Insured: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          LastName: string;
          MiddleName: string;
          FirstName: string;
          SSN: string;
          Relationship: string;
          DOB: string;
          Sex: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
      }>;
      MedicalEquipmentText: string;
      MedicalEquipment: Array<{
        Status: string;
        StartDate: string;
        Quantity: string;
        Comments: Array<{
          Text: string;
        }>;
        Product: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          DeviceID: string;
          Issuer: string;
          SerialNumber: string;
          DistinctID: string;
          ManufacturerName: string;
          LotNumber: string;
          ManufactureDate: string;
          ExpirationDate: string;
          BrandName: string;
          ModelNumber: string;
          CatalogNumber: string;
          Status: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          SafetyObservations: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          }>;
        };
        Procedure: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
        };
      }>;
      MedicationsText: string;
      Medications: Array<{
        Prescription: boolean;
        FreeTextSig: string;
        Dose: {
          Quantity: string;
          Units: string;
        };
        Rate: {
          Quantity: string;
          Units: string;
        };
        Route: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: string;
        StartDate: string;
        EndDate: string;
        Frequency: {
          Period: string;
          PeriodMax: string;
          Unit: string;
          EventCode: string;
          InstitutionSpecified: boolean;
        };
        NumberOfRefillsRemaining: number;
        IsPRN: boolean;
        Product: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Indications: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        }>;
        SupplyOrder: {
          StartDate: string;
          EndDate: string;
          Quantity: string;
          Units: string;
          NumberOfRefillsRemaining: number;
        };
      }>;
      PlanOfCareText: string;
      PlanOfCare: {
        Orders: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
        Procedures: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
        Encounters: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
        MedicationAdministration: Array<{
          Status: string;
          Dose: {
            Quantity: string;
            Units: string;
          };
          Rate: {
            Quantity: string;
            Units: string;
          };
          Route: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          StartDate: string;
          EndDate: string;
          Frequency: {
            Period: string;
            Unit: string;
          };
          Product: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
        }>;
        Supplies: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
        Services: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
      };
      ProblemsText: string;
      Problems: Array<{
        StartDate: string;
        EndDate: string;
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Category: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Comment: string;
        Comments: Array<{
          Text: string;
        }>;
        HealthStatus: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
      }>;
      ProceduresText: string;
      Procedures: {
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: never;
          Status: never;
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
        Procedures: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: never;
          Status: never;
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
        Services: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: never;
          Status: never;
          Comments: Array<{
            Text: string;
          }>;
        }>;
      };
      ResolvedProblemsText: string;
      ResolvedProblems: Array<{
        StartDate: string;
        EndDate: string;
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Category: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Comment: string;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      ResultText: string;
      Results: Array<{
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Encounter: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Status: string;
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          DateTime: string;
          EndDateTime: string;
        };
        Status: string;
        Producer: {
          ID: string;
          Name: string;
          IDType: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Specimen: {
          CollectionDateTime: never;
          Identifiers: Array<never>;
          Source: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
        };
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          Interpretation: string;
          DateTime: string;
          CodedValue: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Value: string;
          ValueType: string;
          Units: string;
          ReferenceRange: {
            Low: string;
            High: string;
            Text: string;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
      }>;
      SocialHistoryText: string;
      SocialHistory: {
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Value: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          ValueText: string;
          Units: string;
          StartDate: string;
          EndDate: string;
          Comments: Array<{
            Text: string;
          }>;
        }>;
        Pregnancy: Array<{
          StartDate: string;
          EndDate: string;
          EstimatedDelivery: string;
          Comments: Array<{
            Text: string;
          }>;
        }>;
        TobaccoUse: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          IsSmokingStatus: boolean;
          StartDate: string;
          EndDate: string;
          Comments: Array<{
            Text: string;
          }>;
        }>;
      };
      VitalSignsText: string;
      VitalSigns: Array<{
        DateTime: string;
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          Interpretation: string;
          DateTime: string;
          Value: string;
          Units: string;
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
      }>;
    };
    type PatientPush = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Header: {
        DirectAddressFrom: never;
        DirectAddressTo: never;
        Document: {
          Author: {
            ID: string;
            IDType: string;
            FirstName: string;
            LastName: string;
            Credentials: Array<string>;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Office: string;
            };
            Type: string;
            Location: {
              Type: string;
              Facility: string;
              FacilityIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Department: string;
              DepartmentIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Room: string;
            };
          };
          ID: string;
          SetID: string;
          VersionNumber: number;
          RelatesTo: Array<{
            Code: string;
            ID: string;
            SetID: string;
            VersionNumber: number;
          }>;
          Locale: string;
          Title: string;
          DateTime: string;
          Type: string;
          TypeCode: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          Confidentiality: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          Custodian: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Name: never;
            Type: {
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
              AltCodes: Array<{
                Code: string;
                CodeSystem: string;
                CodeSystemName: string;
                Name: string;
              }>;
            };
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            Telecom: Array<{
              Value: never;
              Use: never;
              System: never;
            }>;
          };
          Visit: {
            StartDateTime: string;
            EndDateTime: string;
            Reason: string;
            VisitNumber: string;
            Type: {
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
              AltCodes: Array<{
                Code: string;
                CodeSystem: string;
                CodeSystemName: string;
                Name: string;
              }>;
            };
            Location: {
              Type: string;
              Facility: string;
              FacilityIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Department: string;
              DepartmentIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Room: string;
            };
            DischargeDisposition: {
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
              AltCodes: Array<{
                Code: string;
                CodeSystem: string;
                CodeSystemName: string;
                Name: string;
              }>;
            };
          };
        };
        Patient: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
            Type: string;
          }>;
          Demographics: {
            FirstName: string;
            MiddleName: string;
            LastName: string;
            DOB: string;
            SSN: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              County: string;
              Country: string;
              ZIP: string;
            };
            PhoneNumber: {
              Home: string;
              Mobile: string;
            };
            EmailAddresses: Array<{
              Address: string;
            }>;
            Language: string;
            Race: string;
            RaceCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
            Ethnicity: string;
            EthnicGroupCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
            Religion: string;
            MaritalStatus: string;
            IsDeceased: boolean;
            DeathDateTime: string;
          };
          Organization: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Name: never;
            Type: {
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
              AltCodes: Array<{
                Code: string;
                CodeSystem: string;
                CodeSystemName: string;
                Name: string;
              }>;
            };
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            Telecom: Array<{
              Value: never;
              Use: never;
              System: never;
            }>;
          };
        };
        PCP: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Type: string;
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
      };
      AdvanceDirectivesText: string;
      AdvanceDirectives: Array<{
        Type: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        StartDate: string;
        EndDate: string;
        ExternalReference: string;
        VerifiedBy: Array<{
          FirstName: string;
          LastName: string;
          Credentials: string;
          DateTime: string;
        }>;
        Custodians: Array<{
          FirstName: string;
          LastName: string;
          Credentials: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            Country: string;
            ZIP: string;
          };
        }>;
      }>;
      AllergyText: string;
      Allergies: Array<{
        Type: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Substance: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Reaction: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Severity: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          Text: string;
        }>;
        Severity: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Criticality: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Status: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        IsNegativeIndicator: boolean;
        StartDate: string;
        EndDate: string;
        Comment: string;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      CareTeams: Array<{
        Name: string;
        Status: string;
        Types: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        }>;
        Organization: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Name: never;
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          Telecom: Array<{
            Value: never;
            Use: never;
            System: never;
          }>;
        };
        Encounter: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Status: string;
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          DateTime: string;
          EndDateTime: string;
        };
        Members: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          Telecom: Array<{
            Value: never;
            Use: never;
            System: never;
          }>;
          StartDateTime: string;
          EndDateTime: string;
          Roles: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          }>;
        }>;
      }>;
      EncountersText: string;
      Encounters: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Status: string;
        Type: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        DateTime: string;
        EndDateTime: string;
        Providers: Array<{
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
        }>;
        Locations: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Telecom: Array<{
            Value: never;
            Use: never;
            System: never;
          }>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            Country: string;
            ZIP: string;
          };
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Name: string;
        }>;
        Diagnosis: Array<{
          StartDate: string;
          EndDate: string;
          Status: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          IsNegativeIndicator: boolean;
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Comments: Array<{
            Text: string;
          }>;
        }>;
        ReasonForVisit: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        }>;
        DischargeDisposition: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
      }>;
      FamilyHistoryText: string;
      FamilyHistory: Array<{
        Relation: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          Demographics: {
            Sex: string;
            DOB: string;
          };
          IsDeceased: boolean;
        };
        Problems: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          DateTime: string;
          AgeAtOnset: string;
          IsCauseOfDeath: boolean;
        }>;
      }>;
      FunctionalStatusText: string;
      FunctionalStatus: {
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: string;
          CodedValue: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Value: string;
          Units: string;
          ReferenceRange: {
            Low: number;
            High: number;
            Text: string;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
        Supplies: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
      };
      GoalsText: string;
      Goals: Array<{
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        DateTime: string;
        CodedValue: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Value: string;
        Units: string;
        StartDate: string;
        EndDate: string;
        Priority: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        AchievementStatus: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Milestones: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: string;
          CodedValue: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Value: string;
          Units: string;
          StartDate: string;
          EndDate: string;
          Priority: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          AchievementStatus: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
        }>;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      HealthConcernsText: string;
      HealthConcerns: Array<{
        ConcernType: string;
        Category: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        StartDate: string;
        EndDate: string;
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Value: never;
        Units: never;
        Interpretation: string;
        TargetSite: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: string;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      ImmunizationText: string;
      Immunizations: Array<{
        DateTime: string;
        Route: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: string;
        Product: {
          Manufacturer: string;
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          LotNumber: string;
        };
        Dose: {
          Quantity: string;
          Units: string;
        };
      }>;
      InsurancesText: string;
      Insurances: Array<{
        Plan: {
          ID: string;
          IDType: string;
          Name: string;
          Type: string;
        };
        MemberNumber: string;
        Company: {
          ID: string;
          IDType: string;
          Name: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: string;
        };
        GroupNumber: string;
        GroupName: string;
        EffectiveDate: string;
        ExpirationDate: string;
        PolicyNumber: string;
        Priority: string;
        AgreementType: string;
        CoverageType: string;
        Insured: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          LastName: string;
          MiddleName: string;
          FirstName: string;
          SSN: string;
          Relationship: string;
          DOB: string;
          Sex: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
      }>;
      MedicalHistoryText: string;
      MedicalEquipmentText: string;
      MedicalEquipment: Array<{
        Status: string;
        StartDate: string;
        Quantity: string;
        Comments: Array<{
          Text: string;
        }>;
        Product: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          DeviceID: string;
          Issuer: string;
          SerialNumber: string;
          DistinctID: string;
          ManufacturerName: string;
          LotNumber: string;
          ManufactureDate: string;
          ExpirationDate: string;
          BrandName: string;
          ModelNumber: string;
          CatalogNumber: string;
          Status: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          SafetyObservations: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          }>;
        };
        Procedure: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
        };
      }>;
      MedicationsText: string;
      Medications: Array<{
        Prescription: boolean;
        FreeTextSig: string;
        Dose: {
          Quantity: string;
          Units: string;
        };
        Rate: {
          Quantity: string;
          Units: string;
        };
        Route: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: string;
        StartDate: string;
        EndDate: string;
        Frequency: {
          Period: string;
          PeriodMax: string;
          Unit: string;
          EventCode: string;
          InstitutionSpecified: boolean;
        };
        NumberOfRefillsRemaining: number;
        IsPRN: boolean;
        Product: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Indications: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        }>;
        SupplyOrder: {
          StartDate: string;
          EndDate: string;
          Quantity: string;
          Units: string;
          NumberOfRefillsRemaining: number;
        };
      }>;
      NoteSections: Array<{
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Title: string;
        Text: string;
        Notes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          ContentType: string;
          FileContents: string;
          DateTime: string;
          Status: string;
          Encounter: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Status: string;
            Type: {
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
              AltCodes: Array<{
                Code: string;
                CodeSystem: string;
                CodeSystemName: string;
                Name: string;
              }>;
            };
            DateTime: string;
            EndDateTime: string;
          };
        }>;
      }>;
      PlanOfCareText: string;
      PlanOfCare: {
        Orders: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
        Procedures: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
        Encounters: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
        MedicationAdministration: Array<{
          Status: string;
          Dose: {
            Quantity: string;
            Units: string;
          };
          Rate: {
            Quantity: string;
            Units: string;
          };
          Route: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          StartDate: string;
          EndDate: string;
          Frequency: {
            Period: string;
            Unit: string;
          };
          Product: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
        }>;
        Supplies: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
        Services: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
      };
      ProblemsText: string;
      Problems: Array<{
        StartDate: string;
        EndDate: string;
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Category: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Comment: string;
        Comments: Array<{
          Text: string;
        }>;
        HealthStatus: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
      }>;
      ProceduresText: string;
      Procedures: {
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: never;
          Status: never;
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
        Procedures: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: never;
          Status: never;
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
        Services: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: never;
          Status: never;
          Comments: Array<{
            Text: string;
          }>;
        }>;
      };
      ResolvedProblemsText: string;
      ResolvedProblems: Array<{
        StartDate: string;
        EndDate: string;
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Category: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Comment: string;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      ResultText: string;
      Results: Array<{
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Encounter: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Status: string;
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          DateTime: string;
          EndDateTime: string;
        };
        Status: string;
        Producer: {
          ID: string;
          Name: string;
          IDType: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Specimen: {
          CollectionDateTime: never;
          Identifiers: Array<never>;
          Source: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
        };
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          Interpretation: string;
          DateTime: string;
          CodedValue: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Value: string;
          ValueType: string;
          Units: string;
          ReferenceRange: {
            Low: string;
            High: string;
            Text: string;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
      }>;
      SocialHistoryText: string;
      SocialHistory: {
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Value: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          ValueText: string;
          Units: string;
          StartDate: string;
          EndDate: string;
          Comments: Array<{
            Text: string;
          }>;
        }>;
        Pregnancy: Array<{
          StartDate: string;
          EndDate: string;
          EstimatedDelivery: string;
          Comments: Array<{
            Text: string;
          }>;
        }>;
        TobaccoUse: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          IsSmokingStatus: boolean;
          StartDate: string;
          EndDate: string;
          Comments: Array<{
            Text: string;
          }>;
        }>;
      };
      VitalSignsText: string;
      VitalSigns: Array<{
        DateTime: string;
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          Interpretation: string;
          DateTime: string;
          Value: string;
          Units: string;
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
      }>;
    };
    type VisitQuery = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
      };
      Visit: {
        VisitNumber: string;
        StartDateTime: string;
        EndDateTime: string;
      };
    };
    type VisitQueryResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Header: {
        Document: {
          Author: {
            ID: string;
            IDType: string;
            FirstName: string;
            LastName: string;
            Credentials: Array<string>;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Office: string;
            };
            Type: string;
            Location: {
              Type: string;
              Facility: string;
              FacilityIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Department: string;
              DepartmentIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Room: string;
            };
          };
          ID: string;
          SetID: string;
          VersionNumber: number;
          RelatesTo: Array<{
            Code: string;
            ID: string;
            SetID: string;
            VersionNumber: number;
          }>;
          Locale: string;
          Title: string;
          DateTime: string;
          Type: string;
          TypeCode: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          Confidentiality: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          Custodian: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Name: never;
            Type: {
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
              AltCodes: Array<{
                Code: string;
                CodeSystem: string;
                CodeSystemName: string;
                Name: string;
              }>;
            };
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            Telecom: Array<{
              Value: never;
              Use: never;
              System: never;
            }>;
          };
          Visit: {
            StartDateTime: string;
            EndDateTime: string;
            Reason: string;
            VisitNumber: string;
            Type: {
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
              AltCodes: Array<{
                Code: string;
                CodeSystem: string;
                CodeSystemName: string;
                Name: string;
              }>;
            };
            Location: {
              Type: string;
              Facility: string;
              FacilityIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Department: string;
              DepartmentIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Room: string;
            };
            DischargeDisposition: {
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
              AltCodes: Array<{
                Code: string;
                CodeSystem: string;
                CodeSystemName: string;
                Name: string;
              }>;
            };
          };
        };
        Patient: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
            Type: string;
          }>;
          Demographics: {
            FirstName: string;
            MiddleName: string;
            LastName: string;
            DOB: string;
            SSN: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              County: string;
              Country: string;
              ZIP: string;
            };
            PhoneNumber: {
              Home: string;
              Mobile: string;
            };
            EmailAddresses: Array<{
              Address: string;
            }>;
            Language: string;
            Race: string;
            RaceCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
            Ethnicity: string;
            EthnicGroupCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
            Religion: string;
            MaritalStatus: string;
            IsDeceased: boolean;
            DeathDateTime: string;
          };
          Organization: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Name: never;
            Type: {
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
              AltCodes: Array<{
                Code: string;
                CodeSystem: string;
                CodeSystemName: string;
                Name: string;
              }>;
            };
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            Telecom: Array<{
              Value: never;
              Use: never;
              System: never;
            }>;
          };
        };
        PCP: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Type: string;
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
      };
      AdmissionDiagnosisText: string;
      AdmissionDiagnosis: Array<{
        StartDate: string;
        EndDate: string;
        Status: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        IsNegativeIndicator: boolean;
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      AdvanceDirectivesText: string;
      AdvanceDirectives: Array<{
        Type: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        StartDate: string;
        EndDate: string;
        ExternalReference: string;
        VerifiedBy: Array<{
          FirstName: string;
          LastName: string;
          Credentials: string;
          DateTime: string;
        }>;
        Custodians: Array<{
          FirstName: string;
          LastName: string;
          Credentials: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            Country: string;
            ZIP: string;
          };
        }>;
      }>;
      AllergyText: string;
      Allergies: Array<{
        Type: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Substance: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Reaction: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Severity: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          Text: string;
        }>;
        Severity: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Criticality: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Status: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        IsNegativeIndicator: boolean;
        StartDate: string;
        EndDate: string;
        Comment: string;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      AssessmentText: string;
      Assessment: {
        Diagnoses: Array<{
          Value: string;
          DateTime: string;
          IsNegativeIndicator: boolean;
          Codes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Comments: Array<{
            Text: string;
          }>;
        }>;
      };
      CareTeams: Array<{
        Name: string;
        Status: string;
        Types: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        }>;
        Organization: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Name: never;
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          Telecom: Array<{
            Value: never;
            Use: never;
            System: never;
          }>;
        };
        Encounter: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Status: string;
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          DateTime: string;
          EndDateTime: string;
        };
        Members: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          Telecom: Array<{
            Value: never;
            Use: never;
            System: never;
          }>;
          StartDateTime: string;
          EndDateTime: string;
          Roles: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          }>;
        }>;
      }>;
      ChiefComplaintText: string;
      DischargeDiagnosisText: string;
      DischargeDiagnosis: Array<{
        StartDate: string;
        EndDate: string;
        Status: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        IsNegativeIndicator: boolean;
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      DischargeMedicationsText: string;
      DischargeMedications: Array<{
        Prescription: boolean;
        FreeTextSig: string;
        Dose: {
          Quantity: string;
          Units: string;
        };
        Rate: {
          Quantity: string;
          Units: string;
        };
        Route: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: string;
        StartDate: string;
        EndDate: string;
        Frequency: {
          Period: string;
          PeriodMax: string;
          Unit: string;
          EventCode: string;
          InstitutionSpecified: boolean;
        };
        NumberOfRefillsRemaining: number;
        IsPRN: boolean;
        Product: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Indications: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        }>;
        SupplyOrder: {
          StartDate: string;
          EndDate: string;
          Quantity: string;
          Units: string;
          NumberOfRefillsRemaining: number;
        };
      }>;
      EncountersText: string;
      Encounters: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Status: string;
        Type: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        DateTime: string;
        EndDateTime: string;
        Providers: Array<{
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
        }>;
        Locations: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Telecom: Array<{
            Value: never;
            Use: never;
            System: never;
          }>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            Country: string;
            ZIP: string;
          };
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Name: string;
        }>;
        Diagnosis: Array<{
          StartDate: string;
          EndDate: string;
          Status: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          IsNegativeIndicator: boolean;
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Comments: Array<{
            Text: string;
          }>;
        }>;
        ReasonForVisit: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        }>;
        DischargeDisposition: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
      }>;
      FamilyHistoryText: string;
      FamilyHistory: Array<{
        Relation: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          Demographics: {
            Sex: string;
            DOB: string;
          };
          IsDeceased: boolean;
        };
        Problems: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          DateTime: string;
          AgeAtOnset: string;
          IsCauseOfDeath: boolean;
        }>;
      }>;
      FunctionalStatusText: string;
      FunctionalStatus: {
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: string;
          CodedValue: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Value: string;
          Units: string;
          ReferenceRange: {
            Low: number;
            High: number;
            Text: string;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
        Supplies: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
      };
      GoalsText: string;
      Goals: Array<{
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        DateTime: string;
        CodedValue: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Value: string;
        Units: string;
        StartDate: string;
        EndDate: string;
        Priority: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        AchievementStatus: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Milestones: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: string;
          CodedValue: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Value: string;
          Units: string;
          StartDate: string;
          EndDate: string;
          Priority: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          AchievementStatus: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
        }>;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      HealthConcernsText: string;
      HealthConcerns: Array<{
        ConcernType: string;
        Category: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        StartDate: string;
        EndDate: string;
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Value: never;
        Units: never;
        Interpretation: string;
        TargetSite: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: string;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      HistoryOfPresentIllnessText: string;
      ImmunizationText: string;
      Immunizations: Array<{
        DateTime: string;
        Route: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: string;
        Product: {
          Manufacturer: string;
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          LotNumber: string;
        };
        Dose: {
          Quantity: string;
          Units: string;
        };
      }>;
      InstructionsText: string;
      Instructions: Array<{
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Text: string;
      }>;
      InsurancesText: string;
      Insurances: Array<{
        Plan: {
          ID: string;
          IDType: string;
          Name: string;
          Type: string;
        };
        MemberNumber: string;
        Company: {
          ID: string;
          IDType: string;
          Name: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: string;
        };
        GroupNumber: string;
        GroupName: string;
        EffectiveDate: string;
        ExpirationDate: string;
        PolicyNumber: string;
        Priority: string;
        AgreementType: string;
        CoverageType: string;
        Insured: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          LastName: string;
          MiddleName: string;
          FirstName: string;
          SSN: string;
          Relationship: string;
          DOB: string;
          Sex: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
      }>;
      InterventionsText: string;
      MedicalEquipmentText: string;
      MedicalEquipment: Array<{
        Status: string;
        StartDate: string;
        Quantity: string;
        Comments: Array<{
          Text: string;
        }>;
        Product: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          DeviceID: string;
          Issuer: string;
          SerialNumber: string;
          DistinctID: string;
          ManufacturerName: string;
          LotNumber: string;
          ManufactureDate: string;
          ExpirationDate: string;
          BrandName: string;
          ModelNumber: string;
          CatalogNumber: string;
          Status: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          SafetyObservations: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          }>;
        };
        Procedure: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
        };
      }>;
      MedicationsText: string;
      Medications: Array<{
        Prescription: boolean;
        FreeTextSig: string;
        Dose: {
          Quantity: string;
          Units: string;
        };
        Rate: {
          Quantity: string;
          Units: string;
        };
        Route: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: string;
        StartDate: string;
        EndDate: string;
        Frequency: {
          Period: string;
          PeriodMax: string;
          Unit: string;
          EventCode: string;
          InstitutionSpecified: boolean;
        };
        NumberOfRefillsRemaining: number;
        IsPRN: boolean;
        Product: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Indications: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        }>;
        SupplyOrder: {
          StartDate: string;
          EndDate: string;
          Quantity: string;
          Units: string;
          NumberOfRefillsRemaining: number;
        };
      }>;
      MedicationsAdministeredText: string;
      MedicationsAdministered: Array<{
        Dose: {
          Quantity: string;
          Units: string;
        };
        Rate: {
          Quantity: string;
          Units: string;
        };
        Route: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        StartDate: string;
        EndDate: string;
        Frequency: {
          Period: string;
          Unit: string;
        };
        Product: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        ReasonNotGiven: string;
      }>;
      ObjectiveText: string;
      PhysicalExamText: string;
      PlanOfCareText: string;
      PlanOfCare: {
        Orders: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
        Procedures: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
        Encounters: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
        MedicationAdministration: Array<{
          Status: string;
          Dose: {
            Quantity: string;
            Units: string;
          };
          Rate: {
            Quantity: string;
            Units: string;
          };
          Route: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          StartDate: string;
          EndDate: string;
          Frequency: {
            Period: string;
            Unit: string;
          };
          Product: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
        }>;
        Supplies: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
        Services: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
      };
      ProblemsText: string;
      Problems: Array<{
        StartDate: string;
        EndDate: string;
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Category: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Comment: string;
        Comments: Array<{
          Text: string;
        }>;
        HealthStatus: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
      }>;
      ProceduresText: string;
      Procedures: {
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: never;
          Status: never;
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
        Procedures: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: never;
          Status: never;
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
        Services: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: never;
          Status: never;
          Comments: Array<{
            Text: string;
          }>;
        }>;
      };
      ResolvedProblemsText: string;
      ResolvedProblems: Array<{
        StartDate: string;
        EndDate: string;
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Category: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Comment: string;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      ReasonForReferralText: string;
      ReasonForVisitText: string;
      ReasonForVisit: Array<{
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Category: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
      }>;
      ResultText: string;
      Results: Array<{
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Encounter: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Status: string;
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          DateTime: string;
          EndDateTime: string;
        };
        Status: string;
        Producer: {
          ID: string;
          Name: string;
          IDType: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Specimen: {
          CollectionDateTime: never;
          Identifiers: Array<never>;
          Source: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
        };
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          Interpretation: string;
          DateTime: string;
          CodedValue: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Value: string;
          ValueType: string;
          Units: string;
          ReferenceRange: {
            Low: string;
            High: string;
            Text: string;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
      }>;
      ReviewOfSystemsText: string;
      SocialHistoryText: string;
      SocialHistory: {
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Value: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          ValueText: string;
          Units: string;
          StartDate: string;
          EndDate: string;
          Comments: Array<{
            Text: string;
          }>;
        }>;
        Pregnancy: Array<{
          StartDate: string;
          EndDate: string;
          EstimatedDelivery: string;
          Comments: Array<{
            Text: string;
          }>;
        }>;
        TobaccoUse: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          IsSmokingStatus: boolean;
          StartDate: string;
          EndDate: string;
          Comments: Array<{
            Text: string;
          }>;
        }>;
      };
      SubjectiveText: string;
      VitalSignsText: string;
      VitalSigns: Array<{
        DateTime: string;
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          Interpretation: string;
          DateTime: string;
          Value: string;
          Units: string;
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
      }>;
    };
    type VisitPush = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Header: {
        DirectAddressFrom: never;
        DirectAddressTo: never;
        Document: {
          Author: {
            ID: string;
            IDType: string;
            FirstName: string;
            LastName: string;
            Credentials: Array<string>;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Office: string;
            };
            Type: string;
            Location: {
              Type: string;
              Facility: string;
              FacilityIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Department: string;
              DepartmentIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Room: string;
            };
          };
          ID: string;
          SetID: string;
          VersionNumber: number;
          RelatesTo: Array<{
            Code: string;
            ID: string;
            SetID: string;
            VersionNumber: number;
          }>;
          Locale: string;
          Title: string;
          DateTime: string;
          Type: string;
          TypeCode: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          Confidentiality: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          Custodian: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Name: never;
            Type: {
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
              AltCodes: Array<{
                Code: string;
                CodeSystem: string;
                CodeSystemName: string;
                Name: string;
              }>;
            };
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            Telecom: Array<{
              Value: never;
              Use: never;
              System: never;
            }>;
          };
          Visit: {
            StartDateTime: string;
            EndDateTime: string;
            Reason: string;
            VisitNumber: string;
            Type: {
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
              AltCodes: Array<{
                Code: string;
                CodeSystem: string;
                CodeSystemName: string;
                Name: string;
              }>;
            };
            Location: {
              Type: string;
              Facility: string;
              FacilityIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Department: string;
              DepartmentIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Room: string;
            };
            DischargeDisposition: {
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
              AltCodes: Array<{
                Code: string;
                CodeSystem: string;
                CodeSystemName: string;
                Name: string;
              }>;
            };
          };
        };
        Patient: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
            Type: string;
          }>;
          Demographics: {
            FirstName: string;
            MiddleName: string;
            LastName: string;
            DOB: string;
            SSN: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              County: string;
              Country: string;
              ZIP: string;
            };
            PhoneNumber: {
              Home: string;
              Mobile: string;
            };
            EmailAddresses: Array<{
              Address: string;
            }>;
            Language: string;
            Race: string;
            RaceCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
            Ethnicity: string;
            EthnicGroupCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
            Religion: string;
            MaritalStatus: string;
            IsDeceased: boolean;
            DeathDateTime: string;
          };
          Organization: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Name: never;
            Type: {
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
              AltCodes: Array<{
                Code: string;
                CodeSystem: string;
                CodeSystemName: string;
                Name: string;
              }>;
            };
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            Telecom: Array<{
              Value: never;
              Use: never;
              System: never;
            }>;
          };
        };
        PCP: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Type: string;
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
      };
      AdmissionDiagnosisText: string;
      AdmissionDiagnosis: Array<{
        StartDate: string;
        EndDate: string;
        Status: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        IsNegativeIndicator: boolean;
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      AdvanceDirectivesText: string;
      AdvanceDirectives: Array<{
        Type: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        StartDate: string;
        EndDate: string;
        ExternalReference: string;
        VerifiedBy: Array<{
          FirstName: string;
          LastName: string;
          Credentials: string;
          DateTime: string;
        }>;
        Custodians: Array<{
          FirstName: string;
          LastName: string;
          Credentials: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            Country: string;
            ZIP: string;
          };
        }>;
      }>;
      AllergyText: string;
      Allergies: Array<{
        Type: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Substance: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Reaction: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Severity: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          Text: string;
        }>;
        Severity: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Criticality: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Status: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        IsNegativeIndicator: boolean;
        StartDate: string;
        EndDate: string;
        Comment: string;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      AssessmentText: string;
      Assessment: {
        Diagnoses: Array<{
          Value: string;
          DateTime: string;
          IsNegativeIndicator: boolean;
          Codes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Comments: Array<{
            Text: string;
          }>;
        }>;
      };
      CareTeams: Array<{
        Name: string;
        Status: string;
        Types: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        }>;
        Organization: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Name: never;
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          Telecom: Array<{
            Value: never;
            Use: never;
            System: never;
          }>;
        };
        Encounter: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Status: string;
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          DateTime: string;
          EndDateTime: string;
        };
        Members: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          Telecom: Array<{
            Value: never;
            Use: never;
            System: never;
          }>;
          StartDateTime: string;
          EndDateTime: string;
          Roles: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          }>;
        }>;
      }>;
      ChiefComplaintText: string;
      DischargeDiagnosisText: string;
      DischargeDiagnosis: Array<{
        StartDate: string;
        EndDate: string;
        Status: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        IsNegativeIndicator: boolean;
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      DischargeMedicationsText: string;
      DischargeMedications: Array<{
        Prescription: boolean;
        FreeTextSig: string;
        Dose: {
          Quantity: string;
          Units: string;
        };
        Rate: {
          Quantity: string;
          Units: string;
        };
        Route: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: string;
        StartDate: string;
        EndDate: string;
        Frequency: {
          Period: string;
          PeriodMax: string;
          Unit: string;
          EventCode: string;
          InstitutionSpecified: boolean;
        };
        NumberOfRefillsRemaining: number;
        IsPRN: boolean;
        Product: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Indications: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        }>;
        SupplyOrder: {
          StartDate: string;
          EndDate: string;
          Quantity: string;
          Units: string;
          NumberOfRefillsRemaining: number;
        };
      }>;
      EncountersText: string;
      Encounters: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Status: string;
        Type: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        DateTime: string;
        EndDateTime: string;
        Providers: Array<{
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
        }>;
        Locations: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Telecom: Array<{
            Value: never;
            Use: never;
            System: never;
          }>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            Country: string;
            ZIP: string;
          };
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Name: string;
        }>;
        Diagnosis: Array<{
          StartDate: string;
          EndDate: string;
          Status: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          IsNegativeIndicator: boolean;
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Comments: Array<{
            Text: string;
          }>;
        }>;
        ReasonForVisit: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        }>;
        DischargeDisposition: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
      }>;
      FamilyHistoryText: string;
      FamilyHistory: Array<{
        Relation: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          Demographics: {
            Sex: string;
            DOB: string;
          };
          IsDeceased: boolean;
        };
        Problems: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          DateTime: string;
          AgeAtOnset: string;
          IsCauseOfDeath: boolean;
        }>;
      }>;
      FunctionalStatusText: string;
      FunctionalStatus: {
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: string;
          CodedValue: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Value: string;
          Units: string;
          ReferenceRange: {
            Low: number;
            High: number;
            Text: string;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
        Supplies: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
      };
      GoalsText: string;
      Goals: Array<{
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        DateTime: string;
        CodedValue: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Value: string;
        Units: string;
        StartDate: string;
        EndDate: string;
        Priority: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        AchievementStatus: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Milestones: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: string;
          CodedValue: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Value: string;
          Units: string;
          StartDate: string;
          EndDate: string;
          Priority: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          AchievementStatus: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
        }>;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      HealthConcernsText: string;
      HealthConcerns: Array<{
        ConcernType: string;
        Category: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        StartDate: string;
        EndDate: string;
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Value: never;
        Units: never;
        Interpretation: string;
        TargetSite: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: string;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      HistoryOfPresentIllnessText: string;
      ImmunizationText: string;
      Immunizations: Array<{
        DateTime: string;
        Route: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: string;
        Product: {
          Manufacturer: string;
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          LotNumber: string;
        };
        Dose: {
          Quantity: string;
          Units: string;
        };
      }>;
      InstructionsText: string;
      Instructions: Array<{
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Text: string;
      }>;
      InsurancesText: string;
      Insurances: Array<{
        Plan: {
          ID: string;
          IDType: string;
          Name: string;
          Type: string;
        };
        MemberNumber: string;
        Company: {
          ID: string;
          IDType: string;
          Name: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: string;
        };
        GroupNumber: string;
        GroupName: string;
        EffectiveDate: string;
        ExpirationDate: string;
        PolicyNumber: string;
        Priority: string;
        AgreementType: string;
        CoverageType: string;
        Insured: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          LastName: string;
          MiddleName: string;
          FirstName: string;
          SSN: string;
          Relationship: string;
          DOB: string;
          Sex: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
      }>;
      InterventionsText: string;
      MedicalEquipmentText: string;
      MedicalEquipment: Array<{
        Status: string;
        StartDate: string;
        Quantity: string;
        Comments: Array<{
          Text: string;
        }>;
        Product: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          DeviceID: string;
          Issuer: string;
          SerialNumber: string;
          DistinctID: string;
          ManufacturerName: string;
          LotNumber: string;
          ManufactureDate: string;
          ExpirationDate: string;
          BrandName: string;
          ModelNumber: string;
          CatalogNumber: string;
          Status: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          SafetyObservations: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          }>;
        };
        Procedure: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
        };
      }>;
      MedicalHistoryText: string;
      MedicationsText: string;
      Medications: Array<{
        Prescription: boolean;
        FreeTextSig: string;
        Dose: {
          Quantity: string;
          Units: string;
        };
        Rate: {
          Quantity: string;
          Units: string;
        };
        Route: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: string;
        StartDate: string;
        EndDate: string;
        Frequency: {
          Period: string;
          PeriodMax: string;
          Unit: string;
          EventCode: string;
          InstitutionSpecified: boolean;
        };
        NumberOfRefillsRemaining: number;
        IsPRN: boolean;
        Product: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Indications: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        }>;
        SupplyOrder: {
          StartDate: string;
          EndDate: string;
          Quantity: string;
          Units: string;
          NumberOfRefillsRemaining: number;
        };
      }>;
      MedicationsAdministeredText: string;
      MedicationsAdministered: Array<{
        Dose: {
          Quantity: string;
          Units: string;
        };
        Rate: {
          Quantity: string;
          Units: string;
        };
        Route: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        StartDate: string;
        EndDate: string;
        Frequency: {
          Period: string;
          Unit: string;
        };
        Product: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        ReasonNotGiven: string;
      }>;
      NoteSections: Array<{
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Title: string;
        Text: string;
        Notes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          ContentType: string;
          FileContents: string;
          DateTime: string;
          Status: string;
          Encounter: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Status: string;
            Type: {
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
              AltCodes: Array<{
                Code: string;
                CodeSystem: string;
                CodeSystemName: string;
                Name: string;
              }>;
            };
            DateTime: string;
            EndDateTime: string;
          };
        }>;
      }>;
      ObjectiveText: string;
      PhysicalExamText: string;
      PlanOfCareText: string;
      PlanOfCare: {
        Orders: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
        Procedures: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
        Encounters: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
        MedicationAdministration: Array<{
          Status: string;
          Dose: {
            Quantity: string;
            Units: string;
          };
          Rate: {
            Quantity: string;
            Units: string;
          };
          Route: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          StartDate: string;
          EndDate: string;
          Frequency: {
            Period: string;
            Unit: string;
          };
          Product: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
        }>;
        Supplies: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
        Services: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          DateTime: string;
        }>;
      };
      ProblemsText: string;
      Problems: Array<{
        StartDate: string;
        EndDate: string;
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Category: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Comment: string;
        Comments: Array<{
          Text: string;
        }>;
        HealthStatus: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
      }>;
      ProceduresText: string;
      Procedures: {
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: never;
          Status: never;
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
        Procedures: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: never;
          Status: never;
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
        Services: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          DateTime: never;
          Status: never;
          Comments: Array<{
            Text: string;
          }>;
        }>;
      };
      ReasonForReferralText: string;
      ReasonForVisitText: string;
      ReasonForVisit: Array<{
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Category: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
      }>;
      ResolvedProblemsText: string;
      ResolvedProblems: Array<{
        StartDate: string;
        EndDate: string;
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Category: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        };
        Status: {
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        };
        Comment: string;
        Comments: Array<{
          Text: string;
        }>;
      }>;
      ResultText: string;
      Results: Array<{
        Code: string;
        CodeSystem: string;
        CodeSystemName: string;
        Name: string;
        AltCodes: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
        }>;
        Encounter: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Status: string;
          Type: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          DateTime: string;
          EndDateTime: string;
        };
        Status: string;
        Producer: {
          ID: string;
          Name: string;
          IDType: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Specimen: {
          CollectionDateTime: never;
          Identifiers: Array<never>;
          Source: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
        };
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          Interpretation: string;
          DateTime: string;
          CodedValue: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Value: string;
          ValueType: string;
          Units: string;
          ReferenceRange: {
            Low: string;
            High: string;
            Text: string;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
      }>;
      ReviewOfSystemsText: string;
      SocialHistoryText: string;
      SocialHistory: {
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Value: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          ValueText: string;
          Units: string;
          StartDate: string;
          EndDate: string;
          Comments: Array<{
            Text: string;
          }>;
        }>;
        Pregnancy: Array<{
          StartDate: string;
          EndDate: string;
          EstimatedDelivery: string;
          Comments: Array<{
            Text: string;
          }>;
        }>;
        TobaccoUse: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          IsSmokingStatus: boolean;
          StartDate: string;
          EndDate: string;
          Comments: Array<{
            Text: string;
          }>;
        }>;
      };
      SubjectiveText: string;
      VitalSignsText: string;
      VitalSigns: Array<{
        DateTime: string;
        Observations: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Status: string;
          Interpretation: string;
          DateTime: string;
          Value: string;
          Units: string;
          TargetSite: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Comments: Array<{
            Text: string;
          }>;
        }>;
      }>;
    };
    type DocumentQuery = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
      };
      Location: {
        Department: string;
      };
      Visit: {
        ID: string;
        StartDateTime: string;
        EndDateTime: string;
      };
      Document: {
        StartDate: string;
        EndDate: string;
        Types: Array<{
          Code: string;
          Codeset: string;
          Name: string;
        }>;
      };
    };
    type DocumentQueryResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
      };
      Documents: Array<{
        Location: {
          Department: string;
        };
        Author: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Type: string;
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Visit: {
          ID: string;
          StartDateTime: string;
          EndDateTime: string;
        };
        DateTime: string;
        ID: string;
        Locale: string;
        Title: string;
        Type: {
          Code: string;
          Codeset: string;
          Name: string;
        };
        FileType: string;
      }>;
    };
    type DocumentGet = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Document: {
        ID: string;
      };
    };
    type DocumentGetResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Document: {
        ID: string;
      };
      FileType: string;
      Data: string;
    };
  }
  export namespace ClinicalDecisions {
    type Request = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Session: {
        Questions: Array<{
          Question: {
            Code: string;
            Codeset: string;
            Description: string;
          };
          Answer: {
            Code: string;
            Codeset: string;
            Description: string;
          };
        }>;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      OrderingProvider: {
        ID: string;
        IDType: string;
        FirstName: string;
        LastName: string;
        Credentials: Array<string>;
        Address: {
          StreetAddress: string;
          City: string;
          State: string;
          ZIP: string;
          County: string;
          Country: string;
        };
        EmailAddresses: Array<string>;
        PhoneNumber: {
          Office: string;
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
      };
      AuthorizingProvider: {
        ID: string;
        IDType: string;
        FirstName: string;
        LastName: string;
        Credentials: Array<string>;
        Address: {
          StreetAddress: string;
          City: string;
          State: string;
          ZIP: string;
          County: string;
          Country: string;
        };
        EmailAddresses: Array<string>;
        PhoneNumber: {
          Office: string;
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
      };
      UnsignedMedicationOrders: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Frequency: {
          Period: string;
          Unit: string;
        };
        Product: {
          Code: string;
          Codeset: string;
          Name: string;
        };
        Priority: string;
        Dose: {
          Quantity: number;
          Units: string;
        };
        Mode: string;
        Route: never;
        StartDate: string;
        EndDate: string;
        MixtureType: string;
        MixtureComponents: Array<{
          Code: string;
          CodeType: string;
          Dose: {
            Quantity: string;
            Units: string;
          };
        }>;
        Questions: Array<{
          Question: {
            Code: string;
            Codeset: string;
            Description: string;
          };
          Answer: {
            Code: string;
            Codeset: string;
            Description: string;
          };
        }>;
        Notes: Array<string>;
      }>;
      UnsignedProcedureOrders: Array<{
        Code: string;
        Codeset: string;
        Description: string;
        Identifiers: Array<{
          ID: string;
          IDType: number;
        }>;
        ScheduledDate: string;
        Mode: string;
        BodySite: {
          Code: string;
          Codeset: string;
          Description: string;
        };
        StartDate: string;
        EndDate: string;
        Questions: Array<{
          Question: {
            Code: string;
            Codeset: string;
            Description: string;
          };
          Answer: {
            Code: string;
            Codeset: string;
            Description: string;
          };
        }>;
        Notes: Array<string>;
      }>;
    };
    type Response = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Advisories: Array<{
        ShowAlert: boolean;
        Session: string;
        RemovableUnsignedOrders: Array<{
          ID: string;
          IDType: string;
          Title: string;
        }>;
        AdditionalUnsignedOrders: Array<{
          ID: string;
          IDType: string;
          Title: string;
          Questions: Array<{
            Code: string;
            Codeset: string;
            Description: string;
            Answers: Array<{
              Code: string;
              Codeset: string;
              Description: string;
              Comment: string;
            }>;
          }>;
        }>;
        Description: string;
        Notes: Array<{
          Text: string;
          Display: string;
        }>;
        AdditionalInfo: Array<{
          DecisionSupport: {
            Code: string;
            Codeset: string;
            Description: string;
          };
          Link: string;
        }>;
        Errors: Array<{
          Code: string;
          Codeset: string;
          Description: string;
        }>;
      }>;
    };
  }
  export namespace Claim {
    type SubmissionBatch = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Transactions: Array<{
        ID: string;
        IDType: string;
        Type: string;
        Submitter: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Name: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddress: string;
          PhoneNumber: {
            Office: string;
            Fax: string;
          };
        };
        Receiver: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Name: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddress: string;
          PhoneNumber: {
            Office: string;
            Fax: string;
          };
        };
        Submissions: Array<{
          BillingProvider: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddress: string;
            PhoneNumber: {
              Office: string;
              Fax: string;
            };
            Specialty: {
              ID: string;
              Description: string;
            };
          };
          Subscribers: Array<{
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Demographics: {
              FirstName: string;
              MiddleName: string;
              LastName: string;
              Address: {
                StreetAddress: string;
                City: string;
                State: string;
                ZIP: string;
                County: string;
                Country: string;
              };
              PhoneNumber: {
                Home: string;
                Office: string;
                Mobile: string;
              };
              DOB: string;
              Sex: string;
            };
            OrganizationName: string;
            ResponsibilityLevel: string;
            Insurance: {
              Plan: {
                ID: string;
                IDType: string;
                Name: string;
                Type: string;
              };
              MemberNumber: string;
              Company: {
                ID: string;
                IDType: string;
                Name: string;
                Address: {
                  StreetAddress: string;
                  City: string;
                  State: string;
                  ZIP: string;
                  County: string;
                  Country: string;
                };
                PhoneNumber: string;
              };
              GroupNumber: string;
              GroupName: string;
              EffectiveDate: string;
              ExpirationDate: string;
              PolicyNumber: string;
              Priority: string;
              AgreementType: string;
              CoverageType: string;
            };
            Patients: Array<{
              Identifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Demographics: {
                FirstName: string;
                MiddleName: string;
                LastName: string;
                DOB: string;
                SSN: string;
                Sex: string;
                Race: string;
                IsHispanic: boolean;
                Religion: string;
                MaritalStatus: string;
                IsDeceased: boolean;
                DeathDateTime: string;
                PhoneNumber: {
                  Home: string;
                  Office: string;
                  Mobile: string;
                };
                EmailAddresses: Array<string>;
                Language: string;
                Citizenship: Array<string>;
                Address: {
                  StreetAddress: string;
                  City: string;
                  State: string;
                  ZIP: string;
                  County: string;
                  Country: string;
                };
              };
              Notes: Array<string>;
              RelationToSubscriber: string;
              Claims: Array<{
                SubmissionNumber: string;
                Type: string;
                TotalAmount: string;
                CopayAmount: string;
                IsProviderSignatureOnFile: boolean;
                IsReleaseOfInformationOnFile: boolean;
                ProviderAcceptanceCode: string;
                BenefitsAssignmentCode: boolean;
                AdditionalDates: Array<{
                  DateTime: string;
                  Type: string;
                }>;
                ReferenceNumbers: Array<{
                  ID: string;
                  IDType: string;
                }>;
                Diagnoses: Array<{
                  Code: string;
                  Codeset: string;
                  Description: string;
                  Type: string;
                }>;
                DiagnosisRelatedGroup: string;
                Providers: Array<{
                  ID: string;
                  IDType: string;
                  FirstName: string;
                  LastName: string;
                  Credentials: Array<string>;
                  Address: {
                    StreetAddress: string;
                    City: string;
                    State: string;
                    ZIP: string;
                    County: string;
                    Country: string;
                  };
                  EmailAddresses: Array<string>;
                  PhoneNumber: {
                    Office: string;
                  };
                  Location: {
                    Type: string;
                    Facility: string;
                    FacilityIdentifiers: Array<{
                      ID: string;
                      IDType: string;
                    }>;
                    Department: string;
                    DepartmentIdentifiers: Array<{
                      ID: string;
                      IDType: string;
                    }>;
                    Room: string;
                  };
                  Role: string;
                  Specialty: {
                    ID: string;
                    Description: string;
                  };
                }>;
                Services: Array<{
                  Code: string;
                  Codeset: string;
                  Description: string;
                  Modifiers: Array<string>;
                  Amount: string;
                  StartDateTime: string;
                  EndDateTime: string;
                  RevenueCode: string;
                  Quantity: {
                    Value: string;
                    Units: string;
                  };
                  IsEmergency: boolean;
                  ReferenceNumbers: Array<{
                    ID: string;
                    IDType: string;
                  }>;
                  Diagnoses: Array<{
                    Code: string;
                    Codeset: string;
                    Description: string;
                    Type: string;
                  }>;
                  Drug: {
                    PrescriptionID: string;
                    NDC: string;
                    Quantity: {
                      Value: string;
                      Units: string;
                    };
                  };
                  Notes: string;
                }>;
                Visit: {
                  DateTime: string;
                  DischargeDateTime: string;
                  Location: {
                    Type: string;
                    Facility: string;
                    FacilityIdentifiers: Array<{
                      ID: string;
                      IDType: string;
                    }>;
                    Department: string;
                    DepartmentIdentifiers: Array<{
                      ID: string;
                      IDType: string;
                    }>;
                    Room: string;
                  };
                  PreviousLocation: {
                    Type: string;
                    Facility: string;
                    FacilityIdentifiers: Array<{
                      ID: string;
                      IDType: string;
                    }>;
                    Department: string;
                    DepartmentIdentifiers: Array<{
                      ID: string;
                      IDType: string;
                    }>;
                    Room: string;
                  };
                  Type: string;
                  VisitNumber: string;
                };
              }>;
            }>;
          }>;
        }>;
      }>;
    };
    type PaymentBatch = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Transactions: Array<{
        ID: string;
        IDType: string;
        Type: string;
        TotalPaymentAmount: string;
        CreditOrDebit: string;
        PaymentMethod: string;
        PaymentDateTime: string;
        TrackingNumber: string;
        Submitter: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Name: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddress: string;
          PhoneNumber: {
            Office: string;
            Fax: string;
          };
        };
        Receiver: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Name: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddress: string;
          PhoneNumber: {
            Office: string;
            Fax: string;
          };
        };
        Payments: Array<{
          DateTime: string;
          Patient: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Demographics: {
              FirstName: string;
              MiddleName: string;
              LastName: string;
              DOB: string;
              SSN: string;
              Sex: string;
              Race: string;
              IsHispanic: boolean;
              Religion: string;
              MaritalStatus: string;
              IsDeceased: boolean;
              DeathDateTime: string;
              PhoneNumber: {
                Home: string;
                Office: string;
                Mobile: string;
              };
              EmailAddresses: Array<string>;
              Language: string;
              Citizenship: Array<string>;
              Address: {
                StreetAddress: string;
                City: string;
                State: string;
                ZIP: string;
                County: string;
                Country: string;
              };
            };
            Notes: Array<string>;
          };
          Claims: Array<{
            ControlNumber: string;
            SubmissionNumber: string;
            ReceivedDate: string;
            StartDateTime: string;
            EndDateTime: string;
            Status: string;
            ChargedAmount: string;
            PaymentAmount: string;
            PatientResponsibilityAmount: string;
            ReferenceNumbers: Array<{
              ID: string;
              IDType: string;
            }>;
            Adjustments: Array<{
              Amount: string;
              Quantity: string;
              Type: string;
              Reason: string;
            }>;
            Services: Array<{
              ChargedAmount: string;
              PaymentAmount: string;
              ChargedUnits: string;
              PaymentUnits: string;
              AllowedAmount: string;
              SubmittedService: {
                Code: string;
                Codeset: string;
                Description: string;
                Modifiers: Array<string>;
              };
              AdjudicatedService: {
                Code: string;
                Codeset: string;
                Description: string;
                Modifiers: Array<string>;
              };
              Adjustments: Array<{
                Amount: string;
                Quantity: string;
                Type: string;
                Reason: string;
              }>;
              StartDateTime: string;
              EndDateTime: string;
              ReferenceNumbers: Array<{
                ID: string;
                IDType: string;
              }>;
            }>;
          }>;
        }>;
      }>;
    };
    type Submission = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Transaction: {
        ID: string;
        IDType: string;
        Type: string;
        Submitter: {
          ID: string;
          IDType: string;
          Name: string;
          EmailAddress: string;
          PhoneNumber: {
            Office: string;
            Fax: string;
          };
        };
        Receiver: {
          ID: string;
          IDType: string;
          Name: string;
        };
      };
      BillingProvider: {
        ID: string;
        IDType: string;
        TIN: string;
        FirstName: string;
        MiddleName: string;
        LastName: string;
        OrganizationName: string;
        Specialty: {
          ID: string;
          Description: string;
        };
        Address: {
          StreetAddress: string;
          City: string;
          State: string;
          ZIP: string;
          County: string;
          Country: string;
        };
        EmailAddress: string;
        PhoneNumber: {
          Office: string;
          Fax: string;
        };
      };
      Subscriber: {
        ID: string;
        IDType: string;
        FirstName: string;
        MiddleName: string;
        LastName: string;
        OrganizationName: string;
        Address: {
          StreetAddress: string;
          City: string;
          State: string;
          ZIP: string;
          County: string;
          Country: string;
        };
        DOB: string;
        Sex: string;
        RelationToPatient: string;
        ResponsibilityLevel: string;
        Insurance: {
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
        };
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Weight: string;
        IsPregnant: string;
      };
      Claims: Array<{
        ID: string;
        Type: string;
        TotalAmount: string;
        CopayAmount: string;
        IsProviderSignatureOnFile: boolean;
        IsReleaseOfInformationOnFile: boolean;
        ReferenceNumbers: Array<{
          ID: string;
          Type: string;
        }>;
        Visit: {
          VisitNumber: string;
          DateTime: string;
          DischargeDateTime: string;
          Type: string;
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          PreviousLocation: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        AdditionalDates: Array<{
          Type: string;
          DateTime: string;
        }>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
        }>;
        DiagnosisRelatedGroup: string;
        Procedures: Array<{
          Code: string;
          CodeSet: string;
          Name: string;
          Modifiers: Array<string>;
        }>;
        Lines: Array<{
          ID: string;
          Amount: string;
          Diagnoses: Array<{
            Code: string;
            Codeset: string;
            Name: string;
            Type: string;
          }>;
          Procedure: {
            Code: string;
            CodeSet: string;
            Name: string;
            Modifiers: Array<string>;
          };
          ServiceDateTime: string;
          ServiceEndDateTime: string;
          RevenueCode: string;
          UnitCount: string;
          Units: string;
          IsEmergency: boolean;
          Notes: string;
        }>;
        Providers: Array<{
          ID: string;
          IDType: string;
          Role: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Specialty: {
            ID: string;
            Description: string;
          };
        }>;
      }>;
    };
    type Payment = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Transaction: {
        ID: string;
        IDType: string;
        Type: string;
        Submitter: {
          ID: string;
          IDType: string;
          Name: string;
          EmailAddress: string;
          PhoneNumber: {
            Office: string;
            Fax: string;
          };
        };
        Receiver: {
          ID: string;
          IDType: string;
          Name: string;
        };
        TotalPaymentAmount: string;
        CreditOrDebit: string;
        PaymentMethod: string;
        PaymentDateTime: string;
        TrackingNumber: string;
      };
      Payer: {
        ID: string;
        IDType: string;
        Name: string;
        Address: {
          StreetAddress: string;
          City: string;
          State: string;
          ZIP: string;
          County: string;
          Country: string;
        };
        EmailAddress: string;
        PhoneNumber: {
          Office: string;
          Fax: string;
        };
      };
      Payee: {
        ID: string;
        IDType: string;
        Name: string;
        Address: {
          StreetAddress: string;
          City: string;
          State: string;
          ZIP: string;
          County: string;
          Country: string;
        };
        EmailAddress: string;
        PhoneNumber: {
          Office: string;
          Fax: string;
        };
      };
      Payments: Array<{
        DateTime: string;
        Patient: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Demographics: {
            FirstName: string;
            MiddleName: string;
            LastName: string;
            DOB: string;
            SSN: string;
            Sex: string;
            Race: string;
            IsHispanic: boolean;
            Religion: string;
            MaritalStatus: string;
            IsDeceased: boolean;
            DeathDateTime: string;
            PhoneNumber: {
              Home: string;
              Office: string;
              Mobile: string;
            };
            EmailAddresses: Array<string>;
            Language: string;
            Citizenship: Array<string>;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
          Notes: Array<string>;
        };
        Claim: {
          Number: string;
          SubmissionNumber: string;
          ReceivedDate: string;
          ServiceDateTime: string;
          ServiceEndDateTime: string;
          Status: string;
          ChargedAmount: string;
          PaymentAmount: string;
          PatientResponsibilityAmount: string;
          Adjustments: Array<{
            Amount: string;
            ReasonGroup: string;
            Quantity: string;
            Reason: string;
          }>;
          ReferenceNumbers: Array<{
            ID: string;
            IDType: string;
          }>;
          Services: Array<{
            ChargedAmount: string;
            PaymentAmount: string;
            ChargedUnits: string;
            PaymentUnits: string;
            AllowedAmount: string;
            DeductibleAmount: string;
            SubmittedProcedure: {
              Code: string;
              CodeSet: string;
              Name: string;
              Modifiers: Array<string>;
            };
            AdjudicatedProcedure: {
              Code: string;
              CodeSet: string;
              Name: string;
              Modifiers: Array<string>;
            };
            ServiceDateTime: string;
            ServiceEndDateTime: string;
            ReferenceNumbers: Array<{
              ID: string;
              IDType: string;
            }>;
          }>;
        };
      }>;
    };
  }
  export namespace Device {
    type New = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
      };
      Visit: {
        VisitNumber: string;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
      };
      Device: {
        ID: string;
      };
      Observations: Array<{
        DateTime: string;
        Code: string;
        Value: string;
        ValueType: string;
        Units: string;
      }>;
    };
  }
  export namespace Enrichment {
    type NaturalLanguageProcessingQuery = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Text: {
        Contents: string;
      };
      Task: {
        ID: string;
      };
    };
    type NaturalLanguageProcessingQueryResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Transaction: {
        VendorID: string;
        ID: string;
        Task: {
          ID: string;
          Status: string;
          Message: string;
        };
      };
      Entries: Array<{
        Text: {
          Contents: string;
          Position: {
            BeginOffset: number;
            EndOffset: number;
          };
        };
        Category: {
          Name: string;
          CertaintyScore: number;
        };
        Concept: {
          Code: string;
          Codeset: string;
          Description: string;
          CertaintyScore: number;
        };
      }>;
    };
    type NormalizationQuery = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Entries: Array<{
        Category: string;
        EntryID: string;
        Code: string;
        Codeset: string;
        Description: string;
      }>;
    };
    type NormalizationQueryResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Entries: Array<{
        Category: string;
        Status: string;
        Transaction: {
          VendorID: string;
          ID: string;
        };
        Submitted: {
          Category: string;
          EntryID: string;
          Code: string;
          Codeset: string;
          Description: string;
        };
        Normalization: Array<{
          LexicalReference: {
            Code: string;
            Name: string;
            DefaultCode: string;
            DefaultName: string;
          };
          Score: {
            Value: number;
            Description: string;
          };
          Matches: Array<{
            Codeset: string;
            Status: string;
            Codes: Array<{
              Code: string;
              MatchPriority: string;
              Variants: Array<{
                Title: string;
                TitleStatus: string;
                TitleType: string;
                ExtendedProperties: Array<{
                  Category: string;
                  Properties: Array<{
                    Property: string;
                    Value: string;
                  }>;
                }>;
              }>;
            }>;
          }>;
        }>;
        Error: {
          Code: string;
          Message: string;
        };
      }>;
    };
    type ProvidersDetailsGet = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Providers: {
        Identifiers: Array<string>;
      };
    };
    type ProvidersDetailsResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Providers: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        IsActive: boolean;
        Demographics: {
          FirstName: string;
          LastName: string;
          MiddleName: string;
          Credentials: Array<string>;
          Addresses: Array<{
            Use: string;
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          }>;
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          Gender: string;
          Sex: string;
          DOB: string;
          Age: string;
          Languages: Array<string>;
        };
        Educations: Array<{
          Type: string;
          Institution: {
            ID: string;
            IDType: string;
            Name: string;
          };
        }>;
        Specialties: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          IsPrimary: boolean;
          Taxonomy: Array<string>;
          BoardSpecialty: string;
          BoardSubSpecialty: string;
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
        }>;
        Locations: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Status: string;
          Name: string;
          Description: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          LocationTypes: Array<string>;
          GoogleMapsLink: string;
          Insurances: Array<{
            UUID: string;
            CarrierAssociation: string;
            CarrierBrand: string;
            CarrierName: string;
            State: string;
            PlanName: string;
            PlanType: string;
            MetalLevel: string;
            DisplayName: string;
            Network: string;
            Confidence: string;
            Category: string;
            Codes: Array<string>;
          }>;
          Latitude: number;
          Longitude: number;
          Faxes: Array<{
            Fax: string;
            Details: string;
          }>;
        }>;
        Qualifications: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Code: string;
          Codeset: string;
          Description: string;
          StartDate: string;
          EndDate: string;
        }>;
      }>;
    };
  }
  export namespace Financial {
    type Transaction = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        VisitDateTime: string;
        PatientClass: string;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      };
      Transactions: Array<{
        ID: string;
        Type: string;
        DateTimeOfService: string;
        EndDateTime: string;
        Chargeable: {
          Code: string;
          Codeset: string;
          Description: string;
          Quantity: string;
          Amount: number;
        };
        Department: {
          Code: string;
          Codeset: string;
          Name: string;
        };
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Performers: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        OrderingProviders: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        OrderID: string;
        Procedure: {
          Code: string;
          Codeset: string;
          Description: string;
          Modifiers: Array<string>;
        };
        NDC: {
          Code: string;
          Description: string;
        };
      }>;
    };
    type AccountUpdate = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Visit: {
        VisitDateTime: string;
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
        ConsultingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        DischargeDateTime: string;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        DiagnosisRelatedGroup: number;
        DiagnosisRelatedGroupType: number;
        Balance: number;
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
        Procedures: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          PerformedDateTime: string;
          Performers: Array<{
            ID: string;
            IDType: string;
            FirstName: string;
            LastName: string;
            Credentials: Array<string>;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Office: string;
            };
            Location: {
              Type: string;
              Facility: string;
              FacilityIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Department: string;
              DepartmentIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Room: string;
            };
          }>;
        }>;
      };
    };
  }
  export namespace Flowsheet {
    type New = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        VisitDateTime: string;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
      };
      Observations: Array<{
        DateTime: string;
        Value: string;
        ValueType: string;
        Units: string;
        Code: string;
        Codeset: string;
        Description: string;
        Status: string;
        Notes: Array<string>;
        Observer: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
        };
        ReferenceRange: {
          Low: number;
          High: number;
          Text: string;
        };
        AbnormalFlag: string;
      }>;
    };
  }
  export namespace Insurance {
    type New = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Insurances: Array<{
        Plan: {
          ID: string;
          IDType: string;
          Name: string;
          Type: string;
        };
        Payer: {
          ID: string;
          IDType: string;
          Name: string;
          Alias: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
      }>;
    };
    type Update = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Insurances: Array<{
        Plan: {
          ID: string;
          IDType: string;
          Name: string;
          Type: string;
        };
        Payer: {
          ID: string;
          IDType: string;
          Name: string;
          Alias: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
      }>;
    };
  }
  export namespace Inventory {
    type Update = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Items: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Description: string;
        Quantity: number;
        Type: string;
        Units: string;
        Procedure: {
          Code: string;
          Codeset: string;
          Modifier: string;
        };
        Notes: string;
        Vendor: {
          ID: string;
          Name: string;
          CatalogNumber: string;
        };
        Status: string;
        IsChargeable: boolean;
        ContainsLatex: boolean;
        Price: number;
        Location: {
          Facility: string;
          Department: string;
          ID: string;
          Bin: string;
        };
      }>;
    };
    type Deplete = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Visit: {
        VisitNumber: string;
      };
      Items: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Description: string;
        Quantity: number;
        Type: string;
        Units: string;
        Procedure: {
          Code: string;
          Codeset: string;
          Modifier: string;
        };
        Notes: string;
        Vendor: {
          ID: string;
          Name: string;
          CatalogNumber: string;
        };
        WastedQuantity: number;
        UsedQuantity: number;
        SerialNumber: string;
        LotNumber: string;
        Location: {
          Facility: string;
          Department: string;
          ID: string;
          Bin: string;
        };
        OrderingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
      }>;
    };
  }
  export namespace Medications {
    type New = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Allergies: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Substance: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Reaction: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
            Severity: {
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            };
            Text: string;
          }>;
          Severity: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          Criticality: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          Status: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          StartDate: string;
          EndDate: string;
          Comment: string;
        }>;
      };
      Visit: {
        VisitDateTime: string;
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      };
      Order: {
        ID: string;
        Notes: Array<string>;
        Medication: {
          Dose: {
            Quantity: number;
            Units: string;
          };
          Rate: {
            Quantity: number;
            Units: string;
          };
          Route: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Components: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            Type: string;
            Dose: {
              Quantity: number;
              Units: string;
            };
          }>;
          Product: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          FreeTextSig: string;
          StartDate: string;
          EndDate: string;
          Frequency: {
            Period: number;
            Unit: string;
          };
          IsPRN: boolean;
          Dispense: {
            Amount: number;
            Units: string;
          };
          NumberOfRefillsRemaining: number;
        };
        Indications: Array<{
          Code: string;
          Codeset: string;
          Description: string;
        }>;
        Provider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        EnteredBy: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        VerifiedBy: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Priority: string;
        Pharmacy: {
          Code: string;
          Codeset: string;
          Description: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Office: string;
          };
        };
      };
    };
    type Update = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Allergies: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Substance: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Reaction: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
            Severity: {
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            };
            Text: string;
          }>;
          Severity: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          Criticality: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          Status: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          StartDate: string;
          EndDate: string;
          Comment: string;
        }>;
      };
      Visit: {
        VisitDateTime: string;
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      };
      Order: {
        ID: string;
        Notes: Array<string>;
        Medication: {
          Dose: {
            Quantity: number;
            Units: string;
          };
          Rate: {
            Quantity: number;
            Units: string;
          };
          Route: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Components: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            Type: string;
            Dose: {
              Quantity: number;
              Units: string;
            };
          }>;
          Product: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          FreeTextSig: string;
          StartDate: string;
          EndDate: string;
          Frequency: {
            Period: number;
            Unit: string;
          };
          IsPRN: boolean;
          Dispense: {
            Amount: number;
            Units: string;
          };
          NumberOfRefillsRemaining: number;
        };
        Indications: Array<{
          Code: string;
          Codeset: string;
          Description: string;
        }>;
        Provider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        EnteredBy: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        VerifiedBy: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Priority: string;
        Pharmacy: {
          Code: string;
          Codeset: string;
          Description: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Office: string;
          };
        };
      };
    };
    type Cancel = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Allergies: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
          Substance: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Reaction: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
            Severity: {
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            };
            Text: string;
          }>;
          Severity: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          Criticality: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          Status: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          };
          StartDate: string;
          EndDate: string;
          Comment: string;
        }>;
      };
      Visit: {
        VisitDateTime: string;
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      };
      Order: {
        ID: string;
        Notes: Array<string>;
        Medication: {
          Dose: {
            Quantity: number;
            Units: string;
          };
          Rate: {
            Quantity: number;
            Units: string;
          };
          Route: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Components: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            Type: string;
            Dose: {
              Quantity: number;
              Units: string;
            };
          }>;
          Product: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          FreeTextSig: string;
          StartDate: string;
          EndDate: string;
          Frequency: {
            Period: number;
            Unit: string;
          };
          IsPRN: boolean;
          Dispense: {
            Amount: number;
            Units: string;
          };
          NumberOfRefillsRemaining: number;
        };
        Indications: Array<{
          Code: string;
          Codeset: string;
          Description: string;
        }>;
        Provider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        EnteredBy: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        VerifiedBy: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Priority: string;
        Pharmacy: {
          Code: string;
          Codeset: string;
          Description: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Office: string;
          };
        };
      };
    };
    type Administration = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Visit: {
        VisitDateTime: string;
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
      };
      Administrations: Array<{
        Status: string;
        Medication: {
          Order: {
            ID: string;
          };
          LotNumber: string;
          Dose: {
            Quantity: number;
            Units: string;
          };
          Rate: {
            Quantity: number;
            Units: string;
          };
          Route: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Components: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            Type: string;
            Dose: {
              Quantity: number;
              Units: string;
            };
          }>;
          Product: {
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
            AltCodes: Array<{
              Code: string;
              CodeSystem: string;
              CodeSystemName: string;
              Name: string;
            }>;
          };
          Indications: Array<{
            Code: string;
            Codeset: string;
            Description: string;
          }>;
        };
        StartDate: string;
        EndDate: string;
        AdministeringProvider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        OrderedBy: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        VerifiedBy: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
      }>;
    };
  }
  export namespace Media {
    type New = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
      };
      Media: {
        FileType: string;
        FileName: string;
        FileContents: string;
        DocumentType: string;
        DocumentID: string;
        DocumentDescription: string;
        CreationDateTime: string;
        ServiceDateTime: string;
        DirectAddressFrom: string;
        DirectAddressTo: string;
        Provider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Authenticated: string;
        Authenticator: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Availability: string;
        Notifications: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
      };
      Orders: Array<{
        ID: string;
        Name: string;
      }>;
    };
    type Replace = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
      };
      Media: {
        FileType: string;
        FileName: string;
        FileContents: string;
        DocumentType: string;
        OriginalDocumentID: string;
        DocumentID: string;
        DocumentDescription: string;
        CreationDateTime: string;
        ServiceDateTime: string;
        DirectAddressFrom: string;
        DirectAddressTo: string;
        Provider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Authenticated: string;
        Authenticator: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Availability: string;
        Notifications: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
      };
      Orders: Array<{
        ID: string;
        Name: string;
      }>;
    };
    type Delete = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
      };
      Media: {
        FileType: string;
        FileName: string;
        DocumentType: string;
        DocumentID: string;
        DocumentDescription: string;
        CreationDateTime: string;
        ServiceDateTime: string;
        DirectAddressFrom: string;
        DirectAddressTo: string;
        Provider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Authenticated: string;
        Authenticator: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Availability: string;
        Notifications: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
      };
      Orders: Array<{
        ID: string;
        Name: string;
      }>;
    };
    type Query = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patients: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
      }>;
      VisitNumbers: Array<string>;
      DocumentTypes: Array<string>;
      DocumentIDs: Array<string>;
    };
    type QueryResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Media: Array<{
        Patient: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
        };
        Visit: {
          VisitNumber: string;
        };
        FileType: string;
        FileName: string;
        FileContents: string;
        DocumentType: string;
        DocumentID: string;
        DocumentDescription: string;
        CreationDateTime: string;
        ServiceDateTime: string;
      }>;
    };
  }
  export namespace Notes {
    type New = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        VisitDateTime: string;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
        AdditionalStaff: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            Codeset: string;
            Description: string;
          };
        }>;
      };
      Note: {
        ContentType: string;
        FileContents: string;
        FileName: string;
        FileType: string;
        DocumentType: string;
        DocumentID: string;
        DocumentDescription: string;
        ServiceDateTime: string;
        DocumentationDateTime: string;
        Status: string;
        Availability: string;
        Provider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Authenticator: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Notifications: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        Components: Array<{
          ID: string;
          Name: string;
          Value: string;
          Comments: string;
        }>;
      };
      Orders: Array<{
        ID: string;
        Name: string;
      }>;
    };
    type Replace = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        VisitDateTime: string;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
        AdditionalStaff: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            Codeset: string;
            Description: string;
          };
        }>;
      };
      Note: {
        ContentType: string;
        FileContents: string;
        FileName: string;
        FileType: string;
        DocumentType: string;
        OriginalDocumentID: string;
        DocumentID: string;
        DocumentDescription: string;
        ServiceDateTime: string;
        DocumentationDateTime: string;
        Status: string;
        Availability: string;
        Provider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Authenticator: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Notifications: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        Components: Array<{
          ID: string;
          Name: string;
          Value: string;
          Comments: string;
        }>;
      };
      Orders: Array<{
        ID: string;
        Name: string;
      }>;
    };
    type Delete = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        VisitDateTime: string;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
        AdditionalStaff: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            Codeset: string;
            Description: string;
          };
        }>;
      };
      Note: {
        ContentType: string;
        FileName: string;
        FileType: string;
        DocumentType: string;
        DocumentID: string;
        DocumentDescription: string;
        ServiceDateTime: string;
        DocumentationDateTime: string;
        Status: string;
        Availability: string;
        Provider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Authenticator: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Notifications: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        Components: Array<{
          ID: string;
          Name: string;
          Value: string;
          Comments: string;
        }>;
      };
      Orders: Array<{
        ID: string;
        Name: string;
      }>;
    };
    type Query = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patients: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
      }>;
    };
    type QueryResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Notes: Array<{
        Patient: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
        };
        Visit: {
          VisitNumber: string;
        };
        ContentType: string;
        FileContents: string;
        FileName: string;
        DocumentType: string;
        DocumentID: string;
        ServiceDateTime: string;
        DocumentationDateTime: string;
      }>;
    };
  }
  export namespace Order {
    type New = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        VisitDateTime: string;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
      };
      Order: {
        ID: string;
        ApplicationOrderID: string;
        Status: string;
        TransactionDateTime: string;
        CollectionDateTime: string;
        Specimen: {
          Source: string;
          BodySite: string;
          ID: string;
        };
        Procedure: {
          Code: string;
          Codeset: string;
          Description: string;
        };
        Provider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ResultCopyProviders: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        OrderingFacility: {
          Name: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: string;
        };
        Priority: string;
        Expiration: string;
        Comments: string;
        Notes: Array<string>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        ClinicalInfo: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          Value: string;
          Units: string;
          Abbreviation: string;
          Notes: Array<string>;
        }>;
      };
    };
    type Update = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        VisitDateTime: string;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
      };
      Order: {
        ID: string;
        ApplicationOrderID: string;
        Status: string;
        TransactionDateTime: string;
        CollectionDateTime: string;
        Specimen: {
          Source: string;
          BodySite: string;
          ID: string;
        };
        Procedure: {
          Code: string;
          Codeset: string;
          Description: string;
        };
        Provider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ResultCopyProviders: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        OrderingFacility: {
          Name: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: string;
        };
        Priority: string;
        Expiration: string;
        Comments: string;
        Notes: Array<string>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        ClinicalInfo: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          Value: string;
          Units: string;
          Abbreviation: string;
          Notes: Array<string>;
        }>;
      };
    };
    type Cancel = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        VisitDateTime: string;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
      };
      Order: {
        ID: string;
        ApplicationOrderID: string;
        Status: string;
        TransactionDateTime: string;
        CollectionDateTime: string;
        Specimen: {
          Source: string;
          BodySite: string;
          ID: string;
        };
        Procedure: {
          Code: string;
          Codeset: string;
          Description: string;
        };
        Provider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ResultCopyProviders: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        OrderingFacility: {
          Name: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: string;
        };
        Priority: string;
        Expiration: string;
        Comments: string;
        Notes: Array<string>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        ClinicalInfo: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          Value: string;
          Units: string;
          Abbreviation: string;
          Notes: Array<string>;
        }>;
      };
    };
    type GroupedOrders = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        VisitDateTime: string;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
      };
      Orders: Array<{
        ID: string;
        ApplicationOrderID: string;
        Status: string;
        TransactionDateTime: string;
        CollectionDateTime: string;
        Specimen: {
          Source: string;
          BodySite: string;
          ID: string;
        };
        Procedure: {
          Code: string;
          Codeset: string;
          Description: string;
        };
        Provider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ResultCopyProviders: Array<{
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        OrderingFacility: {
          Name: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: string;
        };
        Priority: string;
        Comments: string;
        Notes: Array<string>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        ClinicalInfo: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          Value: string;
          Units: string;
          Abbreviation: string;
          Notes: Array<string>;
        }>;
      }>;
    };
    type Query = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patients: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
      }>;
      VisitNumbers: Array<string>;
      StartDateTime: string;
      EndDateTime: string;
      OrderIDs: Array<string>;
      Procedures: Array<{
        Code: string;
        Codeset: string;
      }>;
    };
    type QueryResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Orders: Array<{
        Patient: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
        };
        Visit: {
          VisitNumber: string;
        };
        ID: string;
        ApplicationOrderID: string;
        Status: string;
        TransactionDateTime: string;
        CollectionDateTime: string;
        Specimen: {
          Source: string;
          BodySite: string;
          ID: string;
        };
        Procedure: {
          Code: string;
          Codeset: string;
          Description: string;
        };
        Provider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ResultCopyProviders: Array<{
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        OrderingFacility: {
          Name: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: string;
        };
        Priority: string;
        Comments: string;
        Notes: Array<string>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        ClinicalInfo: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          Value: string;
          Units: string;
          Abbreviation: string;
          Notes: Array<string>;
        }>;
      }>;
    };
  }
  export namespace Organization {
    type New = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Directory: string;
      Organizations: Array<{
        Active: boolean;
        Name: string;
        Aliases: Array<string>;
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Type: {
          System: string;
          Value: string;
        };
        PartOf: {
          Identifier: {
            Type: never;
            System: never;
            Value: never;
          };
        };
        Contacts: Array<{
          Purpose: string;
          Name: string;
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Home: string;
            Work: string;
            Mobile: string;
          };
        }>;
        Address: {
          StreetAddress: string;
          City: string;
          State: string;
          ZIP: string;
          County: string;
          Country: string;
        };
        Endpoints: Array<{
          Identifiers: Array<{
            Type: string;
            System: string;
            Value: string;
          }>;
          ConnectionType: {
            System: string;
            Value: string;
          };
          Name: string;
          Address: string;
          MIMEType: string;
          Attributes: {
            Transaction: string;
            Actor: {
              System: string;
              Value: string;
            };
            Version: {
              System: string;
              Value: string;
            };
            UseCases: Array<{
              System: string;
              Value: string;
            }>;
            PurposeOfUse: Array<{
              System: string;
              Value: string;
            }>;
            Roles: Array<{
              System: string;
              Value: string;
            }>;
          };
        }>;
        DestinationID: string;
      }>;
    };
    type Update = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Action: string;
      Directory: string;
      Organizations: Array<{
        Active: boolean;
        Name: string;
        Aliases: Array<string>;
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Type: {
          System: string;
          Value: string;
        };
        PartOf: {
          Identifier: {
            Type: never;
            System: never;
            Value: never;
          };
        };
        Contacts: Array<{
          Purpose: string;
          Name: string;
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Home: string;
            Work: string;
            Mobile: string;
          };
        }>;
        Address: {
          StreetAddress: string;
          City: string;
          State: string;
          ZIP: string;
          County: string;
          Country: string;
        };
        Endpoints: Array<{
          Identifiers: Array<{
            Type: string;
            System: string;
            Value: string;
          }>;
          ConnectionType: {
            System: string;
            Value: string;
          };
          Name: string;
          Address: string;
          MIMEType: string;
          Attributes: {
            Transaction: string;
            Actor: {
              System: string;
              Value: string;
            };
            Version: {
              System: string;
              Value: string;
            };
            UseCases: Array<{
              System: string;
              Value: string;
            }>;
            PurposeOfUse: Array<{
              System: string;
              Value: string;
            }>;
            Roles: Array<{
              System: string;
              Value: string;
            }>;
          };
        }>;
        DestinationID: string;
      }>;
    };
    type Query = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Directory: string;
      Identifier: {
        ID: string;
        IDType: string;
      };
      NameSearch: {
        SearchType: string;
        Value: string;
      };
      State: string;
      RadiusSearch: {
        ZipCode: string;
        Radius: string;
      };
      LastUpdated: string;
      Index: string;
      Limit: string;
      Active: boolean;
    };
    type QueryResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Directory: string;
      Organizations: Array<{
        Active: boolean;
        Name: string;
        Aliases: Array<string>;
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Type: {
          System: string;
          Value: string;
        };
        PartOf: {
          Identifier: {
            Type: never;
            System: never;
            Value: never;
          };
        };
        Contacts: Array<{
          Purpose: string;
          Name: string;
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Home: string;
            Work: string;
            Mobile: string;
          };
        }>;
        Address: {
          StreetAddress: string;
          City: string;
          State: string;
          ZIP: string;
          County: string;
          Country: string;
        };
        ManagingOrg: string;
      }>;
      Paging: {
        Count: number;
        Index: number;
      };
    };
  }
  export namespace PatientAdmin {
    type Arrival = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Allergies: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          OnsetDateTime: string;
          Reaction: Array<{
            Code: string;
            Codeset: string;
            Name: string;
          }>;
          Severity: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          Status: string;
        }>;
        PCP: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        VisitDateTime: string;
        Duration: number;
        Reason: string;
        Instructions: Array<string>;
        Balance: number;
        DiagnosisRelatedGroup: number;
        DiagnosisRelatedGroupType: number;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        AdmittingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        AdditionalStaff: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            Codeset: string;
            Description: string;
          };
        }>;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      };
    };
    type Cancel = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        CanceledEvent: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Allergies: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          OnsetDateTime: string;
          Reaction: Array<{
            Code: string;
            Codeset: string;
            Name: string;
          }>;
          Severity: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          Status: string;
        }>;
        PCP: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        VisitDateTime: string;
        Duration: number;
        Reason: string;
        Instructions: Array<string>;
        Balance: number;
        DiagnosisRelatedGroup: number;
        DiagnosisRelatedGroupType: number;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        AdmittingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        AdditionalStaff: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            Codeset: string;
            Description: string;
          };
        }>;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      };
    };
    type Discharge = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Allergies: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          OnsetDateTime: string;
          Reaction: Array<{
            Code: string;
            Codeset: string;
            Name: string;
          }>;
          Severity: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          Status: string;
        }>;
        PCP: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        VisitDateTime: string;
        DischargeDateTime: string;
        DischargeStatus: {
          Code: string;
          Codeset: string;
          Description: string;
        };
        DischargeLocation: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
        Duration: number;
        Reason: string;
        Instructions: Array<string>;
        Balance: number;
        DiagnosisRelatedGroup: number;
        DiagnosisRelatedGroupType: number;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        AdmittingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        AdditionalStaff: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            Codeset: string;
            Description: string;
          };
        }>;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      };
    };
    type NewPatient = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
        Allergies: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          OnsetDateTime: string;
          Reaction: Array<{
            Code: string;
            Codeset: string;
            Name: string;
          }>;
          Severity: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          Status: string;
        }>;
        PCP: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      };
    };
    type PatientUpdate = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Allergies: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          OnsetDateTime: string;
          Reaction: Array<{
            Code: string;
            Codeset: string;
            Name: string;
          }>;
          Severity: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          Status: string;
        }>;
        PCP: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
      };
    };
    type PatientMerge = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        PreviousIdentifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
    };
    type PreAdmit = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Allergies: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          OnsetDateTime: string;
          Reaction: Array<{
            Code: string;
            Codeset: string;
            Name: string;
          }>;
          Severity: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          Status: string;
        }>;
        PCP: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        VisitDateTime: string;
        Duration: number;
        Reason: string;
        Instructions: Array<string>;
        Balance: number;
        DiagnosisRelatedGroup: number;
        DiagnosisRelatedGroupType: number;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        AdmittingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        AdditionalStaff: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            Codeset: string;
            Description: string;
          };
        }>;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      };
    };
    type Registration = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Allergies: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          OnsetDateTime: string;
          Reaction: Array<{
            Code: string;
            Codeset: string;
            Name: string;
          }>;
          Severity: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          Status: string;
        }>;
        PCP: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        VisitDateTime: string;
        Duration: number;
        Reason: string;
        Instructions: Array<string>;
        Balance: number;
        DiagnosisRelatedGroup: number;
        DiagnosisRelatedGroupType: number;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        AdmittingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        AdditionalStaff: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            Codeset: string;
            Description: string;
          };
        }>;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      };
    };
    type Transfer = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Allergies: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          OnsetDateTime: string;
          Reaction: Array<{
            Code: string;
            Codeset: string;
            Name: string;
          }>;
          Severity: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          Status: string;
        }>;
        PCP: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        VisitDateTime: string;
        DischargeDateTime: string;
        DischargeStatus: {
          Code: string;
          Codeset: string;
          Description: string;
        };
        Duration: number;
        Reason: string;
        Instructions: Array<string>;
        Balance: number;
        DiagnosisRelatedGroup: number;
        DiagnosisRelatedGroupType: number;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        AdmittingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        AdditionalStaff: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            Codeset: string;
            Description: string;
          };
        }>;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        PreviousLocation: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      };
    };
    type VisitMerge = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        PreviousIdentifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Visit: {
        VisitNumber: string;
      };
    };
    type VisitUpdate = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Allergies: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          OnsetDateTime: string;
          Reaction: Array<{
            Code: string;
            Codeset: string;
            Name: string;
          }>;
          Severity: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          Status: string;
        }>;
        PCP: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        VisitDateTime: string;
        DischargeDateTime: string;
        Duration: number;
        Reason: string;
        Instructions: Array<string>;
        Balance: number;
        DiagnosisRelatedGroup: number;
        DiagnosisRelatedGroupType: number;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        AdmittingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        AdditionalStaff: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            Codeset: string;
            Description: string;
          };
        }>;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      };
    };
    type CensusQuery = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      PatientClasses: Array<string>;
      Departments: Array<string>;
      Facilities: Array<string>;
    };
    type CensusQueryResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patients: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Visits: Array<{
          VisitNumber: string;
          VisitDateTime: string;
          PatientClass: string;
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
            Bed: string;
          };
        }>;
      }>;
    };
    type VisitQuery = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      PatientClasses: Array<string>;
      Departments: Array<string>;
      Facilities: Array<string>;
      VisitStatuses: Array<string>;
      Patients: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
      }>;
      VisitNumbers: Array<string>;
      VisitStartDateTime: string;
    };
    type VisitQueryResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patients: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Visits: Array<{
          VisitNumber: string;
          VisitDateTime: string;
          PatientClass: string;
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
            Bed: string;
          };
          Reason: string;
          Status: string;
        }>;
      }>;
    };
  }
  export namespace PatientEducation {
    type New = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        VisitDateTime: string;
        AttendingProvider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
      };
      Education: Array<{
        Subject: {
          Code: string;
          Codeset: string;
          Description: string;
        };
        InstanceID: string;
        CreatedDateTime: string;
        Status: string;
        ActionStatus: string;
        ActionDateTime: string;
        Assignments: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          Topic: {
            Code: string;
            Codeset: string;
            Description: string;
          };
          InstanceID: string;
          CreatedDateTime: string;
          Status: string;
          ActionStatus: string;
          ActionDateTime: string;
          Assignees: Array<{
            Learner: string;
            ContentType: string;
            Readiness: string;
            Response: string;
            Notes: Array<string>;
          }>;
        }>;
      }>;
    };
    type Update = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        VisitDateTime: string;
        AttendingProvider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
      };
      Education: Array<{
        Subject: {
          Code: string;
          Codeset: string;
          Description: string;
        };
        InstanceID: string;
        CreatedDateTime: string;
        Status: string;
        ActionStatus: string;
        ActionDateTime: string;
        Assignments: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          Topic: {
            Code: string;
            Codeset: string;
            Description: string;
          };
          InstanceID: string;
          CreatedDateTime: string;
          Status: string;
          ActionStatus: string;
          ActionDateTime: string;
          Assignees: Array<{
            Learner: string;
            ContentType: string;
            Readiness: string;
            Response: string;
            Notes: Array<string>;
          }>;
        }>;
      }>;
    };
    type Delete = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        VisitDateTime: string;
        AttendingProvider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
      };
      Education: Array<{
        Subject: {
          Code: string;
          Codeset: string;
          Description: string;
        };
        InstanceID: string;
        CreatedDateTime: string;
        Status: string;
        ActionStatus: string;
        ActionDateTime: string;
        Assignments: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          Topic: {
            Code: string;
            Codeset: string;
            Description: string;
          };
          InstanceID: string;
          CreatedDateTime: string;
          Status: string;
          ActionStatus: string;
          ActionDateTime: string;
          Assignees: Array<{
            Learner: string;
            ContentType: string;
            Readiness: string;
            Response: string;
            Notes: Array<string>;
          }>;
        }>;
      }>;
    };
  }
  export namespace PatientSearch {
    type Query = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
    };
    type Response = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
        IsIncomplete: boolean;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
        PCP: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      };
      PotentialMatches: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
        PCP: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      }>;
    };
    type LocationQuery = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
      };
    };
    type LocationQueryResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patients: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Organization: {
          Name: string;
          Aliases: Array<string>;
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Contacts: Array<{
            Purpose: string;
            Name: string;
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Home: string;
              Work: string;
              Mobile: string;
            };
          }>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
      }>;
    };
  }
  export namespace Provider {
    type New = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Providers: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        IsActive: boolean;
        Demographics: {
          FirstName: string;
          LastName: string;
          MiddleName: string;
          Credentials: Array<string>;
          Addresses: Array<{
            Use: string;
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          }>;
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          Sex: string;
          DOB: string;
          Languages: Array<string>;
        };
        Qualifications: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Code: string;
          Codeset: string;
          Description: string;
          StartDate: string;
          EndDate: string;
        }>;
        Roles: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Organization: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            IsActive: string;
            Type: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
          Specialties: Array<{
            Code: string;
            Codeset: string;
            Description: string;
          }>;
          Locations: Array<{
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Status: string;
            Name: string;
            Description: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Office: string;
            };
          }>;
          Services: Array<{
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Type: string;
            Description: string;
            PhoneNumber: {
              Office: string;
            };
          }>;
          Availability: Array<{
            Days: Array<string>;
            AvailableStartTime: string;
            AvailableEndTime: string;
          }>;
        }>;
      }>;
    };
    type Update = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Providers: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        IsActive: boolean;
        Demographics: {
          FirstName: string;
          LastName: string;
          MiddleName: string;
          Credentials: Array<string>;
          Addresses: Array<{
            Use: string;
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          }>;
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          Sex: string;
          DOB: string;
          Languages: Array<string>;
        };
        Qualifications: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Code: string;
          Codeset: string;
          Description: string;
          StartDate: string;
          EndDate: string;
        }>;
        Roles: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Organization: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            IsActive: string;
            Type: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
          Specialties: Array<{
            Code: string;
            Codeset: string;
            Description: string;
          }>;
          Locations: Array<{
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Status: string;
            Name: string;
            Description: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Office: string;
            };
          }>;
          Services: Array<{
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Type: string;
            Description: string;
            PhoneNumber: {
              Office: string;
            };
          }>;
          Availability: Array<{
            Days: Array<string>;
            AvailableStartTime: string;
            AvailableEndTime: string;
          }>;
        }>;
      }>;
    };
    type Activate = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Providers: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          LastName: string;
          MiddleName: string;
          Credentials: Array<string>;
          Addresses: Array<{
            Use: string;
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          }>;
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          Sex: string;
          DOB: string;
          Languages: Array<string>;
        };
        Qualifications: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Code: string;
          Codeset: string;
          Description: string;
          StartDate: string;
          EndDate: string;
        }>;
        Roles: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Organization: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            IsActive: string;
            Type: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
          Specialties: Array<{
            Code: string;
            Codeset: string;
            Description: string;
          }>;
          Locations: Array<{
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Status: string;
            Name: string;
            Description: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Office: string;
            };
          }>;
          Services: Array<{
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Type: string;
            Description: string;
            PhoneNumber: {
              Office: string;
            };
          }>;
          Availability: Array<{
            Days: Array<string>;
            AvailableStartTime: string;
            AvailableEndTime: string;
          }>;
        }>;
      }>;
    };
    type Deactivate = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Providers: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          LastName: string;
          MiddleName: string;
          Credentials: Array<string>;
          Addresses: Array<{
            Use: string;
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          }>;
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          Sex: string;
          DOB: string;
          Languages: Array<string>;
        };
        Qualifications: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Code: string;
          Codeset: string;
          Description: string;
          StartDate: string;
          EndDate: string;
        }>;
        Roles: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Organization: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            IsActive: string;
            Type: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
          Specialties: Array<{
            Code: string;
            Codeset: string;
            Description: string;
          }>;
          Locations: Array<{
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Status: string;
            Name: string;
            Description: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Office: string;
            };
          }>;
          Services: Array<{
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Type: string;
            Description: string;
            PhoneNumber: {
              Office: string;
            };
          }>;
          Availability: Array<{
            Days: Array<string>;
            AvailableStartTime: string;
            AvailableEndTime: string;
          }>;
        }>;
      }>;
    };
    type ProviderQuery = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Provider: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          LastName: string;
          MiddleName: string;
          Address: {
            City: string;
            State: string;
            ZIP: string;
          };
        };
      };
    };
    type ProviderQueryResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Providers: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        IsActive: boolean;
        Demographics: {
          FirstName: string;
          LastName: string;
          MiddleName: string;
          Credentials: Array<string>;
          Addresses: Array<{
            Use: string;
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          }>;
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          Sex: string;
          DOB: string;
          Languages: Array<string>;
        };
        Qualifications: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Code: string;
          Codeset: string;
          Description: string;
          StartDate: string;
          EndDate: string;
        }>;
        Roles: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Organization: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            IsActive: string;
            Type: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
          Specialties: Array<{
            Code: string;
            Codeset: string;
            Description: string;
          }>;
          Locations: Array<{
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Status: string;
            Name: string;
            Description: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Office: string;
            };
          }>;
          Services: Array<{
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Type: string;
            Description: string;
            PhoneNumber: {
              Office: string;
            };
          }>;
          Availability: Array<{
            Days: Array<string>;
            AvailableStartTime: string;
            AvailableEndTime: string;
          }>;
        }>;
      }>;
    };
  }
  export namespace Referral {
    type New = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Referral: {
        ID: string;
        IDType: string;
        AlternateID: string;
        Type: string;
        Category: string;
        Priority: string;
        Status: string;
        DateTime: string;
        ExpirationDateTime: string;
        ProcessDateTime: string;
        Reason: string;
        ProviderSpecialty: string;
        DepartmentSpecialty: string;
        Notes: Array<string>;
        Authorization: {
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
          };
          Company: {
            ID: string;
            IDType: string;
            Name: string;
          };
          DateTime: string;
          ExpirationDateTime: string;
          Number: string;
          ReimbursementLimit: string;
          RequestedTreatmentCount: string;
          RequestedTreatmentUnits: string;
          AuthorizedTreatmentCount: string;
          Notes: Array<string>;
        };
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
          Notes: Array<string>;
        }>;
        Procedures: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          Notes: Array<string>;
          Quantity: string;
          Units: string;
          Modifiers: Array<string>;
        }>;
        Providers: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Type: string;
          ContactInfo: string;
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        Visit: {
          VisitNumber: string;
        };
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      };
      Visit: {
        VisitNumber: string;
      };
    };
    type Modify = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Referral: {
        ID: string;
        IDType: string;
        AlternateID: string;
        Type: string;
        Category: string;
        Priority: string;
        Status: string;
        DateTime: string;
        ExpirationDateTime: string;
        ProcessDateTime: string;
        Reason: string;
        ProviderSpecialty: string;
        DepartmentSpecialty: string;
        Notes: Array<string>;
        Authorization: {
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
          };
          Company: {
            ID: string;
            IDType: string;
            Name: string;
          };
          DateTime: string;
          ExpirationDateTime: string;
          Number: string;
          ReimbursementLimit: string;
          RequestedTreatmentCount: string;
          RequestedTreatmentUnits: string;
          AuthorizedTreatmentCount: string;
          Notes: Array<string>;
        };
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
          Notes: Array<string>;
        }>;
        Procedures: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          Notes: Array<string>;
          Quantity: string;
          Units: string;
          Modifiers: Array<string>;
        }>;
        Providers: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Type: string;
          ContactInfo: string;
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        Visit: {
          VisitNumber: string;
        };
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      };
      Visit: {
        VisitNumber: string;
      };
    };
    type Cancel = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Referral: {
        ID: string;
        IDType: string;
        AlternateID: string;
        Type: string;
        Category: string;
        Priority: string;
        Status: string;
        DateTime: string;
        ExpirationDateTime: string;
        ProcessDateTime: string;
        Reason: string;
        ProviderSpecialty: string;
        DepartmentSpecialty: string;
        Notes: Array<string>;
        Authorization: {
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
          };
          Company: {
            ID: string;
            IDType: string;
            Name: string;
          };
          DateTime: string;
          ExpirationDateTime: string;
          Number: string;
          ReimbursementLimit: string;
          RequestedTreatmentCount: string;
          RequestedTreatmentUnits: string;
          AuthorizedTreatmentCount: string;
          Notes: Array<string>;
        };
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
          Notes: Array<string>;
        }>;
        Procedures: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          Notes: Array<string>;
          Quantity: string;
          Units: string;
          Modifiers: Array<string>;
        }>;
        Providers: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Type: string;
          ContactInfo: string;
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        Visit: {
          VisitNumber: string;
        };
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
        Guarantor: {
          Number: string;
          FirstName: string;
          MiddleName: string;
          LastName: string;
          SSN: string;
          DOB: string;
          Sex: string;
          Spouse: {
            FirstName: string;
            LastName: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Business: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Type: string;
          RelationToPatient: string;
          Employer: {
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
        };
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      };
      Visit: {
        VisitNumber: string;
      };
    };
    type AuthReview = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Referral: {
        ID: string;
        IDType: string;
        AlternateID: string;
        Type: string;
        Category: string;
        Priority: string;
        Status: string;
        DateTime: string;
        ExpirationDateTime: string;
        ProcessDateTime: string;
        Reason: string;
        ProviderSpecialty: string;
        DepartmentSpecialty: string;
        Notes: Array<string>;
        Authorization: {
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
          };
          Company: {
            ID: string;
            IDType: string;
            Name: string;
          };
          DateTime: string;
          ExpirationDateTime: string;
          Number: string;
          ReimbursementLimit: string;
          RequestedTreatmentCount: string;
          RequestedTreatmentUnits: string;
          AuthorizedTreatmentCount: string;
          Notes: Array<string>;
        };
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
          Notes: Array<string>;
        }>;
        Procedures: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          Notes: Array<string>;
          Quantity: string;
          Units: string;
          Modifiers: Array<string>;
        }>;
        Providers: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Type: string;
          ContactInfo: string;
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        Visit: {
          VisitNumber: string;
        };
        ServiceLocation: string;
        RequestType: string;
        RelatedCause: string;
      };
      Authorization: {
        Request: {
          ID: string;
          IDType: string;
        };
        AlternateID: string;
        Type: string;
        Category: string;
        CertificationCode: string;
        ServiceType: string;
        ServiceLocation: string;
        RelatedCause: string;
        ServiceLevel: string;
        EventDate: string;
        Quantity: {
          Value: string;
          Units: string;
        };
        AdmissionSource: string;
        AdmissionType: string;
        AdditionalDates: Array<{
          DateTime: string;
          Type: string;
        }>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Notes: Array<string>;
        Services: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          RevenueCode: string;
          Quantity: {
            Value: string;
            Units: string;
          };
          Modifiers: Array<string>;
          ServiceDate: string;
          Notes: Array<string>;
        }>;
        Providers: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Type: string;
          ContactInfo: string;
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      };
    };
    type AuthResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Referral: {
        ID: string;
        IDType: string;
        AlternateID: string;
        Type: string;
        Category: string;
        Priority: string;
        Status: string;
        DateTime: string;
        ExpirationDateTime: string;
        ProcessDateTime: string;
        Reason: string;
        ProviderSpecialty: string;
        DepartmentSpecialty: string;
        Notes: Array<string>;
        Authorization: {
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
          };
          Company: {
            ID: string;
            IDType: string;
            Name: string;
          };
          DateTime: string;
          ExpirationDateTime: string;
          Number: string;
          ReimbursementLimit: string;
          RequestedTreatmentCount: string;
          RequestedTreatmentUnits: string;
          AuthorizedTreatmentCount: string;
          Notes: Array<string>;
        };
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
          Notes: Array<string>;
        }>;
        Procedures: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          Notes: Array<string>;
          Quantity: string;
          Units: string;
          Modifiers: Array<string>;
          Status: string;
          StatusReason: string;
          Authorization: {
            DateTime: string;
            ExpirationDateTime: string;
          };
        }>;
        Providers: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Type: string;
          ContactInfo: string;
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        Visit: {
          VisitNumber: string;
        };
        ServiceLocation: string;
        RequestType: string;
        RelatedCause: string;
        StatusReason: string;
      };
      Authorization: {
        Request: {
          ID: string;
          IDType: string;
        };
        AlternateID: string;
        Number: string;
        Type: string;
        Category: string;
        CertificationCode: string;
        ServiceType: string;
        ServiceLocation: string;
        RelatedCause: string;
        ServiceLevel: string;
        EventDate: string;
        Quantity: {
          Value: string;
          Units: string;
        };
        AdmissionSource: string;
        AdmissionType: string;
        AdditionalDates: Array<{
          DateTime: string;
          Type: string;
        }>;
        Decision: string;
        DecisionReason: string;
        IssueDate: string;
        EffectiveDate: string;
        ExpirationDate: string;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Notes: Array<string>;
        Services: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          RevenueCode: string;
          Quantity: {
            Value: string;
            Units: string;
          };
          Modifiers: Array<string>;
          ServiceDate: string;
          AuthorizationNumber: string;
          Decision: string;
          DecisionReason: string;
          IssueDate: string;
          EffectiveDate: string;
          ExpirationDate: string;
          Notes: Array<string>;
        }>;
        Providers: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Type: string;
          ContactInfo: string;
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      };
    };
    type Query = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Insurances: Array<{
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
            Type: string;
          };
          MemberNumber: string;
          Company: {
            ID: string;
            IDType: string;
            Name: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            PhoneNumber: string;
          };
          GroupNumber: string;
          GroupName: string;
          EffectiveDate: string;
          ExpirationDate: string;
          PolicyNumber: string;
          Priority: string;
          AgreementType: string;
          CoverageType: string;
          Insured: {
            Identifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            LastName: string;
            MiddleName: string;
            FirstName: string;
            SSN: string;
            Relationship: string;
            DOB: string;
            Sex: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
        }>;
      };
    };
    type QueryResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Referrals: Array<{
        ID: string;
        IDType: string;
        AlternateID: string;
        Type: string;
        Category: string;
        Priority: string;
        Status: string;
        DateTime: string;
        ExpirationDateTime: string;
        ProcessDateTime: string;
        Reason: string;
        ProviderSpecialty: string;
        DepartmentSpecialty: string;
        Notes: Array<string>;
        Authorization: {
          Plan: {
            ID: string;
            IDType: string;
            Name: string;
          };
          Company: {
            ID: string;
            IDType: string;
            Name: string;
          };
          DateTime: string;
          ExpirationDateTime: string;
          Number: string;
          ReimbursementLimit: string;
          RequestedTreatmentCount: string;
          RequestedTreatmentUnits: string;
          AuthorizedTreatmentCount: string;
          Notes: Array<string>;
        };
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
          Notes: Array<string>;
        }>;
        Procedures: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          Notes: Array<string>;
          Quantity: string;
          Units: string;
          Modifiers: Array<string>;
        }>;
        Providers: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Type: string;
          ContactInfo: string;
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        Visit: {
          VisitNumber: string;
        };
      }>;
    };
  }
  export namespace Research {
    type Study = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Study: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Title: string;
        Type: string;
        Sponsor: {
          ID: string;
          Name: string;
        };
        PrincipalInvestigator: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Coordinators: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        Description: string;
        Status: string;
        StartDateTime: string;
        Conditions: Array<{
          Code: string;
          CodeSystem: string;
          CodeSystemName: string;
          Name: string;
          AltCodes: Array<{
            Code: string;
            CodeSystem: string;
            CodeSystemName: string;
            Name: string;
          }>;
        }>;
        Design: {
          Purpose: never;
          Phase: never;
        };
        Eligibility: {
          Gender: string;
          MinimumAge: number;
          MaximumAge: number;
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
      };
      Protocols: Array<{
        ID: string;
        IDType: string;
        Description: string;
        Cycles: Array<{
          ID: string;
          IDType: string;
          Description: string;
          StartDate: string;
          EndDate: string;
          Days: Array<{
            ID: string;
            IDType: string;
            Description: string;
            ActivityDateTime: string;
            EarliestDateTime: string;
            LatestDateTime: string;
            Procedures: Array<{
              Code: string;
              CodeSet: string;
              Description: string;
              Modifiers: Array<string>;
            }>;
          }>;
        }>;
      }>;
    };
    type SubjectUpdate = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Enrollment: {
        SubjectStatus: string;
        StartDateTime: string;
        EndDateTime: string;
        Coordinators: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Study: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Title: string;
        Type: string;
      };
    };
  }
  export namespace Results {
    type New = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
      };
      Orders: Array<{
        ID: string;
        ApplicationOrderID: string;
        TransactionDateTime: string;
        CollectionDateTime: string;
        CompletionDateTime: string;
        Notes: Array<string>;
        ResultsStatus: string;
        Procedure: {
          Code: string;
          Codeset: string;
          Description: string;
        };
        Provider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ResultCopyProviders: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        Status: string;
        ResponseFlag: string;
        Priority: string;
        Results: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          RelatedGroupID: string;
          Specimen: {
            Source: string;
            BodySite: string;
            ID: string;
          };
          Value: string;
          ValueType: string;
          CompletionDateTime: string;
          FileType: string;
          Units: string;
          Notes: Array<string>;
          AbnormalFlag: string;
          Status: string;
          PrimaryResultsInterpreter: {
            NPI: string;
            ID: string;
            IDType: string;
            FirstName: string;
            LastName: string;
            Credentials: Array<string>;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Office: string;
            };
            Location: {
              Type: string;
              Facility: string;
              FacilityIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Department: string;
              DepartmentIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Room: string;
            };
          };
          Producer: {
            ID: string;
            Name: string;
            IDType: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
          Performer: {
            ID: string;
            IDType: string;
            FirstName: string;
            LastName: string;
            Credentials: Array<string>;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Office: string;
            };
            Location: {
              Type: string;
              Facility: string;
              FacilityIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Department: string;
              DepartmentIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Room: string;
            };
          };
          ReferenceRange: {
            Low: number;
            High: number;
            Text: string;
          };
          ObservationMethod: {
            Code: string;
            Codeset: string;
            Description: string;
          };
        }>;
      }>;
      Visit: {
        VisitDateTime: string;
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        AdditionalStaff: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            Codeset: string;
            Description: string;
          };
        }>;
      };
    };
    type NewUnsolicited = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
      };
      Orders: Array<{
        ID: string;
        ApplicationOrderID: string;
        TransactionDateTime: string;
        CollectionDateTime: string;
        CompletionDateTime: string;
        Notes: Array<string>;
        ResultsStatus: string;
        Procedure: {
          Code: string;
          Codeset: string;
          Description: string;
        };
        Provider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ResultCopyProviders: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        Status: string;
        ResponseFlag: string;
        Priority: string;
        Results: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          RelatedGroupID: string;
          Specimen: {
            Source: string;
            BodySite: string;
            ID: string;
          };
          Value: string;
          ValueType: string;
          CompletionDateTime: string;
          FileType: string;
          Units: string;
          Notes: Array<string>;
          AbnormalFlag: string;
          Status: string;
          PrimaryResultsInterpreter: {
            NPI: string;
            ID: string;
            IDType: string;
            FirstName: string;
            LastName: string;
            Credentials: Array<string>;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Office: string;
            };
            Location: {
              Type: string;
              Facility: string;
              FacilityIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Department: string;
              DepartmentIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Room: string;
            };
          };
          Producer: {
            ID: string;
            Name: string;
            IDType: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
          Performer: {
            ID: string;
            IDType: string;
            FirstName: string;
            LastName: string;
            Credentials: Array<string>;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Office: string;
            };
            Location: {
              Type: string;
              Facility: string;
              FacilityIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Department: string;
              DepartmentIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Room: string;
            };
          };
          ReferenceRange: {
            Low: number;
            High: number;
            Text: string;
          };
          ObservationMethod: {
            Code: string;
            Codeset: string;
            Description: string;
          };
        }>;
      }>;
      Visit: {
        VisitDateTime: string;
        VisitNumber: string;
        AccountNumber: string;
        PatientClass: string;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        AdditionalStaff: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            Codeset: string;
            Description: string;
          };
        }>;
      };
    };
    type Query = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patients: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
      }>;
      Completion: {
        StartDateTime: string;
        EndDateTime: string;
      };
      ResultStatuses: Array<string>;
      OrderIDs: Array<string>;
      RelatedGroupIDs: Array<string>;
      Procedures: Array<{
        Code: string;
        Codeset: string;
      }>;
      Location: {
        Department: string;
      };
      LastUpdated: {
        StartDateTime: string;
        EndDateTime: string;
      };
    };
    type QueryResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Orders: Array<{
        Patient: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
        };
        Visit: {
          VisitNumber: string;
        };
        LastUpdated: string;
        ID: string;
        ApplicationOrderID: string;
        TransactionDateTime: string;
        CollectionDateTime: string;
        CompletionDateTime: string;
        Notes: Array<string>;
        ResultsStatus: string;
        Procedure: {
          Code: string;
          Codeset: string;
          Description: string;
        };
        Provider: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ResultCopyProviders: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        Status: string;
        ResponseFlag: string;
        Priority: string;
        Results: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          RelatedGroupID: string;
          Specimen: {
            Source: string;
            BodySite: string;
            ID: string;
          };
          Value: string;
          ValueType: string;
          CompletionDateTime: string;
          FileType: string;
          Units: string;
          Notes: Array<string>;
          AbnormalFlag: string;
          Status: string;
          PrimaryResultsInterpreter: {
            NPI: string;
            ID: string;
            IDType: string;
            FirstName: string;
            LastName: string;
            Credentials: Array<string>;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Office: string;
            };
            Location: {
              Type: string;
              Facility: string;
              FacilityIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Department: string;
              DepartmentIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Room: string;
            };
          };
          Producer: {
            ID: string;
            Name: string;
            IDType: string;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
          Performer: {
            ID: string;
            IDType: string;
            FirstName: string;
            LastName: string;
            Credentials: Array<string>;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Office: string;
            };
            Location: {
              Type: string;
              Facility: string;
              FacilityIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Department: string;
              DepartmentIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Room: string;
            };
          };
          ReferenceRange: {
            Low: number;
            High: number;
            Text: string;
          };
          ObservationMethod: {
            Code: string;
            Codeset: string;
            Description: string;
          };
        }>;
      }>;
    };
  }
  export namespace Scheduling {
    type New = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      AppointmentInfo: Array<{
        Code: string;
        Codeset: string;
        Description: string;
        Value: string;
      }>;
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        VisitDateTime: string;
        PatientClass: string;
        Status: string;
        Duration: number;
        Reason: string;
        Type: string;
        Instructions: Array<string>;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        VisitProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
        AdditionalStaff: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            Codeset: string;
            Description: string;
          };
          StartDateTime: string;
          Duration: number;
        }>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Equipment: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          StartDateTime: string;
          Duration: number;
        }>;
      };
    };
    type Reschedule = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      AppointmentInfo: Array<{
        Code: string;
        Codeset: string;
        Description: string;
        Value: string;
      }>;
      Visit: {
        VisitNumber: string;
        OldVisitNumber: string;
        AccountNumber: string;
        VisitDateTime: string;
        OldDateTime: string;
        PatientClass: string;
        Status: string;
        Duration: number;
        Reason: string;
        Type: string;
        Instructions: Array<string>;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        VisitProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
        AdditionalStaff: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            Codeset: string;
            Description: string;
          };
          StartDateTime: string;
          Duration: number;
        }>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Equipment: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          StartDateTime: string;
          Duration: number;
        }>;
      };
    };
    type Modification = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      AppointmentInfo: Array<{
        Code: string;
        Codeset: string;
        Description: string;
        Value: string;
      }>;
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        VisitDateTime: string;
        PatientClass: string;
        Status: string;
        Duration: number;
        Reason: string;
        Type: string;
        Instructions: Array<string>;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        VisitProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
        AdditionalStaff: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            Codeset: string;
            Description: string;
          };
          StartDateTime: string;
          Duration: number;
        }>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Equipment: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          StartDateTime: string;
          Duration: number;
        }>;
      };
    };
    type Cancel = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      AppointmentInfo: Array<{
        Code: string;
        Codeset: string;
        Description: string;
        Value: string;
      }>;
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        VisitDateTime: string;
        PatientClass: string;
        Status: string;
        Duration: number;
        Reason: string;
        CancelReason: string;
        Type: string;
        Instructions: Array<string>;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        VisitProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
        AdditionalStaff: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            Codeset: string;
            Description: string;
          };
          StartDateTime: string;
          Duration: number;
        }>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Equipment: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          StartDateTime: string;
          Duration: number;
        }>;
      };
    };
    type NoShow = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      AppointmentInfo: Array<{
        Code: string;
        Codeset: string;
        Description: string;
        Value: string;
      }>;
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        VisitDateTime: string;
        PatientClass: string;
        Status: string;
        Duration: number;
        Reason: string;
        NoShowReason: string;
        Type: string;
        Instructions: Array<string>;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        VisitProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
        AdditionalStaff: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            Codeset: string;
            Description: string;
          };
          StartDateTime: string;
          Duration: number;
        }>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Equipment: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          StartDateTime: string;
          Duration: number;
        }>;
      };
    };
    type PushSlots = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
        BatchID: string;
        CurrentBatch: number;
        TotalBatches: number;
      };
      Slots: Array<{
        ID: string;
        DateTime: string;
        Reason: string;
        Duration: number;
        Provider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
      }>;
    };
    type AvailableSlots = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
      };
      StartDateTime: string;
      EndDateTime: string;
      Visit: {
        Reasons: Array<string>;
        AttendingProviders: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        Locations: Array<{
          Type: string;
          Facility: string;
          Department: string;
          SpecialtyDepartment: {
            Code: string;
            Codeset: string;
            Description: string;
          };
          Room: string;
          ID: string;
        }>;
        VisitType: Array<{
          Code: string;
          Codeset: string;
          Description: string;
        }>;
        VisitPreference: Array<{
          Duration: string;
          DurationUnit: string;
          Day: Array<string>;
          Time: Array<string>;
        }>;
      };
    };
    type AvailableSlotsResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
        IsIncomplete: boolean;
      };
      AvailableSlots: Array<{
        ID: string;
        DateTime: string;
        Reason: string;
        Duration: number;
        Provider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
        Notes: Array<string>;
      }>;
    };
    type Booked = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      StartDateTime: string;
      EndDateTime: string;
      Visit: {
        Reason: string;
        VisitNumber: string;
        AttendingProviders: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
        VisitProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
        Patients: Array<{
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
        }>;
      };
    };
    type BookedResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
        IsIncomplete: boolean;
      };
      Visits: Array<{
        VisitNumber: string;
        AccountNumber: string;
        VisitDateTime: string;
        PatientClass: string;
        Status: string;
        Duration: number;
        Reason: string;
        CancelReason: string;
        LastUpdated: string;
        ScheduledDateTime: string;
        CancelDateTime: string;
        Type: string;
        Instructions: Array<string>;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ConsultingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        ReferringProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        VisitProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
        AdditionalStaff: Array<{
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
          Role: {
            Code: string;
            Codeset: string;
            Description: string;
          };
          StartDateTime: string;
          Duration: number;
        }>;
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Equipment: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          StartDateTime: string;
          Duration: number;
        }>;
        Patient: {
          Identifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Demographics: {
            FirstName: string;
            MiddleName: string;
            LastName: string;
            DOB: string;
            SSN: string;
            Sex: string;
            Race: string;
            IsHispanic: boolean;
            Religion: string;
            MaritalStatus: string;
            IsDeceased: boolean;
            DeathDateTime: string;
            PhoneNumber: {
              Home: string;
              Office: string;
              Mobile: string;
            };
            EmailAddresses: Array<string>;
            Language: string;
            Citizenship: Array<string>;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
          };
          Notes: Array<string>;
        };
        AppointmentInfo: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          Value: string;
        }>;
      }>;
    };
  }
  export namespace SSO {
    type Signon = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        SessionID: string;
        SessionBaseURL: string;
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        FacilityCode: string;
      };
      Subject: string;
      Expiration: number;
      IssuedAt: number;
      UserId: string;
      Name: string;
      FirstName: string;
      LastName: string;
      MiddleName: string;
      EmailAddress: string;
      NPI: string;
      ProviderSpecialty: string;
      TimeZone: string;
      Locale: string;
      PhoneNumber: {
        Office: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          LastName: string;
          MiddleName: string;
          DOB: string;
          Sex: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
      };
      Visit: {
        VisitNumber: string;
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
      };
      Order: {
        ID: string;
      };
    };
  }
  export namespace SurgicalScheduling {
    type New = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Procedures: Array<{
        Code: string;
        Codeset: string;
        Description: string;
        DateTime: string;
        Duration: number;
        ProcedureInfo: Array<{
          Description: string;
          Value: string;
        }>;
      }>;
      SurgeryStaff: Array<{
        ID: string;
        IDType: string;
        FirstName: string;
        LastName: string;
        Credentials: Array<string>;
        Address: {
          StreetAddress: string;
          City: string;
          State: string;
          ZIP: string;
          County: string;
          Country: string;
        };
        EmailAddresses: Array<string>;
        PhoneNumber: {
          Office: string;
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
        Role: {
          Code: string;
          Codeset: string;
          Description: string;
        };
        StartDateTime: string;
        Duration: number;
      }>;
      SurgicalInfo: Array<{
        Code: string;
        Codeset: string;
        Description: string;
        Value: string;
      }>;
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        VisitDateTime: string;
        Status: string;
        Duration: number;
        PatientClass: string;
        Notes: Array<string>;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Equipment: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          StartDateTime: string;
          Duration: number;
        }>;
      };
      SurgicalCase: {
        Number: string;
        Status: string;
      };
    };
    type Reschedule = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Procedures: Array<{
        Code: string;
        Codeset: string;
        Description: string;
        DateTime: string;
        Duration: number;
        ProcedureInfo: Array<{
          Description: string;
          Value: string;
        }>;
      }>;
      SurgeryStaff: Array<{
        ID: string;
        IDType: string;
        FirstName: string;
        LastName: string;
        Credentials: Array<string>;
        Address: {
          StreetAddress: string;
          City: string;
          State: string;
          ZIP: string;
          County: string;
          Country: string;
        };
        EmailAddresses: Array<string>;
        PhoneNumber: {
          Office: string;
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
        Role: {
          Code: string;
          Codeset: string;
          Description: string;
        };
        StartDateTime: string;
        Duration: number;
      }>;
      SurgicalInfo: Array<{
        Code: string;
        Codeset: string;
        Description: string;
        Value: string;
      }>;
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        VisitDateTime: string;
        Status: string;
        Duration: number;
        PatientClass: string;
        Notes: Array<string>;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Equipment: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          StartDateTime: string;
          Duration: number;
        }>;
      };
      SurgicalCase: {
        Number: string;
        Status: string;
      };
    };
    type Modification = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Procedures: Array<{
        Code: string;
        Codeset: string;
        Description: string;
        DateTime: string;
        Duration: number;
        ProcedureInfo: Array<{
          Description: string;
          Value: string;
        }>;
      }>;
      SurgeryStaff: Array<{
        ID: string;
        IDType: string;
        FirstName: string;
        LastName: string;
        Credentials: Array<string>;
        Address: {
          StreetAddress: string;
          City: string;
          State: string;
          ZIP: string;
          County: string;
          Country: string;
        };
        EmailAddresses: Array<string>;
        PhoneNumber: {
          Office: string;
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
        Role: {
          Code: string;
          Codeset: string;
          Description: string;
        };
        StartDateTime: string;
        Duration: number;
      }>;
      SurgicalInfo: Array<{
        Code: string;
        Codeset: string;
        Description: string;
        Value: string;
      }>;
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        VisitDateTime: string;
        Status: string;
        Duration: number;
        PatientClass: string;
        Notes: Array<string>;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Equipment: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          StartDateTime: string;
          Duration: number;
        }>;
      };
      SurgicalCase: {
        Number: string;
        Status: string;
      };
    };
    type Cancel = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Procedures: Array<{
        Code: string;
        Codeset: string;
        Description: string;
        DateTime: string;
        Duration: number;
        ProcedureInfo: Array<{
          Description: string;
          Value: string;
        }>;
      }>;
      SurgeryStaff: Array<{
        ID: string;
        IDType: string;
        FirstName: string;
        LastName: string;
        Credentials: Array<string>;
        Address: {
          StreetAddress: string;
          City: string;
          State: string;
          ZIP: string;
          County: string;
          Country: string;
        };
        EmailAddresses: Array<string>;
        PhoneNumber: {
          Office: string;
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
        Role: {
          Code: string;
          Codeset: string;
          Description: string;
        };
        StartDateTime: string;
        Duration: number;
      }>;
      SurgicalInfo: Array<{
        Code: string;
        Codeset: string;
        Description: string;
        Value: string;
      }>;
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        VisitDateTime: string;
        Status: string;
        CancelReason: string;
        Duration: number;
        PatientClass: string;
        Notes: Array<string>;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Equipment: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          StartDateTime: string;
          Duration: number;
        }>;
      };
      SurgicalCase: {
        Number: string;
        Status: string;
      };
    };
    type NoShow = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
      Procedures: Array<{
        Code: string;
        Codeset: string;
        Description: string;
        DateTime: string;
        Duration: number;
        ProcedureInfo: Array<{
          Description: string;
          Value: string;
        }>;
      }>;
      SurgeryStaff: Array<{
        ID: string;
        IDType: string;
        FirstName: string;
        LastName: string;
        Credentials: Array<string>;
        Address: {
          StreetAddress: string;
          City: string;
          State: string;
          ZIP: string;
          County: string;
          Country: string;
        };
        EmailAddresses: Array<string>;
        PhoneNumber: {
          Office: string;
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
        Role: {
          Code: string;
          Codeset: string;
          Description: string;
        };
        StartDateTime: string;
        Duration: number;
      }>;
      SurgicalInfo: Array<{
        Code: string;
        Codeset: string;
        Description: string;
        Value: string;
      }>;
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
        VisitDateTime: string;
        Status: string;
        NoShowReason: string;
        Duration: number;
        PatientClass: string;
        Notes: Array<string>;
        AttendingProvider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
          Bed: string;
        };
        Diagnoses: Array<{
          Code: string;
          Codeset: string;
          Name: string;
          Type: string;
          DocumentedDateTime: string;
        }>;
        Equipment: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          StartDateTime: string;
          Duration: number;
        }>;
      };
      SurgicalCase: {
        Number: string;
        Status: string;
      };
    };
  }
  export namespace Vaccination {
    type New = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
        Consent: {
          Status: string;
          EffectiveDate: string;
          Notification: string;
        };
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
      };
      Vaccinations: Array<{
        DateTime: string;
        Product: {
          Code: string;
          Codeset: string;
          Description: string;
          LotNumber: string;
          ExpirationDate: string;
          Manufacturer: {
            Code: string;
            Codeset: string;
            Name: string;
          };
        };
        Route: {
          Code: string;
          Codeset: string;
          Name: string;
        };
        Site: {
          Code: string;
          Codeset: string;
          Name: string;
        };
        Dose: {
          Quantity: string;
          Units: string;
        };
        Order: {
          ID: string;
          EHRID: string;
          Provider: {
            NPI: string;
            ID: string;
            IDType: string;
            FirstName: string;
            LastName: string;
            Credentials: Array<string>;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Office: string;
            };
            Location: {
              Type: string;
              Facility: string;
              FacilityIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Department: string;
              DepartmentIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Room: string;
            };
          };
        };
        ClinicalInfo: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          Value: string;
          ValueType: string;
          Units: string;
          Notes: Array<string>;
          CompletionDateTime: string;
          RelatedGroupID: string;
        }>;
        Notes: Array<string>;
        RefusalReason: string;
        Provider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
      }>;
    };
    type Administration = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
        Consent: {
          Status: string;
          EffectiveDate: string;
          Notification: string;
        };
      };
      Visit: {
        VisitNumber: string;
        AccountNumber: string;
      };
      Vaccinations: Array<{
        DateTime: string;
        Product: {
          Code: string;
          Codeset: string;
          Description: string;
          LotNumber: string;
          ExpirationDate: string;
          Manufacturer: {
            Code: string;
            Codeset: string;
            Name: string;
          };
        };
        Route: {
          Code: string;
          Codeset: string;
          Name: string;
        };
        Site: {
          Code: string;
          Codeset: string;
          Name: string;
        };
        Dose: {
          Quantity: string;
          Units: string;
        };
        Order: {
          ID: string;
          EHRID: string;
          Provider: {
            NPI: string;
            ID: string;
            IDType: string;
            FirstName: string;
            LastName: string;
            Credentials: Array<string>;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Office: string;
            };
            Location: {
              Type: string;
              Facility: string;
              FacilityIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Department: string;
              DepartmentIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Room: string;
            };
          };
        };
        ClinicalInfo: Array<{
          Code: string;
          Codeset: string;
          Description: string;
          Value: string;
          ValueType: string;
          Units: string;
          Notes: Array<string>;
          CompletionDateTime: string;
          RelatedGroupID: string;
        }>;
        Notes: Array<string>;
        RefusalReason: string;
        Provider: {
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Location: {
          Type: string;
          Facility: string;
          FacilityIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Department: string;
          DepartmentIdentifiers: Array<{
            ID: string;
            IDType: string;
          }>;
          Room: string;
        };
        Action: string;
      }>;
    };
    type PatientQuery = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
      };
    };
    type PatientQueryResponse = {
      Meta: {
        DataModel: string;
        EventType: string;
        EventDateTime: string;
        Test: boolean;
        Source: {
          ID: string;
          Name: string;
        };
        Destinations: Array<{
          ID: string;
          Name: string;
        }>;
        Logs: Array<{
          ID: string;
          AttemptID: string;
        }>;
        FacilityCode: string;
      };
      Patient: {
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
        PCP: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
        Vaccinations: Array<{
          DateTime: string;
          Product: {
            Code: string;
            Codeset: string;
            Description: string;
            LotNumber: string;
            ExpirationDate: string;
            Manufacturer: {
              Code: string;
              Codeset: string;
              Name: string;
            };
          };
          Route: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          Site: {
            Code: string;
            Codeset: string;
            Name: string;
          };
          Dose: {
            Quantity: string;
            Units: string;
          };
          Order: {
            ID: string;
            EHRID: string;
            Provider: {
              NPI: string;
              ID: string;
              IDType: string;
              FirstName: string;
              LastName: string;
              Credentials: Array<string>;
              Address: {
                StreetAddress: string;
                City: string;
                State: string;
                ZIP: string;
                County: string;
                Country: string;
              };
              EmailAddresses: Array<string>;
              PhoneNumber: {
                Office: string;
              };
              Location: {
                Type: string;
                Facility: string;
                FacilityIdentifiers: Array<{
                  ID: string;
                  IDType: string;
                }>;
                Department: string;
                DepartmentIdentifiers: Array<{
                  ID: string;
                  IDType: string;
                }>;
                Room: string;
              };
            };
          };
          ClinicalInfo: Array<{
            Code: string;
            Codeset: string;
            Description: string;
            Value: string;
            ValueType: string;
            Units: string;
            Notes: Array<string>;
            CompletionDateTime: string;
            RelatedGroupID: string;
          }>;
          Notes: Array<string>;
          RefusalReason: string;
          Provider: {
            ID: string;
            IDType: string;
            FirstName: string;
            LastName: string;
            Credentials: Array<string>;
            Address: {
              StreetAddress: string;
              City: string;
              State: string;
              ZIP: string;
              County: string;
              Country: string;
            };
            EmailAddresses: Array<string>;
            PhoneNumber: {
              Office: string;
            };
            Location: {
              Type: string;
              Facility: string;
              FacilityIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Department: string;
              DepartmentIdentifiers: Array<{
                ID: string;
                IDType: string;
              }>;
              Room: string;
            };
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        }>;
      };
      PotentialMatches: Array<{
        Identifiers: Array<{
          ID: string;
          IDType: string;
        }>;
        Demographics: {
          FirstName: string;
          MiddleName: string;
          LastName: string;
          DOB: string;
          SSN: string;
          Sex: string;
          Race: string;
          IsHispanic: boolean;
          Religion: string;
          MaritalStatus: string;
          IsDeceased: boolean;
          DeathDateTime: string;
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          EmailAddresses: Array<string>;
          Language: string;
          Citizenship: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
        };
        Notes: Array<string>;
        Contacts: Array<{
          FirstName: string;
          MiddleName: string;
          LastName: string;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          PhoneNumber: {
            Home: string;
            Office: string;
            Mobile: string;
          };
          RelationToPatient: string;
          EmailAddresses: Array<string>;
          Roles: Array<string>;
        }>;
        PCP: {
          NPI: string;
          ID: string;
          IDType: string;
          FirstName: string;
          LastName: string;
          Credentials: Array<string>;
          Address: {
            StreetAddress: string;
            City: string;
            State: string;
            ZIP: string;
            County: string;
            Country: string;
          };
          EmailAddresses: Array<string>;
          PhoneNumber: {
            Office: string;
          };
          Location: {
            Type: string;
            Facility: string;
            FacilityIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Department: string;
            DepartmentIdentifiers: Array<{
              ID: string;
              IDType: string;
            }>;
            Room: string;
          };
        };
      }>;
    };
  }
}
