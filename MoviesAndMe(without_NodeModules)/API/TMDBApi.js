const API_TOKEN = "548b17cc692fbaa31263c84cc229f018"

export function getFilmsFromApiWithSearchedText(text){
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}
