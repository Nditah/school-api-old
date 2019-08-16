/**
 * @author 4Decoder
 * @description Customer holds record of all customers with terminals
 */
import express from "express";
import { checkAuth, isValidStaff } from "../../../middleware/authorization";
import { fetchRecord, createRecord, updateRecord, deleteRecord, login } from "./controller";

const router = express.Router();

/**
 * @api {get} /api/customers?id={recordId} Retrieve one or all records
 * @apiName RetrieveCustomer
 * @apiGroup Customer
 * @apiExample {curl} Example usage for retieving a single record:
 *      curl -i api/customers?
 * @apiParam {Object} filter query condition (optional)
 * @apiParam {Number} skip Number of records to offset by (optional)
 * @apiParam {Number} limit Maximum Number of records to retrieve (optional)
 * @apiParam {String} sort how records would be arranged in alphabet (optional)
 * @apiParam {String} projection list of record's attributes to retrieve (optional)
 * @apiDescription Records of consolidated list of customers from PMT, PML, PET, Shop etc
 * @apiSuccess {Object[]} Array of Objects of records.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get("/customers", [checkAuth, isValidStaff], fetchRecord);

/**
 * @api {post} /api/customers Create customers
 * @apiName CreateCustomer
 * @apiGroup Customer
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} customer type "INDIVIDUAL", "ORGANIZATION"
 * @apiParam {String} title
 * @apiParam {String} surname Customer surname (required)
 * @apiParam {String} other_name Customer other name (required)
 * @apiParam {String} gender Customer gender (required)
 * @apiParam {Date} birth_date Customer date of birth
 * @apiParam {String} phone Customer official phone number (required)
 * @apiParam {String} phone_personal Customer home phone number
 * @apiParam {String} email Customer email address
 * @apiParam {String} password Customer password for accessing the App
 * @apiParam {String} otp Customer one-time-password for accessing the App
 * @apiParam {Number} otp_count Number of times OTP has been used without successful transaction
 * @apiParam {String} skype Customer Skype.com contact
 * @apiParam {String} linkedin Customer LinkedIn.com contact url
 * @apiParam {String} facebook Customer Facebook.com contact url
 * @apiParam {String} instagram Customer Instagram.com contact url
 * @apiParam {String} twitter Customer Twitter.com contact url
 * @apiParam {String} youtube Customer Youtube.com contact url
 * @apiParam {String} contact_person Customer next-of-kin, or contact person
 * @apiParam {String} contact_person_phone Customer next-of-kin, or contact person phone
 * @apiParam {String} product Customer product, service or project of interest
 * @apiParam {String} photo Customer photo url
 * @apiParam {String} address Customer residential or work address
 * @apiParam {String} country_iso2 Customer country of residence (required)
 * @apiParam {Boolean} is_pmt_client assert that client is also a PMT customer
 * @apiParam {Boolean} is_pesl_client assert that client is also a PESL customer
 * @apiParam {Boolean} is_pet_client assert that client is also a PET customer
 * @apiParam {Boolean} is_shop_client assert that client is also a SHOP customer
 * @apiParam {Boolean} is_engr_client Customer assert that client is also a ENGR customer
 * @apiParam {Boolean} is_tenant assert if customer is a depot tenant
 * @apiParam {Boolean} is_phone_verified phone verification status
 * @apiParam {Boolean} is_email_verified email verification status
 * @apiParam {String} remark comment about customer
 * @apiParam {Number} points Customer cummulative royalty points for patronage
 * @apiParam {ObjectId} cart_id Customer current cart
 * @apiParam {Array} blog_comments Customer array of BlogComments
 * @apiSuccess {Object} Customer Customer's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Customer not found.
 * @apiError 401 master access only.
 */
router.post("/customers", createRecord);

/**
 * @api {put} /api/customers/{recordId} Update customers
 * @apiName UpdateCustomer
 * @apiGroup Customer
 * @apiHeader {String} Authorization Bearer token
 * @apiParam {String} recordId required record ObjectId
 * @apiParam {String} customer type "INDIVIDUAL", "ORGANIZATION"
 * @apiParam {String} title Customer name title "Dr, Barr. Rev Chief"
 * @apiParam {String} surname Customer surname (required)
 * @apiParam {String} other_name Customer other name (required)
 * @apiParam {String} gender Customer gender (required)
 * @apiParam {Date} birth_date Customer date of birth
 * @apiParam {String} phone Customer official phone number (required)
 * @apiParam {String} phone_personal Customer home phone number
 * @apiParam {String} email Customer email address
 * @apiParam {String} password Customer password for accessing the App
 * @apiParam {String} otp Customer one-time-password for accessing the App
 * @apiParam {Number} otp_count Number of times OTP has been used without successful transaction
 * @apiParam {String} company Customer company or organization
 * @apiParam {String} industry Customer industry type e.g EDU, FIN, IT, AGRO etc
 * @apiParam {String} website Customer website
 * @apiParam {String} website Customer website
 * @apiParam {String} skype Customer Skype.com contact
 * @apiParam {String} linkedin Customer LinkedIn.com contact url
 * @apiParam {String} facebook Customer Facebook.com contact url
 * @apiParam {String} instagram Customer Instagram.com contact url
 * @apiParam {String} twitter Customer Twitter.com contact url
 * @apiParam {String} youtube Customer Youtube.com contact url
 * @apiParam {String} contact_person Customer next-of-kin, or contact person
 * @apiParam {String} contact_person_phone Customer next-of-kin, or contact person phone
 * @apiParam {String} product Customer product, service or project of interest
 * @apiParam {String} photo Customer photo url
 * @apiParam {String} address Customer residential or work address
 * @apiParam {String} country_iso2 Customer country of residence (required)
 * @apiParam {Boolean} is_pmt_client assert that client is also a PMT customer
 * @apiParam {Boolean} is_pesl_client assert that client is also a PESL customer
 * @apiParam {Boolean} is_pet_client assert that client is also a PET customer
 * @apiParam {Boolean} is_shop_client assert that client is also a SHOP customer
 * @apiParam {Boolean} is_engr_client Customer assert that client is also a ENGR customer
 * @apiParam {Boolean} is_tenant assert if customer is a depot tenant
 * @apiParam {Boolean} is_phone_verified phone verification status
 * @apiParam {Boolean} is_email_verified email verification status
 * @apiParam {Number} points Customer cummulative royalty points for patronage
 * @apiParam {Number} wallet Customer wallet available ballance amount in Naira
 * @apiParam {ObjectId} cart_id Customer current cart
 * @apiParam {ObjectId} sales_rep_id Customer Staff SalesRep ObjectId
 * @apiParam {Array} blog_comment_ids Customer array of BlogComment records
 * @apiParam {Array} sales_order_ids: Customer array of SalesOrder records
 * @apiParam {Array} pml_shipment_ids Customer array of PmlShipment records
 * @apiParam {Array} pmt_boarding_ids Customer array of PmtBoarding records
 * @apiParam {Array} ratings Customer array of Rating by customer
 * @apiParam {Number} rating Customer client as rated by staff
 * @apiParam {String} remark comment about customer by Staff
 * @apiParam {ObjectId} updated_by id of the staff who created the record
 * @apiSuccess {Object} Customer Customer's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Customer not found.
 * @apiError 401 master access only.
 */
router.put("/customers/:recordId", [checkAuth], updateRecord);

/**
 * @api {delete} /api/customers/{recordId} Delete customers
 * @apiName DeleteCustomer
 * @apiGroup Customer
 * @apiParam {String} recordId record ObjectId
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Customer not found.
 * @apiError 401 master access only.
 */
router.delete("/customers/:recordId", [checkAuth, isValidStaff], deleteRecord);

/**
 * @api {post} /api/customers/login Login Customer
 * @apiName LoginCustomer
 * @apiGroup Customer
 * @apiPermission master
 * @apiParam {String} email Customer email address (optional)
 * @apiParam {String} password Customer password (optional)
 * @apiParam {String} phone Customer mobile phone number (optional)
 * @apiParam {String} otp Customer One-Time-Password sent to phone (optional)
 * @apiParam {String} type Login type "EMAIL", "PHONE", "OTP" (required)
 * @apiSuccess (Success 200) 200 Login Successful.
 * @apiError 404 Customer not found.
 */
router.post("/customers/login", login);

export default router;
