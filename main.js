const errorDiv = document.getElementById('error')
const searchBook = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    // console.log(inputText);

    inputField.value = ' ';
    if (inputText === ' ') {
        errorDiv.innerText = "Please Search something.It's empty."
    }
    else {
        const url = `https://openlibrary.org/search.json?q=${inputText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayBooks(data.docs));

    }

}

const displayBooks = books => {
    const booksContainer = document.getElementById('books');
    booksContainer.textContent = " ";
    // if (books) {
    //     errorDiv.innerText = 'No result found ';
    // }


    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50 rounded mx-auto img-thumbnail img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${book.title}</h5>
                <p class="card-text text-center">${book.author_name}</p>
            </div>
        </div>
        `;
        booksContainer.appendChild(div);
    });

}