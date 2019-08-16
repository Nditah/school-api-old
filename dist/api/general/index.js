import express from "express";

// Routes
import assetRoute from "./asset";
import bankRoute from "./bank";
import messageRoute from "./message";
import multimediaRoute from "./multimedia";
import notificationRoute from "./notification";
import offenceRoute from "./offence";
import offenceTypeRoute from "./offence-type";
import officeRoute from "./office";
import payrollRoute from "./payroll";
import payrollDetailRoute from "./payroll-detail";
import categoryRoute from "./category";
import materialRoute from "./material";
import ratingRoute from "./rating";
import reportRoute from "./report";
import settingRoute from "./setting";
import setupRoute from "./setup";
import smsRoute from "./sms";
import staffRoute from "./staff";
import stageRoute from "./stage";
import stateRoute from "./state";
import studentRoute from "./student";
import synchronizationRoute from "./synchronization";
import tableRoute from "./table";
import taskRoute from "./task";
import vehicleRoute from "./vehicle";
import voucherRoute from "./voucher";
import unionbankRoute from "./unionbank";

const router = express.Router();

// Use Routes
router.use(assetRoute);
router.use(bankRoute);
router.use(staffRoute);
router.use(studentRoute);

export default router;
//# sourceMappingURL=index.js.map