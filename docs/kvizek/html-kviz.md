---
id: html-kviz
title: HTML Tudáspróba    # Ez jelenik meg az oldal tetején
sidebar_label: HTML Kvíz  # Ez jelenik meg a bal oldali menüben
---

import Quiz from '@site/src/components/Quiz';

<Quiz
  questions={[
    {
      question: 'Mi a HTML?',
      options: [
        'Jelölőnyelv weboldalak készítéséhez',
        'Programozási nyelv',
        'Képszerkesztő program',
        'Adatbázis-kezelő rendszer'
      ],
      correctAnswer: 0,
      explanation: 'A HTML (HyperText Markup Language) egy jelölőnyelv, amelyet weboldalak szerkezetének leírására használunk.'
    },
    {
      question: 'Melyik elem használatos címsor létrehozására?',
      options: [
        '<header>',
        '<heading>',
        '<h1>',
        '<title>'
      ],
      correctAnswer: 2,
      explanation: 'A <h1> elem (és h1-től h6-ig) szolgál címsorok létrehozására HTML-ben.'
    }
  ]}
/>