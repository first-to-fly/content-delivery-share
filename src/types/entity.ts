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

  // INDEPENDENT TOUR PRODUCTS
  FTF_INDEPENDENT_TOUR_PRODUCT = "ftf-independentTourProduct",
  FTF_INDEPENDENT_TOUR_ACCOMMODATION = "ftf-independentTourAccommodation",
  FTF_INDEPENDENT_TOUR_MISCELLANEOUS = "ftf-independentTourMiscellaneous",
  FTF_INDEPENDENT_TOUR_OPTIONAL_SERVICE = "ftf-independentTourOptionalService",
  FTF_INDEPENDENT_TOUR_ITINERARY = "ftf-independentTourItinerary",
  FTF_INDEPENDENT_TOUR_ITINERARY_DAY = "ftf-independentTourItineraryDay",
  FTF_INDEPENDENT_TOUR_ITINERARY_EVENT = "ftf-independentTourItineraryEvent",
  FTF_INDEPENDENT_TOUR_ITINERARY_MEAL = "ftf-independentTourItineraryMeal",

  FTF_PRODUCT_TYPE = "ftf-productType",
  FTF_DEPARTMENT = "ftf-department",
  FTF_DISCOUNT = "ftf-discount",
  FTF_DISCOUNT_TEMPLATE = "ftf-discountTemplate",
  FTF_DEPOSIT = "ftf-deposit",
  FTF_TENANT = "ftf-tenant",
  FTF_PRIVACY_POLICY = "ftf-privacyPolicy",
  FTF_SECTOR = "ftf-sector",
  FTF_SECTOR_GROUP = "ftf-sectorGroup",
  FTF_TERM = "ftf-term",
  FTF_BADGE = "ftf-badge",
  FTF_BUDGET = "ftf-budget",
  FTF_BILL = "ftf-bill",
  FTF_MATCH_DOC = "ftf-matchDoc",
  FTF_ACCOUNT_CODE = "ftf-accountCode",
  FTF_PAYMENT_WAY = "ftf-paymentWay",
  FTF_BUDGET_ENTRY = "ftf-budgetEntry",
  FTF_MEAL = "ftf-meal",
  FTF_DESIGNATION = "ftf-designation",
  FTF_DOCUMENT = "ftf-document",
  FTF_MEDIA = "ftf-media",
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
  FTF_TRANSPORT_PLAN = "ftf-transportPlan",
  FTF_SUPPLIER_PROFILE = "ftf-supplierProfile",
  FTF_SUPPLIER_CONTRACT = "ftf-supplierContract",
  FTF_SUPPLIER = "ftf-supplier",
  FTF_SUPPLIER_ADDRESS = "ftf-supplierAddress",
  FTF_SUPPLIER_PAYMENT = "ftf-supplierPayment",
  FTF_SUPPLIER_PERSON = "ftf-supplierPerson",
  FTF_TOUR_DEPARTURE = "ftf-tourDeparture",
  FTF_TOUR_DEPARTURE_ACCOMMODATION = "ftf-tourDepartureAccommodation",
  FTF_EXCHANGE_ORDER = "ftf-exchangeOrder",
  FTF_EXCHANGE_ORDER_ITEM = "ftf-exchangeOrderItem",
  FTF_APPROVAL_REQUEST = "ftf-approvalRequest",
  FTF_APPROVAL = "ftf-approval",

  // GROUP TOUR BOOKING
  FTF_GROUP_TOUR_BOOKING = "ftf-groupTourBooking",
  FTF_GROUP_TOUR_BOOKING_ROOM = "ftf-groupTourBookingRoom",
  FTF_GROUP_TOUR_BOOKING_PAX = "ftf-groupTourBookingPax",
  FTF_GROUP_TOUR_BOOKING_ADDON = "ftf-groupTourBookingAddon",
  FTF_GROUP_TOUR_BOOKING_DISCOUNT = "ftf-groupTourBookingDiscount",

  // USER MESSAGES
  FTF_USER_MESSAGE = "ftf-userMessage",
  // PAYMENT AND TRANSACTION
  FTF_PAYMENT_ORDER = "ftf-paymentOrder",
  FTF_TRANSACTION = "ftf-transaction",
}


export interface CDEntity {
  oid: string;
}


export interface CDBaseEntity extends CDEntity {
  name?: string;
}
