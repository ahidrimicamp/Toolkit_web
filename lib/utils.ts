import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const requiredString = z.string().trim().min(1, "Required!");
const requiredNumber = z.number().min(1, "Required!");

export const ProfileSchema = z.object({
  id: requiredString,
  email: requiredString.email(),
  password: z.string(),
  username: requiredString.max(25, "Max at 25 characters!"),
  phone: requiredString.min(3).max(10),
});

export const newMerchantSchema = z.object({
  MID: requiredString,
  LegalName: requiredString,
  DBA: requiredString,
  Phone: requiredString,
  Status: requiredString,
  Approval: requiredString.date(),
  Filter: requiredString,
  Processor: requiredString,
  Fitler2: requiredString,
  AgentID: requiredNumber,
  SalesRep: requiredString,
  Split: requiredNumber,
  SplitName: requiredString,
  SplitID: requiredNumber,
  LeadSource: requiredString,
  SplitLead: requiredNumber,
  EstAnnual: requiredNumber,
  Transactions: requiredNumber,
  Filter3: requiredString,
  Banks: requiredString,
  WAVItAccount: requiredNumber,
  MCCCode: requiredString,
  Notice: requiredString,
  ChildMID: z.boolean(),
  WAVitAccount: z.boolean(),
  WAVitApp: z.boolean(),
  NewAccountTasks: z.boolean(),
  BusinessRetail: z.boolean(),
  BusinessEcommerce: z.boolean(),
  BusinessRestaurant: z.boolean(),
  BusinessMoTo: z.boolean(),
  DeployBy: requiredString,
});

export const MerchantInfoSchema = z.object({
  MID: requiredString,
  LegalName: requiredString,
  DBA: requiredString,
  Phone: requiredString,
  Status: requiredString,
  Approval: requiredString.date(),
  Filter: requiredString,
  Processor: requiredString,
  Fitler2: requiredString,
  AgentID: requiredNumber,
  SalesRep: requiredString,
  Split: requiredNumber,
  SplitName: requiredString,
  SplitID: requiredNumber,
  LeadSource: requiredString,
  SplitLead: requiredNumber,
  EstAnnual: requiredNumber,
  Transactions: requiredNumber,
  Filter3: requiredString,
  Banks: requiredString,
  WAVItAccount: requiredNumber,
  MCCCode: requiredString,
  Notice: requiredString,
  Address: requiredString,
  Contact: requiredString,
  Apt: requiredString,
  City: requiredString,
  State: requiredString,
  Zip: requiredString,
  Phone1: requiredString,
  Extension1: requiredString,
  Phone2: requiredString,
  Extension2: requiredString,
  Email: requiredString,
  Website: requiredString,
  DBAcontact: requiredString,
  DBAaddress: requiredString,
  DBAapt: requiredString,
  DBAcity: requiredString,
  DBAstate: requiredString,
  DBAzip: requiredString,
  FrontEndPlatform: requiredString,
  FrontEndMID: requiredString,
  FrontEndTID: requiredString,
  CheckServiceMID: requiredString,
  GatewayMID: requiredString,
  EstAnnualVolume: requiredString,
  SICcode: requiredString,
  MCCclassification: requiredString,
  Parent: requiredString,
  CloverID: requiredString,
});

export const MerchantSoftwareInstallSchema = z.object({
  SoftwareAcctNumber: requiredString,
  POCname: requiredString,
  POCphone: requiredString,
  POCemail: requiredString,
  ISOname: requiredString,
  ISOcontact: requiredString,
  ISOphone: requiredString,
  ISOemail: requiredString,
  Dealer: requiredString,
  DealerContact: requiredString,
  DealerPhone: requiredString,
  DealerEmail: requiredString,
  ActiveServiceAgreement: z.boolean(),
  POSsystem: requiredString,
  NumberStations: requiredNumber,
  MiPointClover: z.boolean(),
  HasTSLlicense: z.boolean(),
  MiPointCloverQty: requiredNumber,
  MiPointIngencio: z.boolean(),
  HasPMSlicense: z.boolean(),
  MiPointIngencioQty: requiredNumber,
  RemoteServiceAccess: z.boolean(),
  Environment: requiredString,
  GatewayUsername: requiredString,
  GatewayPassword: requiredString,
  GatewayKey: requiredString,
  SupportProvider: requiredString,
  SupportProgram: requiredString,
  EffectiveDate: z.date(),
  InstallationDevices: requiredNumber,
  InstallationDevicesPrice: requiredNumber,
  InstallationDevicesTotal: requiredNumber,
  MonthlyRecurringDevices: requiredNumber,
  MonthlyRecurringDevicesPrice: requiredNumber,
  MonthlyRecurringDevicesTotal: requiredNumber,
  SupportRecurringDevices: requiredNumber,
  SupportRecurringDevicesPrice: requiredNumber,
  SupportRecurringDevicesTotal: requiredNumber,
});

export const MerchantAgentLeadSourceSchema = z.object({
  LeadSource: requiredString,
  SalesVertical: requiredString,
  Agent: requiredString,
  SplitPercentage: requiredNumber,
  CalcAfterMasterSplit: z.boolean(),
  CalcAfterAgentPay: z.boolean(),
  CalcPartOfMaster: z.boolean(),
  CalcPartOfSubMaster: z.boolean(),
  AgentIsMaster: z.boolean(),
  RebateAccount: z.boolean(),
  ForceNotifMasterAgent: z.boolean(),
  TotalEffectiveSplit: requiredNumber,
  SubAgent: requiredString,
  Filter: requiredString,
  DefaultSplits: requiredString,
  Agent2: requiredString,
});

export const MerchEnterAdjustmentSchema = z.object({
  Agent: requiredString,
  DataDate: requiredString,
  DisplayDate: requiredString,
  AdjustType: requiredString,
  Notes: requiredString,
  AdjustAmount: requiredString,
  Split: requiredNumber,
});

export const AgentSetupSchema = z.object({
  findAgent: requiredString,
  excludeClosedAgents: z.boolean(),
  displayName: requiredString.nonempty("Display Name is required"),
  firstName: requiredString.nonempty("First Name is required"),
  lastName: requiredString.nonempty("Last Name is required"),
  merchantNote: requiredString,
  isChildSubAgent: z.boolean(),
  subAgentOrChild: requiredString,
  selectRelationshipManager: requiredString,
  email: requiredString.email("Invalid email address"),
  phone: requiredString,
  status: requiredString.nonempty("Status is required"),
  startDate: requiredString,
  endDate: requiredString,
  address1: requiredString,
  address2: requiredString,
  city: requiredString,
  state: requiredString,
  zip: requiredString,
  routing: requiredString,
  residualEmail: requiredString,
  zohoEmail: requiredString,
  account: requiredString,
  ssn: requiredString,
  payDay: requiredString,
  entityType: requiredString,
  payGroup: requiredString,
  msoId: requiredString,
  messeging: z.boolean(),
  residual: z.boolean(),
  filePrefix: requiredString,
  tickets: z.boolean(),
  flashes: z.boolean(),
  noBillPay: z.boolean(),
  reportType: requiredString,
  okToPayResid: z.boolean(),
  doNotPay: z.boolean(),
  printPhysicalCheck: z.boolean(),
  payrollId: requiredString,
  agentId: requiredString,
  note: requiredString,
});

export const AgentEquipmentSchema = z.object({
  copyFromContactInfo: z.boolean(),
  noShippingEmails: z.boolean(),
  coCard: z.boolean(),
  markClosed: z.boolean(),
  shipPhone: requiredString,
  shipExt: requiredString,
  shippingEmail: requiredString.email("Invalid email address"),
  shippingServiceEmail: requiredString.email("Invalid email address"),
  address1: requiredString,
  address2: requiredString,
  city: requiredString,
  state: requiredString,
  zip: requiredString,
  cellPhone: requiredString,
});

export const newLookupSchema = z.object({
  MID: requiredString,
  OrderID: requiredString,
  Serial: requiredString,
  Model: requiredString,
  Condition: requiredString,
  ShelfItems: z.boolean(),
});

export const newItemsSchema = z.object({
  Model: requiredString,
  Id: requiredString,
  Description: requiredString,
  Alias: requiredString,
  ItemType: requiredString,
  Style: requiredString,
  Manufacturer: requiredString,
  ReorderQty: requiredNumber,
  SerialNumber: z.boolean(),
  TakeInventory: z.boolean(),
  PhysicallyShippable: z.boolean(),
  HwPricing: requiredNumber,
  DeployFee: requiredNumber,
  TaxShipping: requiredNumber,
  Total: requiredNumber,
  DimensionName: requiredString,
  DimensionWidth: requiredString,
  DimensionHeight: requiredString,
  DimensionLength: requiredString,
  DimensionWeight: requiredString,
});

export const newItemDetailSchema = z.object({
  Condition: requiredString,
  Serial: requiredString,
  SortBy: requiredString,
});

export const newEquipmentOrderSchema = z.object({
  Merchant: requiredString,
  MID: requiredString,
  Status: requiredString,
  Model: requiredString,
  NoSerial: z.boolean(),
  Limit: z.boolean(),
});

export const newUnassignedEquipmentSchema = z.object({
  Model: requiredString,
  Condition: requiredString,
  Serial: requiredString,
});

export const newRecentOrdersSchema = z.object({
  FromDate: requiredString,
  ToDate: requiredString,
});

// ADMIN SCHEMAS
export const newRingCentralUtilitySchema = z.object({
  DataSource: requiredString,
  Status: requiredString,
});

export const newLoadProcessingDataSchema = z.object({
  ProcessingPeriod: requiredString,
  Status: requiredString,
});

export const newThirdPartyProcessorsSchema = z.object({
  Processor: requiredString,
  MID: requiredString,
  ResidualDate: requiredString,
  CalculateAllMonths: z.boolean(),
});

export const newFirstDataOmahaSchema = z.object({
  ResidualDate: requiredString,
  CheckCalculation: z.boolean(),
  NutraChargeBacks: z.boolean(),
  DoNotQueryZeroRecords: z.boolean(),
  CalculateInitialPassOnly: z.boolean(),
  SkipSysPrins: z.boolean(),
  From: requiredString,
  To: requiredString,
  CalculateIndividualMID: requiredString,
  Status: requiredString,
});

export const newAdjustmentCriteriaSchema = z.object({
  ResidualDate: requiredString,
  Agent: requiredString,
  AgentID: requiredString,
  AdjustType: requiredString,
  MID: requiredString,
  DBALegal: requiredString,
  Processor: requiredString,
  Amount: requiredString,
  Notes: requiredString,
});

export const newDisplayResidualsSchema = z.object({
  ResidualDate: requiredString,
  PayDay: z.boolean(),
  PayDaySelection: requiredString,
  ExcludePayDay: z.boolean(),
  PayGroup: z.boolean(),
  PayGroupSelection: requiredString,
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
  EmailReportsTo: requiredString,
});

export const newAuditDetailSchema = z.object({
  AuditType: requiredString,
  EntryDate: requiredString,
  ToDate: requiredString,
});

export const newAdHocSearchSchema = z.object({
  ReportName: requiredString,
  MID: requiredString,
  FromDate: requiredString,
  ToDate: requiredString,
  YearMonth: requiredString,
  UseAO: z.boolean(),
  SaveToC: z.boolean(),
  MIDS: requiredString,
  User: requiredString,
  Processor: requiredString,
  AuditType: requiredString,
  Agent: requiredString,
  Phrase: requiredString,
});

export const newEditUserSchema = z.object({
  UserId: requiredString,
  Username: requiredString,
  Email: requiredString,
  Extension: requiredString,
  UserStatus: requiredString,
  ShowRingCentral: z.boolean(),
  EnableDarkMode: z.boolean(),
});

export const newAddNewUserSchema = z.object({
  UserId: requiredString,
  Username: requiredString,
  Email: requiredString,
  Extension: requiredString,
  UserStatus: requiredString,
  ShowRingCentral: z.boolean(),
  EnableDarkMode: z.boolean(),
});

// BOARDING TOOL SCHEMAS

export const searchMerchantSchema = z.object({
  MerchantName: requiredString,
  Agent: requiredString,
});

export const boardingAgentDetailsSchema = z.object({
  AgentCompanyName: requiredString,
  DisplayName: requiredString,
  FirstName: requiredString,
  LastName: requiredString,
  RelationshipManager: requiredString,
  Address: requiredString,
  SteApt: requiredString,
  City: requiredString,
  State: requiredString,
  Zip: requiredString,
  Email: requiredString,
  RoutingNumber: requiredString,
  Account: requiredString,
  NoShippingEmails: z.boolean(),
  ShippingAddress: requiredString,
  ShippingAddress2: requiredString,
  ShippingCity: requiredString,
  ShippingState: requiredString,
  ShippingZip: requiredString,
  ShippingEmails: requiredString,
});

export const newSupportTicketSchema = z.object({
  Subject: requiredString,
  Support: z.boolean(),
  Sales: z.boolean(),
  Description: requiredString,
});

export const newNorthBlindLeadSchema = z.object({
  Email: requiredString,
  Name: requiredString,
});

export const newFspLeadSchema = z.object({
  Email: requiredString,
  Name: requiredString,
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
  BankAccounting: z.string(),
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
