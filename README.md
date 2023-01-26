# customers-monorepo-nodejs

## arquitetura geral
- yarn
- docker 

## server
- microservicos
- nodejs + ts

## microservices
- customers api
- product api
- contact api

* performance nos hot paths

## TODO - próximos passos
- eslint/prettier
- typescript
- nodemon
- swagger

## endpoints
POST api/customers 
GET api/customers/{customerId} => HOT PATH
PUT api/customers/{customerId}
<!-- PATCH api/customers/{customerId} -->
DELETE api/customers/{customerId}

POST api/customers/{customerId}/products
GET api/customers/{customerId}/products/{productId}
POST api/customers/{customerId}/products/{productId} => HOT PATH
PUT api/customers/{customerId}/products/{productId}
<!-- PATCH api/customers/{customerId}/products/{productId} -->
DELETE api/customers/{customerId}/products/{productId}

POST api/customers/{customerId}/contacts
GET api/customers/{customerId}/contacts/{productId}
POST api/customers/{customerId}/contacts/{productId}
PUT api/customers/{customerId}/contacts/{productId}
<!-- PATCH api/customers/{customerId}/contacts/{productId} -->
DELETE api/customers/{customerId}/contacts/{productId}

```json 
{ // customer
    "name": "fulano", 
    "products": [ // product
        {
            "name": "Notebook Lenovo", 
            "value": "12312", 
        }, 
        {
            "name": "Monitor LG", 
            "value": "10002"
        }
    ], 
    "contacts": [ // contact
        {
            "type": "email", 
            "value": "fulano@gmail.com"
        }
    ], 
    "addresses": [ 
        {
            "line1": "", 
            "line2": "", 
            "postalCode": ""
        }
    ]
}
```

## libs
- express/koa
- sequelize/primsa/typeorm
- relacional ou não relacional? (mongoose)
- joi/validatorjs
- nodemon
