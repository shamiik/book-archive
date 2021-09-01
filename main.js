const searchBook = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    // console.log(inputText);

    inputField.value = ' ';

    const url = `https://openlibrary.org/search.json?q=${inputText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data.docs))
}


const displayBooks = books => {
    const booksDiv = document.getElementById('books');
    books.forEach(book => {
        console.log(book.title);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">This content is a little bit longer.</p>
                </div>
            </div>
        `;
        booksDiv.appendChild(div)
    });

}