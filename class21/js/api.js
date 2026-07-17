export async function getFestivalData() {
  const artistResponse = await fetch("./artists.json");

  const performanceResponse = await fetch("./performances.json");

  const responses = Promise.all([artistResponse, performanceResponse]);

  if (!artistResponse || !performanceResponse ) {
    throw new Error(`Festival data could not be loaded| 
      Artist: ${artistResponse.status} : Performances: ${performanceResponse.status}`);
  }

  const artists = await artistResponse.json();

  const performances = await performanceResponse.json();

  return {artists, performances};
}

