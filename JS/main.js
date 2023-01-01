$(document).ready(() =>{
    $('#searchForm').on('submit',(e) =>{
        let searchText = $('#searchText').val();
        getMovie(searchText);
        e.preventDefault();
    });
});

function getMovie(searchText){
    // console.log(searchText);
    axios.get('http://www.omdbapi.com?s='+searchText)
    .then((response)=>{
        let movies = response.data.Search;
        let output = '';
        $.each(movies,(index,movie)=>{
            output += `
            <img src="${movie.Poister}">
            `;
        });
    })
    .catch((err)=>{
        console.log(err);
    });
}