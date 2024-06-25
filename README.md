## Eslint and prettier setup

➡ install

1. eslint --save-dev
2. @typescript-eslint/parser --save-dev
3. @typescript-eslint/eslint-plugin --save-dev
4. npx eslint --init
   OR
   npm init @eslint/config@latest
5. prettier --save-dev
6. eslint-config-prettier --save-dev

➡ scripts

```js
"lint": "npx eslint src --ignore-pattern .ts",
"lint:fix": "npx eslint src --fix",
"prettier": "prettier --ignore-path .gitignore --write \"./src/\*_/_.+(js|ts|json)\"",
"prettier:fix": "npx prettier --write src",
```

## Requirements analysis link

https://docs.google.com/document/d/1zkBQp2fU2a7k1b3bydBKpagKHv5IWhZDTQQ90WxGJWU/edit?usp=sharing

## ER diagram link

https://lucid.app/lucidchart/d8730d41-4677-48a5-bd60-a94c8ba5fe69/edit?viewport_loc=-3317%2C-696%2C6137%2C2531%2C0_0&invitationId=inv_cdd1aa9c-bc1b-4a64-9ef1-dcdf7ba9d354

## 4 principals of transaction rollback(v-13-9)

ACID
A=Atomicity
C=Consistency
I=Isolation
D=Durability

Transactions steps
startSession()
startTransaction()
commitTransaction()/abortTransaction()
endTransaction()

<!-- ========end======== -->
