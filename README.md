# Welcome to the Geolocation search application

I have designed this project with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1. for state management, I used NGRX.

## Setup in local

Run `npm i` to install all the dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Geo Locations – API to be used
http://www.geonames.org/export/web-services.html

## Specifications:

- Setup Angular project in GitHub and make a public repo
- Create a Search box component using Angular Components
- Use state to monitor what is the last five searches user performed
- Hit the API http://www.geonames.org/export/web-services.html to fetch the details
- Show it in a Search result component to display the geolocation names
- Avoid multiple search requests before the previous search result is shown
- Handle all exceptions of API states with proper messages

## How to use the application

To find the location address, you have to enter the Latitude and Longitude. Please visit https://www.geonames.org/maps/addresses.html?address=89512#address to find the Latitude and Longitude or see below; I have provided some Latitude and Longitude values for testing.

| Latitude           | Longitude          |
| ------------------ | ------------------ |
| 0                  | 0                  |
| 44.67817135628827  | -99.9653146351437  |
| 50.27541175459233  | 21.437888323248753 |
| 52.358             | 4.881              |
| 50.089752195361704 | 18.852083986282235 |
| 51.19299424267694  | 15.40383045813389  |
