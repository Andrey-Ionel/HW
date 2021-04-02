/* eslint-disable no-return-assign */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
export class AlbumPhotosModel {
  photos: never[];
  constructor() {
    this.photos = [];
  }

  async sendGetAlbumPhotosRequest(albumId: number | string) {
    return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((photos) => this.photos = photos);
  }
}
