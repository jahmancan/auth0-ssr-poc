// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth0: {
    clientId: 'wLSIP47wM39wKdDmOj6Zb5eSEw3JVhVp',
    domain: 'brucke.auth0.com',
    authorizationParams: {
      audience: 'http://localhost/',
      redirect_uri: 'http://localhost:4200',
    },
  },
};
