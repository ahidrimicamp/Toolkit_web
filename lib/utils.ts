import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authFormSchema = (type: string) => {
  z.object({
    // For sign-in
    email: z.string().email(),
    password: z.string().min(8),

    // For sign up
    firstName:
      type === "sign-in" ? z.string().optional() : z.string().min(2).max(15),
    lastName:
      type === "sign-in" ? z.string().optional() : z.string().min(3).max(20),
    phone:
      type === "sign-in" ? z.string().optional() : z.string().min(3).max(10),
    group: type === "sign-in" ? z.string().optional() : z.string().max(20),
  });
};

export const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),

  firstName: z.string().min(2).max(15),
  lastName: z.string().min(3).max(20),
  phone: z.string().min(3).max(10),
  group: z.string().max(20),
});

export const newMerchantSchema = z.object({
  MID: z.string(),
  LegalName: z.string(),
  DBA: z.string(),
  Phone: z.string(),
  Status: z.string(),
  Approval: z.string().date(),
  Filter: z.string(),
  Processor: z.string(),
  Fitler2: z.string(),
  AgentID: z.number(),
  SalesRep: z.string(),
  Split: z.number(),
  SplitName: z.string(),
  SplitID: z.number(),
  LeadSource: z.string(),
  SplitLead: z.number(),
  EstAnnual: z.number(),
  Transactions: z.number(),
  Filter3: z.string(),
  Banks: z.string(),
  WAVItAccount: z.number(),
  MCCCode: z.string(),
  Notice: z.string(),
  ChildMID: z.boolean(),
  WAVitAccount: z.boolean(),
  WAVitApp: z.boolean(),
  NewAccountTasks: z.boolean(),
  BusinessRetail: z.boolean(),
  BusinessEcommerce: z.boolean(),
  BusinessRestaurant: z.boolean(),
  BusinessMoTo: z.boolean(),
  DeployBy: z.string(),
});

export const MerchantInfoSchema = z.object({
  MID: z.string(),
  LegalName: z.string(),
  DBA: z.string(),
  Phone: z.string(),
  Status: z.string(),
  Approval: z.string().date(),
  Filter: z.string(),
  Processor: z.string(),
  Fitler2: z.string(),
  AgentID: z.number(),
  SalesRep: z.string(),
  Split: z.number(),
  SplitName: z.string(),
  SplitID: z.number(),
  LeadSource: z.string(),
  SplitLead: z.number(),
  EstAnnual: z.number(),
  Transactions: z.number(),
  Filter3: z.string(),
  Banks: z.string(),
  WAVItAccount: z.number(),
  MCCCode: z.string(),
  Notice: z.string(),
  Address: z.string(),
  Contact: z.string(),
  Apt: z.string(),
  City: z.string(),
  State: z.string(),
  Zip: z.string(),
  Phone1: z.string(),
  Extension1: z.string(),
  Phone2: z.string(),
  Extension2: z.string(),
  Email: z.string(),
  Website: z.string(),
  DBAcontact: z.string(),
  DBAaddress: z.string(),
  DBAapt: z.string(),
  DBAcity: z.string(),
  DBAstate: z.string(),
  DBAzip: z.string(),
  FrontEndPlatform: z.string(),
  FrontEndMID: z.string(),
  FrontEndTID: z.string(),
  CheckServiceMID: z.string(),
  GatewayMID: z.string(),
  EstAnnualVolume: z.string(),
  SICcode: z.string(),
  MCCclassification: z.string(),
  Parent: z.string(),
  CloverID: z.string(),
});

export const MerchantSoftwareInstallSchema = z.object({
  SoftwareAcctNumber: z.string(),
  POCname: z.string(),
  POCphone: z.string(),
  POCemail: z.string(),
  ISOname: z.string(),
  ISOcontact: z.string(),
  ISOphone: z.string(),
  ISOemail: z.string(),
  Dealer: z.string(),
  DealerContact: z.string(),
  DealerPhone: z.string(),
  DealerEmail: z.string(),
  ActiveServiceAgreement: z.boolean(),
  POSsystem: z.string(),
  NumberStations: z.number(),
  MiPointClover: z.boolean(),
  HasTSLlicense: z.boolean(),
  MiPointCloverQty: z.number(),
  MiPointIngencio: z.boolean(),
  HasPMSlicense: z.boolean(),
  MiPointIngencioQty: z.number(),
  RemoteServiceAccess: z.boolean(),
  Environment: z.string(),
  GatewayUsername: z.string(),
  GatewayPassword: z.string(),
  GatewayKey: z.string(),
  SupportProvider: z.string(),
  SupportProgram: z.string(),
  EffectiveDate: z.date(),
  InstallationDevices: z.number(),
  InstallationDevicesPrice: z.number(),
  InstallationDevicesTotal: z.number(),
  MonthlyRecurringDevices: z.number(),
  MonthlyRecurringDevicesPrice: z.number(),
  MonthlyRecurringDevicesTotal: z.number(),
  SupportRecurringDevices: z.number(),
  SupportRecurringDevicesPrice: z.number(),
  SupportRecurringDevicesTotal: z.number()
});

export const MerchantAgentLeadSourceSchema = z.object({
  LeadSource: z.string(),
  SalesVertical: z.string(),
  Agent: z.string(),
  SplitPercentage: z.number(),
  CalcAfterMasterSplit: z.boolean(),
  CalcAfterAgentPay: z.boolean(),
  CalcPartOfMaster: z.boolean(),
  CalcPartOfSubMaster: z.boolean(),
  AgentIsMaster: z.boolean(),
  RebateAccount: z.boolean(),
  ForceNotifMasterAgent: z.boolean(),
  TotalEffectiveSplit: z.number(),
  SubAgent: z.string(),
  Filter: z.string(),
  DefaultSplits: z.string(),
  Agent2: z.string(),
});


export const MerchEnterAdjustmentSchema = z.object({
  Agent: z.string(),
  DataDate: z.string(),
  DisplayDate: z.string(),
  AdjustType: z.string(),
  Notes: z.string(),
  AdjustAmount: z.string(),
  Split: z.number(),
});

export const AgentSetupSchema = z.object({
  findAgent: z.string(),
  excludeClosedAgents: z.boolean(),
  displayName: z.string().nonempty("Display Name is required"),
  firstName: z.string().nonempty("First Name is required"),
  lastName: z.string().nonempty("Last Name is required"),
  merchantNote: z.string(),
  isChildSubAgent: z.boolean(),
  subAgentOrChild: z.string(),
  selectRelationshipManager: z.string(),
  email: z.string().email("Invalid email address"),
  phone: z.string(),
  status: z.string().nonempty("Status is required"),
  startDate: z.string(),
  endDate: z.string(),
  address1: z.string(),
  address2: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  routing: z.string(),
  residualEmail: z.string(),
  zohoEmail: z.string(),
  account: z.string(),
  ssn: z.string(),
  payDay: z.string(),
  entityType: z.string(),
  payGroup: z.string(),
  msoId: z.string(),
  messeging: z.boolean(),
  residual: z.boolean(),
  filePrefix: z.string(),
  tickets: z.boolean(),
  flashes: z.boolean(),
  noBillPay: z.boolean(),
  reportType: z.string(),
  okToPayResid: z.boolean(),
  doNotPay: z.boolean(),
  printPhysicalCheck: z.boolean(),
  payrollId: z.string(),
  agentId: z.string(),
  note: z.string(),
});

export const AgentEquipmentSchema = z.object({
  copyFromContactInfo: z.boolean(),
  noShippingEmails: z.boolean(),
  coCard: z.boolean(),
  markClosed: z.boolean(),
  shipPhone: z.string(),
  shipExt: z.string(),
  shippingEmail: z.string().email("Invalid email address"),
  shippingServiceEmail: z.string().email("Invalid email address"),
  address1: z.string(),
  address2: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  cellPhone: z.string(),
});

export const newLookupSchema = z.object({
  MID: z.string(),
  OrderID: z.string(),
  Serial: z.string(),
  Model: z.string(),
  Condition: z.string(),
  ShelfItems: z.boolean(),
});

export const newItemsSchema = z.object({
  Model: z.string(),
  Id: z.string(),
  Description: z.string(),
  Alias: z.string(),
  ItemType: z.string(),
  Style: z.string(),
  Manufacturer: z.string(),
  ReorderQty: z.number(),
  SerialNumber: z.boolean(),
  TakeInventory: z.boolean(),
  PhysicallyShippable: z.boolean(),
  HwPricing: z.number(),
  DeployFee: z.number(),
  TaxShipping: z.number(),
  Total: z.number(),
  DimensionName: z.string(),
  DimensionWidth: z.string(),
  DimensionHeight: z.string(),
  DimensionLength: z.string(),
  DimensionWeight: z.string(),
});

export const newItemDetailSchema = z.object({
  Condition: z.string(),
  Serial: z.string(),
  SortBy: z.string(),
});

export const newEquipmentOrderSchema = z.object({
  Merchant: z.string(),
  MID: z.string(),
  Status: z.string(),
  Model: z.string(),
  NoSerial: z.boolean(),
  Limit: z.boolean(),
});

export const newUnassignedEquipmentSchema = z.object({
  Model: z.string(),
  Condition: z.string(),
  Serial: z.string(),
});

export const newRecentOrdersSchema = z.object({
  FromDate: z.string(),
  ToDate: z.string(),
});

// ADMIN SCHEMAS
export const newRingCentralUtilitySchema = z.object({
  DataSource: z.string(),
  Status: z.string(),
});

export const newLoadProcessingDataSchema = z.object({
  ProcessingPeriod: z.string(),
  Status: z.string(),
});

export const newThirdPartyProcessorsSchema = z.object({
  Processor: z.string(),
  MID: z.string(),
  ResidualDate: z.string(),
  CalculateAllMonths: z.boolean(),
});

export const newFirstDataOmahaSchema = z.object({
  ResidualDate: z.string(),
  CheckCalculation: z.boolean(),
  NutraChargeBacks: z.boolean(),
  DoNotQueryZeroRecords: z.boolean(),
  CalculateInitialPassOnly: z.boolean(),
  SkipSysPrins: z.boolean(),
  From: z.string(),
  To: z.string(),
  CalculateIndividualMID: z.string(),
  Status: z.string(),
});

export const newAdjustmentCriteriaSchema = z.object({
  ResidualDate: z.string(),
  Agent: z.string(),
  AgentID: z.string(),
  AdjustType: z.string(),
  MID: z.string(),
  DBALegal: z.string(),
  Processor: z.string(),
  Amount: z.string(),
  Notes: z.string(),
});

export const newDisplayResidualsSchema = z.object({
  ResidualDate: z.string(),
  PayDay: z.boolean(),
  PayDaySelection: z.string(),
  ExcludePayDay: z.boolean(),
  PayGroup: z.boolean(),
  PayGroupSelection: z.string(),
  ExcludePayGroup: z.boolean(),
  ShowOkToPay: z.boolean(),
  ExcludeNotOkToPay: z.boolean(),
  ShowNotOkToPay: z.boolean(),
  OnlyWithEmails: z.boolean(),
  OnlyMissingEmails: z.boolean(),
  ResidualsReportsOptIn: z.boolean(),
  OnlyWithBankingInfo: z.boolean(),
  OnlyMissingBankingInfo: z.boolean(),
  OnlyShowPositiveResiduals: z.boolean(),
  OnlyShowZeroNegativeResiduals: z.boolean(),
  OnlyShowPhysicalChecks: z.boolean(),
  EmailReportsToAgent: z.boolean(),
  EmailReportsToUser: z.boolean(),
  EmailReportsToWho: z.boolean(),
  EmailReportsTo: z.string(),
});

export const newAuditDetailSchema = z.object({
  AuditType: z.string(),
  EntryDate: z.string(),
  ToDate: z.string(),
});

export const newAdHocSearchSchema = z.object({
  ReportName: z.string(),
  MID: z.string(),
  FromDate: z.string(),
  ToDate: z.string(),
  YearMonth: z.string(),
  UseAO: z.boolean(),
  SaveToC: z.boolean(),
  MIDS: z.string(),
  User: z.string(),
  Processor: z.string(),
  AuditType: z.string(),
  Agent: z.string(),
  Phrase: z.string(),
});

export const newEditUserSchema = z.object({
  UserId: z.string(),
  Username: z.string(),
  Email: z.string(),
  Extension: z.string(),
  UserStatus: z.string(),
  ShowRingCentral: z.boolean(),
  EnableDarkMode: z.boolean(),
});

export const newAddNewUserSchema = z.object({
  UserId: z.string(),
  Username: z.string(),
  Email: z.string(),
  Extension: z.string(),
  UserStatus: z.string(),
  ShowRingCentral: z.boolean(),
  EnableDarkMode: z.boolean(),
});

// BOARDING TOOL SCHEMAS

export const searchMerchantSchema = z.object({
  MerchantName: z.string(),
  Agent: z.string(),
});

export const boardingAgentDetailsSchema = z.object({
  AgentCompanyName: z.string(),
  DisplayName: z.string(),
  FirstName: z.string(),
  LastName: z.string(),
  RelationshipManager: z.string(),
  Address: z.string(),
  SteApt: z.string(),
  City: z.string(),
  State: z.string(),
  Zip: z.string(),
  Email: z.string(),
  RoutingNumber: z.string(),
  Account: z.string(),
  NoShippingEmails: z.boolean(),
  ShippingAddress: z.string(),
  ShippingAddress2: z.string(),
  ShippingCity: z.string(),
  ShippingState: z.string(),
  ShippingZip: z.string(),
  ShippingEmails: z.string(),
});

export const newSupportTicketSchema = z.object({
  Subject: z.string(),
  Support: z.boolean(),
  Sales: z.boolean(),
  Description: z.string(),
});

export const newNorthBlindLeadSchema = z.object({
  Email: z.string(),
  Name: z.string(),
});

export const newFspLeadSchema = z.object({
  Email: z.string(),
  Name: z.string(),
});

export const boardingMerchantInfoSchema = z.object({
  MID: z.string(),
  LegalName: z.string(),
  ContactName: z.string(),
  Address: z.string(),
  SteApt: z.string(),
  City: z.string(),
  State: z.string(),
  Zip: z.string(),
  phone1: z.string(),
  Ext1: z.string(),
  Phone2: z.string(),
  Ext2: z.string(),
  Email: z.string(),
  DbaLegalName: z.string(),
  DbaContactName: z.string(),
  DbaAddress: z.string(),
  DbaSteApt: z.string(),
  DbaCity: z.string(),
  DbaState: z.string(),
  DbaZip: z.string(),
});

// This is for the FSP MPA Application

// Merchant Detail TAB form
export const merchantInformationFspSchema = z.object({
  // DBA Information Section
  MerchantName: z.string(),
  EmailStatements: z.string(),
  Phone: z.string(),
  Fax: z.string(),
  ContactName: z.string(),
  ContactPhone: z.string(),
  ContactServicePhone: z.string(),
  BusinessWebsite: z.string(),
  DateOpen: z.string(),

  // DBA Address Section
  Street: z.string(),
  AddressSearchBar: z.string(),
  City: z.string(),
  State: z.string(),
  PostalCode: z.string(),
  
  // LEGAL INFORMATION
  CorporateLegalName: z.string(),
  Locations: z.string(),
  LegalCity: z.string(),
  LegalState: z.string(),
  LegalPostalCode: z.string(),

  // TAX INFORMATION
  UseCorporateLegalName: z.string(),
  IrsName: z.string(),
  SICMCC: z.string(),
  EIN: z.string(),
  BusinessType: z.string(),
  TypeOfServicesOffered: z.string(),
  EinSsn: z.string(),
  StockSymbol: z.string(),
  
  // STATEMENTS INFORMATION
  MailStatements: z.string(),

  // LOCATION
  
  // Building Type
  BuildingType: z.string(),
  // Merchant Type
  MerchantType: z.string(),
  // Area Zoned 
  AreaZoned: z.string(),
  // Squere Footage
  SquereFootage: z.string(),
});

// FINANCIAL INFORMATION TAB FORM
export const financialInformationFspSchema = z.object({
  // Bank Information
  CheckingSavings: z.string(),
  BankName: z.string(),
  BankRouting: z.string(),
  BankAccount: z.string(),
  // Sales
  AcceptingVisaMcDiscover: z.string(),
  hasBeenTerminated: z.string(),
  Reason: z.string(),
  // Settings
  StoreFrontSwipe: z.number(),
  Internet: z.number(),
  ManuallyKeyed: z.number(),
  // SERVICE REQUESTED
  VisaMcAvgTransaction: z.string(),
  VisaMcHighestTransaction: z.string(),
  VisaMcGrossMoSales: z.string(),
  DiscoverAvgTransaction: z.string(),
  DiscoverHighestTransaction: z.string(),
  DiscoverGrossMoSales: z.string(),
  AmexOptBlueAvgTransaction: z.string(),
  AmexOptBlueHighestTransaction: z.string(),
  AmexOptBlueGrossMoSales: z.string(),
  // AMERICAN EXPRESS VOLUME ? 1,000,000 ANNUALLY? 
  AmericaExpressVolume: z.string(),
  AmericanExpressVolumeAccount: z.string(),
  // DISCOVER RETAINED
  DiscoverAccount: z.string(),
  Visa: z.boolean(),
  Mastercard: z.boolean(),
  AmericanExpress: z.boolean(),
  Discover: z.boolean(),
  PayPal: z.boolean(),
  EBT: z.boolean(),
  CashBenefit: z.boolean(),
  FnsAccount: z.number(),
  // SEASONAL MERCHANT
  SeasonalMerchant: z.boolean(),
  January: z.boolean(),
  February: z.boolean(),
  March: z.boolean(),
  April: z.boolean(),
  May: z.boolean(),
  June: z.boolean(),
  July: z.boolean(),
  August: z.boolean(),
  September: z.boolean(),
  October: z.boolean(),
  November: z.boolean(),
  December: z.boolean(),
  // DOES THE MERCHANT USE AN INDEPENDENT SERVICE THAT
  // STORES, MAINTAINS OR TRANSMITS CARDHOLDER INFO?
  IndependentService: z.boolean(),
  IndependentServiceName: z.string(),
  IndependentServicePhone: z.string(),
  // DOES MERCHANT USE A FULFILLMENT HOUSE TO FULFILL PRODUCT?
  UsesFulfillHouse: z.boolean(),
  FulfillHouseName: z.string(),
  FulfillHousePhone: z.string(),
  // GENERAL SETTINGS
  OptOut: z.boolean(),
  // RETURN POLICY
  ReturnPolicy: z.string(),
  PolicyDescription: z.string(),

});



// Currency format functions
export const formatCurrency = (
  value: number,
  currency: string = "USD",
): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

// Date and time format functions
export const getJoinedDate = (dateString: string) => {
  const date = new Date(dateString);

  const getOrdinalSuffix = (day: number) => {
    if (day > 3 && day < 21) return "th"; // for 11th, 12th, 13th, etc...

    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const day = date.getUTCDate();
  const month = date.toLocaleString("en-GB", { month: "long" });
  const year = date.getUTCFullYear();

  const dayWithSuffix = day + getOrdinalSuffix(day);

  return { day: dayWithSuffix, month, year };
};

const getOrdinalSuffix = (day: number): string => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const formatTime = (date: Date): string => {
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours || 12; // hours of 0 should be 12
  const strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
};

export const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const dayWithSuffix = `${day + getOrdinalSuffix(day)}`;

  return `${dayWithSuffix} ${month}, ${year}`;
};

export const formatRelativeDate = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const oneDay = 1000 * 60 * 60 * 24;

  // const dayWithSuffix = `${date.getDate() + getOrdinalSuffix(date.getDate())}`;
  // const month = date.toLocaleString("default", { month: "long" });
  // const year = date.getFullYear();
  const time = formatTime(date);

  if (diff < oneDay) {
    return `Today at ${time}`;
  } else if (diff < 2 * oneDay) {
    return `Yesterday at ${time}`;
  } else if (diff < 7 * oneDay) {
    const daysAgo = Math.floor(diff / oneDay);
    return `${daysAgo} days ago at ${time}`;
  } else if (diff < 30 * oneDay) {
    const weeksAgo = Math.floor(diff / (7 * oneDay));
    return `${weeksAgo} week${weeksAgo > 1 ? "s" : ""} ago at ${time}`;
  } else if (diff < 365 * oneDay) {
    const monthsAgo = Math.floor(diff / (30 * oneDay));
    return `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago at ${time}`;
  } else {
    const yearsAgo = Math.floor(diff / (365 * oneDay));
    return `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago at ${time}`;
  }
};
