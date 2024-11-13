---
id: css-properties
title: CSS tulajdonságok és értékek
sidebar_label: 'CSS tulajdonságok'
description: 'CSS tulajdonságok részletes bemutatása - szövegformázás, színek, méretek, térközök, szegélyek és háttér beállítások'
keywords: [css, properties, values, text formatting, colors, dimensions, spacing, borders, background]
sidebar_position: 6
tags: [css, kezdő]
---

# CSS tulajdonságok és értékek

## 1. Szövegformázás tulajdonságai

### Betűtípus beállítása
```css
p {
    font-family: Arial, sans-serif;  /* Elsődleges és tartalék betűtípus */
}
```

Gyakori betűtípus-családok:
- `serif` - talpas betűk (pl. Times New Roman)
- `sans-serif` - talp nélküli betűk (pl. Arial)
- `monospace` - fix szélességű betűk (pl. Courier)

### Betűméret
```css
p {
    font-size: 16px;                /* Pixelben megadva */
    font-size: 1.2em;               /* Relatív méret */
    font-size: 120%;                /* Százalékos méret */
}
```

### Betűstílus és vastagság
```css
p {
    font-weight: bold;              /* Félkövér */
    font-weight: normal;            /* Normál */
    font-style: italic;             /* Dőlt */
}
```

### Szövegigazítás
```css
p {
    text-align: left;               /* Balra */
    text-align: center;             /* Középre */
    text-align: right;              /* Jobbra */
    text-align: justify;            /* Sorkizárt */
}
```

## 2. Színek és háttér

### Szövegszín
```css
p {
    color: red;                     /* Névvel */
    color: #FF0000;                 /* Hexadecimális */
    color: rgb(255, 0, 0);         /* RGB */
}
```

### Háttérszín
```css
div {
    background-color: lightgray;    /* Névvel */
    background-color: #f0f0f0;      /* Hexadecimális */
}
```

### Átlátszóság
```css
div {
    opacity: 0.5;                   /* 0 és 1 között */
}
```

## 3. Méret és térköz

### Szélesség és magasság
```css
div {
    width: 200px;                   /* Fix szélesség */
    height: 100px;                  /* Fix magasság */
    max-width: 800px;              /* Maximum szélesség */
    min-height: 400px;             /* Minimum magasság */
}
```

### Margó (külső térköz)
```css
div {
    margin: 10px;                   /* Minden oldalon */
    margin-top: 10px;              /* Felül */
    margin-right: 20px;            /* Jobbra */
    margin-bottom: 10px;           /* Alul */
    margin-left: 20px;             /* Balra */
    
    /* Rövidített írásmód (fent, jobbra, lent, balra) */
    margin: 10px 20px 10px 20px;
}
```

### Padding (belső térköz)
```css
div {
    padding: 10px;                  /* Minden oldalon */
    padding-top: 10px;             /* Felül */
    padding-right: 20px;           /* Jobbra */
    padding-bottom: 10px;          /* Alul */
    padding-left: 20px;            /* Balra */
    
    /* Rövidített írásmód */
    padding: 10px 20px 10px 20px;
}
```

## 4. Szegélyek

### Alap szegély
```css
div {
    border: 1px solid black;       /* Vastagság, stílus, szín */
}
```

### Szegély részei külön
```css
div {
    border-width: 1px;             /* Vastagság */
    border-style: solid;           /* Stílus */
    border-color: black;           /* Szín */
}
```

### Szegély oldalanként
```css
div {
    border-top: 1px solid black;    /* Felső szegély */
    border-right: 2px dotted red;   /* Jobb szegély */
    border-bottom: 1px solid black; /* Alsó szegély */
    border-left: 2px dotted red;    /* Bal szegély */
}
```

## 5. Képek formázása

### Képméretezés
```css
img {
    width: 400px;                   /* Fix szélesség */
    height: auto;                   /* Arányos magasság */
    max-width: 100%;               /* Reszponzív méretezés */
}
```

### Kép igazítása
```css
img {
    display: block;                 /* Blokkszintű megjelenítés */
    margin: 0 auto;                /* Középre igazítás */
}
```

## 6. Jó gyakorlatok mértékegységeknél

### Mikor mit használjunk:
- `px` - Fix méreteknél (szegély, kis méretű elemek)
- `em` - Relatív betűméreteknél (az aktuális betűmérethez képest)
- `rem` - Relatív betűméreteknél (a gyökérelem betűméretéhez képest)
- `%` - Relatív szélességeknél, magasságoknál
- `vw`, `vh` - Viewport-függő méreteknél

### Példák:
```css
body {
    font-size: 16px;               /* Alap betűméret */
}

h1 {
    font-size: 2em;                /* Kétszeres betűméret */
}

.container {
    width: 80%;                    /* A szülő 80%-a */
    max-width: 1200px;            /* Maximum szélesség */
}
```

## 7. Gyakorlati példák

### 1. Cikk formázása
```css
article {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

article h1 {
    font-size: 2em;
    color: #333;
    text-align: center;
}

article p {
    margin-bottom: 1.2em;
    text-align: justify;
}
```

### 2. Kártya elem
```css
.card {
    width: 300px;
    padding: 20px;
    margin: 10px;
    background-color: white;
    border: 1px solid #ddd;
}

.card img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
}

.card h2 {
    color: #333;
    margin-bottom: 10px;
}
```

## 8. Ellenőrző kérdések

1. Mi a különbség a margin és padding között?
2. Hogyan lehet egy képet reszponzívvá tenni?
3. Mikor használjunk em-et és mikor px-et?
4. Hogyan lehet egy elemet vízszintesen középre igazítani?
5. Mi a különbség a színek különböző megadási módjai között?

## 9. Gyakorló feladatok

### 1. Alapfeladat
Készíts egy stíluslapot, amely:
- Beállít egy alapértelmezett betűtípust
- Megfelelő térközöket ad a bekezdéseknek
- A címsorokat középre igazítja
- A képeket reszponzívvá teszi

### 2. Haladó feladat
Készíts egy híroldal-szerű elrendezést:
- Főcím középen
- Bekezdések sorkizártan
- Képek középre igazítva
- Megfelelő térközök az elemek között

---

A következő leckében a CSS dobozmodellel fogunk részletesebben foglalkozni, amely segít megérteni, hogyan épülnek fel az elemek a weboldalon.
