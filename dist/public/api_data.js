define({ "api": [
  {
    "type": "post",
    "url": "/api/account-classes",
    "title": "Create account-classes",
    "name": "CreateAccountClass",
    "group": "AccountClass",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>AccountClass code (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>AccountClass name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>AccountClass description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>AccountClass category (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "class_type",
            "description": "<p>AccountClass type (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>AccountClass subsidiary (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "AccountClass",
            "description": "<p>AccountClass's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>AccountClass not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/account-class/routes.js",
    "groupTitle": "AccountClass"
  },
  {
    "type": "delete",
    "url": "/api/account-classes/{recordId}",
    "title": "Delete account-classes",
    "name": "DeleteAccountClass",
    "group": "AccountClass",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "recordId",
            "description": "<p>record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>AccountClass not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/account-class/routes.js",
    "groupTitle": "AccountClass"
  },
  {
    "type": "get",
    "url": "/api/account-classes?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveAccountClasss",
    "group": "AccountClass",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/account-classes?",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account classifications</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/account-class/routes.js",
    "groupTitle": "AccountClass"
  },
  {
    "type": "put",
    "url": "/api/account-classes/{recordId}",
    "title": "Update account-classes",
    "name": "UpdateAccountClass",
    "group": "AccountClass",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "recordId",
            "description": "<p>record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>AccountClass code (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>AccountClass name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>AccountClass description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>AccountClass category (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "class_type",
            "description": "<p>AccountClass type (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>AccountClass subsidiary (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "AccountClass",
            "description": "<p>AccountClass's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>AccountClass not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/account-class/routes.js",
    "groupTitle": "AccountClass"
  },
  {
    "type": "post",
    "url": "/api/account-headings",
    "title": "Create account-headings",
    "name": "CreateAccountingHeading",
    "group": "AccountHeading",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Bank-Heading code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "heading",
            "description": "<p>Bank-Heading heading</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account_class_id",
            "description": "<p>Bank-Heading account_class_id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Bank-Heading description</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>Bank-Heading amount</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "opening_balance",
            "description": "<p>Bank-Heading opening_balance</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bank_account_id",
            "description": "<p>Bank-Heading bank_account_id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "AccountingHeading",
            "description": "<p>AccountingHeading's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>AccountingHeading not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/account-heading/routes.js",
    "groupTitle": "AccountHeading"
  },
  {
    "type": "delete",
    "url": "/api/account-headings/{recordId}",
    "title": "Delete account-headings",
    "name": "DeleteAccountingHeading",
    "group": "AccountHeading",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "recordId",
            "description": "<p>record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>AccountingHeading not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/account-heading/routes.js",
    "groupTitle": "AccountHeading"
  },
  {
    "type": "get",
    "url": "/api/account-headings?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveAccountHeading",
    "group": "AccountHeading",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/account-headings?",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/account-heading/routes.js",
    "groupTitle": "AccountHeading"
  },
  {
    "type": "put",
    "url": "/api/account-headings/{recordId}",
    "title": "Update account-headings",
    "name": "UpdateAccountingHeading",
    "group": "AccountHeading",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "recordId",
            "description": "<p>record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Bank-Heading code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "heading",
            "description": "<p>Bank-Heading heading</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account_class_id",
            "description": "<p>Bank-Heading account_class_id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Bank-Heading description</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>Bank-Heading amount</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "opening_balance",
            "description": "<p>Bank-Heading opening_balance</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bank_account_id",
            "description": "<p>Bank-Heading bank_account_id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "AccountingHeading",
            "description": "<p>AccountingHeading's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>AccountingHeading not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/account-heading/routes.js",
    "groupTitle": "AccountHeading"
  },
  {
    "type": "post",
    "url": "/api/account-posting",
    "title": "Create account-posting",
    "name": "CreateAccountPosting",
    "group": "AccountPosting",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>AccountPosting accounting code</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>AccountPosting amount of money in Naira</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>AccountPosting description</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "transaction_date",
            "description": "<p>AccountPosting date of transaction</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction_code",
            "description": "<p>AccountPosting transaction event TnxRef</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "transaction_details",
            "description": "<p>AccountPosting transaction object details</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "posting_type",
            "description": "<p>AccountPosting posting_type &quot;DEBIT|CREDIT&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>AccountPosting category &quot;INCOME|EXPENSES&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "account_heading_id",
            "description": "<p>AccountPosting AccountHeading ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "AccountPosting",
            "description": "<p>AccountPosting's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>AccountPosting not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/account-posting/routes.js",
    "groupTitle": "AccountPosting"
  },
  {
    "type": "delete",
    "url": "/api/account-posting/{recordId}",
    "title": "Delete account-posting",
    "name": "DeleteAccountPosting",
    "group": "AccountPosting",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "recordId",
            "description": "<p>record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>AccountPosting not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/account-posting/routes.js",
    "groupTitle": "AccountPosting"
  },
  {
    "type": "get",
    "url": "/api/account-posting?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveAccountPosting",
    "group": "AccountPosting",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/account-posting?",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/account-posting/routes.js",
    "groupTitle": "AccountPosting"
  },
  {
    "type": "put",
    "url": "/api/account-posting/{recordId}",
    "title": "Update account-posting",
    "name": "UpdateAccountPosting",
    "group": "AccountPosting",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "recordId",
            "description": "<p>record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>AccountPosting accounting code</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>AccountPosting amount of money in Naira</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>AccountPosting description</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "transaction_date",
            "description": "<p>AccountPosting date of transaction</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction_code",
            "description": "<p>AccountPosting transaction event TnxRef</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "transaction_details",
            "description": "<p>AccountPosting transaction object details</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "posting_type",
            "description": "<p>AccountPosting posting_type &quot;DEBIT|CREDIT&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>AccountPosting category &quot;INCOME|EXPENSES&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "account_heading_id",
            "description": "<p>AccountPosting AccountHeading ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "AccountPosting",
            "description": "<p>AccountPosting's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>AccountPosting not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/account-posting/routes.js",
    "groupTitle": "AccountPosting"
  },
  {
    "type": "post",
    "url": "/api/asset-assignments",
    "title": "Create asset-assignments",
    "name": "CreateAssetAssignment",
    "group": "AssetAssignment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>AssetAssignment user_type &quot;STAFF|PARTNER&quot; (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "staff_id",
            "description": "<p>AssetAssignment staff_id (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partner_id",
            "description": "<p>AssetAssignment partner_id (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "request_date",
            "description": "<p>AssetAssignment request_date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "task_id",
            "description": "<p>AssetAssignment task_id (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asset_type",
            "description": "<p>AssetAssignment asset_type &quot;VEHICLE|INVENTORY&quot; (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_id",
            "description": "<p>AssetAssignment vehicle_id (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asset_id",
            "description": "<p>AssetAssignment asset_id (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "issued_date",
            "description": "<p>AssetAssignment issued_date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issued_by",
            "description": "<p>AssetAssignment issued_by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issuer_remark",
            "description": "<p>AssetAssignment issuer_remark (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_status",
            "description": "<p>AssetAssignment request_status &quot;PENDING|COLLECTED|REVOKED&quot; (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assignment_status",
            "description": "<p>AssetAssignment assignment_status &quot;PENDING|APPROVED|ISSUED|COLLECTED|REJECTED&quot; (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_returnable",
            "description": "<p>AssetAssignment is_returnable (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "expected_returned_date",
            "description": "<p>AssetAssignment expected_returned_date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "actual_returned_date",
            "description": "<p>AssetAssignment actual_returned_date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "collected_date",
            "description": "<p>AssetAssignment collected_date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collected_by",
            "description": "<p>AssetAssignment collected_by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collected_remark",
            "description": "<p>AssetAssignment collected_remark (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "AssetAssignment",
            "description": "<p>AssetAssignment's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>AssetAssignment not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/asset-assignment/routes.js",
    "groupTitle": "AssetAssignment"
  },
  {
    "type": "delete",
    "url": "/api/asset-assignments/{recordId}",
    "title": "Delete asset-assignments",
    "name": "DeleteAssetAssignment",
    "group": "AssetAssignment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>AssetAssignment not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/asset-assignment/routes.js",
    "groupTitle": "AssetAssignment"
  },
  {
    "type": "get",
    "url": "/api/asset-assignments?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveAssetAssignment",
    "group": "AssetAssignment",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/asset-assignments?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/asset-assignment/routes.js",
    "groupTitle": "AssetAssignment"
  },
  {
    "type": "put",
    "url": "/api/asset-assignments/{recordId}",
    "title": "Update asset-assignments",
    "name": "UpdateAssetAssignment",
    "group": "AssetAssignment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>AssetAssignment user_type &quot;STAFF|PARTNER&quot; (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "staff_id",
            "description": "<p>AssetAssignment staff_id (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partner_id",
            "description": "<p>AssetAssignment partner_id (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "request_date",
            "description": "<p>AssetAssignment request_date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "task_id",
            "description": "<p>AssetAssignment task_id (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asset_type",
            "description": "<p>AssetAssignment asset_type &quot;VEHICLE|INVENTORY&quot; (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_id",
            "description": "<p>AssetAssignment vehicle_id (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asset_id",
            "description": "<p>AssetAssignment asset_id (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "issued_date",
            "description": "<p>AssetAssignment issued_date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issued_by",
            "description": "<p>AssetAssignment issued_by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issuer_remark",
            "description": "<p>AssetAssignment issuer_remark (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_status",
            "description": "<p>AssetAssignment request_status &quot;PENDING|COLLECTED|REVOKED&quot; (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assignment_status",
            "description": "<p>AssetAssignment assignment_status &quot;PENDING|APPROVED|ISSUED|COLLECTED|REJECTED&quot; (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_returnable",
            "description": "<p>AssetAssignment is_returnable (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "expected_returned_date",
            "description": "<p>AssetAssignment expected_returned_date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "actual_returned_date",
            "description": "<p>AssetAssignment actual_returned_date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "collected_date",
            "description": "<p>AssetAssignment collected_date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collected_by",
            "description": "<p>AssetAssignment collected_by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collected_remark",
            "description": "<p>AssetAssignment collected_remark (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "AssetAssignment",
            "description": "<p>AssetAssignment's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>AssetAssignment not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/asset-assignment/routes.js",
    "groupTitle": "AssetAssignment"
  },
  {
    "type": "post",
    "url": "/api/assets",
    "title": "Create an Asset record",
    "name": "CreateAsset",
    "group": "Asset",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Asset label or barcode tag</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>Asset serial</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Asset name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Asset type or model</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "make",
            "description": "<p>Asset make or manufacturer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "measure",
            "description": "<p>Asset measure</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "category_id",
            "description": "<p>Asset category_id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Asset description</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "terminal_id",
            "description": "<p>Asset terminal_id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Asset subsidiary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Asset location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_consumable",
            "description": "<p>Asset is_consumable</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usability",
            "description": "<p>Asset usability &quot;DUTY|SCRAP|SHOP|SOLD|DISPOSED&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "worth",
            "description": "<p>Asset worth &quot;APPRECIATE|DEPRECIATE&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "staff_id",
            "description": "<p>Asset custodian staff ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "launch_date",
            "description": "<p>Asset launch_date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "expire_date",
            "description": "<p>Asset expire_date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "purchase_id",
            "description": "<p>Asset purchase_id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "opening_value",
            "description": "<p>Asset opening_value</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "closing_value",
            "description": "<p>Asset closing_value</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "salvage_value",
            "description": "<p>Asset salvage_value</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "current_value",
            "description": "<p>Asset current_value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Asset photo</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lifespan",
            "description": "<p>Asset lifespan in Years</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total_depreciable_cost",
            "description": "<p>Asset total_depreciable_cost</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "depreciation_rate",
            "description": "<p>Asset depreciation_rate</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "depreciation_expense",
            "description": "<p>Asset depreciation_expense</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "accumulated_depreciation",
            "description": "<p>Asset accumulated_depreciation</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Asset",
            "description": "<p>Asset's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Asset not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/asset/routes.js",
    "groupTitle": "Asset"
  },
  {
    "type": "delete",
    "url": "/api/assets/{recordId}",
    "title": "Delete an Asset record",
    "name": "DeleteAsset",
    "group": "Asset",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Asset not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/asset/routes.js",
    "groupTitle": "Asset"
  },
  {
    "type": "get",
    "url": "/api/assets?id={recordId}",
    "title": "Retrieve Asset records",
    "name": "RetrieveAsset",
    "group": "Asset",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/assets",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/asset/routes.js",
    "groupTitle": "Asset"
  },
  {
    "type": "put",
    "url": "/api/assets/{recordId}",
    "title": "Update an Asset record",
    "name": "UpdateAsset",
    "group": "Asset",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Asset label or barcode tag</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>Asset serial</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Asset name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Asset type or model</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "make",
            "description": "<p>Asset make or manufacturer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "measure",
            "description": "<p>Asset measure</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "category_id",
            "description": "<p>Asset category_id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Asset description</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "terminal_id",
            "description": "<p>Asset terminal_id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Asset subsidiary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Asset location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_consumable",
            "description": "<p>Asset is_consumable</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usability",
            "description": "<p>Asset usability &quot;DUTY|SCRAP|SHOP|SOLD|DISPOSED&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "worth",
            "description": "<p>Asset worth &quot;APPRECIATE|DEPRECIATE&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "staff_id",
            "description": "<p>Asset custodian staff ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "launch_date",
            "description": "<p>Asset launch_date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "expire_date",
            "description": "<p>Asset expire_date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "purchase_id",
            "description": "<p>Asset purchase_id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "opening_value",
            "description": "<p>Asset opening_value</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "closing_value",
            "description": "<p>Asset closing_value</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "salvage_value",
            "description": "<p>Asset salvage_value</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "current_value",
            "description": "<p>Asset current_value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Asset photo</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lifespan",
            "description": "<p>Asset lifespan in Years</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total_depreciable_cost",
            "description": "<p>Asset total_depreciable_cost</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "depreciation_rate",
            "description": "<p>Asset depreciation_rate</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "depreciation_expense",
            "description": "<p>Asset depreciation_expense</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "accumulated_depreciation",
            "description": "<p>Asset accumulated_depreciation</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Asset",
            "description": "<p>Asset's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Asset not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/asset/routes.js",
    "groupTitle": "Asset"
  },
  {
    "type": "post",
    "url": "/api/bank-accounts",
    "title": "Create bank-accounts",
    "name": "CreateBank_Account",
    "group": "BankAccount",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Bank-Account name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signatory",
            "description": "<p>Bank-Account signatory (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Bank-Account subsidiary (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "terminal_id",
            "description": "<p>Bank-Account terminal_id (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bank_id",
            "description": "<p>Bank-Account bank_id (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account_name",
            "description": "<p>Bank-Account account_name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account_number",
            "description": "<p>Bank-Account account_number (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account_type",
            "description": "<p>Bank-Account account_type (BANK_ACCOUNT_TYPE) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usage",
            "description": "<p>Bank-Account usage (BANK_ACCOUNT_USAGE) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Bank-Account category (&quot;INCOME&quot;, &quot;EXPENSES&quot;, &quot;BOTH&quot;) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Bank-Account description (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_iso2",
            "description": "<p>Bank-Account country_iso2 (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>Bank-Account currency (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "opening_date",
            "description": "<p>Bank-Account opening_date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "closing_date",
            "description": "<p>Bank-Account closing_date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "opening_balance",
            "description": "<p>Bank-Account opening_balance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "closing_balance",
            "description": "<p>Bank-Account closing_balance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lien_amount",
            "description": "<p>Bank-Account lien_amount (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "available_balance",
            "description": "<p>Bank-Account available_balance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total_credit",
            "description": "<p>Bank-Account total_credit (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total_debit",
            "description": "<p>Bank-Account total_debit (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Bank-Account",
            "description": "<p>Bank-Account's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Bank-Account not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/bank-account/routes.js",
    "groupTitle": "BankAccount"
  },
  {
    "type": "delete",
    "url": "/api/bank-accounts/{recordId}",
    "title": "Delete bank-accounts",
    "name": "DeleteBank_Account",
    "group": "BankAccount",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Bank-Account not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/bank-account/routes.js",
    "groupTitle": "BankAccount"
  },
  {
    "type": "get",
    "url": "/api/bank-accounts?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveBankAccount",
    "group": "BankAccount",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/bank-accounts?",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records of Corporate Bank-accounts for all terminals and management operations</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/bank-account/routes.js",
    "groupTitle": "BankAccount"
  },
  {
    "type": "put",
    "url": "/api/bank-accounts/{recordId}",
    "title": "Update bank-accounts",
    "name": "UpdateBank_Account",
    "group": "BankAccount",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Bank-Account name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signatory",
            "description": "<p>Bank-Account signatory (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Bank-Account subsidiary (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "terminal_id",
            "description": "<p>Bank-Account terminal_id (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bank_id",
            "description": "<p>Bank-Account bank_id (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account_name",
            "description": "<p>Bank-Account account_name (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "account_number",
            "description": "<p>Bank-Account account_number (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account_type",
            "description": "<p>Bank-Account account_type (BANK_ACCOUNT_TYPE) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usage",
            "description": "<p>Bank-Account usage (BANK_ACCOUNT_USAGE) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Bank-Account category (&quot;INCOME&quot;, &quot;EXPENSES&quot;, &quot;BOTH&quot;) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Bank-Account description (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_iso2",
            "description": "<p>Bank-Account country_iso2 (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>Bank-Account currency (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "opening_date",
            "description": "<p>Bank-Account opening_date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "closing_date",
            "description": "<p>Bank-Account closing_date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "opening_balance",
            "description": "<p>Bank-Account opening_balance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "closing_balance",
            "description": "<p>Bank-Account closing_balance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lien_amount",
            "description": "<p>Bank-Account lien_amount (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "available_balance",
            "description": "<p>Bank-Account available_balance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total_credit",
            "description": "<p>Bank-Account total_credit (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total_debit",
            "description": "<p>Bank-Account total_debit (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Bank-Account",
            "description": "<p>Bank-Account's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Bank-Account not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/bank-account/routes.js",
    "groupTitle": "BankAccount"
  },
  {
    "type": "post",
    "url": "/api/banks",
    "title": "Create banks",
    "name": "CreateBank",
    "group": "Bank",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Bank full name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort_code",
            "description": "<p>Bank sort_code (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_code",
            "description": "<p>Bank bank_code (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_iso2",
            "description": "<p>Bank country_iso2 (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_person",
            "description": "<p>Bank contact_person (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>Bank website (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Bank",
            "description": "<p>Bank's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Bank not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/bank/routes.js",
    "groupTitle": "Bank"
  },
  {
    "type": "delete",
    "url": "/api/banks/{recordId}",
    "title": "Delete banks",
    "name": "DeleteBank",
    "group": "Bank",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Bank not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/bank/routes.js",
    "groupTitle": "Bank"
  },
  {
    "type": "get",
    "url": "/api/banks?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveBank",
    "group": "Bank",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/banks?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of Corporate commercial banks operating Groups bank account(s)</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/bank/routes.js",
    "groupTitle": "Bank"
  },
  {
    "type": "put",
    "url": "/api/banks/{recordId}",
    "title": "Update banks",
    "name": "UpdateBank",
    "group": "Bank",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Bank full name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort_code",
            "description": "<p>Bank sort_code (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_code",
            "description": "<p>Bank bank_code (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_iso2",
            "description": "<p>Bank country_iso2 (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_person",
            "description": "<p>Bank contact_person (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>Bank website (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Bank",
            "description": "<p>Bank's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Bank not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/bank/routes.js",
    "groupTitle": "Bank"
  },
  {
    "type": "post",
    "url": "/api/blog-comments",
    "title": "Create blog-comments",
    "name": "CreateBlogComment",
    "group": "BlogComment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blog_id",
            "description": "<p>BlogComment blog ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "related_comment_id",
            "description": "<p>BlogComment replied to comment ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>BlogComment comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_published",
            "description": "<p>BlogComment published status</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "BlogComment",
            "description": "<p>BlogComment's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>BlogComment not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/blog-comment/routes.js",
    "groupTitle": "BlogComment"
  },
  {
    "type": "delete",
    "url": "/api/blog-comments/{recordId}",
    "title": "Delete blog-comments",
    "name": "DeleteBlogComment",
    "group": "BlogComment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>BlogComment not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/blog-comment/routes.js",
    "groupTitle": "BlogComment"
  },
  {
    "type": "get",
    "url": "/api/blog-comments?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveBlogComment",
    "group": "BlogComment",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/blog-comments?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/blog-comment/routes.js",
    "groupTitle": "BlogComment"
  },
  {
    "type": "put",
    "url": "/api/blog-comments/{recordId}",
    "title": "Update blog-comments",
    "name": "UpdateBlogComment",
    "group": "BlogComment",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blog_id",
            "description": "<p>BlogComment blog ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "related_comment_id",
            "description": "<p>BlogComment replied to comment ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>BlogComment comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_published",
            "description": "<p>BlogComment published status</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "BlogComment",
            "description": "<p>BlogComment's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>BlogComment not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/blog-comment/routes.js",
    "groupTitle": "BlogComment"
  },
  {
    "type": "post",
    "url": "/api/blogs",
    "title": "Create blogs",
    "name": "CreateBlog",
    "group": "Blog",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Blog title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Blog body field will hold the body of the article as HTML</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Blog tags field will store the post’s tags, eg: “great, article”</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "author_id",
            "description": "<p>Blog tags field will store the post’s author</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Blog slug field will store the URL-friendly version of the post’s title, eg: “a-great-article”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_published",
            "description": "<p>Blog published status</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "comment_ids",
            "description": "<p>Blog Array-of-Comments (prohibited)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Blog",
            "description": "<p>Blog's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Blog not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/blog/routes.js",
    "groupTitle": "Blog"
  },
  {
    "type": "delete",
    "url": "/api/blogs/{recordId}",
    "title": "Delete blogs",
    "name": "DeleteBlog",
    "group": "Blog",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Blog not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/blog/routes.js",
    "groupTitle": "Blog"
  },
  {
    "type": "get",
    "url": "/api/blogs?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveBlog",
    "group": "Blog",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/blogs",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/blog/routes.js",
    "groupTitle": "Blog"
  },
  {
    "type": "put",
    "url": "/api/blogs/{recordId}",
    "title": "Update blogs",
    "name": "UpdateBlog",
    "group": "Blog",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Blog title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Blog body field will hold the body of the article as HTML</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Blog tags field will store the post’s tags, eg: “great, article”</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "author_id",
            "description": "<p>Blog tags field will store the post’s author</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>Blog slug field will store the URL-friendly version of the post’s title, eg: “a-great-article”</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "is_published",
            "description": "<p>Blog published status</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "comment_ids",
            "description": "<p>Blog Array-of-Comments (prohibited)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Blog",
            "description": "<p>Blog's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Blog not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/blog/routes.js",
    "groupTitle": "Blog"
  },
  {
    "type": "post",
    "url": "/api/budgets",
    "title": "Create budgets",
    "name": "CreateBudget",
    "group": "Budget",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Budget name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Budget Category ACCOUNT|OFFICE|SUBSIDIARY|TERMINAL</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Budget description (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Budget PET|CHEM|PLANT|ENGR (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>Budget year e.g. 2020 Period is gotten from settings</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>Budget cap set for the given year</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "office",
            "description": "<p>Budget for a given office</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "terminal",
            "description": "<p>Budget Terminal</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "account_heading",
            "description": "<p>Budget AccountHeading</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Budget",
            "description": "<p>Budget's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Budget not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/budget/routes.js",
    "groupTitle": "Budget"
  },
  {
    "type": "delete",
    "url": "/api/budgets/{recordId}",
    "title": "Delete budgets",
    "name": "DeleteBudget",
    "group": "Budget",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Budget not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/budget/routes.js",
    "groupTitle": "Budget"
  },
  {
    "type": "get",
    "url": "/api/budgets?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveBudget",
    "group": "Budget",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/budgets?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/budget/routes.js",
    "groupTitle": "Budget"
  },
  {
    "type": "put",
    "url": "/api/budgets/{recordId}",
    "title": "Update budgets",
    "name": "UpdateBudget",
    "group": "Budget",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Budget name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Budget Category ACCOUNT|OFFICE|SUBSIDIARY|TERMINAL</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Budget description (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Budget PET|CHEM|PLANT|ENGR (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "year",
            "description": "<p>Budget year e.g. 2020 Period is gotten from settings</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>Budget cap set for the given year</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "office",
            "description": "<p>Budget for a given office</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "terminal",
            "description": "<p>Budget Terminal</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "account_heading",
            "description": "<p>Budget AccountHeading</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Budget",
            "description": "<p>Budget's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Budget not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/budget/routes.js",
    "groupTitle": "Budget"
  },
  {
    "type": "post",
    "url": "/api/categories",
    "title": "Create categories",
    "name": "CreateCategory",
    "group": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Category type of category (required) &quot;MATERIAL&quot;, &quot;PRODUCT&quot;, &quot;VEHICLE&quot;, &quot;STAFF&quot;, &quot;PARTNER&quot;, &quot;ASSET&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Category name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Category description (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Category PET|CHEM|PLANT|ENGR (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Category",
            "description": "<p>Category's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Category not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/category/routes.js",
    "groupTitle": "Category"
  },
  {
    "type": "delete",
    "url": "/api/categories/{recordId}",
    "title": "Delete categories",
    "name": "DeleteCategory",
    "group": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Category not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/category/routes.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/api/categories?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveCategory",
    "group": "Category",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/categories?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/category/routes.js",
    "groupTitle": "Category"
  },
  {
    "type": "put",
    "url": "/api/categories/{recordId}",
    "title": "Update categories",
    "name": "UpdateCategory",
    "group": "Category",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Category type of category &quot;MATERIAL&quot;, &quot;PRODUCT&quot;, &quot;VEHICLE&quot;, &quot;STAFF&quot;, &quot;PARTNER&quot;, &quot;ASSET&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Category name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Category description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Category PET|CHEM|PLANT|ENGR</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Category",
            "description": "<p>Category's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Category not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/category/routes.js",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/api/contact-us",
    "title": "Create contact-us",
    "name": "CreateContactUs",
    "group": "ContactUs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": "<p>ContactUs fullname (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>ContactUs email (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>ContactUs phone (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>ContactUs subject (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>ContactUs message (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_type",
            "description": "<p>ContactUs request_type: &quot;COMPLAINT&quot;, &quot;ENQUIRY&quot;, &quot;SUGGESTION&quot;, (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_status",
            "description": "<p>ContactUs request_status: &quot;PENDING&quot;, &quot;ACTIVE&quot;, &quot;CLOSED&quot; (prohibited)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>ContactUs remark (prohibited)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "has_ticket",
            "description": "<p>ContactUs has_ticket (prohibited)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ContactUs",
            "description": "<p>ContactUs's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>ContactUs not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/contact-us/routes.js",
    "groupTitle": "ContactUs"
  },
  {
    "type": "delete",
    "url": "/api/contact-us/{recordId}",
    "title": "Delete contact-us",
    "name": "DeleteContactUs",
    "group": "ContactUs",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>ContactUs not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/contact-us/routes.js",
    "groupTitle": "ContactUs"
  },
  {
    "type": "get",
    "url": "/api/contact-us?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveContactUs",
    "group": "ContactUs",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/cities?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records of enquiries, suggestions or complaints issues by clients via the website or mobile app contact-us page.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/contact-us/routes.js",
    "groupTitle": "ContactUs"
  },
  {
    "type": "put",
    "url": "/api/contact-us/{recordId}",
    "title": "Update contact-us",
    "name": "UpdateContactUs",
    "group": "ContactUs",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_status",
            "description": "<p>ContactUs request_status: &quot;PENDING&quot;, &quot;ACTIVE&quot;, &quot;CLOSED&quot; (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>ContactUs remark (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "has_ticket",
            "description": "<p>ContactUs has_ticket (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ContactUs",
            "description": "<p>ContactUs's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>ContactUs not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/contact-us/routes.js",
    "groupTitle": "ContactUs"
  },
  {
    "type": "post",
    "url": "/api/counties",
    "title": "Create counties",
    "name": "CreateCounty",
    "group": "County",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>County short name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state_id",
            "description": "<p>County State Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "created_by",
            "description": "<p>County record created by</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "County",
            "description": "<p>County's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>County not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/county/routes.js",
    "groupTitle": "County"
  },
  {
    "type": "delete",
    "url": "/api/counties/{recordId}",
    "title": "Delete counties",
    "name": "DeleteCounty",
    "group": "County",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>County not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/county/routes.js",
    "groupTitle": "County"
  },
  {
    "type": "get",
    "url": "/api/counties?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveCounty",
    "group": "County",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/counties?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records counties (or local government areas) of operation</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/county/routes.js",
    "groupTitle": "County"
  },
  {
    "type": "put",
    "url": "/api/counties/{recordId}",
    "title": "Update counties",
    "name": "UpdateCounty",
    "group": "County",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "recordId",
            "description": "<p>County record id (primaryKey)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>County short name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state_id",
            "description": "<p>County State Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "updated_by",
            "description": "<p>County record modified by</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "County",
            "description": "<p>County's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>County not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/county/routes.js",
    "groupTitle": "County"
  },
  {
    "type": "post",
    "url": "/api/customers",
    "title": "Create customers",
    "name": "CreateCustomer",
    "group": "Customer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer",
            "description": "<p>type &quot;INDIVIDUAL&quot;, &quot;ORGANIZATION&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Customer surname (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "other_name",
            "description": "<p>Customer other name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Customer gender (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birth_date",
            "description": "<p>Customer date of birth</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Customer official phone number (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_personal",
            "description": "<p>Customer home phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Customer email address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Customer password for accessing the App</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>Customer one-time-password for accessing the App</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "otp_count",
            "description": "<p>Number of times OTP has been used without successful transaction</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skype",
            "description": "<p>Customer Skype.com contact</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "linkedin",
            "description": "<p>Customer LinkedIn.com contact url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "facebook",
            "description": "<p>Customer Facebook.com contact url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instagram",
            "description": "<p>Customer Instagram.com contact url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "twitter",
            "description": "<p>Customer Twitter.com contact url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "youtube",
            "description": "<p>Customer Youtube.com contact url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_person",
            "description": "<p>Customer next-of-kin, or contact person</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_person_phone",
            "description": "<p>Customer next-of-kin, or contact person phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product",
            "description": "<p>Customer product, service or project of interest</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Customer photo url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Customer residential or work address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_iso2",
            "description": "<p>Customer country of residence (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_pmt_client",
            "description": "<p>assert that client is also a PMT customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_pesl_client",
            "description": "<p>assert that client is also a PESL customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_pet_client",
            "description": "<p>assert that client is also a PET customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_shop_client",
            "description": "<p>assert that client is also a SHOP customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_engr_client",
            "description": "<p>Customer assert that client is also a ENGR customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_tenant",
            "description": "<p>assert if customer is a depot tenant</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_phone_verified",
            "description": "<p>phone verification status</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_email_verified",
            "description": "<p>email verification status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>comment about customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "points",
            "description": "<p>Customer cummulative royalty points for patronage</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "cart_id",
            "description": "<p>Customer current cart</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "blog_comments",
            "description": "<p>Customer array of BlogComments</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Customer",
            "description": "<p>Customer's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Customer not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/student/routes.js",
    "groupTitle": "Customer"
  },
  {
    "type": "delete",
    "url": "/api/customers/{recordId}",
    "title": "Delete customers",
    "name": "DeleteCustomer",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Customer not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/student/routes.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/api/customers/login",
    "title": "Login Customer",
    "name": "LoginCustomer",
    "group": "Customer",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Customer email address (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Customer password (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Customer mobile phone number (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>Customer One-Time-Password sent to phone (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Login type &quot;EMAIL&quot;, &quot;PHONE&quot;, &quot;OTP&quot; (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Login Successful.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Customer not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/student/routes.js",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/customers?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveCustomer",
    "group": "Customer",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/customers?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records of consolidated list of customers from PMT, PML, PET, Shop etc</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/student/routes.js",
    "groupTitle": "Customer"
  },
  {
    "type": "put",
    "url": "/api/customers/{recordId}",
    "title": "Update customers",
    "name": "UpdateCustomer",
    "group": "Customer",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer",
            "description": "<p>type &quot;INDIVIDUAL&quot;, &quot;ORGANIZATION&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Customer name title &quot;Dr, Barr. Rev Chief&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Customer surname (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "other_name",
            "description": "<p>Customer other name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Customer gender (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birth_date",
            "description": "<p>Customer date of birth</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Customer official phone number (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_personal",
            "description": "<p>Customer home phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Customer email address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Customer password for accessing the App</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>Customer one-time-password for accessing the App</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "otp_count",
            "description": "<p>Number of times OTP has been used without successful transaction</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Customer company or organization</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "industry",
            "description": "<p>Customer industry type e.g EDU, FIN, IT, AGRO etc</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>Customer website</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skype",
            "description": "<p>Customer Skype.com contact</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "linkedin",
            "description": "<p>Customer LinkedIn.com contact url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "facebook",
            "description": "<p>Customer Facebook.com contact url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instagram",
            "description": "<p>Customer Instagram.com contact url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "twitter",
            "description": "<p>Customer Twitter.com contact url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "youtube",
            "description": "<p>Customer Youtube.com contact url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_person",
            "description": "<p>Customer next-of-kin, or contact person</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_person_phone",
            "description": "<p>Customer next-of-kin, or contact person phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product",
            "description": "<p>Customer product, service or project of interest</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Customer photo url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Customer residential or work address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_iso2",
            "description": "<p>Customer country of residence (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_pmt_client",
            "description": "<p>assert that client is also a PMT customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_pesl_client",
            "description": "<p>assert that client is also a PESL customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_pet_client",
            "description": "<p>assert that client is also a PET customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_shop_client",
            "description": "<p>assert that client is also a SHOP customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_engr_client",
            "description": "<p>Customer assert that client is also a ENGR customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_tenant",
            "description": "<p>assert if customer is a depot tenant</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_phone_verified",
            "description": "<p>phone verification status</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_email_verified",
            "description": "<p>email verification status</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "points",
            "description": "<p>Customer cummulative royalty points for patronage</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wallet",
            "description": "<p>Customer wallet available ballance amount in Naira</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "cart_id",
            "description": "<p>Customer current cart</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "sales_rep_id",
            "description": "<p>Customer Staff SalesRep ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "blog_comment_ids",
            "description": "<p>Customer array of BlogComment records</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "sales_order_ids:",
            "description": "<p>Customer array of SalesOrder records</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "pml_shipment_ids",
            "description": "<p>Customer array of PmlShipment records</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "pmt_boarding_ids",
            "description": "<p>Customer array of PmtBoarding records</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "ratings",
            "description": "<p>Customer array of Rating by customer</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>Customer client as rated by staff</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>comment about customer by Staff</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "updated_by",
            "description": "<p>id of the staff who created the record</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Customer",
            "description": "<p>Customer's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Customer not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/student/routes.js",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/api/document-type",
    "title": "Create document-type",
    "name": "CreateDocumentType",
    "group": "DocumentType",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>DocumentType name, title or label</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issuer",
            "description": "<p>DocumentType issuer State|Church|School|Business Entity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>DocumentType type &quot;USER|VEHICLE|ASSET|TRANSACTION&quot; (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>DocumentType description (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_renewable",
            "description": "<p>DocumentType is_renewable (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "validity",
            "description": "<p>DocumentType validity (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "initial_charge",
            "description": "<p>DocumentType initial_charge (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "renewable_charge",
            "description": "<p>DocumentType renewable_charge (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "DocumentType",
            "description": "<p>DocumentType's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>DocumentType not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/document-type/routes.js",
    "groupTitle": "DocumentType"
  },
  {
    "type": "delete",
    "url": "/api/document-type/{recordId}",
    "title": "Delete document-type",
    "name": "DeleteDocumentType",
    "group": "DocumentType",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>DocumentType not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/document-type/routes.js",
    "groupTitle": "DocumentType"
  },
  {
    "type": "get",
    "url": "/api/document-type?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveDocumentType",
    "group": "DocumentType",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/document-type?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/document-type/routes.js",
    "groupTitle": "DocumentType"
  },
  {
    "type": "put",
    "url": "/api/document-type/{recordId}",
    "title": "Update document-type",
    "name": "UpdateDocumentType",
    "group": "DocumentType",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>DocumentType name, title or label</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issuer",
            "description": "<p>DocumentType issuer State|Church|School|Business Entity</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>DocumentType type &quot;USER|VEHICLE|ASSET|TRANSACTION&quot; (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>DocumentType description (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_renewable",
            "description": "<p>DocumentType is_renewable (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "validity",
            "description": "<p>DocumentType validity (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "initial_charge",
            "description": "<p>DocumentType initial_charge (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "renewable_charge",
            "description": "<p>DocumentType renewable_charge (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "DocumentType",
            "description": "<p>DocumentType's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>DocumentType not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/document-type/routes.js",
    "groupTitle": "DocumentType"
  },
  {
    "type": "post",
    "url": "/api/documentations",
    "title": "Create documentations",
    "name": "CreateDocumentation",
    "group": "Documentation",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "document_type_id",
            "description": "<p>Documentation DocumentType ObjectId (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Documentation type owner &quot;ASSET|PARTNER|STAFF|VEHICLE|SALESORDER|PURCHASE&quot; (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "asset_id",
            "description": "<p>Documentation asset ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "staff_id",
            "description": "<p>Documentation staff ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "partner_id",
            "description": "<p>Documentation partner ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Documentation customer ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "vehicle_id",
            "description": "<p>Documentation vehicle ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "sales_order_id",
            "description": "<p>Documentation sales_order ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "purchase_order_id",
            "description": "<p>Documentation PurchaseOrder ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reference",
            "description": "<p>Documentation reference number</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "last_renewal",
            "description": "<p>Documentation previous date renewal</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "next_renewal",
            "description": "<p>Documentation upcoming renewal</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "renewal_by",
            "description": "<p>Documentation renewal_by Staff responsible for the task</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>Documentation amount spent or fee|charge for renewal</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Documentation description</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_renewed",
            "description": "<p>Documentation is_renewed</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_validity",
            "description": "<p>Documentation is_validity</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Documentation",
            "description": "<p>Documentation's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Documentation not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/documentation/routes.js",
    "groupTitle": "Documentation"
  },
  {
    "type": "delete",
    "url": "/api/documentations/{recordId}",
    "title": "Delete documentations",
    "name": "DeleteDocumentation",
    "group": "Documentation",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Documentation not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/documentation/routes.js",
    "groupTitle": "Documentation"
  },
  {
    "type": "get",
    "url": "/api/documentations?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveDocumentation",
    "group": "Documentation",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/documentations?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/documentation/routes.js",
    "groupTitle": "Documentation"
  },
  {
    "type": "put",
    "url": "/api/documentations/{recordId}",
    "title": "Update documentations",
    "name": "UpdateDocumentation",
    "group": "Documentation",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "document_type_id",
            "description": "<p>Documentation DocumentType ObjectId (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Documentation type owner &quot;ASSET|PARTNER|STAFF|VEHICLE|SALESORDER|PURCHASE&quot; (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "asset_id",
            "description": "<p>Documentation asset ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "staff_id",
            "description": "<p>Documentation staff ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "partner_id",
            "description": "<p>Documentation partner ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Documentation customer ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "vehicle_id",
            "description": "<p>Documentation vehicle ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "sales_order_id",
            "description": "<p>Documentation sales_order ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "purchase_order_id",
            "description": "<p>Documentation PurchaseOrder ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reference",
            "description": "<p>Documentation reference number</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "last_renewal",
            "description": "<p>Documentation previous date renewal</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "next_renewal",
            "description": "<p>Documentation upcoming renewal</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "renewal_by",
            "description": "<p>Documentation renewal_by Staff responsible for the task</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>Documentation amount spent or fee|charge for renewal</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Documentation description</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_renewed",
            "description": "<p>Documentation is_renewed</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_validity",
            "description": "<p>Documentation is_validity</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Documentation",
            "description": "<p>Documentation's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Documentation not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/documentation/routes.js",
    "groupTitle": "Documentation"
  },
  {
    "type": "post",
    "url": "/api/flutterwave-transactions",
    "title": "Create flutterwave-transactions",
    "name": "CreateFlutterwaveTransaction",
    "group": "FlutterwaveTransaction",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "flwId",
            "description": "<p>FlutterwaveTransaction flwId // 125837,</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "txRef",
            "description": "<p>FlutterwaveTransaction txRef // &quot;rave-pos-272519815315&quot;,</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "flwRef",
            "description": "<p>FlutterwaveTransaction flwRef // &quot;FLWACHMOCK-1523118279396&quot;,</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderRef",
            "description": "<p>FlutterwaveTransaction orderRef // &quot;URF_1523118277202_7343035&quot;,</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paymentPlan",
            "description": "<p>FlutterwaveTransaction paymentPlan // null,</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>FlutterwaveTransaction createdAt // &quot;2018-04-07T16:24:37.000Z&quot;,</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>FlutterwaveTransaction amount // 200,</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "charged_amount",
            "description": "<p>FlutterwaveTransaction charged_amount // 200,</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>FlutterwaveTransaction status // &quot;successful&quot;,</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IP",
            "description": "<p>FlutterwaveTransaction IP // &quot;197.149.95.62&quot;,</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>FlutterwaveTransaction currency // &quot;NGN&quot;,</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "customer",
            "description": "<p>FlutterwaveTransaction customer Object { {Number} id customer id // 5766, {String} phone customer phone , // &quot;N/A&quot;, {String} fullName customer phone , // &quot;Anonymous customer&quot;, {String} customertoken customer phone , // null, {String} email customer phone , // &quot;salesmode@ravepay.co&quot;, {Date} createdAt customer phone , // &quot;2017-10-16T10:03:19.000Z&quot;, {Date} updatedAt customer phone , // &quot;2017-10-16T10:03:19.000Z&quot;, {Date} deletedAt customer phone , // null, {Number} AccountId customer phone , // 134, },</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "entity",
            "description": "<p>FlutterwaveTransaction entity Object { {String} account_number entity , // &quot;0690000037&quot;, {String} first_name entity , // &quot;Dele Moruf&quot;, {String} last_name entity , // &quot;Quadri&quot;, {String} card6 entity , // &quot;539983&quot;, {String} card_last4 entity , // &quot;8381&quot;, },</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "FlutterwaveTransaction",
            "description": "<p>FlutterwaveTransaction's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>FlutterwaveTransaction not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/flutterwave/flutterwave-transaction/routes.js",
    "groupTitle": "FlutterwaveTransaction"
  },
  {
    "type": "get",
    "url": "/api/flutterwave-transactions?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveFlutterwaveTransaction",
    "group": "FlutterwaveTransaction",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/flutterwave-transactions?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/flutterwave/flutterwave-transaction/routes.js",
    "groupTitle": "FlutterwaveTransaction"
  },
  {
    "type": "get",
    "url": "/api/flutterwave-transactions/online?id={recordId}",
    "title": "Retrieve one or all online Tnx",
    "name": "RetrieveFlutterwaveTransactionOnline",
    "group": "FlutterwaveTransaction",
    "examples": [
      {
        "title": "Example usage for retieving multiple records:",
        "content": "curl -i https://ravesandboxapi.flutterwave.com/v2/gpx/transactions/query?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>transaction ID from from the Verify transaction response (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Number of records to skip (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "from",
            "description": "<p>transactions Start-date to list records (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "to",
            "description": "<p>transactions End-date to list records (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>transactions currency to query records e.g. &quot;NGN&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>transactions status to query records e.g. &quot;successful&quot;</p>"
          }
        ]
      }
    },
    "description": "<p>Records of online transactions or retrieve the timeline events detail of a transaction</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/flutterwave/flutterwave-transaction/routes.js",
    "groupTitle": "FlutterwaveTransaction"
  },
  {
    "type": "get",
    "url": "/api/flutterwave-transactions/settlement?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveFlutterwaveTransactionSettlement",
    "group": "FlutterwaveTransaction",
    "examples": [
      {
        "title": "Example usage for retieving multiple records:",
        "content": "curl -i http://localhost/api/flutterwave-transactions?page=1&limit=50&status=completed",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Transaction status to retrieve e.g. &quot;completed&quot;</p>"
          }
        ]
      }
    },
    "description": "<p>Records of Settlement accounts</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/flutterwave/flutterwave-transaction/routes.js",
    "groupTitle": "FlutterwaveTransaction"
  },
  {
    "type": "get",
    "url": "/api/flutterwave-transactions/bvn/:bvn",
    "title": "verify BVN",
    "name": "VerifyBvn",
    "group": "FlutterwaveTransaction",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bvn",
            "description": "<p>Bank Verification Number</p>"
          }
        ]
      }
    },
    "description": "<p>This allows you verify the authenticity of a BVN</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/flutterwave/flutterwave-transaction/routes.js",
    "groupTitle": "FlutterwaveTransaction"
  },
  {
    "type": "get",
    "url": "/api/flutterwave-transactions/payment/{txref}",
    "title": "verify Payment",
    "name": "VerifyPayment",
    "group": "FlutterwaveTransaction",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "txref",
            "description": "<p>Transaction Reference Number</p>"
          }
        ]
      }
    },
    "description": "<p>This allows you verify the authenticity of a Transaction in terms of status, amount and currency</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/flutterwave/flutterwave-transaction/routes.js",
    "groupTitle": "FlutterwaveTransaction"
  },
  {
    "type": "post",
    "url": "/api/images",
    "title": "Create image-assets",
    "name": "CreateImage",
    "group": "Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>required image-asset name</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>required image-asset</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "image-asset",
            "description": "<p>record's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "description": "<p>Images uploaded to this endpoint are stored locally on the backend server. This is only a fall back option when AWS is no longer available.</p>",
    "version": "0.0.0",
    "filename": "src/api/general/multimedia/routes.js",
    "groupTitle": "Image"
  },
  {
    "type": "post",
    "url": "/api/images-aws",
    "title": "Create image-assets",
    "name": "CreateImageAws",
    "group": "Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>required image-asset name</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>required image-asset</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "image-asset",
            "description": "<p>record's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "description": "<p>Images uploaded to this endpoint are stored on AWS.</p>",
    "version": "0.0.0",
    "filename": "src/api/general/multimedia/routes.js",
    "groupTitle": "Image"
  },
  {
    "type": "delete",
    "url": "/api/images/{recordId}",
    "title": "Delete image-assets",
    "name": "DeleteImage",
    "group": "Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>image-asset not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/multimedia/routes.js",
    "groupTitle": "Image"
  },
  {
    "type": "get",
    "url": "/api/images?{query}",
    "title": "Retrieve all image-assets",
    "name": "RetrieveImages",
    "group": "Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "description": "<p>image-assets name and url are stored on db. The images themselves are stored on the AWS Bucket. The url points to it.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rows",
            "description": "<p>List of image-assets.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/multimedia/routes.js",
    "groupTitle": "Image"
  },
  {
    "type": "get",
    "url": "/api/upload",
    "title": "to get the form for uploading images",
    "name": "RetrieveUploadForm",
    "group": "Image",
    "description": "<p>The sample form allows you to test the API by uploading and image and entering the image name that would be saved on db</p>",
    "version": "0.0.0",
    "filename": "src/api/general/multimedia/routes.js",
    "groupTitle": "Image"
  },
  {
    "type": "put",
    "url": "/api/images/{ImageId}",
    "title": "Update image-assets",
    "name": "UpdateImage",
    "group": "Image",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>required image-asset name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>required image-asset url on cloud</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/multimedia/routes.js",
    "groupTitle": "Image"
  },
  {
    "type": "post",
    "url": "/api/materials",
    "title": "Create materials",
    "name": "CreateMaterial",
    "group": "Material",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Material name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Material type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Material code</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "category_id",
            "description": "<p>Material category (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Material subsidiary (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "measure",
            "description": "<p>Material measure (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "volume",
            "description": "<p>Material volume (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mass",
            "description": "<p>Material mass (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "unit",
            "description": "<p>Material  unit (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>Material  unit cost price(required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Material photo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "variants",
            "description": "<p>Material variants</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surface_area",
            "description": "<p>Material surface_area</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dimension",
            "description": "<p>Material dimension</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "attributes",
            "description": "<p>Material attributes</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity_stock",
            "description": "<p>Material  quantity_stock (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity_order",
            "description": "<p>Material quantity_order (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reorder_level",
            "description": "<p>Material  reorder_level (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reorder_quantity",
            "description": "<p>Material reorder_quantity (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Material",
            "description": "<p>Material's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Material not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/material/routes.js",
    "groupTitle": "Material"
  },
  {
    "type": "delete",
    "url": "/api/materials/{recordId}",
    "title": "Delete materials",
    "name": "DeleteMaterial",
    "group": "Material",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Material not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/material/routes.js",
    "groupTitle": "Material"
  },
  {
    "type": "get",
    "url": "/api/materials?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveMaterial",
    "group": "Material",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/materials?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/material/routes.js",
    "groupTitle": "Material"
  },
  {
    "type": "put",
    "url": "/api/materials/{recordId}",
    "title": "Update materials",
    "name": "UpdateMaterial",
    "group": "Material",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Material name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Material type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Material code</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "category_id",
            "description": "<p>Material category (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Material subsidiary</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "measure",
            "description": "<p>Material measure</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "volume",
            "description": "<p>Material volume</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mass",
            "description": "<p>Material mass</p>"
          },
          {
            "group": "Parameter",
            "type": "Spring",
            "optional": false,
            "field": "unit",
            "description": "<p>Material  unit</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cost",
            "description": "<p>Material  unit cost price</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Material photo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "variants",
            "description": "<p>Material variants</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surface_area",
            "description": "<p>Material surface_area</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dimension",
            "description": "<p>Material dimension</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "attributes",
            "description": "<p>Material attributes</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity_stock",
            "description": "<p>Material  quantity_stock</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity_order",
            "description": "<p>Material quantity_order</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reorder_level",
            "description": "<p>Material  reorder_level</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reorder_quantity",
            "description": "<p>Material reorder_quantity</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Material",
            "description": "<p>Material's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Material not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/material/routes.js",
    "groupTitle": "Material"
  },
  {
    "type": "post",
    "url": "/api/messages",
    "title": "Create messages",
    "name": "CreateMessage",
    "group": "Message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sender",
            "description": "<p>Message sender-type &quot;STAFF|CUSTOMER|PARTNER|PARTNER&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recipient",
            "description": "<p>Message recipient type &quot;STAFF|CUSTOMER|PARTNER|PARTNER&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "staff_id",
            "description": "<p>Message recipient staff-user id</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "partner_id",
            "description": "<p>Message recipient driver-user id</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Message recipient customer-user id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Message subject</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Message body</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receive_status",
            "description": "<p>Message receive_status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sent_status",
            "description": "<p>Message sent_status</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Message",
            "description": "<p>Message's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Message not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/message/routes.js",
    "groupTitle": "Message"
  },
  {
    "type": "delete",
    "url": "/api/messages/{recordId}",
    "title": "Delete messages",
    "name": "DeleteMessage",
    "group": "Message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Message not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/message/routes.js",
    "groupTitle": "Message"
  },
  {
    "type": "get",
    "url": "/api/messages?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveMessage",
    "group": "Message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/messages?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/message/routes.js",
    "groupTitle": "Message"
  },
  {
    "type": "put",
    "url": "/api/messages/{recordId}",
    "title": "Update messages",
    "name": "UpdateMessage",
    "group": "Message",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receive_status",
            "description": "<p>Message receive_status</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sent_status",
            "description": "<p>Message sent_status</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Message",
            "description": "<p>Message's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Message not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/message/routes.js",
    "groupTitle": "Message"
  },
  {
    "type": "post",
    "url": "/api/notifications",
    "title": "Create a Notification record",
    "name": "CreateNotification",
    "group": "Notification",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>Notification user type &quot;STAFF|PARTNER|PARTNER|CUSTOMER&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "staff_id",
            "description": "<p>Notification staff ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "supplier_id",
            "description": "<p>Notification driver ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Notification customer ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "partner_id",
            "description": "<p>Notification partner ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Notification message</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notification_status",
            "description": "<p>Notification record status &quot;PENDING|CLOSED&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Notification",
            "description": "<p>Notification's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Notification not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/notification/routes.js",
    "groupTitle": "Notification"
  },
  {
    "type": "delete",
    "url": "/api/notifications/{recordId}",
    "title": "Delete a Notification record",
    "name": "DeleteNotification",
    "group": "Notification",
    "permission": [
      {
        "name": "master"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Notification not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/notification/routes.js",
    "groupTitle": "Notification"
  },
  {
    "type": "get",
    "url": "/api/notifications?id={recordId}",
    "title": "Retrieve Notification records",
    "name": "RetrieveNotification",
    "group": "Notification",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/notifications?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/notification/routes.js",
    "groupTitle": "Notification"
  },
  {
    "type": "put",
    "url": "/api/notifications/{recordId}",
    "title": "Update a Notification record",
    "name": "UpdateNotification",
    "group": "Notification",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>Notification user type &quot;STAFF|PARTNER|PARTNER|CUSTOMER&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "staff_id",
            "description": "<p>Notification staff ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "supplier_id",
            "description": "<p>Notification driver ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "customer_id",
            "description": "<p>Notification customer ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "partner_id",
            "description": "<p>Notification partner ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Notification message</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notification_status",
            "description": "<p>Notification record status &quot;PENDING|CLOSED&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Notification",
            "description": "<p>Notification's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Notification not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/notification/routes.js",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/api/offences",
    "title": "Create offences",
    "name": "CreateOffence",
    "group": "Offence",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offender_type",
            "description": "<p>Offence offender_type (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offender_id",
            "description": "<p>Offence offender_id (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offence",
            "description": "<p>Offence offence (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "offence_date",
            "description": "<p>Offence offence_date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Offence description (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offence_status",
            "description": "<p>Offence offence_status (&quot;PENDING&quot;, &quot;ARBITRATED&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verdict",
            "description": "<p>Offence verdict (&quot;INNOCENT&quot;, &quot;GUILTY&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "verdict_by",
            "description": "<p>Offence verdict_by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "verdict_date",
            "description": "<p>Offence verdict_date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verdict_remark",
            "description": "<p>Offence verdict_remark (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fine",
            "description": "<p>Offence fine (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "discipline",
            "description": "<p>Offence discipline (&quot;WARNING&quot;, &quot;SUSPENSION&quot;, &quot;DISMISSED&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "suspension",
            "description": "<p>Offence suspension (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "payment",
            "description": "<p>Offence paymentId (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Offence",
            "description": "<p>Offence's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Offence not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/offence/routes.js",
    "groupTitle": "Offence"
  },
  {
    "type": "delete",
    "url": "/api/offences/{recordId}",
    "title": "Delete offences",
    "name": "DeleteOffence",
    "group": "Offence",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>master access token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Offence not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/offence/routes.js",
    "groupTitle": "Offence"
  },
  {
    "type": "get",
    "url": "/api/offences?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveOffence",
    "group": "Offence",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/offences?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/offence/routes.js",
    "groupTitle": "Offence"
  },
  {
    "type": "post",
    "url": "/api/offence-types",
    "title": "Create offence-types",
    "name": "CreateOffenceType",
    "group": "OffenceType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>OffenceType code (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offender_type",
            "description": "<p>OffenceType offender_type &quot;PARTNER&quot;, &quot;STAFF&quot; (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>OffenceType name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fine",
            "description": "<p>OffenceType fine (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "discipline",
            "description": "<p>OffenceType discipline &quot;WARNING&quot;, &quot;SUSPENSION&quot;, &quot;DISMISSED&quot; (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "suspension_days",
            "description": "<p>OffenceType suspension_days (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>OffenceType description (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "OffenceType",
            "description": "<p>OffenceType's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>OffenceType not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/offence-type/routes.js",
    "groupTitle": "OffenceType"
  },
  {
    "type": "delete",
    "url": "/api/offence-types/{recordId}",
    "title": "Delete offence-types",
    "name": "DeleteOffenceType",
    "group": "OffenceType",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>OffenceType not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/offence-type/routes.js",
    "groupTitle": "OffenceType"
  },
  {
    "type": "get",
    "url": "/api/offence-types?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveOffenceType",
    "group": "OffenceType",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/offence-types?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/offence-type/routes.js",
    "groupTitle": "OffenceType"
  },
  {
    "type": "put",
    "url": "/api/offence-types/{recordId}",
    "title": "Update offence-types",
    "name": "UpdateOffenceType",
    "group": "OffenceType",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>OffenceType code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offender_type",
            "description": "<p>OffenceType offender_type &quot;PARTNER&quot;, &quot;STAFF&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>OffenceType name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fine",
            "description": "<p>OffenceType fine</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "discipline",
            "description": "<p>OffenceType discipline &quot;WARNING&quot;, &quot;SUSPENSION&quot;, &quot;DISMISSED&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "suspension_days",
            "description": "<p>OffenceType suspension_days</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>OffenceType description</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "OffenceType",
            "description": "<p>OffenceType's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>OffenceType not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/offence-type/routes.js",
    "groupTitle": "OffenceType"
  },
  {
    "type": "put",
    "url": "/api/offences/{recordId}",
    "title": "Update offences",
    "name": "UpdateOffence",
    "group": "Offence",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offender_type",
            "description": "<p>Offence offender_type</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offender_id",
            "description": "<p>Offence offender_id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offence",
            "description": "<p>Offence offence</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "offence_date",
            "description": "<p>Offence offence_date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Offence description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "offence_status",
            "description": "<p>Offence offence_status (&quot;PENDING&quot;, &quot;ARBITRATED&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verdict",
            "description": "<p>Offence verdict (&quot;INNOCENT&quot;, &quot;GUILTY&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "verdict_by",
            "description": "<p>Offence verdict_by</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "verdict_date",
            "description": "<p>Offence verdict_date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "verdict_remark",
            "description": "<p>Offence verdict_remark</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "fine",
            "description": "<p>Offence fine</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "discipline",
            "description": "<p>Offence discipline (&quot;WARNING&quot;, &quot;SUSPENSION&quot;, &quot;DISMISSED&quot;)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "suspension",
            "description": "<p>Offence suspension</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "payment",
            "description": "<p>Offence paymentId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Offence",
            "description": "<p>Offence's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Offence not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/offence/routes.js",
    "groupTitle": "Offence"
  },
  {
    "type": "post",
    "url": "/api/offices",
    "title": "Create offices",
    "name": "CreateOffice",
    "group": "Office",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Office name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Office code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Office email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Office phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "functions",
            "description": "<p>Office description tasks the office performs</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hierarchy",
            "description": "<p>Office hierarchy [1-7]</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "office_type",
            "description": "<p>Office office_type &quot;BOARD|DEPARTMENT|UNIT&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Office subsidiary &quot;PMT|PML|PET|PRESS&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "office_above",
            "description": "<p>Office above this.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "head",
            "description": "<p>Office Head Staff Id</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "assistant",
            "description": "<p>Office Assistant Head Staff Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Office",
            "description": "<p>Office's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "422",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Office not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>server error.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/office/routes.js",
    "groupTitle": "Office"
  },
  {
    "type": "delete",
    "url": "/api/offices/{recordId}",
    "title": "Delete offices",
    "name": "DeleteOffice",
    "group": "Office",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Office not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master office only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/office/routes.js",
    "groupTitle": "Office"
  },
  {
    "type": "get",
    "url": "/api/offices?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveOffice",
    "group": "Office",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/offices?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records of Staff Office in a hierarchy that give staff certain privileges.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/office/routes.js",
    "groupTitle": "Office"
  },
  {
    "type": "put",
    "url": "/api/offices/{recordId}",
    "title": "Update offices",
    "name": "UpdateOffice",
    "group": "Office",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Office name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Office code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Office email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Office phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "functions",
            "description": "<p>Office description tasks the office performs</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hierarchy",
            "description": "<p>Office hierarchy [1-7]</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "office_type",
            "description": "<p>Office office_type &quot;BOARD|DEPARTMENT|UNIT&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Office subsidiary &quot;PMT|PML|PET|PRESS&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "office_above",
            "description": "<p>Office above this.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "head",
            "description": "<p>Office Head Staff Id</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "assistant",
            "description": "<p>Office Assistant Head Staff Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Office",
            "description": "<p>Office's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "422",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Office not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>server error.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/office/routes.js",
    "groupTitle": "Office"
  },
  {
    "type": "post",
    "url": "/api/payrolls",
    "title": "Create a Payroll record",
    "name": "CreatePayroll",
    "group": "Payroll",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "period",
            "description": "<p>Payroll period YYYY-MM salary month</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Payroll code of transaction</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Payroll subsidiary of company eg PML</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "voucher",
            "description": "<p>Payroll voucher raised for salary</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "payroll_detail_ids",
            "description": "<p>Payroll PayrollDetail ObjectIds</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Payroll total sum of salary paid</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "pay_start",
            "description": "<p>Payroll pay_start commence payment date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>Payroll remark or any comment</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Payroll",
            "description": "<p>Payroll's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Payroll not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/payroll/routes.js",
    "groupTitle": "Payroll"
  },
  {
    "type": "delete",
    "url": "/api/payrolls/{recordId}",
    "title": "Delete a Payroll record",
    "name": "DeletePayroll",
    "group": "Payroll",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Payroll not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/payroll/routes.js",
    "groupTitle": "Payroll"
  },
  {
    "type": "post",
    "url": "/api/payroll-details",
    "title": "Create a PayrollDetail record",
    "name": "CreatePayrollDetail",
    "group": "PayrollDetail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "payroll_id",
            "description": "<p>PayrollDetail payroll ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>PayrollDetail code</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "staff_id",
            "description": "<p>PayrollDetail staff_id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "salary",
            "description": "<p>PayrollDetail salary</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_paid",
            "description": "<p>PayrollDetail is_paid</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "paid_date",
            "description": "<p>PayrollDetail paid_date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "paid_by",
            "description": "<p>PayrollDetail paid_by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>PayrollDetail remark</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payment_method",
            "description": "<p>PayrollDetail payment method GATEWAY (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payment_gateway",
            "description": "<p>PayrollDetail payment gateway UNIONBANK (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payment_status",
            "description": "<p>PayrollDetail transaction status (prohibited)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "PayrollDetail",
            "description": "<p>PayrollDetail's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>PayrollDetail not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/payroll-detail/routes.js",
    "groupTitle": "PayrollDetail"
  },
  {
    "type": "delete",
    "url": "/api/payroll-details/{recordId}",
    "title": "Delete a PayrollDetail record",
    "name": "DeletePayrollDetail",
    "group": "PayrollDetail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>PayrollDetail not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/payroll-detail/routes.js",
    "groupTitle": "PayrollDetail"
  },
  {
    "type": "get",
    "url": "/api/payroll-details?id={recordId}",
    "title": "Retrieve PayrollDetail records",
    "name": "RetrievePayrollDetail",
    "group": "PayrollDetail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/payroll-detail?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of payroll details for each Staff</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/payroll-detail/routes.js",
    "groupTitle": "PayrollDetail"
  },
  {
    "type": "put",
    "url": "/api/payroll-details/{recordId}",
    "title": "Update a PayrollDetail record",
    "name": "UpdatePayrollDetail",
    "group": "PayrollDetail",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "payroll_id",
            "description": "<p>PayrollDetail payroll ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>PayrollDetail code</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "staff_id",
            "description": "<p>PayrollDetail staff_id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "salary",
            "description": "<p>PayrollDetail salary</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_paid",
            "description": "<p>PayrollDetail is_paid</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "paid_date",
            "description": "<p>PayrollDetail paid_date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "paid_by",
            "description": "<p>PayrollDetail paid_by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>PayrollDetail remark</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payment_method",
            "description": "<p>PayrollDetail payment method GATEWAY (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payment_gateway",
            "description": "<p>PayrollDetail payment gateway UNIONBANK (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payment_status",
            "description": "<p>PayrollDetail transaction status (prohibited)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "PayrollDetail",
            "description": "<p>PayrollDetail's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>PayrollDetail not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/payroll-detail/routes.js",
    "groupTitle": "PayrollDetail"
  },
  {
    "type": "get",
    "url": "/api/payrolls?id={recordId}",
    "title": "Retrieve Payroll records",
    "name": "RetrievePayroll",
    "group": "Payroll",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/payroll?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/payroll/routes.js",
    "groupTitle": "Payroll"
  },
  {
    "type": "put",
    "url": "/api/payrolls/{recordId}",
    "title": "Update a Payroll record",
    "name": "UpdatePayroll",
    "group": "Payroll",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "period",
            "description": "<p>Payroll period YYYY-MM salary month</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Payroll code of transaction</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Payroll subsidiary of company eg PML</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "voucher",
            "description": "<p>Payroll voucher raised for salary</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "payroll_detail_ids",
            "description": "<p>Payroll PayrollDetail ObjectIds</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Payroll total sum of salary paid</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "pay_start",
            "description": "<p>Payroll pay_start commence payment date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>Payroll remark or any comment</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Payroll",
            "description": "<p>Payroll's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Payroll not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/payroll/routes.js",
    "groupTitle": "Payroll"
  },
  {
    "type": "get",
    "url": "/api/paystack-transactions/check-authorization",
    "title": "Check Authorization",
    "name": "CheckAuthorizationPaystackTransaction",
    "group": "PaystackTransaction",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authorization_code",
            "description": "<p>Authorization code for mastercard or VISA authorization belonging to email REQUIRED</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>Amount in kobo REQUIRED</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Customer's email address REQUIRED</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>A currency for the amount we want to check e.g. NGN</p>"
          }
        ]
      }
    },
    "description": "<p>All mastercard and visa authorizations can be checked with this endpoint to know if they have funds for the payment you seek.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/paystack/routes.js",
    "groupTitle": "PaystackTransaction"
  },
  {
    "type": "get",
    "url": "/api/paystack-transactions/list?perPage={perPage}",
    "title": "Retrieve one or all records",
    "name": "ListPaystackTransaction",
    "group": "PaystackTransaction",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i http://localhost/api/paystack-transactions/list?perPage=50&page=1",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "perPage",
            "description": "<p>Specify how many records you want to retrieve per page</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Specify exactly what page you want to retrieve</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "customer",
            "description": "<p>Specify an ID for the customer whose transactions you want to retrieve</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Filter transactions by status ('failed', 'success', 'abandoned')</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "from",
            "description": "<p>datetime A timestamp from which to start listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "to",
            "description": "<p>datetime A timestamp at which to stop listing transaction e.g. 2016-09-24T00:00:05.000Z, 2016-09-21</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>Filter transactions by amount. Specify the amount in kobo.</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/paystack/routes.js",
    "groupTitle": "PaystackTransaction"
  },
  {
    "type": "get",
    "url": "/api/paystack-transactions/get/{id}",
    "title": "Retrieve one record",
    "name": "RetrieveOnePaystackTransaction",
    "group": "PaystackTransaction",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i http://localhost/api/paystack-transactions/get/2",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the record to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/paystack/routes.js",
    "groupTitle": "PaystackTransaction"
  },
  {
    "type": "get",
    "url": "/api/paystack-transactions/timeline/{id}",
    "title": "View Transaction Timeline",
    "name": "TimelinePaystackTransaction",
    "group": "PaystackTransaction",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i http://localhost/api/paystack-transactions/timeline/2",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the record to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>View Transaction Timeline</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/paystack/routes.js",
    "groupTitle": "PaystackTransaction"
  },
  {
    "type": "get",
    "url": "/api/paystack-transactions/totals",
    "title": "Total amount received on your account",
    "name": "TotalPaystackTransaction",
    "group": "PaystackTransaction",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i http://localhost/api/paystack-transactions?from=12-12-2018&to=12-12-2019",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "from",
            "description": "<p>Paystack Transaction begining date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "to",
            "description": "<p>Paystack Transaction ending date</p>"
          }
        ]
      }
    },
    "description": "<p>Records of the Total amount received on your account</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/paystack/routes.js",
    "groupTitle": "PaystackTransaction"
  },
  {
    "type": "get",
    "url": "/api/paystack-transactions/verify/{reference}",
    "title": "Retrieve one record",
    "name": "VerifyPaystackTransaction",
    "group": "PaystackTransaction",
    "examples": [
      {
        "title": "Example usage for retieving a record:",
        "content": "curl -i http://localhost/api/paystack-transactions/verify/123abc123fkfk",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reference",
            "description": "<p>PaystackTransaction reference</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/paystack/routes.js",
    "groupTitle": "PaystackTransaction"
  },
  {
    "type": "post",
    "url": "/api/ratings",
    "title": "Create ratings",
    "name": "CreateRating",
    "group": "Rating",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "star",
            "description": "<p>Rating star from 0 to 5 (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Rating subject STAFF|PARTNER|TERMINAL|VEHICLE&quot; (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "staff_id",
            "description": "<p>Rated Staff subject ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partner_id",
            "description": "<p>Rated Partner subject ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "terminal_id",
            "description": "<p>Rated Terminal subject ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_id",
            "description": "<p>Rated Vehicle subject ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "review",
            "description": "<p>Rating review comment</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Rating",
            "description": "<p>Rating's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Rating not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/rating/routes.js",
    "groupTitle": "Rating"
  },
  {
    "type": "delete",
    "url": "/api/ratings/{recordId}",
    "title": "Delete ratings",
    "name": "DeleteRating",
    "group": "Rating",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "recordId",
            "description": "<p>record ObjectId.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Rating not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/rating/routes.js",
    "groupTitle": "Rating"
  },
  {
    "type": "get",
    "url": "/api/ratings?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveRatings",
    "group": "Rating",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/ratings?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of permissible api routes staff can access</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/rating/routes.js",
    "groupTitle": "Rating"
  },
  {
    "type": "put",
    "url": "/api/ratings/{recordId}",
    "title": "Update ratings",
    "name": "UpdateRating",
    "group": "Rating",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "star",
            "description": "<p>Rating star from 0 to 5</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Rating subject STAFF|PARTNER|TERMINAL|VEHICLE&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "staff_id",
            "description": "<p>Rated Staff subject ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partner_id",
            "description": "<p>Rated Partner subject ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "terminal_id",
            "description": "<p>Rated Terminal subject ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_id",
            "description": "<p>Rated Vehicle subject ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "review",
            "description": "<p>Rating review comment</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Rating",
            "description": "<p>Rating's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Rating not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/rating/routes.js",
    "groupTitle": "Rating"
  },
  {
    "type": "post",
    "url": "/api/reports",
    "title": "Create a Report record",
    "name": "CreateReport",
    "group": "Report",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Report name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Report description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Report subsidiary</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Report",
            "description": "<p>Report's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Report not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/report/routes.js",
    "groupTitle": "Report"
  },
  {
    "type": "get",
    "url": "/api/reports?id={recordId}",
    "title": "Retrieve Report records",
    "name": "RetrieveReport",
    "group": "Report",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/reports?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/report/routes.js",
    "groupTitle": "Report"
  },
  {
    "type": "put",
    "url": "/api/reports/{recordId}",
    "title": "Update a Report record",
    "name": "UpdateReport",
    "group": "Report",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Report name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Report description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Report subsidiary</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Report",
            "description": "<p>Report's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Report not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/report/routes.js",
    "groupTitle": "Report"
  },
  {
    "type": "get",
    "url": "/api/settings/public",
    "title": "Retrieve Public Settings record(s)",
    "name": "RetrievePublicSetting",
    "group": "Setting",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/settings?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records of Software adjustable and default parameters. Labels and contents for the website are kept here.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/setting/routes.js",
    "groupTitle": "Setting"
  },
  {
    "type": "get",
    "url": "/api/settings?id={recordId}",
    "title": "Retrieve Settings record(s)",
    "name": "RetrieveSetting",
    "group": "Setting",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/setting/routes.js",
    "groupTitle": "Setting"
  },
  {
    "type": "put",
    "url": "/api/settings/{recordId}",
    "title": "Update Settings record",
    "name": "UpdateSetting",
    "group": "Setting",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Setting varaible name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access",
            "description": "<p>Setting &quot;public&quot;, &quot;private&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Setting category of domains affected</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "control",
            "description": "<p>Setting control value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Setting description</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Setting",
            "description": "<p>Setting's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Setting not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/setting/routes.js",
    "groupTitle": "Setting"
  },
  {
    "type": "get",
    "url": "/api/setups/csv/{collection}",
    "title": "Download Table in CSV",
    "name": "DownloadCsv",
    "group": "Setup",
    "examples": [
      {
        "title": "Example usage for seeding vehicle records:",
        "content": "curl -i api/setups/csv/vehicle",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "module",
            "description": "<p>Setup folder directory</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collection",
            "description": "<p>Setup collection name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Setup",
            "description": "<p>Setup's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Setup not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>admin access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/setup/routes.js",
    "groupTitle": "Setup"
  },
  {
    "type": "get",
    "url": "/api/setups/preload/{subsidiary}/{folder}/{collection}",
    "title": "Preload Setups data",
    "name": "ModuleSetup",
    "group": "Setup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>admin access token.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Setup collection package</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "folder",
            "description": "<p>Setup folder directory</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collection",
            "description": "<p>Setup collection name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Setup",
            "description": "<p>Setup's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Setup not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>admin access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/setup/routes.js",
    "groupTitle": "Setup"
  },
  {
    "type": "post",
    "url": "/api/setups/system",
    "title": "Complete System Setup",
    "name": "SystemSetup",
    "group": "Setup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Master username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Master password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Setup",
            "description": "<p>Setup's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Setup not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>admin access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/setup/routes.js",
    "groupTitle": "Setup"
  },
  {
    "type": "post",
    "url": "/api/setups/csv/{collection}",
    "title": "Upload Table in CSV",
    "name": "UploadCsv",
    "group": "Setup",
    "examples": [
      {
        "title": "Example usage for seeding driver records:",
        "content": "curl -i api/setups/csv/driver",
        "type": "curl"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "module",
            "description": "<p>Setup folder directory</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collection",
            "description": "<p>Setup collection name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Setup",
            "description": "<p>Setup's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Setup not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>admin access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/setup/routes.js",
    "groupTitle": "Setup"
  },
  {
    "type": "post",
    "url": "/api/sms",
    "title": "Create an SMS record",
    "name": "CreateSms",
    "group": "Sms",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recipient",
            "description": "<p>Sms recipient</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sender",
            "description": "<p>Sms sender phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Sms message</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>Sms direction INBOUND|OUTBOUND</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "delivery_status",
            "description": "<p>Sms delivery status</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Sms",
            "description": "<p>Sms's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Sms not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/sms/routes.js",
    "groupTitle": "Sms"
  },
  {
    "type": "post",
    "url": "/api/sms/otp",
    "title": "Create send SMS otp",
    "name": "CreateSmsOtp",
    "group": "Sms",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Registered user (office) phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>Registered user_type staff|supplier|partner|customer</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Sms",
            "description": "<p>Sms's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Sms not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/sms/routes.js",
    "groupTitle": "Sms"
  },
  {
    "type": "post",
    "url": "/api/sms/webhook",
    "title": "Create incoming SMS webhook",
    "name": "CreateSmsWebhook",
    "group": "Sms",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sender",
            "description": "<p>Sms sender phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recipient",
            "description": "<p>Sms recipient phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Sms message</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "direction",
            "description": "<p>Sms direction INBOUND|OUTBOUND</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "delivery_status",
            "description": "<p>Sms delivery status: queued|failed|sent|delivered|undelivered</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Sms",
            "description": "<p>Sms's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Sms not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/sms/routes.js",
    "groupTitle": "Sms"
  },
  {
    "type": "get",
    "url": "/api/sms?id={recordId}",
    "title": "Retrieve SMS records",
    "name": "RetrieveSms",
    "group": "Sms",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/sms?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/sms/routes.js",
    "groupTitle": "Sms"
  },
  {
    "type": "post",
    "url": "/api/staff",
    "title": "Create a Staff record",
    "name": "CreateStaff",
    "group": "Staff",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>Staff serial (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Staff category (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Staff title (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Staff surname (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "other_name",
            "description": "<p>Staff other_name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Staff gender (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birth_date",
            "description": "<p>Staff birth_date (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marital_status",
            "description": "<p>Staff marital_status (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "children",
            "description": "<p>Staff Number of children (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_office",
            "description": "<p>Staff phone_office (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_personal",
            "description": "<p>Staff phone_personal (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Staff address (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "village",
            "description": "<p>Staff village (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state_id",
            "description": "<p>Staff state_id (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "county_id",
            "description": "<p>Staff county_id (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_iso2",
            "description": "<p>Staff country_iso2 (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Staff email (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Staff password (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>Staff otp (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "otp_count",
            "description": "<p>Staff otp_count (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kin",
            "description": "<p>Staff kin (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kin_phone",
            "description": "<p>Staff kin_phone (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kin_address",
            "description": "<p>Staff kin_address (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guarantor1",
            "description": "<p>Staff guarantor1 (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guarantor1_phone",
            "description": "<p>Staff guarantor1_phone (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guarantor1_address",
            "description": "<p>Staff guarantor1_address (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guarantor2",
            "description": "<p>Staff guarantor2 (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guarantor2_phone",
            "description": "<p>Staff guarantor2_phone (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guarantor2_address",
            "description": "<p>Staff guarantor2_address (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profession",
            "description": "<p>Staff profession (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "qualification",
            "description": "<p>Staff qualification (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "institution",
            "description": "<p>Staff institution (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "employment_status",
            "description": "<p>Staff employment_status (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tax",
            "description": "<p>Staff tax (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "basic_salary",
            "description": "<p>Staff basic_salary (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bonus",
            "description": "<p>Staff bonus (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "entertainment_allowance",
            "description": "<p>Staff entertainment_allowance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "house_allowance",
            "description": "<p>Staff house_allowance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lunch_allowance",
            "description": "<p>Staff lunch_allowance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "medical_allowance",
            "description": "<p>Staff medical_allowance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "transport_allowance",
            "description": "<p>Staff transport_allowance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "utility_allowance",
            "description": "<p>Staff utility_allowance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "welfare_allowance",
            "description": "<p>Staff welfare_allowance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pension",
            "description": "<p>Staff pension (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "assurance",
            "description": "<p>Staff assurance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_id",
            "description": "<p>Staff bank_id (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_account_number",
            "description": "<p>Staff bank_account_number (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_account_name",
            "description": "<p>Staff bank_account_name (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rank",
            "description": "<p>Staff rank (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "office_id",
            "description": "<p>Staff office_id (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "superior_id",
            "description": "<p>Staff superior_id (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Staff subsidiary (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "terminal_id",
            "description": "<p>Staff terminal_id (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "asset_request_assigment_ids",
            "description": "<p>array of Objects of Asset Assigmnet History managed my Asset Manager (prohibited)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_id",
            "description": "<p>Staff vehicle_id (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notice",
            "description": "<p>Staff notice (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating_ids",
            "description": "<p>Staff rating_ids (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>Staff remark (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Staff photo (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_salary_payable",
            "description": "<p>Staff is_salary_payable (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_document_complete",
            "description": "<p>Staff is_document_complete (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "access_level",
            "description": "<p>Staff access_level (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "approved_by",
            "description": "<p>Staff approved_by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "approved_date",
            "description": "<p>Staff approved_date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "disengaged_by",
            "description": "<p>Staff disengaged_by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "disengaged_date",
            "description": "<p>Staff disengaged_date (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Staff",
            "description": "<p>Staff's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Staff not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/staff/routes.js",
    "groupTitle": "Staff"
  },
  {
    "type": "delete",
    "url": "/api/staff/{recordId}",
    "title": "Delete a Staff record",
    "name": "DeleteStaff",
    "group": "Staff",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Staff not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/staff/routes.js",
    "groupTitle": "Staff"
  },
  {
    "type": "post",
    "url": "/api/staff/login",
    "title": "Login Staff",
    "name": "LoginStaff",
    "group": "Staff",
    "permission": [
      {
        "name": "master"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Staff email address (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Staff password (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "office_phone",
            "description": "<p>Staff official phone number (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>Staff One-Time-Password sent to phone (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Login type &quot;EMAIL&quot;, &quot;PHONE&quot;, &quot;OTP&quot; (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "200",
            "description": "<p>Login Successful.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Staff not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/staff/routes.js",
    "groupTitle": "Staff"
  },
  {
    "type": "get",
    "url": "/api/staff?id={recordId}",
    "title": "Retrieve Staff records",
    "name": "RetrieveStaff",
    "group": "Staff",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/staff?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records of staff distributed across terminals.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/staff/routes.js",
    "groupTitle": "Staff"
  },
  {
    "type": "put",
    "url": "/api/staff/{recordId}",
    "title": "Update a Staff record",
    "name": "UpdateStaff",
    "group": "Staff",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serial",
            "description": "<p>Staff serial (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Staff category (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Staff title (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Staff surname (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "other_name",
            "description": "<p>Staff other_name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Staff gender (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birth_date",
            "description": "<p>Staff birth_date (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "marital_status",
            "description": "<p>Staff marital_status (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "children",
            "description": "<p>Staff Number of children (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Staff office phone (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_personal",
            "description": "<p>Staff phone_personal (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Staff address (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "village",
            "description": "<p>Staff village (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state_id",
            "description": "<p>Staff state_id (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "county_id",
            "description": "<p>Staff county_id (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_iso2",
            "description": "<p>Staff country_iso2 (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Staff email (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Staff password (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>Staff otp (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "otp_count",
            "description": "<p>Staff otp_count (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kin",
            "description": "<p>Staff kin (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kin_phone",
            "description": "<p>Staff kin_phone (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "kin_address",
            "description": "<p>Staff kin_address (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guarantor1",
            "description": "<p>Staff guarantor1 (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guarantor1_phone",
            "description": "<p>Staff guarantor1_phone (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guarantor1_address",
            "description": "<p>Staff guarantor1_address (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guarantor2",
            "description": "<p>Staff guarantor2 (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guarantor2_phone",
            "description": "<p>Staff guarantor2_phone (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "guarantor2_address",
            "description": "<p>Staff guarantor2_address (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profession",
            "description": "<p>Staff profession (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "qualification",
            "description": "<p>Staff qualification (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "institution",
            "description": "<p>Staff institution (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "employment_status",
            "description": "<p>Staff employment_status (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tax",
            "description": "<p>Staff tax (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "basic_salary",
            "description": "<p>Staff basic_salary (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "bonus",
            "description": "<p>Staff bonus (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "entertainment_allowance",
            "description": "<p>Staff entertainment_allowance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "house_allowance",
            "description": "<p>Staff house_allowance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lunch_allowance",
            "description": "<p>Staff lunch_allowance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "medical_allowance",
            "description": "<p>Staff medical_allowance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "transport_allowance",
            "description": "<p>Staff transport_allowance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "utility_allowance",
            "description": "<p>Staff utility_allowance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "welfare_allowance",
            "description": "<p>Staff welfare_allowance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pension",
            "description": "<p>Staff pension (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "assurance",
            "description": "<p>Staff assurance (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_id",
            "description": "<p>Staff bank_id (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_account_number",
            "description": "<p>Staff bank_account_number (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bank_account_name",
            "description": "<p>Staff bank_account_name (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rank",
            "description": "<p>Staff rank (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "office_id",
            "description": "<p>Staff office_id (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "role",
            "description": "<p>Staff role is an array of office duties (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "superior_id",
            "description": "<p>Staff superior_id (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Staff subsidiary (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "terminal_id",
            "description": "<p>Staff terminal_id (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_id",
            "description": "<p>Staff vehicle_id (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "asset_request_assigment_ids",
            "description": "<p>array of Objects of Asset Assigmnet History managed my Asset Manager (prohibited)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notice",
            "description": "<p>Staff notice (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "rating_ids",
            "description": "<p>Staff rating_ids (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>Staff remark (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Staff photo (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_salary_payable",
            "description": "<p>Staff is_salary_payable (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_document_complete",
            "description": "<p>Staff is_document_complete (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "access_level",
            "description": "<p>Staff access_level (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "approved_by",
            "description": "<p>Staff approved_by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "approved_date",
            "description": "<p>Staff approved_date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "disengaged_by",
            "description": "<p>Staff disengaged_by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "disengaged_date",
            "description": "<p>Staff disengaged_date (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Staff",
            "description": "<p>Staff's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Staff not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/staff/routes.js",
    "groupTitle": "Staff"
  },
  {
    "type": "post",
    "url": "/api/stages",
    "title": "Create stages",
    "name": "CreateStage",
    "group": "Stage",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "step",
            "description": "<p>Stage serial number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Stage name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Stage type (required) &quot;PRODUCTION&quot;, &quot;VOUCHER&quot;, &quot;MAINTENANCE&quot;, &quot;ORDER&quot;, &quot;REGISTRATION&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Stage  description (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Stage  subsidiary (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "officer",
            "description": "<p>Stage  officer Staff ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Stage",
            "description": "<p>Stage's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Stage not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/stage/routes.js",
    "groupTitle": "Stage"
  },
  {
    "type": "delete",
    "url": "/api/stages/{recordId}",
    "title": "Delete stages",
    "name": "DeleteStage",
    "group": "Stage",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Stage not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/stage/routes.js",
    "groupTitle": "Stage"
  },
  {
    "type": "get",
    "url": "/api/stages?id={recordId}",
    "title": "Retrieve Stage records",
    "name": "RetrieveStage",
    "group": "Stage",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/stages",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/stage/routes.js",
    "groupTitle": "Stage"
  },
  {
    "type": "put",
    "url": "/api/stages/{recordId}",
    "title": "Update stages",
    "name": "UpdateStage",
    "group": "Stage",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "step",
            "description": "<p>Stage serial number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Stage name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Stage type (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Stage  description (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Stage  subsidiary (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "officer",
            "description": "<p>Stage  officer Staff ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Stage",
            "description": "<p>Stage's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Stage not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/stage/routes.js",
    "groupTitle": "Stage"
  },
  {
    "type": "post",
    "url": "/api/states",
    "title": "Create a State record",
    "name": "CreateState",
    "group": "State",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>State name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_iso2",
            "description": "<p>State country</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "created_by",
            "description": "<p>State record created by</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "State",
            "description": "<p>State's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>State not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/state/routes.js",
    "groupTitle": "State"
  },
  {
    "type": "delete",
    "url": "/api/states/{recordId}",
    "title": "Delete a State record",
    "name": "DeleteState",
    "group": "State",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>State not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/state/routes.js",
    "groupTitle": "State"
  },
  {
    "type": "get",
    "url": "/api/states?id={recordId}",
    "title": "Retrieve State records",
    "name": "RetrieveState",
    "group": "State",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/states?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records of Geographical entities housing terminals</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/state/routes.js",
    "groupTitle": "State"
  },
  {
    "type": "put",
    "url": "/api/states/{recordId}",
    "title": "Update a State record",
    "name": "UpdateState",
    "group": "State",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>State name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country_iso2",
            "description": "<p>State country</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "updated_by",
            "description": "<p>State record modified by</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "State",
            "description": "<p>State's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>State not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/state/routes.js",
    "groupTitle": "State"
  },
  {
    "type": "post",
    "url": "/api/synchronizations",
    "title": "Create a Synchronization record",
    "name": "CreateSynchronization",
    "group": "Synchronization",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Synchronization name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Synchronization type &quot;PUSH|PULL&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "table",
            "description": "<p>Synchronization Table Collection</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "terminal",
            "description": "<p>Synchronization terminal doing the operation</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Synchronization i.e operation is successful</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>Synchronization remark about operation status</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Synchronization",
            "description": "<p>Synchronization's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Synchronization not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/synchronization/routes.js",
    "groupTitle": "Synchronization"
  },
  {
    "type": "delete",
    "url": "/api/synchronizations/{recordId}",
    "title": "Delete a Synchronization record",
    "name": "DeleteSynchronization",
    "group": "Synchronization",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Synchronization not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/synchronization/routes.js",
    "groupTitle": "Synchronization"
  },
  {
    "type": "get",
    "url": "/api/synchronizations?id={recordId}",
    "title": "Retrieve Synchronization records",
    "name": "RetrieveSynchronization_filter__skip__limit__sort__projection",
    "group": "Synchronization",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/synchronizations?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records of all Synchronizations and branches worldwide. Routes are established as links between synchronizations. Certain synchronizations are Hubs. Read more from https://www.npmjs.com/package/api-query-params</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/synchronization/routes.js",
    "groupTitle": "Synchronization"
  },
  {
    "type": "put",
    "url": "/api/synchronizations/{recordId}",
    "title": "Update a Synchronization record",
    "name": "UpdateSynchronization",
    "group": "Synchronization",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Synchronization name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Synchronization type &quot;PUSH|PULL&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "table",
            "description": "<p>Synchronization Table Collection</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "terminal",
            "description": "<p>Synchronization terminal doing the operation</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Synchronization i.e operation is successful</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>Synchronization remark about operation status</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Synchronization",
            "description": "<p>Synchronization's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Synchronization not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/synchronization/routes.js",
    "groupTitle": "Synchronization"
  },
  {
    "type": "post",
    "url": "/api/tables",
    "title": "Create a Table record",
    "name": "CreateTable",
    "group": "Table",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Table label or table title,</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Table name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Table url segment /api/{url} (required),</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "pullable",
            "description": "<p>Table pullable i.e. collection can be downloaded</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "pushable",
            "description": "<p>Table pushable i.e. collection can be uploaded</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "changes",
            "description": "<p>Table changes if there are changes to be synchronized</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Table description about operation status or feedback</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Table",
            "description": "<p>Table's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Table not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/table/routes.js",
    "groupTitle": "Table"
  },
  {
    "type": "delete",
    "url": "/api/tables/{recordId}",
    "title": "Delete a Table record",
    "name": "DeleteTable",
    "group": "Table",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Table not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/table/routes.js",
    "groupTitle": "Table"
  },
  {
    "type": "get",
    "url": "/api/tables?id={recordId}",
    "title": "Retrieve Table records",
    "name": "RetrieveTable_filter__skip__limit__sort__projection",
    "group": "Table",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/tables?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records of all Tables and branches worldwide. Routes are established as links between tables. Certain tables are Hubs. Read more from https://www.npmjs.com/package/api-query-params</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/table/routes.js",
    "groupTitle": "Table"
  },
  {
    "type": "put",
    "url": "/api/tables/{recordId}",
    "title": "Update a Table record",
    "name": "UpdateTable",
    "group": "Table",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Table label or table title,</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Table name (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Table url segment /api/{url} (required),</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "pullable",
            "description": "<p>Table pullable i.e. collection can be downloaded</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "pushable",
            "description": "<p>Table pushable i.e. collection can be uploaded</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "changes",
            "description": "<p>Table changes if there are changes to be synchronized</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Table description about operation status or feedback</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Table",
            "description": "<p>Table's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Table not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/table/routes.js",
    "groupTitle": "Table"
  },
  {
    "type": "post",
    "url": "/api/tasks",
    "title": "Create a Task record",
    "name": "CreateTask",
    "group": "Task",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Task short name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>Task tags are keywords</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Task code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Task status &quot;PENDING|ASSIGNED|ONGOING|STARTED|ENDING|CLOSED&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Task title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Task description explanation and expectations</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "manhour",
            "description": "<p>Task manhour estimated manhour required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "completion",
            "description": "<p>Task completion current Percent executed</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "report",
            "description": "<p>Task report by Staff assigned_to</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>Task start_date assigned_to mark as started</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>Task end_date Staff assigned_to mark as ended</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "assigned_date",
            "description": "<p>Task assigned_date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "assigned_to",
            "description": "<p>Task assigned_to Staff performing the task</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "assigned_by",
            "description": "<p>Task assigned_by Staff created the task</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>Task score by Staff assigned_by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>Task remark by Staff assigned_by</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "voucher",
            "description": "<p>Task voucher for needed funds by Staff assigned_to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "asset_assignment",
            "description": "<p>Task request by Staff assigned_to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Task subsidiary conducting the task</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "office_id",
            "description": "<p>Task office id conducting the task</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Task",
            "description": "<p>Task's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Task not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/task/routes.js",
    "groupTitle": "Task"
  },
  {
    "type": "delete",
    "url": "/api/tasks/{recordId}",
    "title": "Delete a Task record",
    "name": "DeleteTask",
    "group": "Task",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Task not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/task/routes.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/api/tasks?id={recordId}",
    "title": "Retrieve Task records",
    "name": "RetrieveTask",
    "group": "Task",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/tasks?",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/task/routes.js",
    "groupTitle": "Task"
  },
  {
    "type": "put",
    "url": "/api/tasks/{recordId}",
    "title": "Update a Task record",
    "name": "UpdateTask",
    "group": "Task",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Task short name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>Task tags are keywords</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Task code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Task status &quot;PENDING|ASSIGNED|ONGOING|STARTED|ENDING|CLOSED&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Task title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Task description explanation and expectations</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "manhour",
            "description": "<p>Task manhour estimated manhour required</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "completion",
            "description": "<p>Task completion current Percent executed</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "report",
            "description": "<p>Task report by Staff assigned_to</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start_date",
            "description": "<p>Task start_date assigned_to mark as started</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end_date",
            "description": "<p>Task end_date Staff assigned_to mark as ended</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "assigned_date",
            "description": "<p>Task assigned_date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "assigned_to",
            "description": "<p>Task assigned_to Staff performing the task</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "assigned_by",
            "description": "<p>Task assigned_by Staff created the task</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>Task score by Staff assigned_by</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>Task remark by Staff assigned_by</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "voucher",
            "description": "<p>Task voucher for needed funds by Staff assigned_to</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "asset_assignment",
            "description": "<p>Task request by Staff assigned_to</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Task subsidiary conducting the task</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "office_id",
            "description": "<p>Task office id conducting the task</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Task",
            "description": "<p>Task's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Task not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/task/routes.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/api/unionbank-transactions",
    "title": "Create unionbank-transactions",
    "name": "CreateUnionbankTransaction",
    "group": "UnionbankTransaction",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "branchid",
            "description": "<p>UnionBank Branch code the transaction originated from</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channel",
            "description": "<p>UnionBank channel Transaction Channel</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "trandate",
            "description": "<p>UnionBank trandate Date transaction was initiated</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trancode",
            "description": "<p>UnionBank trancode Transaction code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>UnionBank amount Transaction amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>UnionBank currency Currency In which transaction occurred</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destaccountno",
            "description": "<p>UnionBank destaccountno Integrating partner’s account number transaction occurred on</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "balance",
            "description": "<p>UnionBank balance Available balance on the account transaction occurred on</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "originbank",
            "description": "<p>UnionBank originbank Integrating partner’s bank</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "narration",
            "description": "<p>UnionBank narration Description of the transaction</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trantype",
            "description": "<p>UnionBank trantype Transaction type: Debit or Credit</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "valuedate",
            "description": "<p>UnionBank valuedate Date the value of the transaction hit the account</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "business_id",
            "description": "<p>UnionBank business_id Profile ID for integrating partner</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction_ref",
            "description": "<p>UnionBank transaction_ref Unique transaction reference number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "branchname",
            "description": "<p>UnionBank branchname Branch name the transaction originated from</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "UnionbankTransaction",
            "description": "<p>UnionbankTransaction's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>UnionbankTransaction not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/unionbank/routes.js",
    "groupTitle": "UnionbankTransaction"
  },
  {
    "type": "get",
    "url": "/api/unionbank-transactions?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveUnionbankTransaction",
    "group": "UnionbankTransaction",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i http://localhost/api/unionbank-transactions?id=2&fields=id,created_at,updated_at",
        "type": "curl"
      },
      {
        "title": "Example usage for retieving multiple records:",
        "content": "curl -i http://localhost/api/unionbank-transactions?offset=10&limit=50",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the record to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Number of records to skip (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fields",
            "description": "<p>Comma-separated list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/unionbank/routes.js",
    "groupTitle": "UnionbankTransaction"
  },
  {
    "type": "post",
    "url": "/api/vehicles",
    "title": "Create vehicles",
    "name": "CreateVehicle",
    "group": "Vehicle",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Vehicle name e.g 1450 (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Vehicle description (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "engine_number",
            "description": "<p>Vehicle engine number (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chasis_number",
            "description": "<p>Vehicle chasis number  (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "plate_number",
            "description": "<p>Vehicle plate number  (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registration_number",
            "description": "<p>Vehicle registration number  (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_make",
            "description": "<p>Vehicle vehicle_make or manufacturer (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "seating_capacity",
            "description": "<p>Vehicle seating capacity  (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_class",
            "description": "<p>Vehicle vehicle class. (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_category",
            "description": "<p>Vehicle vehicle_category (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_custodian",
            "description": "<p>Vehicle employee type (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "current_staff_id",
            "description": "<p>Vehicle staffId currenly assigned to (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "current_partner_id",
            "description": "<p>Vehicle driverId currenly assigned to (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Vehicle subsidiary (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Vehicle color  (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Vehicle photo url (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_location",
            "description": "<p>Vehicle current state or vehicle_location (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_assignment",
            "description": "<p>Vehicle vehicle_assignment status (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asset_worthiness",
            "description": "<p>Vehicle asset worthiness (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "purchase_date",
            "description": "<p>Vehicle purchase date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "launch_date",
            "description": "<p>Vehicle launch date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "expiry_date",
            "description": "<p>Vehicle expire date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lifespan",
            "description": "<p>Vehicle lifespan in years (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "purchase_value",
            "description": "<p>Vehicle purchase value (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "opening_value",
            "description": "<p>Vehicle opening value (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "closing_value",
            "description": "<p>Vehicle closing value (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "salvage_value",
            "description": "<p>Vehicle salvage value (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "current_value",
            "description": "<p>Vehicle current value (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total_depreciable_cost",
            "description": "<p>Vehicle total depreciable cost  (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "depreciation_rate",
            "description": "<p>Vehicle depreciation rate  (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "depreciation_expense",
            "description": "<p>Vehicle depreciation expense  (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "accumulated_depreciation",
            "description": "<p>Vehicle accumulated depreciation  (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_status",
            "description": "<p>Vehicle record approval status (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "approved_by",
            "description": "<p>Vehicle approved by staff who veted the record entry (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "approved_date",
            "description": "<p>Vehicle approved date after record entry (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>Vehicle approval remark or any comment about record (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_dto",
            "description": "<p>Vehicle is it for Partner-to-Owner scheme (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dto_initial_deposit",
            "description": "<p>Vehicle DTO_INITIAL_DEPOSIT (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dto_maintenance_balance",
            "description": "<p>Vehicle DTO current balance (prohibited)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dto_repayment_total",
            "description": "<p>Vehicle DTO cummulative repayment (prohibited)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_healthy",
            "description": "<p>Vehicle is it healthy  or brokendown (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_active",
            "description": "<p>Vehicle is it active or retired  (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Vehicle",
            "description": "<p>Vehicle's data.</p>"
          }
        ]
      }
    },
    "description": "<p>const VEHICLE = { VEHICLE_MAKE: { TOYOTA: &quot;TOYOTA&quot;, UGAMA: &quot;UGAMA&quot;, MEIYER: &quot;MEIYER&quot;, SIENNA: &quot;SIENNA&quot;, UNKNOWN: &quot;UNKNOWN&quot;, }, VEHICLE_CATEGORY: { PMT: &quot;PMT&quot;, PATROL: &quot;PATROL&quot;, PML: &quot;PML&quot;, // DELIVERY VAN PET: &quot;PET&quot;, // DELIVERY VAN PRESS: &quot;PRESS&quot;, // DELIVERY VAN SHOP: &quot;SHOP&quot;, // FOR SALE OFFICIAL_PRIVATE: &quot;OFFICIAL_PRIVATE&quot;, // PRIVATE USE OFFICIAL_GENERAL: &quot;OFFICIAL_GENERAL&quot;, // GENERAL USE UNKNOWN: &quot;UNKNOWN&quot;, }, VEHICLE_CLASS: { FIRST: &quot;FIRST&quot;, // New Vehicle with Aircondition SECOND: &quot;SECOND&quot;, // New Vehicle without Aircondition THIRD: &quot;THIRD&quot;, // Old Vehicle UNKNOWN: &quot;UNKNOWN&quot;, }, VEHICLE_TYPE: { BUS: &quot;BUS&quot;, CAR: &quot;CAR&quot;, TAXI: &quot;TAXI&quot;, KEKE: &quot;KEKE&quot;, BIKE: &quot;BIKE&quot;, JEEP: &quot;JEEP&quot;, PREMIUM: &quot;PREMIUM&quot;, UNKNOWN: &quot;UNKNOWN&quot;, }, VEHICLE_LOCATION: { OPERATION: &quot;OPERATION&quot;, IMPOUNDED: &quot;IMPOUNDED&quot;, WORKSHOP: &quot;WORKSHOP&quot;, WAREHOUSE: &quot;WAREHOUSE&quot;, SHOP: &quot;SHOP&quot;, SCRAP: &quot;SCRAP&quot;, UNKNOWN: &quot;UNKNOWN&quot;, }, VEHICLE_ASSIGNMENT: { ASSIGNED: &quot;ASSIGNED&quot;, REASSIGNED: &quot;REASSIGNED&quot;, UNASSIGNED: &quot;UNASSIGNED&quot;, UNKNOWN: &quot;UNKNOWN&quot;, }, VEHICLE_CUSTODIAN: { PARTNER: &quot;PARTNER&quot;, STAFF: &quot;STAFF&quot;, OWNER: &quot;OWNER&quot;, UNKNOWN: &quot;UNKNOWN&quot;, }, };</p>",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vehicle not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/vehicle/routes.js",
    "groupTitle": "Vehicle"
  },
  {
    "type": "delete",
    "url": "/api/vehicles/{recordId}",
    "title": "Delete vehicles",
    "name": "DeleteVehicle",
    "group": "Vehicle",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vehicle not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/vehicle/routes.js",
    "groupTitle": "Vehicle"
  },
  {
    "type": "get",
    "url": "/api/vehicles?id={recordId}",
    "title": "Retrieve one or all records",
    "name": "RetrieveVehicle",
    "group": "Vehicle",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i http://localhost/api/vehicles?id=2&fields=id,created_at,updated_at",
        "type": "curl"
      },
      {
        "title": "Example usage for retieving multiple records:",
        "content": "curl -i http://localhost/api/vehicles?offset=10&limit=50",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the record to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>Number of records to skip (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fields",
            "description": "<p>Comma-separated list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records of all vehicles whether PMT Buses, Logistic Vans, Toll Trucks or private cars. PMT Buses are also marked for Drivers' to Owners' Scheme. Assets Management also has particular fields reserved for their updates</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/vehicle/routes.js",
    "groupTitle": "Vehicle"
  },
  {
    "type": "put",
    "url": "/api/vehicles/{recordId}",
    "title": "Update vehicles",
    "name": "UpdateVehicle",
    "group": "Vehicle",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Vehicle name e.g 1450 (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Vehicle description (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "engine_number",
            "description": "<p>Vehicle engine number (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chasis_number",
            "description": "<p>Vehicle chasis number  (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "plate_number",
            "description": "<p>Vehicle plate number  (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registration_number",
            "description": "<p>Vehicle registration number  (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_make",
            "description": "<p>Vehicle vehicle_make or manufacturer (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "seating_capacity",
            "description": "<p>Vehicle seating capacity  (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_class",
            "description": "<p>Vehicle vehicle class. (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_category",
            "description": "<p>Vehicle vehicle_category (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_custodian",
            "description": "<p>Vehicle employee type (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "current_staff_id",
            "description": "<p>Vehicle staffId having asset in custody (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "current_partner_id",
            "description": "<p>Vehicle driverId having asset in custody (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Vehicle subsidiary (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Vehicle color  (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Vehicle photo url (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_location",
            "description": "<p>Vehicle current state or vehicle_location (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vehicle_assignment",
            "description": "<p>Vehicle vehicle_assignment status (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "asset_worthiness",
            "description": "<p>Vehicle asset worthiness (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "purchase_date",
            "description": "<p>Vehicle purchase date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "launch_date",
            "description": "<p>Vehicle launch date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "expiry_date",
            "description": "<p>Vehicle expire date (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lifespan",
            "description": "<p>Vehicle lifespan in years (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "purchase_value",
            "description": "<p>Vehicle purchase value (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "opening_value",
            "description": "<p>Vehicle opening value (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "closing_value",
            "description": "<p>Vehicle closing value (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "salvage_value",
            "description": "<p>Vehicle salvage value (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "current_value",
            "description": "<p>Vehicle current value (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "total_depreciable_cost",
            "description": "<p>Vehicle total depreciable cost  (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "depreciation_rate",
            "description": "<p>Vehicle depreciation rate  (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "depreciation_expense",
            "description": "<p>Vehicle depreciation expense  (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "accumulated_depreciation",
            "description": "<p>Vehicle accumulated depreciation  (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_status",
            "description": "<p>Vehicle record approval status (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "approved_by",
            "description": "<p>Vehicle approved by staff who veted the record entry (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "approved_date",
            "description": "<p>Vehicle approved date after record entry (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>Vehicle approval remark or any comment about record (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ownership",
            "description": "<p>Vehicle ownership current owner &quot;PMT|PARTNER&quot; (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_dto",
            "description": "<p>Vehicle is it for Partner-to-Owner scheme (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dto_initial_deposit",
            "description": "<p>Vehicle DTO_INITIAL_DEPOSIT (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dto_maintenance_balance",
            "description": "<p>Vehicle DTO current balance (prohibited)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dto_repayment_total",
            "description": "<p>Vehicle DTO cummulative repayment (prohibited)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_healthy",
            "description": "<p>Vehicle is it healthy  or brokendown (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_active",
            "description": "<p>Vehicle is it active or retired  (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Vehicle",
            "description": "<p>Vehicle's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Vehicle not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/vehicle/routes.js",
    "groupTitle": "Vehicle"
  },
  {
    "type": "put",
    "url": "/api/vouchers/audit/{recordId}",
    "title": "Audit vouchers",
    "name": "AuditVoucher",
    "group": "Voucher",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "Status",
            "optional": false,
            "field": "audited_status",
            "description": "<p>Voucher status has been updated</p>"
          },
          {
            "group": "Parameter",
            "type": "Status",
            "optional": false,
            "field": "audited_remark",
            "description": "<p>Voucher comment by Auditor</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "audited_by",
            "description": "<p>Voucher auditor (prohibited)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "audited_date",
            "description": "<p>Voucher audit date (prohibited)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Voucher",
            "description": "<p>Voucher's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "422",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Voucher not found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/voucher/routes.js",
    "groupTitle": "Voucher"
  },
  {
    "type": "post",
    "url": "/api/vouchers",
    "title": "Create vouchers",
    "name": "CreateVoucher",
    "group": "Voucher",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction_code",
            "description": "<p>Voucher transaction_code</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "related_voucher_id",
            "description": "<p>Voucher related voucher ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "stage_id",
            "description": "<p>Voucher voucher_stage ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "account_heading_id",
            "description": "<p>Voucher AccountHeading ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "terminal_id",
            "description": "<p>Voucher Terminal ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Voucher Department</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>Voucher Amount to be paid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Voucher Transaction description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "voucher_type",
            "description": "<p>Voucher &quot;PAYMENT|ADVANCE|RETIREMENT&quot; (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "processing",
            "description": "<p>Voucher &quot;PENDING|COMPLETE|CANCEL&quot; (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "beneficiary",
            "description": "<p>Voucher &quot;STAFF|PARTNER&quot; (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "staff_id",
            "description": "<p>Voucher beneficiary staff ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "partner_id",
            "description": "<p>Voucher beneficiary driver ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "acknowledge_by",
            "description": "<p>Voucher beneficiary HoD staff ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "acknowledge_date",
            "description": "<p>Voucher acknowledgement date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endorsed_date",
            "description": "<p>Voucher endorsement date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "endorsed_by",
            "description": "<p>Voucher endorsing staff ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "authorized_date",
            "description": "<p>Voucher authorizing date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "authorized_by",
            "description": "<p>Voucher authorizing staff ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "approved_by",
            "description": "<p>Voucher approval staff ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "approved_date",
            "description": "<p>Voucher approval date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "paid_by",
            "description": "<p>Voucher payment staff ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "paid_date",
            "description": "<p>Voucher payment date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payment_method",
            "description": "<p>PayrollDetail payment method GATEWAY (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payment_gateway",
            "description": "<p>PayrollDetail payment gateway UNIONBANK (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payment_status",
            "description": "<p>PayrollDetail transaction status (prohibited)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "received_by",
            "description": "<p>Voucher payment reciever signs with name</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "received_date",
            "description": "<p>Voucher date of payment</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "checked_by",
            "description": "<p>Voucher finance officer</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "checked_date",
            "description": "<p>Voucher finance dept check</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "audited_by",
            "description": "<p>Voucher auditor</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "audited_date",
            "description": "<p>Voucher audit date</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Voucher",
            "description": "<p>Voucher's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Voucher not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/voucher/routes.js",
    "groupTitle": "Voucher"
  },
  {
    "type": "delete",
    "url": "/api/vouchers/{recordId}",
    "title": "Delete vouchers",
    "name": "DeleteVoucher",
    "group": "Voucher",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "optional": false,
            "field": "204",
            "description": "<p>No Content.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Voucher not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/voucher/routes.js",
    "groupTitle": "Voucher"
  },
  {
    "type": "get",
    "url": "/api/vouchers?id={recordId}",
    "title": "Retrieve Voucher record(s)",
    "name": "RetrieveVoucher",
    "group": "Voucher",
    "examples": [
      {
        "title": "Example usage for retieving a single record:",
        "content": "curl -i api/vouchers",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "filter",
            "description": "<p>query condition (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Number of records to offset by (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum Number of records to retrieve (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort",
            "description": "<p>how records would be arranged in alphabet (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "projection",
            "description": "<p>list of record's attributes to retrieve (optional)</p>"
          }
        ]
      }
    },
    "description": "<p>Records  of account headings belonging to one classification</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Array",
            "description": "<p>of Objects of records.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/voucher/routes.js",
    "groupTitle": "Voucher"
  },
  {
    "type": "put",
    "url": "/api/vouchers/{recordId}",
    "title": "Update vouchers",
    "name": "UpdateVoucher",
    "group": "Voucher",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>authorization token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "recordId",
            "description": "<p>required record ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transaction_code",
            "description": "<p>Voucher transaction_code</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "related_voucher_id",
            "description": "<p>Voucher related voucher ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "stage_id",
            "description": "<p>Voucher voucher_stage ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "account_heading_id",
            "description": "<p>Voucher AccountHeading ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "terminal_id",
            "description": "<p>Voucher Terminal ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsidiary",
            "description": "<p>Voucher Department</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "amount",
            "description": "<p>Voucher Amount to be paid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Voucher Transaction description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "voucher_type",
            "description": "<p>Voucher &quot;PAYMENT|ADVANCE|RETIREMENT&quot; (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "processing",
            "description": "<p>Voucher &quot;PENDING|COMPLETE|CANCEL&quot; (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "beneficiary",
            "description": "<p>Voucher &quot;STAFF|PARTNER&quot; (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "staff_id",
            "description": "<p>Voucher beneficiary staff ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "partner_id",
            "description": "<p>Voucher beneficiary driver ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "acknowledge_by",
            "description": "<p>Voucher beneficiary HoD staff ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "acknowledge_date",
            "description": "<p>Voucher acknowledgement date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endorsed_date",
            "description": "<p>Voucher endorsement date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "endorsed_by",
            "description": "<p>Voucher endorsing staff ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "authorized_date",
            "description": "<p>Voucher authorizing date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "authorized_by",
            "description": "<p>Voucher authorizing staff ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "approved_by",
            "description": "<p>Voucher approval staff ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "approved_date",
            "description": "<p>Voucher approval date</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "paid_by",
            "description": "<p>Voucher payment staff ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "paid_date",
            "description": "<p>Voucher payment date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payment_method",
            "description": "<p>PayrollDetail payment method GATEWAY (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payment_gateway",
            "description": "<p>PayrollDetail payment gateway UNIONBANK (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "payment_status",
            "description": "<p>PayrollDetail transaction status (prohibited)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "received_by",
            "description": "<p>Voucher payment reciever signs with name</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "received_date",
            "description": "<p>Voucher date of payment</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "checked_by",
            "description": "<p>Voucher finance officer</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "checked_date",
            "description": "<p>Voucher finance dept check</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "audited_by",
            "description": "<p>Voucher auditor</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "audited_date",
            "description": "<p>Voucher audit date</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Voucher",
            "description": "<p>Voucher's data.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "400",
            "description": "<p>Some parameters may contain invalid values.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Voucher not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>master access only.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/api/general/voucher/routes.js",
    "groupTitle": "Voucher"
  }
] });
