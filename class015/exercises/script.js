// 1. create a custom element called:
//              <movie-card></movie-card>

// this element should accept these attributes:


// render it on your html file.

// 2. refactor a basic custom element

class movieCard extends HTMLElement {
  connectedCallback() {

    const title = this.getAttribute("title");
    const year = this.getAttribute("year");
    const rating = this.getAttribute("rating");

    this.innerHTML = `
      <div>
        <h2>Title: ${title}</h2>
        <p>Year: ${year}</p>
        <p>Rating: ${rating}</p>
      </div>
    `;
  }
}

customElements.define("movie-card", movieCard);

// refactor it so that connectedCallback only calls render()
// All HTML generation happens inside render()

// 3. create another GameCard custom element with the following:

//      1. connectedCallback()
//      2. getTitle()
//      3. getYear()
//      4. getRating()
//      4.b formats Rating  -- ratingFormatter() X/5
//      5. render

class GameCard extends HTMLElement {
  connectedCallback() {
    this.getTitle();
    this.getYear();
    this.getRating();
    this.getTitle();
  }

  render() {
    getTitle() {
      
      this.
    }

  }

  getTitle() {
    this.title = this.getAttribute("title");
  }

  this.innerHTML = `
  
  `
}