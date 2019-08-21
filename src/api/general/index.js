import express from "express";

// Routes
import accountClassRoute from "./account-class";
import accountHeadingRoute from "./account-heading";
import accountPostingRoute from "./account-posting";
import admissionRoute from "./admission";
import assetAssignmentRoute from "./asset-assignment";
import assetRoute from "./asset";
import attendanceRoute from "./attendance";
import bankAccountRoute from "./bank-account";
import bankRoute from "./bank";
import blogCommentRoute from "./blog-comment";
import blogRoute from "./blog";
import bookRoute from "./documentation";
import budgetRoute from "./budget";
import calendarRoute from "./calendar";
import contactUsRoute from "./contact-us";
import countyRoute from "./county";
import curriculumRoute from "./curriculum";
import documentTypeRoute from "./document-type";
import documentationRoute from "./documentation";
import donationRoute from "./donation";
import feesPaymentRoute from "./fees-payment";
import feesTypeRoute from "./fees-type";
import hostelRoute from "./hostel";
import lendingRoute from "./lending";
import multimediaRoute from "./multimedia";
import messageRoute from "./message";
import notificationRoute from "./notification";
import offenceRoute from "./offence";
import offenceTypeRoute from "./offence-type";
import officeRoute from "./office";
import payrollRoute from "./payroll";
import payrollDetailRoute from "./payroll-detail";
import categoryRoute from "./category";
import marksheetRoute from "./marksheet";
import materialRoute from "./material";
import ratingRoute from "./rating";
import reportRoute from "./report";
import resultRoute from "./result";
import settingRoute from "./setting";
import setupRoute from "./setup";
import smsRoute from "./sms";
import staffRoute from "./staff";
import stageRoute from "./stage";
import stateRoute from "./state";
import studentRoute from "./student";
import subjectRoute from "./subject";
import synchronizationRoute from "./synchronization";
import tableRoute from "./table";
import taskRoute from "./task";
import timetableRoute from "./timetable";
import vehicleRoute from "./vehicle";
import voucherRoute from "./voucher";
import paystackRoute from "./paystack";
import unionbankRoute from "./unionbank";

const router = express.Router();

// Use Routes
router.use(accountClassRoute);
router.use(accountHeadingRoute);
router.use(accountPostingRoute);
router.use(admissionRoute);
router.use(assetAssignmentRoute);
router.use(assetRoute);
router.use(attendanceRoute);
router.use(bankAccountRoute);
router.use(admissionRoute);
router.use(bankRoute);
router.use(blogCommentRoute);
router.use(blogRoute);
router.use(bookRoute);
router.use(budgetRoute);
router.use(calendarRoute);
router.use(contactUsRoute);
router.use(countyRoute);
router.use(curriculumRoute);
router.use(documentTypeRoute);
router.use(documentationRoute);
router.use(donationRoute);
router.use(feesPaymentRoute);
router.use(feesTypeRoute);
router.use(lendingRoute);
router.use(hostelRoute);
router.use(multimediaRoute);
router.use(messageRoute);
router.use(notificationRoute);
router.use(offenceRoute);
router.use(offenceTypeRoute);
router.use(officeRoute);
router.use(payrollDetailRoute);
router.use(payrollRoute);
router.use(categoryRoute);
router.use(materialRoute);
router.use(marksheetRoute);
router.use(ratingRoute);
router.use(reportRoute);
router.use(resultRoute);
router.use(settingRoute);
router.use(setupRoute);
router.use(smsRoute);
router.use(staffRoute);
router.use(stateRoute);
router.use(studentRoute);
router.use(subjectRoute);
router.use(synchronizationRoute);
router.use(tableRoute);
router.use(taskRoute);
router.use(timetableRoute);
router.use(vehicleRoute);
router.use(voucherRoute);
router.use(stageRoute);
router.use(paystackRoute);
router.use(unionbankRoute);

export default router;
