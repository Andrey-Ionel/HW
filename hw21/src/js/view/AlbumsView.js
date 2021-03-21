/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import $ from 'jquery';

export class AlbumsView {
  constructor(config) {
    this.config = config;
    this.$albumListContainer = this.generateAlbumListContainer();
    this.createAlbumListEventListener();
  }

  generateAlbumListContainer() {
    return $(`<div class="card-body col-md-5"><ul class="js-album-list"></ul>
    </div>`);
  }

  renderAlbumList(albums) {
    const $albumList = $('.js-album-list');
    albums.map((list) => $albumList.append(`<li class="album-list-item" id=${list.id}>${list.title}</li>`));
  }

  createAlbumListEventListener() {
    this.$albumListContainer.click((event) => this.onClickAlbumList(event));
  }

  onClickAlbumList(event) {
    if (event.target.classList.contains('album-list-item')) {
      const albumId = event.target.id;
      this.config.showAlbumPhotos(albumId);
    }
  }
}
