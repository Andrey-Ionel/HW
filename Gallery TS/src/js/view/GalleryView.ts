/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import $ from 'jquery';

export class GalleryView {
    $container: JQuery<HTMLElement>;

    constructor() {
        this.$container = this.generateGalleryContainer();
    }

    generateGalleryContainer() {
        return $(`<div class="container mx-auto p-1 row">
            <h1 h1 class= "album-heading display-1 text-center col-12"> Album List</h1>
        </div >`);
    }
}
