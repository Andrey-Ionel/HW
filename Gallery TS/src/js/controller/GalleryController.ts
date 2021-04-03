/* eslint-disable import/prefer-default-export */
import $ from 'jquery';

import { GalleryView } from '../view/GalleryView';
import { AlbumsView } from '../view/AlbumsView';
import { AlbumPhotosView } from '../view/AlbumPhotosView';
import { AlbumsModel } from '../model/AlbumsModel';
import { AlbumPhotosModel } from '../model/AlbumPhotosModel';

export class GalleryController {
    galleryView: GalleryView;
    albumsView: AlbumsView;
    albumPhotosView: AlbumPhotosView;
    albumsModel: AlbumsModel;
    albumPhotosModel: AlbumPhotosModel;

    constructor() {
        this.galleryView = new GalleryView();
        this.albumsView = new AlbumsView({ showAlbumPhotos: (id: number) => this.showAlbumPhotos(id) });
        this.albumPhotosView = new AlbumPhotosView();
        this.albumsModel = new AlbumsModel();
        this.albumPhotosModel = new AlbumPhotosModel();
        this.renderGallery();
    }

    renderGallery() {
        const $app = $('.app');

        $app.append(this.galleryView.$container);
        this.galleryView.$container.append(this.albumsView.$albumListContainer);
        this.galleryView.$container.append(this.albumPhotosView.$albumPhotosContainer);
        this.init();
    }

    async init() {
        const albumList = await this.albumsModel.sendGetAlbumListRequest();
        this.albumsView.renderAlbumList(albumList);
        const firstAlbumId = albumList[0].id;
        const albumPhotos = await this.albumPhotosModel.sendGetAlbumPhotosRequest(firstAlbumId);
        this.albumPhotosView.renderAlbumPhotos(albumPhotos);
    }

    async showAlbumPhotos(id: number) {
        const albumPhotos = await this.albumPhotosModel.sendGetAlbumPhotosRequest(id);
        this.albumPhotosView.renderAlbumPhotos(albumPhotos);
    }
}
