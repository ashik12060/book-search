const searchBook = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);

    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs));
    if(searchText === ''){
        const div = document.createElement('div');
        div.innerHTML = `<h3>No file found</h3>`;
        alert(div.innerHTML);
    }

    
}
const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    docs.forEach(doc => {
        // console.log(doc);
        let bookSrc = `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`;
        if(doc.cover_i === undefined){
            bookSrc = 'https://cdn.pixabay.com/photo/2013/07/13/13/34/book-161117_1280.png'
        }
        
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="col">
            <div class="card">
            <img src=${bookSrc} class="card-img-top" alt="...">
            <div class="card-body">
                
                <h5 class="card-title">Book Name: ${doc.title}</h5>
                <h6 class="card-title">Author: ${doc.author_name}</h6>
                <h6 class=?"card-title">First Published Year: ${doc.first_publish_year}</h6>
                
            </div>
        </div>
      </div>
        `;
        searchResult.appendChild(div); 
    })
}

