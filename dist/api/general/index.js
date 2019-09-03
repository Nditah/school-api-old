"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _accounting = require("./accounting");

var _accounting2 = _interopRequireDefault(_accounting);

var _admission = require("./admission");

var _admission2 = _interopRequireDefault(_admission);

var _assetAssignment = require("./asset-assignment");

var _assetAssignment2 = _interopRequireDefault(_assetAssignment);

var _asset = require("./asset");

var _asset2 = _interopRequireDefault(_asset);

var _announcement = require("./announcement");

var _announcement2 = _interopRequireDefault(_announcement);

var _attendance = require("./attendance");

var _attendance2 = _interopRequireDefault(_attendance);

var _bankAccount = require("./bank-account");

var _bankAccount2 = _interopRequireDefault(_bankAccount);

var _bank = require("./bank");

var _bank2 = _interopRequireDefault(_bank);

var _blog = require("./blog");

var _blog2 = _interopRequireDefault(_blog);

var _book = require("./book");

var _book2 = _interopRequireDefault(_book);

var _budget = require("./budget");

var _budget2 = _interopRequireDefault(_budget);

var _calendar = require("./calendar");

var _calendar2 = _interopRequireDefault(_calendar);

var _classe = require("./classe");

var _classe2 = _interopRequireDefault(_classe);

var _classroom = require("./classroom");

var _classroom2 = _interopRequireDefault(_classroom);

var _contactUs = require("./contact-us");

var _contactUs2 = _interopRequireDefault(_contactUs);

var _county = require("./county");

var _county2 = _interopRequireDefault(_county);

var _documentType = require("./document-type");

var _documentType2 = _interopRequireDefault(_documentType);

var _documentation = require("./documentation");

var _documentation2 = _interopRequireDefault(_documentation);

var _fees = require("./fees");

var _fees2 = _interopRequireDefault(_fees);

var _homework = require("./homework");

var _homework2 = _interopRequireDefault(_homework);

var _hostel = require("./hostel");

var _hostel2 = _interopRequireDefault(_hostel);

var _lesson = require("./lesson");

var _lesson2 = _interopRequireDefault(_lesson);

var _multimedia = require("./multimedia");

var _multimedia2 = _interopRequireDefault(_multimedia);

var _message = require("./message");

var _message2 = _interopRequireDefault(_message);

var _notification = require("./notification");

var _notification2 = _interopRequireDefault(_notification);

var _offence = require("./offence");

var _offence2 = _interopRequireDefault(_offence);

var _office = require("./office");

var _office2 = _interopRequireDefault(_office);

var _parent = require("./parent");

var _parent2 = _interopRequireDefault(_parent);

var _payroll = require("./payroll");

var _payroll2 = _interopRequireDefault(_payroll);

var _category = require("./category");

var _category2 = _interopRequireDefault(_category);

var _marksheet = require("./marksheet");

var _marksheet2 = _interopRequireDefault(_marksheet);

var _material = require("./material");

var _material2 = _interopRequireDefault(_material);

var _rating = require("./rating");

var _rating2 = _interopRequireDefault(_rating);

var _report = require("./report");

var _report2 = _interopRequireDefault(_report);

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

var _student = require("./student");

var _student2 = _interopRequireDefault(_student);

var _subject = require("./subject");

var _subject2 = _interopRequireDefault(_subject);

var _synchronization = require("./synchronization");

var _synchronization2 = _interopRequireDefault(_synchronization);

var _table = require("./table");

var _table2 = _interopRequireDefault(_table);

var _task = require("./task");

var _task2 = _interopRequireDefault(_task);

var _timetable = require("./timetable");

var _timetable2 = _interopRequireDefault(_timetable);

var _vehicle = require("./vehicle");

var _vehicle2 = _interopRequireDefault(_vehicle);

var _voucher = require("./voucher");

var _voucher2 = _interopRequireDefault(_voucher);

var _paystack = require("./paystack");

var _paystack2 = _interopRequireDefault(_paystack);

var _unionbank = require("./unionbank");

var _unionbank2 = _interopRequireDefault(_unionbank);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Routes
var router = _express2.default.Router();

// Use Routes
router.use(_accounting2.default);
router.use(_admission2.default);
router.use(_assetAssignment2.default);
router.use(_asset2.default);
router.use(_announcement2.default);
router.use(_attendance2.default);
router.use(_bankAccount2.default);
router.use(_admission2.default);
router.use(_bank2.default);
router.use(_blog2.default);
router.use(_book2.default);
router.use(_budget2.default);
router.use(_classe2.default);
router.use(_classroom2.default);
router.use(_calendar2.default);
router.use(_contactUs2.default);
router.use(_county2.default);
router.use(_fees2.default);
router.use(_documentType2.default);
router.use(_documentation2.default);
// router.use(homeworkRoute);
router.use(_hostel2.default);
router.use(_lesson2.default);
router.use(_multimedia2.default);
router.use(_message2.default);
router.use(_notification2.default);
router.use(_offence2.default);
router.use(_office2.default);
router.use(_parent2.default);
router.use(_payroll2.default);
router.use(_category2.default);
router.use(_material2.default);
router.use(_marksheet2.default);
router.use(_rating2.default);
router.use(_report2.default);
router.use(_setting2.default);
router.use(_setup2.default);
router.use(_sms2.default);
router.use(_staff2.default);
router.use(_state2.default);
router.use(_student2.default);
router.use(_subject2.default);
router.use(_synchronization2.default);
router.use(_table2.default);
router.use(_task2.default);
router.use(_timetable2.default);
router.use(_vehicle2.default);
router.use(_voucher2.default);
router.use(_stage2.default);
router.use(_paystack2.default);
router.use(_unionbank2.default);

exports.default = router;
//# sourceMappingURL=index.js.map