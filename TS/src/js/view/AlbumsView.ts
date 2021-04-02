/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import $ from 'jquery';

export class AlbumsView {
  $albumListContainer: JQuery<HTMLElement>;
  config: { showAlbumPhotos: (id: number | string) => Promise<void>; };

  constructor(config: { showAlbumPhotos: ((id: number | string) => Promise<void>); }) {
    this.config = config;
    this.$albumListContainer = this.generateAlbumListContainer();
    this.createAlbumListEventListener();
  }

  generateAlbumListContainer() {
    return $(`<div class="card-body col-md-5"><ul class="js-album-list"></ul>
    </div>`);
  }

  renderAlbumList(albums: any[]) {
    const $albumList = $('.js-album-list');
    albums.map((list: { id: any; title: any; }) => $albumList.append(`<li class="album-list-item" id=${list.id}>${list.title}</li>`));
  }

  createAlbumListEventListener() {
    this.$albumListContainer.click((event) => this.onClickAlbumList(event));
  }

  onClickAlbumList(event: JQuery.ClickEvent<HTMLElement, null, HTMLElement, HTMLElement>) {
    if (event.target.classList.contains('album-list-item')) {
      const albumId = event.target.id;
      this.config.showAlbumPhotos(albumId);
    }
  }
}
