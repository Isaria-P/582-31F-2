export class Artist {
  constructor(id, name, country, genre) {
    this.id = id;
    this.artistName = name;
    this.country = country;
    this.genre = genre;
  }

  get displayLabel() {
    return `${this.artistName} — ` + `${this.genre}`;
  }

  static fromObject(data) {
    return new Artist(
      data.id,
      data.name,
      data.country,
      data.genre,
    )
  }
}