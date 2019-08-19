import { DATABASE } from "../../../constants";
import { toObjectId } from "../../../lib";

/*
Managerial accounting reports are used for planning, regulating, decision making, and measuring performance.
These reports are continuously being generated throughout the accounting and bookkeeping period, according to requirements.
Because many critical decisions depend on the authenticity of these reports, they should be carefully crafted by experts who are adept at bookkeeping.
Managers then analyze these reports to highlight certain patterns and convert them into useful information for the company. Below is an explanation of certain such reports.

*/
const table = [
    {
        type: "management",
        code: "B1",
        name: "Budget",
        description: `
        Budget managerial accounting reports are very critical in measuring company performance and are generated as a whole for small businesses and, department wise, for large organizations. However, each company creates an overall budget to understand the grand scheme of their business. A budget estimate is made based on previous experiences, though, a great budget always caters for unforeseen circumstances that might arise. A company’s budget lists all sources of earnings and expenditures. A company tries to achieve its goals and mission while staying within the budgeted amount.

        The purpose of this report is to guide managers to offer better employee incentives, cut costs and renegotiate terms with vendors and suppliers. Therefore, a budget report is critical to any business.
        `,
    },
    {
        type: "management",
        code: "AR1",
        name: "Account Receivable Aging",
        description: `
        Budget managerial accounting reports are very critical in measuring company performance and are generated as a whole for small businesses and, department wise, for large organizations. However, each company creates an overall budget to understand the grand scheme of their business. A budget estimate is made based on previous experiences, though, a great budget always caters for unforeseen circumstances that might arise. A company’s budget lists all sources of earnings and expenditures. A company tries to achieve its goals and mission while staying within the budgeted amount.

        The purpose of this report is to guide managers to offer better employee incentives, cut costs and renegotiate terms with vendors and suppliers. Therefore, a budget report is critical to any business.
        `,
    },
    {
        type: "management",
        code: "C1",
        name: "Cost",
        description: `
        Managerial accounting computes the costs of articles that are manufactured. All raw material costs, overhead, labor and any added costs are taken into deliberation. The totals are divided by the amounts of products produced. A cost report offers a summary of all of this information. This report offers managers the capacity to realize the cost prices of items versus their selling prices. Profit margins are estimated and monitored through these reports as you have a clear picture of all of the costs that went into the production or procurement of the articles.

        Inventory waste, hourly labor costs, and overhead costs are also part of cost managerial accounting reports. They provide an exact understanding of all expenses, which is essential for better optimization of resources among all departments.
        `,
    },
    {
        type: "management",
        code: "P1",
        name: "Performance",
        description: `
        Performance reports are created to review the performance of a company as a whole as well as for each employee at the end of a term. Departmental performance reports are also generated in large organizations. Managers use these performance reports to make key strategic decisions about the future of the organization. Individuals are often awarded for their commitment to the organization and under performers are laid off or dealt with as required. Performance-related managerial accounting reports also offer deep insight into the working of a company. If you think that you should be performing in a certain capacity but somehow that is not happening, these reports can point you towards flaws in the setup. The role of performance reports is vital for any company to keep an accurate measure of their strategy towards their  mission.
        `,
    },
    {
        type: "management",
        code: "SO1",
        name: "Sales",
        description: `
        Sales Order Reports
        `,
    },
    {
        type: "management",
        code: "PO1",
        name: "Purchase",
        description: `
        Purchase Order Reports
        `,
    },
    {
        type: "management",
        code: "PR1",
        name: "Project",
        description: `
        Project managemnt reports
        `,
    },
    {
        type: "management",
        code: "CA1",
        name: "competitor’s analysis",
        description: `
        competitor’s analysis 
        `,
    },
    {
        type: "financial",
        code: "FBA1",
        name: "Balance Sheet",
        description: `
        A balance sheet provides a clear picture of the overall financial health of a business. It has two sections with three components: asset, liabilities, and equity.
        Assets include the money in your bank, cash on hand, and the amount of money owed to the company.
        Liabilities include the money owed by the company (unpaid payroll and bills as well as outstanding loan principles).
        What the balance sheet does is balance the two sections. Adding the total amount of liabilities to the equity is equal the total amount of assets (assets = liability + equity). If you want to check the net worth of your company, simply subtract the liabilities from the assets.  
        `,
    },
    {
        type: "financial",
        code: "FIS1",
        name: "Income Statement",
        description: `
        This type of financial report provides comprehensive details on revenue earned and money lost. 
        The income statement is usually requested by the investors in order for them to examine how much your company has made or lost at a given period. 
        Your company’s net worth is usually determined by subtracting the expenses from the total gross revenue of the company.
        `,
    },
    {
        type: "financial",
        code: "FCFS1",
        name: "Cash Flow Statement",
        description: `
        This type of report provides an overview of the amount of money that is coming in and out of the business.
        Evaluating the cash flow of your company allows you to determine the operations how the company is generating income and how that income is being spent.
        If you want to determine the amount of the ending cash balance, simply add the starting cash balance to the cash flow and then subtract the result from the cash outflow. 
        `,
    },
];

const baseId = DATABASE.BASE_ID.STATE;
const staffBaseId = DATABASE.BASE_ID.STAFF;

const result = table.map((record, index) => {
    const obj = Object.assign({}, record);
    const id = index + 1;
    obj._id = toObjectId(baseId, id);
    obj.created_by = toObjectId(staffBaseId, "1");
    return obj;
});

export default result;
