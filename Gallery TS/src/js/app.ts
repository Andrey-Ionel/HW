/* eslint-disable no-unused-vars */
import $ from 'jquery';


import { GalleryController } from './controller/GalleryController';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/style.css';

$(() => {
    const controller = new GalleryController();
});
