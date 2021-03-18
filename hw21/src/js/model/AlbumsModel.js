/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
export class AlbumsModel {
    async sendGetAlbumListRequest() {
        return fetch('https://jsonplaceholder.typicode.com/albums').then((response) => response.json());
    }
}
