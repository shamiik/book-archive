const inputField = document.getElementById('input-field');
const errorDiv = document.getElementById('error');
const booksContainer = document.getElementById('books');
const bookFound = document.getElementById('found');
const spinner = document.getElementById('spinner');

//.......Search Button Function.......

const searchBook = () => {
    const inputText = inputField.value;

    //........ error handling & empty field ...........

    inputField.value = ' ';
    booksContainer.textContent = " ";
    errorDiv.innerText = " "
    if (inputText === ' ') {
        errorDiv.innerText = "Please Write a Book Name!";
        return;
    }


    //........Data Load.........

    const url = `https://openlibrary.org/search.json?q=${inputText}`;

    spinner.classList.remove('d-none');
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayBooks(data.docs);

            spinner.classList.add('d-none');

            //...... error handling .........
            if (data.numFound === 0) {
                errorDiv.innerText = 'No Result Found!';
            }
            else {
                errorDiv.innerText = " "
            }
            //........ Search Result ..........
            bookFound.innerText = `Search Result: ${data.docs.length} of ${data.numFound}`
        });
}


// ......Display Result........

const displayBooks = books => {
    booksContainer.textContent = " ";
    books.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML = `
        <div class="card">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50 rounded mx-auto  img-fluid" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${book.title}</h5>
                <p class="card-text text-center">Author: ${book.author_name}</p>
                <p class="card-text text-center">Publisher: ${book.publisher}</p>
                <p class="card-text text-center">1st Edition: ${book.first_publish_year}</p>
                
            </div>
        </div>
        `;
        booksContainer.appendChild(div);
    });
}