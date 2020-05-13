import React, { useEffect, useState } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import {
  MAGIC_PHRASE,
  CHAT_TITLE,
  CHAT_SUBTITLE,
  START_MESSAGE,
  dictionary,
  wisdom,
} from './dictionary';
import {
  parseEntry,
  getRandomEntry,
  isWisdom,
  isWeather,
  isNews,
  isJoke,
} from './parseUtils';
import 'react-chat-widget/lib/styles.css';
import logo from './logo.jpg';

const App = () => {
  const [mood, setMood] = useState(1);
  const [greetingsCount, setGreetingsCount] = useState(0);

  const MOOD_COUNT = Object.keys(dictionary).length;

  useEffect(() => {
    addResponseMessage(START_MESSAGE);
  }, []);

  const handleNewUserMessage = newMessage => {
    const text = newMessage.toLowerCase();

    if (text.includes(MAGIC_PHRASE)) {
      setMood(0);
      addResponseMessage('УИИИИ');
    } else if (isWisdom(text)) {
      addResponseMessage(getRandomEntry(wisdom) + '© Джейсон Стетхем');
    } else if (isWeather(text)) {
      addResponseMessage(getRandomEntry(dictionary[mood].weather));
    } else if (text === 'корона') {
      addResponseMessage('вирус');
    } else if (isJoke(text)) {
      addResponseMessage(getRandomEntry(dictionary[mood].joke))
    } else if (isNews(text)) {
      addResponseMessage(getRandomEntry(dictionary[mood].news));
    } else if (parseEntry(text, 'greetings')) {
      if (mood !== MOOD_COUNT - 1) {
        if (greetingsCount > 0) {
          setMood(mood + 1);
        }
        setGreetingsCount(greetingsCount + 1);
      }

      const greetings = dictionary[mood].greetings;
      addResponseMessage(getRandomEntry(greetings));
    } else {
      addResponseMessage(getRandomEntry(dictionary[mood].default));
    }
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      profileAvatar={logo}
      title={CHAT_TITLE}
      subtitle={CHAT_SUBTITLE}
      senderPlaceHolder={dictionary[mood].placeholder}
    />
  );
}

export default App;