import { toObjectId } from "../../../lib";
import { DATABASE } from "../../../constants";

const table = [
    { code: "10100", heading: "Accident Legal ", account_class_id: 1, description: "Accident Legal ", amount: 0.00, opening_balance: 0.00 },
    { code: "10200", heading: "Condolence, Burial", account_class_id: 1, description: "Condolence, Burial", amount: 0.00, opening_balance: 0.00 },
    { code: "10300", heading: "Medical Assistance to victims", account_class_id: 1, description: "Medical Assistance to victims", amount: 0.00, opening_balance: 0.00 },
    { code: "10400", heading: "Other Accident Related", account_class_id: 1, description: "Other Accident Related", amount: 0.00, opening_balance: 0.00 },
    { code: "10500", heading: "Advert Fee", account_class_id: 2, description: "Advert Fee", amount: 0.00, opening_balance: 0.00 },
    { code: "10600", heading: "Banners", account_class_id: 2, description: "Banners", amount: 0.00, opening_balance: 0.00 },
    { code: "10700", heading: "Bill Boards-Hand Bills", account_class_id: 2, description: "Bill Boards-Hand Bills", amount: 0.00, opening_balance: 0.00 },
    { code: "10800", heading: "Newspaper-Magazine", account_class_id: 2, description: "Newspaper-Magazine", amount: 0.00, opening_balance: 0.00 },
    { code: "10900", heading: "Other Advert-Publicity", account_class_id: 2, description: "Other Advert-Publicity", amount: 0.00, opening_balance: 0.00 },
    { code: "11000", heading: "Radio Commercials", account_class_id: 2, description: "Radio Commercials", amount: 0.00, opening_balance: 0.00 },
    { code: "11100", heading: "Sign Board Fee", account_class_id: 2, description: "Sign Board Fee", amount: 0.00, opening_balance: 0.00 },
    { code: "11200", heading: "Sale of Fairly Used Buses", account_class_id: 3, description: "Sale of Fairly Used Buses", amount: 0.00, opening_balance: 0.00 },
    { code: "11300", heading: "Sale of Scraps", account_class_id: 3, description: "Sale of Scraps", amount: 0.00, opening_balance: 0.00 },
    { code: "11400", heading: "Other Disposal", account_class_id: 3, description: "Other Disposal", amount: 0.00, opening_balance: 0.00 },
    { code: "11500", heading: "External Auditors fees", account_class_id: 4, description: "External Auditors fees", amount: 0.00, opening_balance: 0.00 },
    { code: "11600", heading: "Other Auditors fees & Charges", account_class_id: 4, description: "Other Auditors fees & Charges", amount: 0.00, opening_balance: 0.00 },
    { code: "11700", heading: "Electrical Repair", account_class_id: 20, description: "Electrical Repair", amount: 0.00, opening_balance: 0.00 },
    { code: "11800", heading: "Mechanical Repair", account_class_id: 20, description: "Mechanical Repair", amount: 0.00, opening_balance: 0.00 },
    { code: "11900", heading: "Other Maintenance & Repairs", account_class_id: 20, description: "Other Maintenance & Repairs", amount: 0.00, opening_balance: 0.00 },
    { code: "12000", heading: "Panel Beating", account_class_id: 20, description: "Panel Beating", amount: 0.00, opening_balance: 0.00 },
    { code: "12100", heading: "Radiator Servicing & Repairs", account_class_id: 20, description: "Radiator Servicing & Repairs", amount: 0.00, opening_balance: 0.00 },
    { code: "12200", heading: "Servicing of Fairly Used Parts", account_class_id: 20, description: "Servicing of Fairly Used Parts", amount: 0.00, opening_balance: 0.00 },
    { code: "12300", heading: "Vulcanizing of Tyres", account_class_id: 20, description: "Vulcanizing of Tyres", amount: 0.00, opening_balance: 0.00 },
    { code: "12400", heading: "Welding Works", account_class_id: 20, description: "Welding Works", amount: 0.00, opening_balance: 0.00 },
    { code: "12500", heading: "Wheel Balancing", account_class_id: 20, description: "Wheel Balancing", amount: 0.00, opening_balance: 0.00 },
    { code: "12600", heading: "Bus Delivery", account_class_id: 5, description: "Bus Delivery", amount: 0.00, opening_balance: 0.00 },
    { code: "12700", heading: "Foreign Parts Delivery", account_class_id: 5, description: "Foreign Parts Delivery", amount: 0.00, opening_balance: 0.00 },
    { code: "12800", heading: "Other Carriage cost", account_class_id: 5, description: "Other Carriage cost", amount: 0.00, opening_balance: 0.00 },
    { code: "12900", heading: "Broom", account_class_id: 34, description: "Broom", amount: 0.00, opening_balance: 0.00 },
    { code: "13000", heading: "Bucket", account_class_id: 34, description: "Bucket", amount: 0.00, opening_balance: 0.00 },
    { code: "13100", heading: "Detergent", account_class_id: 34, description: "Detergent", amount: 0.00, opening_balance: 0.00 },
    { code: "13200", heading: "Disinfectant", account_class_id: 34, description: "Disinfectant", amount: 0.00, opening_balance: 0.00 },
    { code: "13300", heading: "Mop", account_class_id: 34, description: "Mop", amount: 0.00, opening_balance: 0.00 },
    { code: "13400", heading: "Other Cleaning Material", account_class_id: 34, description: "Other Cleaning Material", amount: 0.00, opening_balance: 0.00 },
    { code: "13500", heading: "Soap", account_class_id: 34, description: "Soap", amount: 0.00, opening_balance: 0.00 },
    { code: "13600", heading: "Director Fee", account_class_id: 6, description: "Director Fee", amount: 0.00, opening_balance: 0.00 },
    { code: "13700", heading: "Director Medical", account_class_id: 6, description: "Director Medical", amount: 0.00, opening_balance: 0.00 },
    { code: "13800", heading: "Director Salary", account_class_id: 6, description: "Director Salary", amount: 0.00, opening_balance: 0.00 },
    { code: "13900", heading: "Director Travel Allowance", account_class_id: 6, description: "Director Travel Allowance", amount: 0.00, opening_balance: 0.00 },
    { code: "14000", heading: "Other Director Emolument", account_class_id: 6, description: "Other Director Emolument", amount: 0.00, opening_balance: 0.00 },
    { code: "14100", heading: "AGM Entertainment", account_class_id: 7, description: "AGM Entertainment", amount: 0.00, opening_balance: 0.00 },
    { code: "14200", heading: "Corporate function Entertainment", account_class_id: 7, description: "Corporate function Entertainment", amount: 0.00, opening_balance: 0.00 },
    { code: "14300", heading: "Other Entertainment", account_class_id: 7, description: "Other Entertainment", amount: 0.00, opening_balance: 0.00 },
    { code: "14400", heading: "Seminars-Training Entertainment", account_class_id: 7, description: "Seminars-Training Entertainment", amount: 0.00, opening_balance: 0.00 },
    { code: "14500", heading: "Visitors Entertainment", account_class_id: 7, description: "Visitors Entertainment", amount: 0.00, opening_balance: 0.00 },
    { code: "14600", heading: "Drivers Feeding", account_class_id: 8, description: "Drivers Feeding", amount: 0.00, opening_balance: 0.00 },
    { code: "14700", heading: "Staff Feeding", account_class_id: 8, description: "Staff Feeding", amount: 0.00, opening_balance: 0.00 },
    { code: "14800", heading: "Electrical Fittings(Bulbs ,Socket ,switch)", account_class_id: 8, description: "Electrical Fittings(Bulbs ,Socket ,switch)", amount: 0.00, opening_balance: 0.00 },
    { code: "14900", heading: "Other Fittings", account_class_id: 8, description: "Other Fittings", amount: 0.00, opening_balance: 0.00 },
    { code: "15000", heading: "Plumbing Fittings", account_class_id: 8, description: "Plumbing Fittings", amount: 0.00, opening_balance: 0.00 },
    { code: "15100", heading: "Amukwa Youth Foundation", account_class_id: 10, description: "Amukwa Youth Foundation", amount: 0.00, opening_balance: 0.00 },
    { code: "15200", heading: "Other Foundation", account_class_id: 10, description: "Other Foundation", amount: 0.00, opening_balance: 0.00 },
    { code: "15300", heading: "SAMOAEF", account_class_id: 10, description: "SAMOAEF", amount: 0.00, opening_balance: 0.00 },
    { code: "15400", heading: "Freight For New buses", account_class_id: 11, description: "Freight For New buses", amount: 0.00, opening_balance: 0.00 },
    { code: "15500", heading: "Freight for Spare parts", account_class_id: 11, description: "Freight for Spare parts", amount: 0.00, opening_balance: 0.00 },
    { code: "15600", heading: "Other Freight Charges", account_class_id: 11, description: "Other Freight Charges", amount: 0.00, opening_balance: 0.00 },
    { code: "15700", heading: "Bus Fuel", account_class_id: 12, description: "Bus Fuel", amount: 0.00, opening_balance: 0.00 },
    { code: "15800", heading: "Chief Security Fuel Allowance", account_class_id: 12, description: "Chief Security Fuel Allowance", amount: 0.00, opening_balance: 0.00 },
    { code: "15900", heading: "CV fuel Allowance", account_class_id: 12, description: "CV fuel Allowance", amount: 0.00, opening_balance: 0.00 },
    { code: "16000", heading: " Drivers Testing Fuel", account_class_id: 12, description: " Drivers Testing Fuel", amount: 0.00, opening_balance: 0.00 },
    { code: "16100", heading: "Fuel for Running Engine", account_class_id: 12, description: "Fuel for Running Engine", amount: 0.00, opening_balance: 0.00 },
    { code: "16200", heading: "Fuel for Washing Engine Parts", account_class_id: 12, description: "Fuel for Washing Engine Parts", amount: 0.00, opening_balance: 0.00 },
    { code: "16300", heading: "GM Fuel Allowance", account_class_id: 12, description: "GM Fuel Allowance", amount: 0.00, opening_balance: 0.00 },
    { code: "16400", heading: "Official Car Fuel", account_class_id: 12, description: "Official Car Fuel", amount: 0.00, opening_balance: 0.00 },
    { code: "16500", heading: "Other Fuel Related", account_class_id: 12, description: "Other Fuel Related", amount: 0.00, opening_balance: 0.00 },
    { code: "16600", heading: "Generator Fuel", account_class_id: 21, description: "Generator Fuel", amount: 0.00, opening_balance: 0.00 },
    { code: "16700", heading: "Generator Oil", account_class_id: 21, description: "Generator Oil", amount: 0.00, opening_balance: 0.00 },
    { code: "16800", heading: "Generator Repair", account_class_id: 21, description: "Generator Repair", amount: 0.00, opening_balance: 0.00 },
    { code: "16900", heading: "Other Generator Maintenance & Repair", account_class_id: 21, description: "Other Generator Maintenance & Repair", amount: 0.00, opening_balance: 0.00 },
    { code: "17000", heading: "Business Premises", account_class_id: 13, description: "Business Premises", amount: 0.00, opening_balance: 0.00 },
    { code: "17100", heading: "Capitation Rate", account_class_id: 13, description: "Capitation Rate", amount: 0.00, opening_balance: 0.00 },
    { code: "17200", heading: "Development Levy", account_class_id: 13, description: "Development Levy", amount: 0.00, opening_balance: 0.00 },
    { code: "17300", heading: "Emblems", account_class_id: 13, description: "Emblems", amount: 0.00, opening_balance: 0.00 },
    { code: "17400", heading: "Local Govt. Charges", account_class_id: 13, description: "Local Govt. Charges", amount: 0.00, opening_balance: 0.00 },
    { code: "17500", heading: "Other Government Charges", account_class_id: 13, description: "Other Government Charges", amount: 0.00, opening_balance: 0.00 },
    { code: "17600", heading: "Park Renewal Fee", account_class_id: 13, description: "Park Renewal Fee", amount: 0.00, opening_balance: 0.00 },
    { code: "17700", heading: "Property Rate", account_class_id: 13, description: "Property Rate", amount: 0.00, opening_balance: 0.00 },
    { code: "17800", heading: " Abuja Guest House", account_class_id: 14, description: " Abuja Guest House", amount: 0.00, opening_balance: 0.00 },
    { code: "17900", heading: "Enugu Guest House", account_class_id: 14, description: "Enugu Guest House", amount: 0.00, opening_balance: 0.00 },
    { code: "18000", heading: "Other Guest House", account_class_id: 14, description: "Other Guest House", amount: 0.00, opening_balance: 0.00 },
    { code: "18100", heading: "Goods Insurance", account_class_id: 15, description: "Goods Insurance", amount: 0.00, opening_balance: 0.00 },
    { code: "18200", heading: "Other Insurance", account_class_id: 15, description: "Other Insurance", amount: 0.00, opening_balance: 0.00 },
    { code: "18300", heading: "Staff insurance", account_class_id: 15, description: "Staff insurance", amount: 0.00, opening_balance: 0.00 },
    { code: "18400", heading: "Vehicle Insurance", account_class_id: 15, description: "Vehicle Insurance", amount: 0.00, opening_balance: 0.00 },
    { code: "18500", heading: "Computer Consumable", account_class_id: 16, description: "Computer Consumable", amount: 0.00, opening_balance: 0.00 },
    { code: "18600", heading: "Computers Repair", account_class_id: 16, description: "Computers Repair", amount: 0.00, opening_balance: 0.00 },
    { code: "18700", heading: "DSTV Subscription", account_class_id: 16, description: "DSTV Subscription", amount: 0.00, opening_balance: 0.00 },
    { code: "18800", heading: "Internet Bandwidth Sub", account_class_id: 16, description: "Internet Bandwidth Sub", amount: 0.00, opening_balance: 0.00 },
    { code: "18900", heading: "Internet", account_class_id: 16, description: "Internet", amount: 0.00, opening_balance: 0.00 },
    { code: "19000", heading: "IT Consultancy", account_class_id: 16, description: "IT Consultancy", amount: 0.00, opening_balance: 0.00 },
    { code: "19100", heading: "IT Software", account_class_id: 16, description: "IT Software", amount: 0.00, opening_balance: 0.00 },
    { code: "19200", heading: "Other IT", account_class_id: 16, description: "Other IT", amount: 0.00, opening_balance: 0.00 },
    { code: "19300", heading: "Photocopy Consumable", account_class_id: 16, description: "Photocopy Consumable", amount: 0.00, opening_balance: 0.00 },
    { code: "19400", heading: "Photocopy Repair", account_class_id: 16, description: "Photocopy Repair", amount: 0.00, opening_balance: 0.00 },
    { code: "19500", heading: "Printers Repair", account_class_id: 16, description: "Printers Repair", amount: 0.00, opening_balance: 0.00 },
    { code: "19600", heading: "Web site Maintenance", account_class_id: 16, description: "Web site Maintenance", amount: 0.00, opening_balance: 0.00 },
    { code: "19700", heading: "Eagle Chambers", account_class_id: 17, description: "Eagle Chambers", amount: 0.00, opening_balance: 0.00 },
    { code: "19800", heading: "Legal", account_class_id: 17, description: "Legal", amount: 0.00, opening_balance: 0.00 },
    { code: "19900", heading: "Other Legal", account_class_id: 17, description: "Other Legal", amount: 0.00, opening_balance: 0.00 },
    { code: "20000", heading: "New registration of Buses", account_class_id: 18, description: "New registration of Buses", amount: 0.00, opening_balance: 0.00 },
    { code: "20100", heading: "New registration of Official Cars", account_class_id: 18, description: "New registration of Official Cars", amount: 0.00, opening_balance: 0.00 },
    { code: "20200", heading: "Other License Registration Related .", account_class_id: 18, description: "Other License Registration Related .", amount: 0.00, opening_balance: 0.00 },
    { code: "20300", heading: "Renewal of Bus license", account_class_id: 18, description: "Renewal of Bus license", amount: 0.00, opening_balance: 0.00 },
    { code: "20400", heading: "Renewal of Official Cars license", account_class_id: 18, description: "Renewal of Official Cars license", amount: 0.00, opening_balance: 0.00 },
    { code: "20500", heading: "Engine Oil", account_class_id: 19, description: "Engine Oil", amount: 0.00, opening_balance: 0.00 },
    { code: "20600", heading: "Other Lubricants", account_class_id: 19, description: "Other Lubricants", amount: 0.00, opening_balance: 0.00 },
    { code: "20700", heading: "Management Staff Med.", account_class_id: 25, description: "Management Staff Med.", amount: 0.00, opening_balance: 0.00 },
    { code: "20800", heading: "OP Staff Med.", account_class_id: 25, description: "OP Staff Med.", amount: 0.00, opening_balance: 0.00 },
    { code: "20900", heading: "Other Medical", account_class_id: 25, description: "Other Medical", amount: 0.00, opening_balance: 0.00 },
    { code: "21000", heading: " Supervisory Staff Med.", account_class_id: 25, description: " Supervisory Staff Med.", amount: 0.00, opening_balance: 0.00 },
    { code: "21100", heading: "Workshop Clinic", account_class_id: 25, description: "Workshop Clinic", amount: 0.00, opening_balance: 0.00 },
    { code: "21200", heading: "A-C Repair", account_class_id: 24, description: "A-C Repair", amount: 0.00, opening_balance: 0.00 },
    { code: "21300", heading: "Fittings Repair", account_class_id: 24, description: "Fittings Repair", amount: 0.00, opening_balance: 0.00 },
    { code: "21400", heading: "Furniture Repair", account_class_id: 24, description: "Furniture Repair", amount: 0.00, opening_balance: 0.00 },
    { code: "21500", heading: "Other Office Equip. Repair", account_class_id: 24, description: "Other Office Equip. Repair", amount: 0.00, opening_balance: 0.00 },
    { code: "21600", heading: "Bags ", account_class_id: 26, description: "Bags ", amount: 0.00, opening_balance: 0.00 },
    { code: "21700", heading: "Battery", account_class_id: 26, description: "Battery", amount: 0.00, opening_balance: 0.00 },
    { code: "21800", heading: "Candle", account_class_id: 26, description: "Candle", amount: 0.00, opening_balance: 0.00 },
    { code: "21900", heading: "Other Office Supplies.", account_class_id: 26, description: "Other Office Supplies.", amount: 0.00, opening_balance: 0.00 },
    { code: "22000", heading: "Padlock", account_class_id: 26, description: "Padlock", amount: 0.00, opening_balance: 0.00 },
    { code: "22100", heading: "Perforator-Calculator", account_class_id: 26, description: "Perforator-Calculator", amount: 0.00, opening_balance: 0.00 },
    { code: "22200", heading: "Rat Poison-Herbicide", account_class_id: 26, description: "Rat Poison-Herbicide", amount: 0.00, opening_balance: 0.00 },
    { code: "22300", heading: "Rechargeable Lantern", account_class_id: 26, description: "Rechargeable Lantern", amount: 0.00, opening_balance: 0.00 },
    { code: "22400", heading: "Scissors", account_class_id: 26, description: "Scissors", amount: 0.00, opening_balance: 0.00 },
    { code: "22500", heading: "Stamps", account_class_id: 26, description: "Stamps", amount: 0.00, opening_balance: 0.00 },
    { code: "22600", heading: "Staplers-Stapling pin", account_class_id: 26, description: "Staplers-Stapling pin", amount: 0.00, opening_balance: 0.00 },
    { code: "22700", heading: "Tie Rubber", account_class_id: 26, description: "Tie Rubber", amount: 0.00, opening_balance: 0.00 },
    { code: "22800", heading: "Water", account_class_id: 26, description: "Water", amount: 0.00, opening_balance: 0.00 },
    { code: "22900", heading: "Car Maintenance & Repair", account_class_id: 22, description: "Car Maintenance & Repair", amount: 0.00, opening_balance: 0.00 },
    { code: "23000", heading: "Environmental Sanitation Levy", account_class_id: 22, description: "Environmental Sanitation Levy", amount: 0.00, opening_balance: 0.00 },
    { code: "23100", heading: "Fumigation", account_class_id: 22, description: "Fumigation", amount: 0.00, opening_balance: 0.00 },
    { code: "23200", heading: "Other Maintenance & Repair", account_class_id: 22, description: "Other Maintenance & Repair", amount: 0.00, opening_balance: 0.00 },
    { code: "23300", heading: "Other Waste Management & sanitation", account_class_id: 22, description: "Other Waste Management & sanitation", amount: 0.00, opening_balance: 0.00 },
    { code: "23400", heading: "Parks Waste Disposal", account_class_id: 22, description: "Parks Waste Disposal", amount: 0.00, opening_balance: 0.00 },
    { code: "23500", heading: "WASTE MANAGEMENT-SANITATION", account_class_id: 22, description: "WASTE MANAGEMENT-SANITATION", amount: 0.00, opening_balance: 0.00 },
    { code: "23600", heading: "Workshop Waste Disposal", account_class_id: 22, description: "Workshop Waste Disposal", amount: 0.00, opening_balance: 0.00 },
    { code: "23700", heading: "Other Passengers Manifest", account_class_id: 27, description: "Other Passengers Manifest", amount: 0.00, opening_balance: 0.00 },
    { code: "23800", heading: "Passengers Manifest Levy", account_class_id: 27, description: "Passengers Manifest Levy", amount: 0.00, opening_balance: 0.00 },
    { code: "23900", heading: "Other Patrol", account_class_id: 28, description: "Other Patrol", amount: 0.00, opening_balance: 0.00 },
    { code: "24000", heading: "Patrol Accommodation", account_class_id: 28, description: "Patrol Accommodation", amount: 0.00, opening_balance: 0.00 },
    { code: "24100", heading: "Patrol Entertainment", account_class_id: 28, description: "Patrol Entertainment", amount: 0.00, opening_balance: 0.00 },
    { code: "24200", heading: "Patrol Feeding", account_class_id: 28, description: "Patrol Feeding", amount: 0.00, opening_balance: 0.00 },
    { code: "24300", heading: "Patrol Fuel", account_class_id: 28, description: "Patrol Fuel", amount: 0.00, opening_balance: 0.00 },
    { code: "24400", heading: "Patrol Uniform & Safety Ware", account_class_id: 28, description: "Patrol Uniform & Safety Ware", amount: 0.00, opening_balance: 0.00 },
    { code: "24500", heading: "Carbon Paper", account_class_id: 29, description: "Carbon Paper", amount: 0.00, opening_balance: 0.00 },
    { code: "24600", heading: "Ink", account_class_id: 29, description: "Ink", amount: 0.00, opening_balance: 0.00 },
    { code: "24700", heading: "Other Stationeries-printing", account_class_id: 29, description: "Other Stationeries-printing", amount: 0.00, opening_balance: 0.00 },
    { code: "24800", heading: "Photocopy of material(outside)", account_class_id: 29, description: "Photocopy of material(outside)", amount: 0.00, opening_balance: 0.00 },
    { code: "24900", heading: "Printing of Manifests, Waybills & Receipts", account_class_id: 29, description: "Printing of Manifests, Waybills & Receipts", amount: 0.00, opening_balance: 0.00 },
    { code: "25000", heading: "Printing of Official Documents", account_class_id: 29, description: "Printing of Official Documents", amount: 0.00, opening_balance: 0.00 },
    { code: "25100", heading: "Typing (outside)", account_class_id: 29, description: "Typing (outside)", amount: 0.00, opening_balance: 0.00 },
    { code: "25200", heading: "Writing Materials", account_class_id: 29, description: "Writing Materials", amount: 0.00, opening_balance: 0.00 },
    { code: "25300", heading: "Other Foreign Purchases", account_class_id: 31, description: "Other Foreign Purchases", amount: 0.00, opening_balance: 0.00 },
    { code: "25400", heading: "Spare parts Purchased by staff", account_class_id: 31, description: "Spare parts Purchased by staff", amount: 0.00, opening_balance: 0.00 },
    { code: "25500", heading: "Spare Parts Supplied", account_class_id: 31, description: "Spare Parts Supplied", amount: 0.00, opening_balance: 0.00 },
    { code: "25600", heading: "Other Local Purchases", account_class_id: 30, description: "Other Local Purchases", amount: 0.00, opening_balance: 0.00 },
    { code: "25700", heading: "Spare parts Purchased by Staff", account_class_id: 30, description: "Spare parts Purchased by Staff", amount: 0.00, opening_balance: 0.00 },
    { code: "25800", heading: "Spare parts Supplied", account_class_id: 30, description: "Spare parts Supplied", amount: 0.00, opening_balance: 0.00 },
    { code: "25900", heading: "Tyres Purchased by Staff", account_class_id: 30, description: "Tyres Purchased by Staff", amount: 0.00, opening_balance: 0.00 },
    { code: "26000", heading: "Tyres Supplied", account_class_id: 30, description: "Tyres Supplied", amount: 0.00, opening_balance: 0.00 },
    { code: "26100", heading: "Other Allowance", account_class_id: 37, description: "Other Allowance", amount: 0.00, opening_balance: 0.00 },
    { code: "26200", heading: "Staff Allowance", account_class_id: 37, description: "Staff Allowance", amount: 0.00, opening_balance: 0.00 },
    { code: "26300", heading: "Staff Bonus", account_class_id: 37, description: "Staff Bonus", amount: 0.00, opening_balance: 0.00 },
    { code: "26400", heading: "Staff Feeding", account_class_id: 37, description: "Staff Feeding", amount: 0.00, opening_balance: 0.00 },
    { code: "26500", heading: "Staff Salary-Wages", account_class_id: 37, description: "Staff Salary-Wages", amount: 0.00, opening_balance: 0.00 },
    { code: "26600", heading: "Other Rent", account_class_id: 32, description: "Other Rent", amount: 0.00, opening_balance: 0.00 },
    { code: "26700", heading: "Park Rent", account_class_id: 32, description: "Park Rent", amount: 0.00, opening_balance: 0.00 },
    { code: "26800", heading: "Chairman Security Allowance", account_class_id: 35, description: "Chairman Security Allowance", amount: 0.00, opening_balance: 0.00 },
    { code: "26900", heading: "Depot Security", account_class_id: 35, description: "Depot Security", amount: 0.00, opening_balance: 0.00 },
    { code: "27000", heading: "Other Security", account_class_id: 35, description: "Other Security", amount: 0.00, opening_balance: 0.00 },
    { code: "27100", heading: "Security Allowance", account_class_id: 35, description: "Security Allowance", amount: 0.00, opening_balance: 0.00 },
    { code: "27200", heading: "Security Bike Maintenance", account_class_id: 35, description: "Security Bike Maintenance", amount: 0.00, opening_balance: 0.00 },
    { code: "27300", heading: "Security of Buses on Road", account_class_id: 35, description: "Security of Buses on Road", amount: 0.00, opening_balance: 0.00 },
    { code: "27400", heading: "Security Uniform", account_class_id: 35, description: "Security Uniform", amount: 0.00, opening_balance: 0.00 },
    { code: "27500", heading: "Workshop Security", account_class_id: 35, description: "Workshop Security", amount: 0.00, opening_balance: 0.00 },
    { code: "27600", heading: "Long Service Award", account_class_id: 36, description: "Long Service Award", amount: 0.00, opening_balance: 0.00 },
    { code: "27700", heading: "Other Staff benefit", account_class_id: 36, description: "Other Staff benefit", amount: 0.00, opening_balance: 0.00 },
    { code: "27800", heading: "Transfer Allowance", account_class_id: 36, description: "Transfer Allowance", amount: 0.00, opening_balance: 0.00 },
    { code: "27900", heading: "Partner Training & Seminar", account_class_id: 36, description: "Partner Training & Seminar", amount: 0.00, opening_balance: 0.00 },
    { code: "28000", heading: "Other Training & Seminar", account_class_id: 36, description: "Other Training & Seminar", amount: 0.00, opening_balance: 0.00 },
    { code: "28100", heading: "Staff Training & Seminar", account_class_id: 36, description: "Staff Training & Seminar", amount: 0.00, opening_balance: 0.00 },
    { code: "28200", heading: "Building Refurbishment", account_class_id: 39, description: "Building Refurbishment", amount: 0.00, opening_balance: 0.00 },
    { code: "28300", heading: "Other structural Modification", account_class_id: 39, description: "Other structural Modification", amount: 0.00, opening_balance: 0.00 },
    { code: "28400", heading: "Park Refurbishment", account_class_id: 39, description: "Park Refurbishment", amount: 0.00, opening_balance: 0.00 },
    { code: "28500", heading: "Workshop Refurbishment", account_class_id: 39, description: "Workshop Refurbishment", amount: 0.00, opening_balance: 0.00 },
    { code: "28600", heading: "Company income Tax", account_class_id: 40, description: "Company income Tax", amount: 0.00, opening_balance: 0.00 },
    { code: "28700", heading: "Import Duties", account_class_id: 40, description: "Import Duties", amount: 0.00, opening_balance: 0.00 },
    { code: "28800", heading: "Other Tax", account_class_id: 40, description: "Other Tax", amount: 0.00, opening_balance: 0.00 },
    { code: "28900", heading: "PAYE", account_class_id: 40, description: "PAYE", amount: 0.00, opening_balance: 0.00 },
    { code: "29000", heading: "Withholding Tax", account_class_id: 40, description: "Withholding Tax", amount: 0.00, opening_balance: 0.00 },
    { code: "29100", heading: "Manager Phone call", account_class_id: 41, description: "Manager Phone call", amount: 0.00, opening_balance: 0.00 },
    { code: "29200", heading: "Other phone calls", account_class_id: 41, description: "Other phone calls", amount: 0.00, opening_balance: 0.00 },
    { code: "29300", heading: "Other Tow Van", account_class_id: 23, description: "Other Tow Van", amount: 0.00, opening_balance: 0.00 },
    { code: "29400", heading: "Tow Van repair", account_class_id: 23, description: "Tow Van repair", amount: 0.00, opening_balance: 0.00 },
    { code: "29500", heading: "Traffic violation charges", account_class_id: 42, description: "Traffic violation charges", amount: 0.00, opening_balance: 0.00 },
    { code: "29600", heading: "Accommodation", account_class_id: 43, description: "Accommodation", amount: 0.00, opening_balance: 0.00 },
    { code: "29700", heading: "Local Transport", account_class_id: 43, description: "Local Transport", amount: 0.00, opening_balance: 0.00 },
    { code: "29800", heading: "Other Transport & Accommodation", account_class_id: 43, description: "Other Transport & Accommodation", amount: 0.00, opening_balance: 0.00 },
    { code: "29900", heading: "Out of Station Transport", account_class_id: 43, description: "Out of Station Transport", amount: 0.00, opening_balance: 0.00 },
    { code: "30000", heading: "Natural Disaster", account_class_id: 44, description: "Natural Disaster", amount: 0.00, opening_balance: 0.00 },
    { code: "30100", heading: "Other Unforseen Loses", account_class_id: 44, description: "Other Unforseen Loses", amount: 0.00, opening_balance: 0.00 },
    { code: "30200", heading: "Theft(Robbery)", account_class_id: 44, description: "Theft(Robbery)", amount: 0.00, opening_balance: 0.00 },
    { code: "30300", heading: "Drivers Uniform", account_class_id: 45, description: "Drivers Uniform", amount: 0.00, opening_balance: 0.00 },
    { code: "30400", heading: "Loaders Uniform", account_class_id: 45, description: "Loaders Uniform", amount: 0.00, opening_balance: 0.00 },
    { code: "30500", heading: "Other Uniform Related", account_class_id: 45, description: "Other Uniform Related", amount: 0.00, opening_balance: 0.00 },
    { code: "30600", heading: "Annual Union Levy", account_class_id: 46, description: "Annual Union Levy", amount: 0.00, opening_balance: 0.00 },
    { code: "30700", heading: "Other Union Dues", account_class_id: 46, description: "Other Union Dues", amount: 0.00, opening_balance: 0.00 },
    { code: "30800", heading: "Electricity Bill", account_class_id: 47, description: "Electricity Bill", amount: 0.00, opening_balance: 0.00 },
    { code: "30900", heading: "Other Utility", account_class_id: 47, description: "Other Utility", amount: 0.00, opening_balance: 0.00 },
    { code: "31000", heading: "Water Bill", account_class_id: 47, description: "Water Bill", amount: 0.00, opening_balance: 0.00 },
    { code: "31100", heading: "Wisdom Clinic", account_class_id: 48, description: "Wisdom Clinic", amount: 0.00, opening_balance: 0.00 },
];

const accountClassBaseId = DATABASE.BASE_ID.ACCOUNT;
const staffBaseId = DATABASE.BASE_ID.STAFF;
const terminalBaseId = DATABASE.BASE_ID.TERMINAL;
const bankAccountBaseId = DATABASE.BASE_ID.BANK_ACCOUNT;

const result = table.map((record, index) => {
    const obj = Object.assign({}, record);
    record.bank_account_id = 1; // <= REMOVE THIS LINE
    obj._id = toObjectId(terminalBaseId, 1 + index);
    obj.account_class_id = toObjectId(accountClassBaseId, record.account_class_id);
    obj.bank_account_id = toObjectId(bankAccountBaseId, record.bank_account_id);
    obj.created_by = toObjectId(staffBaseId, record.created_by);
    return obj;
});

export default result;
