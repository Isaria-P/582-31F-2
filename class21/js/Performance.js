export class Performance {
  constructor(id, title, artist, stage, time, ticketPrice, ticketsRemaining) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.stage = stage;
    this.time = time;
    this.ticketPrice = Number(ticketPrice);
    this.ticketsRemaining = Number(ticketsRemaining);
  }

  get formattedPrice() {
    return `$${this.ticketPrice}`;
  }

  get hasTickets() {
    return this.ticketsRemaining > 0;
  }

  get ticketLabel() {
    if (this.ticketsRemaining <= 0) {
      return "Sold out";
    }

    return `${this.ticketsRemaining} tickets remaining`;
  }

  get lineupLabel() {
    return "";
  }

  static totalAvailableTickets(performances) {
    
    let availableTickets = 0;
    for (const performance of performances) {
      if (performance.hasTickets) {
        availableTickets += Number(performance.ticketsRemaining);
      }
    }
    return availableTickets;
  }


  static averagePrice(performances) {
    if (performances.length === 0) {
      return "$0.00";
    }

    const total = performances.reduce(
      (sum, performance) => sum + Number(performance.ticketPrice),
      0,
    );

    return (total / performances.length).toFixed(2);
  }
  static fromObject(data) {
    return new Performance(
      data.id,
      data.title,
      data.artistId,
      data.stage,
      data.time,
      data.ticketPrice,
      data.ticketsRemaining,
    )
  }
}


// // const p = new Performance(83, "LALA", 6689, "Main", "6:30", "$67", 77 )
// const fp = new FeaturedPerformance(99, "WOW", 88, "Main", "3:30", "$5.50", 2, "LEFT")
// console.log(fp)