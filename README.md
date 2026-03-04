# Laravel 11 + React + Inertia + MongoDB

## Setup Instructions

### 1. Install Dependencies
```bash
composer install
npm install
```

### 2. Configure MongoDB
Make sure MongoDB is running on your system. Update `.env` if needed:
```
DB_CONNECTION=mongodb
DB_HOST=127.0.0.1
DB_PORT=27017
DB_DATABASE=laravel
DB_USERNAME=
DB_PASSWORD=
```

### 3. Seed Database
```bash
php artisan db:seed
```

### 4. Build Assets
```bash
npm run dev
```

### 5. Start Server
```bash
php artisan serve
```

### 6. Login
- URL: http://localhost:8000
- Email: test@example.com
- Password: password

## Tech Stack
- Laravel 11
- PHP 8.3
- React 18
- Inertia.js
- MongoDB
- Vite
