define({ "api": [
  {
    "type": "get",
    "url": "/products",
    "title": "Request List of products",
    "name": "GetProducts",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>default 10.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>default 10.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Total count of found produtcs.</p>"
          }
        ],
        "Products": [
          {
            "group": "Products",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of product.</p>"
          },
          {
            "group": "Products",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of product.</p>"
          },
          {
            "group": "Products",
            "type": "Nummber",
            "optional": false,
            "field": "price",
            "description": "<p>of product.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"count\" : 4,\n  \"products\":[\n     {\n     \"name\": \"TV\",\n     \"price\": \"1000\"\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/product.ctrl.js",
    "groupTitle": "Products"
  },
  {
    "type": "put",
    "url": "/product/:id",
    "title": "Update product",
    "name": "PutProduct",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Product id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Product name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "price",
            "description": "<p>Product price.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"updated\": 1,\n    \"message\": \"Guncelleneme Basarili\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/product.ctrl.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/",
    "title": "API Status",
    "group": "Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>API Status' message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\"status\": \"Products API Up and Running\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/status.js",
    "groupTitle": "Status",
    "name": "Get"
  }
] });
