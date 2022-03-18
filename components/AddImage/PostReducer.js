// import Media from "./helper/Image";
// export const initialState = {
//     media: {},
//     albumName: "Magaxat",
//     selectedImage: [],
//     albumList: [],
//     modalVisible: false,
//     multiple: false,
// };

// const mediaList = (albumList) => {
//     const setAlbumList = {};
//     albumList.foreach((photos) => {
//         setAlbumList[photos.id] = photos.uri;
//     });
//     return setAlbumList
// }


// const setDefaultImage = (state) => {
//     const getPhotos = state;
//     const defaultPhoto =
//         [getPhotos[Object.keys(getPhotos)[0]]];
//     return defaultPhoto
// };

// const getAllAlbumNames = (albums) => {
//     const listOfAlbums = albums.map((album) => album.title);
//     return listOfAlbums
// };

// const setSelectedImageFromALbumName = async (album) => {
//     const getAlbumName = await
//         Media.getPhotosFromAlbum(album);
//     const photoFromAlbum = await
//         Media.photo(getAlbumName);
//     return photoFromAlbum.assets
// }

// const addImage = (payload, state) => {
//     let updatedPhotoArray = [];
//     if (!payload.multiple){
//         updatedPhotoArray = [payload.photoUri];
//     }else{
//         updatedPhotoArray =
//         [...state,setSelectedImageFromALbumName, payload.photoUri]
//     }
//     return updatedPhotoArray
// };

// const removeImage = (photoUri, state)