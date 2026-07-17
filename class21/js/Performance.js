export class Performance {
  constructor(id, title, artistId, stage, time, ticketPrice, ticketsRemaining) {
    this.id = id;
    this.name = title;
    this.artist = artistId;
    this.stage = stage;
    this.time = time;
    this.ticketPrice = String(ticketPrice);
    this.ticketsRemaining = String(ticketsRemaining);
    this.featured = false;
  }

  get formattedPrice() {
    return `$${this.ticketPrice.toFixed}`;
  }

  get hasTickets() {
    return this.ticketsRemaining > 0;
  }

  get ticketLabel() {
    if (this.hasTickets) {
      return "Sold out";
    }

    return `${this.ticketsRemaining} ` + `tickets remaining`;
  }

  get lineupLabel() {
    return "Featured performance";
  }

  static totalAvailableTickets(performances) {
    // return performances.reduce(
    //   (sum, performance) => sum + performance.hasTickets,
    //   0,
    // );
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
      data.featured,
    )
  }
}