import { IncomingClientScope } from "twilio/lib/jwt/ClientCapability";

/*

db.createCollection("stocks")

db.stocks.insertMany([
    { name: "rice", qty: 100, price: 800 },
    { name: "fish", qty: 100, price: 2000 },
    { name: "cake", qty: 2500, price: 300 },
 ])

 db.stocks.find().pretty()

 db.stocks.aggregate([
    { $match: { "price": 2000 } }
  ])

  db.stocks.aggregate([ { $match: { "name": "cake" } } ]).pretty()

  db.stocks.aggregate([{$group : {_id : "$qty", total : {$sum : 1}}}])

// According to route

  db.transactions.aggregate(
    [
        {
            $group : {
                _id : '$cr_dr',
                count : {$sum : 1},    //counts the number
                totalAmount : {$sum : '$amount'}    //sums the amount
            }
        }
    ]
);

db.transactions.aggregate(
    [
        {
            $group : {
                _id : '$cr_dr',
                count : {$sum : 1},
                totalAmount : {$sum : { $sum : ['$amount', '$fee']}}
            }
        }
    ]
);

db.transactions.aggregate(
    [
        {
            $group : {
                _id : '$cr_dr', // group by type of transaction (debit or credit)
                count : {$sum : 1},    // number of transaction for each type
                totalAmount : {$sum : { $sum : ['$amount', '$fee']}},    // sum
                averageAmount : {$avg : { $sum : ['$amount', '$fee']}}   // average
            }
        }
    ]
)

db.pmt_schedule.aggregate(
    [
        {
            $group : {
                _id : '$pmt_route_id', // group by route
                count : {$sum : 1},    // number of route
                totalBalance : {$sum : { $sum : ['$fare']}},    // sum
                totalPayout : {$sum : { $sum : ['$fuel_amount',
                '$dto_repayment', '$dto_service_charge', '$driver_allowance',
                '$dto_maintenance']}},    // sum
            }
        }
    ]

*/
