const ENDPOINT =
  "https://api.rawg.io/api/platforms?key=21dd3ea253de44a6bc6c827eedc10926";

export const fetchPlatforms = () => {
  return fetch(ENDPOINT).then((resp) => resp.json());
};
