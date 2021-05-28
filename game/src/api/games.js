const ENDPOINT =
  "https://api.rawg.io/api/games?key=21dd3ea253de44a6bc6c827eedc10926";

export const fetchGames = (platformId = null) => {
  let url = ENDPOINT;
  if (platformId) {
    url += `&platforms=${platformId}`;
  }
  return fetch(url).then((resp) => resp.json());
};
