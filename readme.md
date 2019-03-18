
Laravel Inventory Management System.
====================================

######Work in progress.

This project seeks to demonstrate how to build a REST api using Laravel. It encompasses the following:-

>1. Standards compliant OAuth 2.0 Authentication using [Passport](https://laravel.com/docs/5.8/passport)
>2. Encryption at the database level using [OpenSSL which provides AES-256 and AES-128 encryption](https://laravel.com/docs/5.8/encryption)
>3. Single page application to consume the API end-points (React).

Getting Started
---------------

#### Prerequisites
1. PHP devlopment environment, preferably [xampp](https://www.apachefriends.org/index.html) 
2. Ensure that you can run php scripts from the command line.
3. This project utilizes [Composer](http://getcomposer.org/) for dependency management. If you haven't already, start by [installing Composer](http://getcomposer.org/doc/00-intro.md).
4. Create MySQL database `erp`. 
```sql
CREATE DATABASE `erl`;
```

#### Installation:
1. `git clone https://github.com/dennismwagiru/erp.git` in the root of your development environment.
2. Open terminal and in the root of your project Migrate `php artisan migrate`.
3. Install dependencies `php composer install`.
4. Serve the application `php artisan serve` or as per your preference.

###### Happy Coding
