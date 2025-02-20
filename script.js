// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-key': '9ed36b9c3fmshf90fc195107efe5p16455djsnf28fcf138f69',
//     'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
//   }
// };

// async function getWeather() {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Call the function to fetch weather data
// getWeather();


const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '9ed36b9c3fmshf90fc195107efe5p16455djsnf28fcf138f69',
    'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

fetch(url, options)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.error(error));
