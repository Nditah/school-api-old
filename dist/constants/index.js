"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _statusMessage = require("./status-message");

Object.keys(_statusMessage).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _statusMessage[key];
        }
    });
});
var EMPLOYEE_TYPE = exports.EMPLOYEE_TYPE = {
    TEACHING: "TEACHING",
    NONTEACHING: "NON-TEACHING",
    UNKNOWN: "UNKNOWN"
};

var TERM = exports.TERM = {
    FIRST: "1",
    SECOND: "2",
    THIRD: "3"
};

var OFFICE_TYPE = exports.OFFICE_TYPE = {
    BOARD: "BOARD",
    DIRECTORATE: "DIRECTORATE",
    SUBSIDIARY: "SUBSIDIARY",
    DEPARTMENT: "DEPARTMENT",
    UNIT: "UNIT",
    SUBUNIT: "SUBUNIT",
    UNKNOWN: "UNKNOWN"
};

var PMT = exports.PMT = {
    BOARDING_STATUS: { CLOSED: "CLOSED", OPEN: "OPEN" },
    BOOKING_METHOD: { LIVE: "LIVE", RESERVATION: "RESERVATION", OFFLINE: "OFFLINE" },
    HIRING_STATUS: { CLOSED: "CLOSED", PENDING: "PENDING" },
    SCHEDULE_MODE: { DUMMY: "DUMMY", TIMELY: "TIMELY", DISABLE: "DISABLE" },
    RESERVATION_STATUS: { BOARDED: "BOARDED", BOOKED: "BOOKED" },
    SCHEDULE_STATUS: { ENROUTE: "ENROUTE", QUEUING: "QUEUING", BOARDING: "BOARDING", LOADED: "LOADED", WAYBILLED: "WAYBILLED", DEPARTED: "DEPARTED" },
    ROUTE_CATEGORY: { LOCAL: "LOCAL", HIGHWAY: "HIGHWAY", SUBHIGHWAY: "SUBHIGHWAY" },
    BOOKING_STATUS: {
        SCHEDULED: "SCHEDULED",
        ARRIVED: "ARRIVED",
        PENDING: "PENDING",
        PROCESSING: "PROCESSING",
        INITIATED: "INITIATED",
        ACCEPTED: "ACCEPTED",
        QUEUED: "QUEUED",
        ONGOING: "ONGOING",
        PARTNER_REACHED: "PARTNER_REACHED",
        PARTNER_ASSIGNED: "PARTNER_ASSIGNED",
        NO_SHOW: "NO_SHOW",
        TIMEOUT: "TIMEOUT",
        REJECTED: "REJECTED",
        CANCELLED: "CANCELLED",
        COMPLETED: "COMPLETED",
        PARTNER_CANCELLED: "PARTNER_CANCELLED",
        CUSTOMER_CANCELLED: "CUSTOMER_CANCELLED",
        FAILED: "FAILED",
        STARTED: "STARTED",
        ON_THE_WAY: "ON_THE_WAY",
        DELIVERED: "DELIVERED",
        ENROUTE: "EN-ROUTE"
    }
};

var PAYMENT = exports.PAYMENT = {
    GATEWAY: {
        FLUTTERWAVE: "FLUTTERWAVE",
        INTERSWITCH: "INTERSWITCH",
        UNIONBANK: "UNIONBANK",
        PAYSTACK: "PAYSTACK",
        STRIPE: "STRIPE",
        PAYPAL: "PAYPAL",
        GOOGLE_WALLET: "GOOGLE_WALLET"
    },
    METHOD: {
        GATEWAY: "GATEWAY",
        POS: "POS",
        CASH: "CASH",
        CHEQUE: "CHEQUE",
        TRANSFER: "TRANSFER",
        USSD: "USSD"
    },
    STATUS: { PENDING: "PENDING", SUCCESSFUL: "SUCCESSFUL", FAIL: "FAIL" }

};

var GENDER = exports.GENDER = {
    MALE: "MALE",
    FEMALE: "FEMALE"
};

var MARITAL_STATUS = exports.MARITAL_STATUS = {
    SINGLE: "SINGLE",
    MARRIED: "MARRIED",
    DIVORSED: "DIVORSED",
    SEPARATED: "SEPARATED",
    WIDOWED: "WIDOWED",
    UNKNOWN: "UNKNOWN"
};

var CUSTOMER_TYPE = exports.CUSTOMER_TYPE = {
    INDIVIDUAL: "INDIVIDUAL",
    ORGANIZATION: "ORGANIZATION",
    UNKNOWN: "UNKNOWN"
};

var PERSONAL_TITLE = exports.PERSONAL_TITLE = {
    MR: "MR",
    MISS: "MISS",
    MRS: "MRS",
    DR: "DR",
    PROF: "PROF",
    ENGR: "ENGR",
    BARR: "BARR",
    FR: "FR",
    REV: "REV",
    PASTOR: "PASTOR",
    CHIEF: "CHIEF",
    HON: "HON",
    SIR: "SIR",
    MADAM: "MADAM",
    ALH: "ALH",
    AMB: "AMB",
    GEN: "GEN",
    MAJGEN: "MAJ-GEN",
    CAPT: "CAPT",
    CDR: "CDR",
    COL: "COL",
    HE: "H E",
    HH: "H H",
    HM: "H M",
    HRH: "H R H",
    HRM: "H R M",
    LIEUT: "LIEUT",
    LIEUTCOL: "LIEUT-COL",
    MAJ: "MAJ",
    PRINCE: "PRINCE",
    PRINCESS: "PRINCESS",
    SEN: "SEN",
    SRG: "SRG",
    LADY: "LADY",
    DAME: "DAME",
    UNKNOWN: "UNKNOWN"
};

var EMPLOYMENT_STATUS = exports.EMPLOYMENT_STATUS = {
    PENDING: "PENDING",
    VERIFIED: "VERIFIED",
    APPROVED: "APPROVED",
    ON_DUTY: "ON_DUTY",
    ON_LEAVE: "ON_LEAVE",
    ON_PROBATION: "ON_PROBATION",
    ON_SUSPENSION: "ON_SUSPENSION",
    ON_RETIREMENT: "ON_RETIREMENT",
    DISENGAGED: "DISENGAGED",
    UNKNOWN: "UNKNOWN"
};

var LEVEL = exports.LEVEL = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7
};

var SUBSIDIARY = exports.SUBSIDIARY = {
    SECONDARY: "SECONDARY",
    PRIMARY: "PRIMARY",
    NURSERY: "NURSERY",
    CRECHE: "CRECHE",
    DAYCARE: "DAYCARE"
};

var VEHICLE = exports.VEHICLE = {
    VEHICLE_MAKE: {
        TOYOTA: "TOYOTA",
        UGAMA: "UGAMA",
        MEIYER: "MEIYER",
        SIENNA: "SIENNA",
        UNKNOWN: "UNKNOWN"
    },
    VEHICLE_CATEGORY: {
        PMT: "PMT",
        PATROL: "PATROL",
        PML: "PML", // DELIVERY VAN
        PET: "PET", // DELIVERY VAN
        PRESS: "PRESS", // DELIVERY VAN
        SHOP: "SHOP", // FOR SALE
        OFFICIAL_PRIVATE: "OFFICIAL_PRIVATE", // PRIVATE USE
        OFFICIAL_GENERAL: "OFFICIAL_GENERAL", // GENERAL USE
        UNKNOWN: "UNKNOWN"
    },
    VEHICLE_CLASS: {
        FIRST: "FIRST", // New Vehicle with Aircondition
        SECOND: "SECOND", // New Vehicle without Aircondition
        THIRD: "THIRD", // Old Vehicle
        UNKNOWN: "UNKNOWN"
    },
    VEHICLE_TYPE: {
        BUS: "BUS",
        CAR: "CAR",
        TAXI: "TAXI",
        KEKE: "KEKE",
        BIKE: "BIKE",
        JEEP: "JEEP",
        PREMIUM: "PREMIUM",
        UNKNOWN: "UNKNOWN"
    },
    VEHICLE_LOCATION: {
        OPERATION: "OPERATION",
        IMPOUNDED: "IMPOUNDED",
        WORKSHOP: "WORKSHOP",
        WAREHOUSE: "WAREHOUSE",
        SHOP: "SHOP",
        SCRAP: "SCRAP",
        UNKNOWN: "UNKNOWN"
    },
    VEHICLE_ASSIGNMENT: {
        ASSIGNED: "ASSIGNED",
        REASSIGNED: "REASSIGNED",
        UNASSIGNED: "UNASSIGNED",
        UNKNOWN: "UNKNOWN"
    },
    VEHICLE_CUSTODIAN: {
        PARTNER: "PARTNER",
        STAFF: "STAFF",
        UNKNOWN: "UNKNOWN"
    }
};

var PARTNER_TYPE = exports.PARTNER_TYPE = {
    OWNER: "OWNER",
    DTO: "DTO",
    PMT: "PMT",
    PARTNER: "PARTNER"
};

var ASSET_WORTHINESS = exports.ASSET_WORTHINESS = {
    APPRECIATE: "APPRECIATE",
    DEPRECIATE: "DEPRECIATE",
    UNKNOWN: "UNKNOWN"
};

var BANK_ACCOUNT_TYPE = exports.BANK_ACCOUNT_TYPE = {
    SAVINGS: "SAVINGS",
    CORPORATE: "CORPORATE",
    DOMICIARY: "DOMICIARY",
    UNKNOWN: "UNKNOWN"
};

var BANK_ACCOUNT_USAGE = exports.BANK_ACCOUNT_USAGE = {
    WEBPAY: "WEBPAY",
    POS: "POS",
    REMITTANCE: "REMITTANCE",
    REGULAR: "REGULAR",
    UNKNOWN: "UNKNOWN"
};

var ACCOUNT_CLASS_TYPE = exports.ACCOUNT_CLASS_TYPE = {
    ASSETS: "ASSETS",
    LIABILITIES: "LIABILITIES",
    CAPITAL: "CAPITAL",
    REVENUE: "REVENUE",
    EXPENSES: "EXPENSES",
    UNKNOWN: "UNKNOWN"
};

var ACCOUNT_CLASS_CATEGORY = exports.ACCOUNT_CLASS_CATEGORY = {
    ADMINISTRATIVE: "ADMINISTRATIVE",
    OPERATION: "OPERATION",
    UNKNOWN: "UNKNOWN"
};

var ACCESS_LEVEL = exports.ACCESS_LEVEL = [{ name: "LOW", level: 0, user: "EMPLOYEE", description: "Cannot Access the ERP" }, { name: "NORMAL", level: 1, user: "OFFICER", description: "Can only login and view ERP" }, { name: "HIGH", level: 2, user: "UNIT_HEAD", description: "Can carry out all basic operations" }, { name: "VERY_HIGH", level: 3, user: "DEPT_HEAD", description: "Record Acknowledgement" }, { name: "ULTRA_HIGH", level: 4, user: "DIRECTOR", description: "Record Approval" }, { name: "UNLIMITED", level: 5, user: "CHAIRMAN", description: "Unlimited Privilege" }];

var RATING = exports.RATING = {
    SUBJECT: ["STAFF", "PARTNER", "TERMINAL", "VEHICLE"]
};

var DATABASE = exports.DATABASE = {
    TABLES: ["STAFF", "PARTNER", "OWNER", "VEHICLE", "ASSET"],
    PRELOAD_TABLE_DATA: { TRUE: true, FALSE: false, DEFAULT: false },
    RECORD_STATUS: {
        PENDING: "PENDING",
        REJECTED: "REJECTED",
        ACKNOWLEDGED: "ACKNOWLEDGED",
        APPROVED: "APPROVED",
        AUTHORIZED: "AUTHORIZED",
        AUDITED: "AUDITED",
        CLOSED: "CLOSED"
    },
    BASE_ID: {
        TABLE: "5a51bc91860d8b5aa",
        STAFF: "5a51bc91860d8b5ba",
        PARENT: "5b51bc91860d8b5bb",
        SUPPLIER: "5b52bc92860d8b5bb",
        TERMINAL: "5c51bc91860d8b5bc",
        VEHICLE: "5d51bc91860d8b5bd",
        SPARES: "5e51bc91860d8b5be",
        ASSET: "5f51bc91860d8b5bf",
        COUNTRY: "5951bc91860d8b5b9",
        HUB: "5951bc91860d8b5c9",
        STATE: "5851bc91860d8b5a7",
        COUNTY: "5851bc91860d8b5b7",
        CITY: "5851bc91860d8b5c7",
        OFFICE: "5651bc91860d8b5b6",
        ACCOUNT: "5651bc91860d8b5b6",
        BANK: "5651bc91860d8b5b6",
        BANK_ACCOUNT: "5651bc91860d8b5ba",
        CUSTOMER: "5a51bc91860d8b5a5",
        PMT_SCHEDULE: "5451bc91860d8b545",
        PMT_ROUTE: "5351bc91860d8b535",
        SETTING: "5051bc91860d8b505",
        PML_BILLING: "5651bd91860d8b5bd",
        OFFENCE: "5651bc91860d8b5bc",
        DOCUMENT: "5651bb91860d8b5bb",
        ACCIDENT_CAUSE: "5651ab91860d8b5ab",
        VOUCHER_STAGE: "565bab91860d8b5bb"
    },
    OPTIONS: {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
        autoIndex: true,
        minimize: false,
        versionKey: false,
        toJSON: {
            virtuals: true,
            // eslint-disable-next-line func-names
            // eslint-disable-next-line object-shorthand
            transform: function transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
                // eslint-disable-next-line no-underscore-dangle
                delete ret.__v;
            }
        }
    }
};

var JWT = exports.JWT = {
    saltRounds: 2,
    jwtSecret: "yo-it`s-a_hidden-secret",
    tokenExpireTime: "20h"
};

var EMAIL = exports.EMAIL = {
    CONTACT: "nditah@gmail.com",
    PEACEGROUP: "nditah@gmail.com",
    PMT: "nditah@gmail.com",
    PML: "nditah@gmail.com",
    PRESS: "nditah@gmail.com",
    PET: "nditah@gmail.com"
};

var SMS = exports.SMS = {
    PEACE_SMS_SENDER: "+13234981706"
};

var API = exports.API = {
    URL: "https://jibrila.herokuapp.com"
};

var FLUTTERWAVE = exports.FLUTTERWAVE = {
    LIVE_URL: "https://api.ravepay.co",
    TEST_URL: "https://ravesandboxapi.flutterwave.com",
    PAY: "/flwv3-pug/getpaidx/api/v2/hosted/pay",
    VERIFY: "/flwv3-pug/getpaidx/api/v2/verify",
    REDIRECT_URL: "https://pmtonline.herokuapp.com/verify",
    SUBACCOUNT: "/v2/gpx/subaccounts",
    TRANSACTION: "/v2/gpx/transactions",
    TRANSACTION_EVENTS: "/v2/gpx/transactionmeta/events",
    SETTLEMENT: "/v2/merchant/settlements",
    BVN: "/v2/kyc/bvn"
};

var PAYSTACK = exports.PAYSTACK = {
    LIVE_URL: "https://api.paystack.co",
    TEST_URL: "https://ravesandboxapi.flutterwave.com",
    PAY: "/flwv3-pug/getpaidx/api/v2/hosted/pay",
    VERIFY: "/transaction/verify/reference",
    REDIRECT_URL: "https://pmtonline.herokuapp.com/verify",
    TRANSACTION: "/v2/gpx/transactions",
    TRANSACTION_EVENTS: "/v2/gpx/transactionmeta/events",
    SETTLEMENT: "/v2/merchant/settlements",
    BVN: "/v2/kyc/bvn"
};

var USER_ROLES = exports.USER_ROLES = {
    ADMIN: "ADMIN",
    CUSTOMER: "CUSTOMER",
    PARTNER: "PARTNER",
    STAFF: "STAFF",
    SUPPLIER: "SUPPLIER",
    OTHERS: "OTHERS"
};

var TRANSPORT_DOC = exports.TRANSPORT_DOC = {
    LOGO: "LOGO",
    DOCUMENT: "DOCUMENT",
    OTHERS: "OTHERS",
    INSURANCE: "INSURANCE",
    INSURANCE_PLACE: "INSURANCE_PLACE",
    PERMIT: "PERMIT",
    OWNERSHIP: "OWNERSHIP",
    VEHICLE: "VEHICLE"
};

var INPUT_TYPE = exports.INPUT_TYPE = {
    TEXT: "TEXT",
    TEXTAREA: "TEXTAREA",
    DROPDOWN: "DROPDOWN",
    FILE: "FILE",
    DATETIME: "DATETIME",
    LOCATION: "LOCATION",
    SELECTLIST: "SELECTLIST",
    RADIOBUTTON: "RADIOBUTTON",
    CHECKBOXES: "CHECKBOXES",
    DATE: "DATE",
    TIME: "TIME",
    NUMBER: "NUMBER"
};

var ISSUE_PRIORITY = exports.ISSUE_PRIORITY = {
    EMERGENCY: "P1",
    HIGH: "P2",
    NORMAL: "P3",
    LOW: "P4"
};
//# sourceMappingURL=index.js.map