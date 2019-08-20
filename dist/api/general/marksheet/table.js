"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = require("../../../constants");

var _lib = require("../../../lib");

/*
Managerial accounting reports are used for planning, regulating, decision making, and measuring performance.
These reports are continuously being generated throughout the accounting and bookkeeping period, according to requirements.
Because many critical decisions depend on the authenticity of these reports, they should be carefully crafted by experts who are adept at bookkeeping.
Managers then analyze these reports to highlight certain patterns and convert them into useful information for the company. Below is an explanation of certain such reports.

*/
var table = [{
    type: "management",
    code: "B1",
    name: "Budget",
    description: "\n        Budget managerial accounting reports are very critical in measuring company performance and are generated as a whole for small businesses and, department wise, for large organizations. However, each company creates an overall budget to understand the grand scheme of their business. A budget estimate is made based on previous experiences, though, a great budget always caters for unforeseen circumstances that might arise. A company\u2019s budget lists all sources of earnings and expenditures. A company tries to achieve its goals and mission while staying within the budgeted amount.\n\n        The purpose of this report is to guide managers to offer better employee incentives, cut costs and renegotiate terms with vendors and suppliers. Therefore, a budget report is critical to any business.\n        "
}, {
    type: "management",
    code: "AR1",
    name: "Account Receivable Aging",
    description: "\n        Budget managerial accounting reports are very critical in measuring company performance and are generated as a whole for small businesses and, department wise, for large organizations. However, each company creates an overall budget to understand the grand scheme of their business. A budget estimate is made based on previous experiences, though, a great budget always caters for unforeseen circumstances that might arise. A company\u2019s budget lists all sources of earnings and expenditures. A company tries to achieve its goals and mission while staying within the budgeted amount.\n\n        The purpose of this report is to guide managers to offer better employee incentives, cut costs and renegotiate terms with vendors and suppliers. Therefore, a budget report is critical to any business.\n        "
}, {
    type: "management",
    code: "C1",
    name: "Cost",
    description: "\n        Managerial accounting computes the costs of articles that are manufactured. All raw material costs, overhead, labor and any added costs are taken into deliberation. The totals are divided by the amounts of products produced. A cost report offers a summary of all of this information. This report offers managers the capacity to realize the cost prices of items versus their selling prices. Profit margins are estimated and monitored through these reports as you have a clear picture of all of the costs that went into the production or procurement of the articles.\n\n        Inventory waste, hourly labor costs, and overhead costs are also part of cost managerial accounting reports. They provide an exact understanding of all expenses, which is essential for better optimization of resources among all departments.\n        "
}, {
    type: "management",
    code: "P1",
    name: "Performance",
    description: "\n        Performance reports are created to review the performance of a company as a whole as well as for each employee at the end of a term. Departmental performance reports are also generated in large organizations. Managers use these performance reports to make key strategic decisions about the future of the organization. Individuals are often awarded for their commitment to the organization and under performers are laid off or dealt with as required. Performance-related managerial accounting reports also offer deep insight into the working of a company. If you think that you should be performing in a certain capacity but somehow that is not happening, these reports can point you towards flaws in the setup. The role of performance reports is vital for any company to keep an accurate measure of their strategy towards their  mission.\n        "
}, {
    type: "management",
    code: "SO1",
    name: "Sales",
    description: "\n        Sales Order Reports\n        "
}, {
    type: "management",
    code: "PO1",
    name: "Purchase",
    description: "\n        Purchase Order Reports\n        "
}, {
    type: "management",
    code: "PR1",
    name: "Project",
    description: "\n        Project managemnt reports\n        "
}, {
    type: "management",
    code: "CA1",
    name: "competitor’s analysis",
    description: "\n        competitor\u2019s analysis \n        "
}, {
    type: "financial",
    code: "FBA1",
    name: "Balance Sheet",
    description: "\n        A balance sheet provides a clear picture of the overall financial health of a business. It has two sections with three components: asset, liabilities, and equity.\n        Assets include the money in your bank, cash on hand, and the amount of money owed to the company.\n        Liabilities include the money owed by the company (unpaid payroll and bills as well as outstanding loan principles).\n        What the balance sheet does is balance the two sections. Adding the total amount of liabilities to the equity is equal the total amount of assets (assets = liability + equity). If you want to check the net worth of your company, simply subtract the liabilities from the assets.  \n        "
}, {
    type: "financial",
    code: "FIS1",
    name: "Income Statement",
    description: "\n        This type of financial report provides comprehensive details on revenue earned and money lost. \n        The income statement is usually requested by the investors in order for them to examine how much your company has made or lost at a given period. \n        Your company\u2019s net worth is usually determined by subtracting the expenses from the total gross revenue of the company.\n        "
}, {
    type: "financial",
    code: "FCFS1",
    name: "Cash Flow Statement",
    description: "\n        This type of report provides an overview of the amount of money that is coming in and out of the business.\n        Evaluating the cash flow of your company allows you to determine the operations how the company is generating income and how that income is being spent.\n        If you want to determine the amount of the ending cash balance, simply add the starting cash balance to the cash flow and then subtract the result from the cash outflow. \n        "
}];

var baseId = _constants.DATABASE.BASE_ID.STATE;
var staffBaseId = _constants.DATABASE.BASE_ID.STAFF;

var result = table.map(function (record, index) {
    var obj = Object.assign({}, record);
    var id = index + 1;
    obj._id = (0, _lib.toObjectId)(baseId, id);
    obj.created_by = (0, _lib.toObjectId)(staffBaseId, "1");
    return obj;
});

exports.default = result;
//# sourceMappingURL=table.js.map