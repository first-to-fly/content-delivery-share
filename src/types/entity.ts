export enum CDEntityType {
  // FTF entity
  FTF_USER = "ftf-user",
  FTF_USER_TENANT = "ftf-userTenant",
  FTF_LOCATION = "ftf-location",
  FTF_GROUP_TOUR_PRODUCT = "ftf-groupTourProduct",
  FTF_GROUP_TOUR_ITINERARY = "ftf-groupTourItinerary",
  FTF_GROUP_TOUR_ITINERARY_DAY = "ftf-groupTourItineraryDay",
  FTF_GROUP_TOUR_ITINERARY_MEAL = "ftf-groupTourItineraryMeal",
  FTF_GROUP_TOUR_ITINERARY_EVENT = "ftf-groupTourItineraryEvent",
  FTF_GROUP_TOUR_COSTING = "ftf-groupTourCosting",
  FTF_GROUP_TOUR_COSTING_ENTRY = "ftf-groupTourCostingEntry",
  FTF_GROUP_TOUR_PRICING = "ftf-groupTourPricing",
  FTF_GROUP_TOUR_PNL_SIMULATION = "ftf-groupTourPNLSimulation",
  FTF_PRODUCT_TYPE = "ftf-productType",
  FTF_DEPARTMENT = "ftf-department",
  FTF_DISCOUNT = "ftf-discount",
  FTF_DISCOUNT_TEMPLATE = "ftf-discountTemplate",
  FTF_TENANT = "ftf-tenant",
  FTF_PRIVACY_POLICY = "ftf-privacyPolicy",
  FTF_SECTOR = "ftf-sector",
  FTF_SECTOR_GROUP = "ftf-sectorGroup",
  FTF_TERM = "ftf-term",
  FTF_BADGE = "ftf-badge",
  FTF_MEAL = "ftf-meal",
  FTF_DESIGNATION = "ftf-designation",
  FTF_DOCUMENT = "ftf-document",
  FTF_INSURANCE_DISCOUNT = "ftf-insuranceDiscount",
  FTF_ROLE = "ftf-role",
  FTF_STATION_CODE = "ftf-stationCode",
  FTF_POI = "ftf-poi",
  FTF_COSTING_ITEM = "ftf-costingItem",
  FTF_COSTING_TEMPLATE = "ftf-costingTemplate",
  FTF_TERM_CONDITION = "ftf-termCondition",
  FTF_SPECIAL_INSTRUCTION = "ftf-specialInstruction",
  FTF_REFERENCE_CODE = "ftf-referenceCode",
  FTF_ASSEMBLE_LOCATION_AIRLINES = "ftf-assembleLocationAirlines",
  FTF_USEFUL_INFO = "ftf-usefulInfo",
  FTF_ROOM_CONFIGURATION = "ftf-roomConfiguration",
  FTF_ROOM_CONFIGURATION_RULE = "ftf-roomConfigurationRule",
  FTF_TRANSPORT_GROUP = "ftf-transportGroup",
  FTF_TRANSPORT_SEGMENT = "ftf-transportSegment",
  FTF_SUPPLIER_PROFILE = "ftf-supplierProfile",
  FTF_SUPPLIER_CONTRACT = "ftf-supplierContract",
}

export interface CDEntity {
  oid: string;
}

export interface CDBaseEntity extends CDEntity {
  name?: string;
}
