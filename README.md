## Reqeuirements
- node 18+ (i'd recommend nvm)
- angular cli `npm install --global @angular/cli@latest`
- nx installed (`npm install --global nx@latest`)

## Init app
- unpack zip file
- run `npm i`

## Start the app

To start the development server run `npm run start`. Open your browser and navigate to http://localhost:4200/. 

## Start the app w angular universal

To start the development server run `npm run start:ssr`. Open your browser and navigate to http://localhost:4201/.

please not that only localhost:4201/auth has ssr enabled the welcome page (localhost:4201) will not render anything which simulates our use case.
