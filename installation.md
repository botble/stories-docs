# Introduction
- [Requirement](#requirement)
- [Installation](#installation)
- [Note](#note)

<a name="requirement"></a>
## Requirement

- Apache, nginx, or another compatible web server.
- PHP >= 7.3 >> Higher
- MySQL Database server
- BCMath PHP Extension
- Ctype PHP Extension
- Fileinfo PHP extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- Module Re_write server
- PHP_CURL Module Enable

>  {warning} On this project, we're using the latest Laravel version (currently 8.x). Please go to [Laravel documentation page](https://laravel.com/docs) for more information.

> It’s based on Laravel framework, the root folder for it is /public. You shouldn’t install it on a sub-folder, use sub-domain is better than sub-folder. (we won’t support to install our product on sub-folder).

<a name="installation"></a>
## Install on hosting

> {warning} If you're a Laravel developer and you want to customize our source code in `platform/core` and `platform/packages`, you need to delete folder `/vendor` then run command `composer install` to reinstall vendor packages.

- Upload all files into the root folder of your hosting (normally, it is`public_html`).
- Create a database and import data from `database.sql` (it's located in source code).
  ![Database](https://live.staticflickr.com/65535/50969326586_8edcb3c6f9_b.jpg)
- Open file `.env` and update your database credentials (if `.env` file is not existed, you can create it from `.env.example`).
- Make sure `APP_URL` in `.env` is correct your domain. It should be `APP_URL=http://your-domain.com`
- Go to `/admin` to access to admin panel.
- The default admin account is `botble` - `159357`.
  ![Login](https://live.staticflickr.com/65535/50969329231_a4498b2103_b.jpg)

## Install locally or in VPS

> {warning} If you're a Laravel developer and you want to customize our source code in `platform/core` and `platform/packages`, you need to delete folder `/vendor` then run command `composer install` to reinstall vendor packages.


- Create `.env` file from `.env-example` and update your configuration.
  ![Env](https://live.staticflickr.com/65535/50848231176_5a3ba243e7_b.jpg)

- Using sample data: 
    - Import database from `database.sql`.
    
- Don't use sample data:
    - Run `php artisan migrate` to create database structure.

    - Run `php artisan cms:user:create` to create admin user.
    
    - Run `php artisan cms:theme:activate stories`

- If you're pulled source code from GIT server:
    - Run `php artisan vendor:publish --tag=cms-public --force`
    - Run `php artisan cms:theme:assets:publish`

- Run web locally:
    - Change `APP_URL` in `.env` to `APP_URL=http://localhost:8000`
    - Run `php artisan serve`. Open `http://localhost:8000`, you should see the homepage.
    - Go to `/admin` to access to admin panel.
    - If you're using sample data, the default admin account is `botble` - `159357`.
    - If you don't use sample data, you need to go to Admin -> Plugins then activate all plugins.
