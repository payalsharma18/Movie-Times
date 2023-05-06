const API_KEY ="3c314f53d4e5d78711eae9d055c21823";

const requests = {

    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
    fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_networks=28`,
    fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_networks=35`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_networks=99`,
}

export default requests;