const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: '4b4aef15ead3d5c1e8ca28d19c3d08c5',
    originalImage: (imgPath) => 'https://image.tmdb.org/t/p/original/${imgPatch}',
    w500Image: (imgPath) => 'https://image.tmdb.org/t/p/w500/${imgPatch}'
}

export default apiConfig;