// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const spotifyConfig = {
  clientId: '1abea850ed9741398a21d3eb70d64a27',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
    "user-read-currently-playing",  // música tocando agora
    "user-read-recently-played",  // ler músicas tocadas recentemente
    "user-read-playback-state", // ler estado do player do usuário
    "user-top-read",  // top artistas e músicas do usuário
    "user-modify-playback-state", // alterar o player do usuário
    "user-library-read",  // ler biblioteca dos usuários
    "playlist-read-private",  // ler playlists privadas
    "playlist-read-collaborative",  // ler playlists colaborativas
  ]
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
