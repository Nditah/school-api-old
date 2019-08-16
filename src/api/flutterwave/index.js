import express from "express";

import 	flutterwaveTransactionRoute from "./flutterwave-transaction";

const router = express.Router();

router.use(flutterwaveTransactionRoute);

export default router;
