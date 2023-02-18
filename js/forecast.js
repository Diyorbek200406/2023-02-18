const KEY = "dcdd8a5a9fde98bf810ed3b884c0e992";

//  Request get data

const getData = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&units=metric&appid=${KEY}`;
  loader(true)
  const req = await fetch(base + query);
  const data = await req.json();
  loader(false)
  return data;
};
