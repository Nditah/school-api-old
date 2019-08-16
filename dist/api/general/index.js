"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _asset = require("./asset");

var _asset2 = _interopRequireDefault(_asset);

var _bank = require("./bank");

var _bank2 = _interopRequireDefault(_bank);

var _message = require("./message");

var _message2 = _interopRequireDefault(_message);

var _multimedia = require("./multimedia");

var _multimedia2 = _interopRequireDefault(_multimedia);

var _notification = require("./notification");

var _notification2 = _interopRequireDefault(_notification);

var _offence = require("./offence");

var _offence2 = _interopRequireDefault(_offence);

var _offenceType = require("./offence-type");

var _offenceType2 = _interopRequireDefault(_offenceType);

var _office = require("./office");

var _office2 = _interopRequireDefault(_office);

var _payroll = require("./payroll");

var _payroll2 = _interopRequireDefault(_payroll);

var _payrollDetail = require("./payroll-detail");

var _payrollDetail2 = _interopRequireDefault(_payrollDetail);

var _category = require("./category");

var _category2 = _interopRequireDefault(_category);

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

var _synchronization = require("./synchronization");

var _synchronization2 = _interopRequireDefault(_synchronization);

var _table = require("./table");

var _table2 = _interopRequireDefault(_table);

var _task = require("./task");

var _task2 = _interopRequireDefault(_task);

var _vehicle = require("./vehicle");

var _vehicle2 = _interopRequireDefault(_vehicle);

var _voucher = require("./voucher");

var _voucher2 = _interopRequireDefault(_voucher);

var _unionbank = require("./unionbank");

var _unionbank2 = _interopRequireDefault(_unionbank);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Use Routes


// Routes
router.use(_asset2.default);
router.use(_bank2.default);
router.use(_staff2.default);
router.use(_student2.default);

exports.default = router;
//# sourceMappingURL=index.js.map