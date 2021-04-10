/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import $ from 'jquery';

export class AlbumPhotosView {
  $albumPhotosContainer: JQuery<HTMLElement>;

  constructor() {
    this.$albumPhotosContainer = this.generateAlbumPhotosContainer();
  }

  generateAlbumPhotosContainer() {
    return $(`<div class="js-photo-container card-body col-md-7 text-right">
    </div>`);
  }

  renderAlbumPhotos(albumPhotos: never[]) {
    this.$albumPhotosContainer.html('');
    albumPhotos.map((photo: { thumbnailUrl: string; }) => this.$albumPhotosContainer.append(`<img class="album-photo" src="${photo.thumbnailUrl}">`));
  }
}
