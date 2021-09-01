const searchBook = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    // console.log(inputText);

    inputField.value = ' ';
}
const url = `https://openlibrary.org/search.json?q=chemistry`;
fetch(url)
    .then(res => res.json())
    .then(data => displayBooks(data.docs))

const displayBooks = books => {
    // books.forEach(book => {
    console.log(books);
    // });
    const booksDiv = document.getElementById('books');
    for (const book of books) {
        // console.log(book);

    }


}