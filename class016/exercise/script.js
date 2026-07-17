/**
 * Create a custom element called:
 *  <movie-box></movie-box>
 *
 * Requirements:
 *
 * The element must:
 *
 *  use Shadow DOM
 *  accept attributes:
 *      title (h2)
 *      year (p)
 *      director (p)
 *      poster (img)
 *
 * render a styled card inside the shadow root
 *
 * use helper methods
 *
 * example HTML:
 * <movie-box title="MOVIE_TITEL" year="0000" director="DIRECTOR_NAME"
 *  poster-url="POSTER_URL"></movie-box>
 *
 */

class MovieTitle extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    getTitle() {
        return this.getAttribute("title") || "UNKNOWN";
    }
    getYear(){
        return this.getAttribute("year") || "";
    }
    getDirector(){
        return this.getAttribute("director") || "";
    }
    getPoster() {
        return this.getAttribute("poster-url") || "";
    }
    render() {
        const shadow = this.attachShadow({ mode: "open" });

        shadow.innerHTML = `
            <style>
                .card{
                    border: 1px solid #333;
                    padding: 1rem;
                    background: #4d4a4a;
                    color: white;
                    border-radius: 8px;
                    margin-top: 1rem;
                }

                img {
                    max-width: 640px;
                    max-height: 380px;
                }
            </style>

            <div class="card">
                <h2>${this.getTitle()}</h2>
                <p>${this.getYear()}</p>
                <p>${this.getDirector()}</p>
                <img src="${this.getPoster()}">
            </div>
        `;
    }
}

customElements.define("movie-box", MovieTitle);
