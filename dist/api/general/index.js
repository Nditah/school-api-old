"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _accountClass = require("./account-class");

var _accountClass2 = _interopRequireDefault(_accountClass);

var _accountHeading = require("./account-heading");

var _accountHeading2 = _interopRequireDefault(_accountHeading);

var _accountPosting = require("./account-posting");

var _accountPosting2 = _interopRequireDefault(_accountPosting);

var _admission = require("./admission");

var _admission2 = _interopRequireDefault(_admission);

var _assetAssignment = require("./asset-assignment");

var _assetAssignment2 = _interopRequireDefault(_assetAssignment);

var _asset = require("./asset");

var _asset2 = _interopRequireDefault(_asset);

var _attendance = require("./attendance");

var _attendance2 = _interopRequireDefault(_attendance);

var _bankAccount = require("./bank-account");

var _bankAccount2 = _interopRequireDefault(_bankAccount);

var _bank = require("./bank");

var _bank2 = _interopRequireDefault(_bank);

var _bankTransaction = require("./bank-transaction");

var _bankTransaction2 = _interopRequireDefault(_bankTransaction);

var _blogComment = require("./blog-comment");

var _blogComment2 = _interopRequireDefault(_blogComment);

var _blog = require("./blog");

var _blog2 = _interopRequireDefault(_blog);

var _budget = require("./budget");

var _budget2 = _interopRequireDefault(_budget);

var _calendar = require("./calendar");

var _calendar2 = _interopRequireDefault(_calendar);

var _cart = require("./cart");

var _cart2 = _interopRequireDefault(_cart);

var _chatRoom = require("./chat-room");

var _chatRoom2 = _interopRequireDefault(_chatRoom);

var _chat = require("./chat");

var _chat2 = _interopRequireDefault(_chat);

var _city = require("./city");

var _city2 = _interopRequireDefault(_city);

var _contactUs = require("./contact-us");

var _contactUs2 = _interopRequireDefault(_contactUs);

var _country = require("./country");

var _country2 = _interopRequireDefault(_country);

var _county = require("./county");

var _county2 = _interopRequireDefault(_county);

var _customer = require("./customer");

var _customer2 = _interopRequireDefault(_customer);

var _crm = require("./crm");

var _crm2 = _interopRequireDefault(_crm);

var _documentType = require("./document-type");

var _documentType2 = _interopRequireDefault(_documentType);

var _documentation = require("./documentation");

var _documentation2 = _interopRequireDefault(_documentation);

var _fault = require("./fault");

var _fault2 = _interopRequireDefault(_fault);

var _hub = require("./hub");

var _hub2 = _interopRequireDefault(_hub);

var _image = require("./image");

var _image2 = _interopRequireDefault(_image);

var _message = require("./message");

var _message2 = _interopRequireDefault(_message);

var _notification = require("./notification");

var _notification2 = _interopRequireDefault(_notification);

var _offence = require("./offence");

var _offence2 = _interopRequireDefault(_offence);

var _offenceType = require("./offence-type");

var _offenceType2 = _interopRequireDefault(_offenceType);

var _office = require("./office");

var _office2 = _interopRequireDefault(_office);

var _partner = require("./partner");

var _partner2 = _interopRequireDefault(_partner);

var _payroll = require("./payroll");

var _payroll2 = _interopRequireDefault(_payroll);

var _payrollDetail = require("./payroll-detail");

var _payrollDetail2 = _interopRequireDefault(_payrollDetail);

var _product = require("./product");

var _product2 = _interopRequireDefault(_product);

var _production = require("./production");

var _production2 = _interopRequireDefault(_production);

var _category = require("./category");

var _category2 = _interopRequireDefault(_category);

var _maintenance = require("./maintenance");

var _maintenance2 = _interopRequireDefault(_maintenance);

var _material = require("./material");

var _material2 = _interopRequireDefault(_material);

var _purchaseOrder = require("./purchase-order");

var _purchaseOrder2 = _interopRequireDefault(_purchaseOrder);

var _rating = require("./rating");

var _rating2 = _interopRequireDefault(_rating);

var _report = require("./report");

var _report2 = _interopRequireDefault(_report);

var _salesOrder = require("./sales-order");

var _salesOrder2 = _interopRequireDefault(_salesOrder);

var _setting = require("./setting");

var _setting2 = _interopRequireDefault(_setting);

var _setup = require("./setup");

var _setup2 = _interopRequireDefault(_setup);

var _sms = require("./sms");

var _sms2 = _interopRequireDefault(_sms);

var _staff = require("./staff");

var _staff2 = _interopRequireDefault(_staff);

var _stage = require("./stage");

var _stage2 = _interopRequireDefault(_stage);

var _state = require("./state");

var _state2 = _interopRequireDefault(_state);

var _stock = require("./stock");

var _stock2 = _interopRequireDefault(_stock);

var _store = require("./store");

var _store2 = _interopRequireDefault(_store);

var _stockTransfer = require("./stock-transfer");

var _stockTransfer2 = _interopRequireDefault(_stockTransfer);

var _supplier = require("./supplier");

var _supplier2 = _interopRequireDefault(_supplier);

var _synchronization = require("./synchronization");

var _synchronization2 = _interopRequireDefault(_synchronization);

var _table = require("./table");

var _table2 = _interopRequireDefault(_table);

var _task = require("./task");

var _task2 = _interopRequireDefault(_task);

var _team = require("./team");

var _team2 = _interopRequireDefault(_team);

var _terminal = require("./terminal");

var _terminal2 = _interopRequireDefault(_terminal);

var _ticket = require("./ticket");

var _ticket2 = _interopRequireDefault(_ticket);

var _vehicle = require("./vehicle");

var _vehicle2 = _interopRequireDefault(_vehicle);

var _vehicleTracking = require("./vehicle-tracking");

var _vehicleTracking2 = _interopRequireDefault(_vehicleTracking);

var _voucher = require("./voucher");

var _voucher2 = _interopRequireDefault(_voucher);

var _paystack = require("./paystack");

var _paystack2 = _interopRequireDefault(_paystack);

var _unionbank = require("./unionbank");

var _unionbank2 = _interopRequireDefault(_unionbank);

var _hostel = require("./hostel");

var _hostel2 = _interopRequireDefault(_hostel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Use Routes


// Routes

router.use(accessRoute);
router.use(accidentCauseRoute);
router.use(accidentRoute);
router.use(accidentVictimRoute);
router.use(_accountClass2.default);
router.use(_accountHeading2.default);
router.use(_accountPosting2.default);
router.use(ancillaryRevenueRoute);
router.use(_assetAssignment2.default);
router.use(_asset2.default);
router.use(_attendance2.default);
router.use(_bankAccount2.default);
router.use(bankRegisterRoute);
router.use(_bank2.default);
router.use(_bankTransaction2.default);
router.use(_blogComment2.default);
router.use(_blog2.default);
router.use(_budget2.default);
router.use(_calendar2.default);
router.use(_cart2.default);
router.use(_chatRoom2.default);
router.use(_chat2.default);
router.use(_city2.default);
router.use(_contactUs2.default);
router.use(_country2.default);
router.use(_county2.default);
router.use(_customer2.default);
router.use(_crm2.default);
router.use(_documentType2.default);
router.use(_documentation2.default);
router.use(_fault2.default);
router.use(_hub2.default);
router.use(_image2.default);
router.use(_message2.default);
router.use(_notification2.default);
router.use(_offence2.default);
router.use(_offenceType2.default);
router.use(_office2.default);
router.use(_payrollDetail2.default);
router.use(_payroll2.default);
router.use(_purchaseOrder2.default);
router.use(_product2.default);
router.use(_production2.default);
router.use(_category2.default);
router.use(_material2.default);
router.use(_maintenance2.default);
router.use(_rating2.default);
router.use(_report2.default);
router.use(_salesOrder2.default);
router.use(_setting2.default);
router.use(_setup2.default);
router.use(_sms2.default);
router.use(_staff2.default);
router.use(_state2.default);
router.use(_store2.default);
router.use(_stockTransfer2.default);
router.use(_stock2.default);
router.use(_supplier2.default);
router.use(_synchronization2.default);
router.use(_table2.default);
router.use(_task2.default);
router.use(_team2.default);
router.use(_terminal2.default);
router.use(_ticket2.default);
router.use(_partner2.default);
router.use(_vehicle2.default);
router.use(_vehicleTracking2.default);
router.use(_voucher2.default);
router.use(_stage2.default);
router.use(_paystack2.default);
router.use(_unionbank2.default);

exports.default = router;
//# sourceMappingURL=index.js.map