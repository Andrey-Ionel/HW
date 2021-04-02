/* eslint-disable no-return-assign */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
export class AlbumsModel {
    albums: never[];
    constructor() {
        this.albums = [];
    }

    async sendGetAlbumListRequest() {
        return fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            .then((albums) => this.albums = albums);
    }
}
