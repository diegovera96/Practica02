## CLONE

```bash
git clone git@github.com:diegovera96/Practica02.git
```

## BACKEND

```bash
cd first-api-iwm
Create DB in mysql
Rename .env.example to .env and configure database information
composer install
php artisan key:generate
php artisan migrate
php artisan db:seed
php artisan serve --host=0.0.0.0
```

## FRONTEND
```bash
cd frontend/my-app
npm install
```
>Rename .env.example to .env
```bash
REACT_APP_PUBLIC_IP=public-ip
```
### To run
```bash
npm start
```

## MOBILE

```bash
cd mobile/portafolio
npm install
```
>Rename .env.example to .env
```bash
REACT_APP_API_PATH=public-ip
```
### To run
```bash
npm start
```
### And Scan QR with Expo Go on smartphone