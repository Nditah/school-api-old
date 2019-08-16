import { STATUS_MSG } from "../constants";

export const success = (res,
    status = STATUS_MSG.SUCCESS.NO_RESULT_FOUND.statusCode,
    entity,
    msg = STATUS_MSG.SUCCESS.DEFAULT.customMessage) => res
    .status(status || 200)
    .json({
        success: true,
        payload: entity || [],
        message: msg || "Operation Successful(s)",
    });

export const fail = (res,
    status = STATUS_MSG.ERROR.NO_RESULT_FOUND.statusCode,
    msg = STATUS_MSG.ERROR.NO_RESULT_FOUND.customMessage) => res
    .status(status || 500)
    .json({
        success: false,
        payload: [],
        message: msg || "Operation failed!",
    });

export const notFound = (res, msg = STATUS_MSG.SUCCESS.NO_RESULT_FOUND.customMessage) => res
    .status(STATUS_MSG.SUCCESS.NO_RESULT_FOUND.statusCode || 404)
    .json({
        success: false,
        payload: [],
        message: msg || "Record not found!",
    });
