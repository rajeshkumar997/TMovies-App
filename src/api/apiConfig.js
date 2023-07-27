const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c8d2540861f5934184eb78698791a80a',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;