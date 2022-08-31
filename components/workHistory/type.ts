type WorkHistoryType = {
  role: string;
  responsibilities: string[];
  startDate: string;
  endDate?: string;
  currentlyWorkingHere?: boolean;
  company: CompanyInfoType;
  address: WorkHistoryAddressType;
};

type WorkHistoryAddressType = {
  country: string;
  city: string;
};

type CompanyInfoType = {
  name: string;
  website?: string;
};

export type { CompanyInfoType, WorkHistoryAddressType, WorkHistoryType };
