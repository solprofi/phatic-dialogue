import { dictionary } from './dictionary';

export const parseEntry = (text, fieldName) => {
  let elements = [];
  Object.keys(dictionary).forEach(mood => {
    elements = [...elements, ...dictionary[mood][fieldName]];
  });

  return elements.find(el => text.includes(el));
}

export const isWisdom = text => {
  return text.includes('мудрость') ||
    text.includes('совет') ||
    text.includes('что скажешь') ||
    text.includes('расскажи') ||
    text.includes('историю');
}

export const isWeather = text => {
  return text.includes('погода') ||
    text.includes('погодой') ||
    text.includes('погоды');
}

export const isNews = text => {
  return text.includes('как дела') ||
    text.includes('что нового') ||
    text.includes('что как') ||
    text.includes('как ты') ||
    text.includes('шо там') ||
    text.includes('что там') ||
    text.includes('чо как') ||
    text.includes('как жизнь');
}

export const isJoke = text => {
  return text.includes('шутка') ||
    text.includes('шутейка') ||
    text.includes('рофл') ||
    text.includes('прикол');
}

export const getRandomEntry = arr => arr[Math.floor(Math.random() * arr.length)];