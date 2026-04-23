export const dateBuilder = (d) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
};

export const getWeatherIcon = (condition) => {
  const icons = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Drizzle: "🌦️",
    Thunderstorm: "⛈️",
    Snow: "❄️",
    Mist: "🌫️",
    Haze: "🌫️",
    Fog: "🌫️",
    Smoke: "🌫️",
    Dust: "🌪️",
    Sand: "🌪️",
    Tornado: "🌪️",
  };

  return icons[condition] || "🌡️";
};

export const getDayNight = () => {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 12) {
    return { label: "Morning", icon: "🌅" };
  }
  if (hour >= 12 && hour < 17) {
    return { label: "Afternoon", icon: "☀️" };
  }
  if (hour >= 17 && hour < 20) {
    return { label: "Evening", icon: "🌆" };
  }

  return { label: "Night", icon: "🌙" };
};
