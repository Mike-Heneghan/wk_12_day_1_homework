document.addEventListener('DOMContentLoaded', () =>{

  const form = document.querySelector('#form');
  form.addEventListener('submit', handleButtonClicked);

});

const handleButtonClicked = function(event){
  event.preventDefault();
  const inputTitle = this.title.value;
  const inputAuthor = this.author.value;
  const inputCategory = this.category.value;
  const selectedGenre = this.genre.value;
  this.reset();

  console.log(inputTitle);
  console.log(inputAuthor);
  console.log(inputCategory);
  console.log(selectedGenre);
}
