import { Performance } from "./Performance.js";

export class FeaturedPerformance extends Performance{
    constructor(
        id,
        title,
        artist,
        stage,
        time,
        ticketPrice,
        ticketsRemaining,
        featured        
    ) {
        super(
            featured
        );

        this.featured = Boolean(featured);
    }

    get lineupLabel() {
        return "Featured Performance";
    }
    static fromObject(data) {
    if (data.featured) {
      return new FeaturedPerformance(
      data.id,
      data.title,
      data.artist,
      data.stage,
      data.time,
      data.ticketPrice,
      data.ticketsRemaining,
      data.featured,
      )
    }
  }
}