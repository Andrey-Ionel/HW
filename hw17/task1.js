//  Интерфейс разделен на две части. В левой части пользователь видит список альбомов, его берем из https://jsonplaceholder.typicode.com/albums

// Когда пользователь нажмет на какой-то альбом в правой части он увидит фотографии из этого альбома.
// Их берем из https://jsonplaceholder.typicode.com/photos?albumId=ID где вместо ID подставляем id нужного альбома.

// Сразу при загрузке приложения и получения списка альбомов, в правой части нужно показать фотографии из первого альбома в списке

// Не забываем кидать ссылку на git hub pages.

const $albumList = $('.js-album-list');
const $albumPhotosContainer = $('.js-photo-container');

init();
createAlbumListEventListener();

function init() {
    const promiseAlbumList = sendGetAlbumListRequest();
    promiseAlbumList
        .then((albumLists) => {
            renderAlbumList(albumLists);
            const firstItemId = albumLists[0].id;
            return sendGetAlbumPhotosRequest(firstItemId);
        })

        .then((albumPhotos) => renderAlbumPhotos(albumPhotos));
}

function createAlbumListEventListener() {
    $albumList.click((event) => {
        if (event.target.classList.contains('album-list-item')) {
            const albumId = event.target.id;

            const promiseAlbumPhoto = sendGetAlbumPhotosRequest(albumId);
            promiseAlbumPhoto
                .then((albumPhotos) => renderAlbumPhotos(albumPhotos));
        }
    });
}

function sendGetAlbumPhotosRequest(albumId) {
    return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`).then((response) => response.json());
}

function sendGetAlbumListRequest() {
    return fetch('https://jsonplaceholder.typicode.com/albums').then((response) => response.json());
}

function renderAlbumList(albumLists) {
    albumLists.map((list) => $albumList.append(`<li class="album-list-item" id=${list.id}>${list.title}</li>`));
}

function renderAlbumPhotos(albumPhotos) {
    $albumPhotosContainer.html('');
    albumPhotos.map((photo) => $albumPhotosContainer.append(`<img class="album-photo" src="${photo.thumbnailUrl}">`));
}
