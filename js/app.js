document.addEventListener('DOMContentLoaded', () =>{

  const form = document.querySelector('#form');
  form.addEventListener('submit', handleButtonClicked);

});

const handleButtonClicked = function(event){
  event.preventDefault();
  const inputTitle = this.title.value;
  // console.log(inputTitle);
  const inputAuthor = this.author.value;
  // console.log(inputAuthor);
  const inputCategory = this.category.value;
  // console.log(inputCategory);
  const selectedGenre = this.genre.value;
  console.log(selectedGenre);
}
