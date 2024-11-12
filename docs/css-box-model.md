---
id: css-box-model
title: CSS dobozmodell
sidebar_label: 'CSS dobozmodell'
description: 'A CSS dobozmodell működése - margók, szegélyek, padding és tartalom, box-sizing tulajdonság használata, elemek méretezése'
keywords: [css, box model, margin, padding, border, box-sizing, width, height, dimensions]
sidebar_position: 7
tags: [css, kezdő]
---

# CSS dobozmodell - Kezdő tananyag

## 1. Mi a dobozmodell?

A CSS dobozmodell írja le, hogy a böngésző hogyan jeleníti meg az elemeket. Minden HTML elem egy téglalapként (dobozként) jelenik meg, amely a következő részekből áll (kívülről befelé):

1. Margó (margin) - külső térköz
2. Szegély (border) - keret
3. Belső margó (padding) - belső térköz
4. Tartalom (content) - maga az elem tartalma

### Vizuális megjelenítés:
```
+------------------------+
|       MARGIN          |
|  +----------------+   |
|  |    BORDER     |   |
|  |  +----------+ |   |
|  |  | PADDING  | |   |
|  |  |   +--+   | |   |
|  |  |   |  |   | |   |
|  |  |   +--+   | |   |
|  |  |CONTENT   | |   |
|  |  +----------+ |   |
|  +----------------+   |
+------------------------+
```

## 2. A dobozmodell részei

### 1. Tartalom (Content)
```css
div {
    width: 200px;     /* szélesség */
    height: 100px;    /* magasság */
}
```

### 2. Belső margó (Padding)
```css
div {
    padding: 20px;               /* minden oldalon 20px */
    padding: 10px 20px;         /* fent-lent 10px, jobb-bal 20px */
    padding: 10px 20px 15px 25px; /* fent, jobb, lent, bal */
    
    /* Vagy külön-külön: */
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 15px;
    padding-left: 25px;
}
```

### 3. Szegély (Border)
```css
div {
    border: 1px solid black;    /* vastagság stílus szín */
    
    /* Vagy részletesen: */
    border-width: 1px;
    border-style: solid;        /* solid, dotted, dashed, double stb. */
    border-color: black;
    
    /* Egy oldal külön: */
    border-top: 1px solid black;
    border-right: 2px dashed red;
    border-bottom: 3px dotted blue;
    border-left: 4px double green;
}
```

### 4. Margó (Margin)
```css
div {
    margin: 20px;               /* minden oldalon 20px */
    margin: 10px 20px;         /* fent-lent 10px, jobb-bal 20px */
    margin: 10px 20px 15px 25px; /* fent, jobb, lent, bal */
    
    /* Vagy külön-külön: */
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 15px;
    margin-left: 25px;
}
```

## 3. Box-sizing tulajdonság

### Az alapértelmezett dobozmodell (content-box)
```css
div {
    width: 200px;
    padding: 20px;
    border: 1px solid black;
    /* Teljes szélesség = 200px + 40px + 2px = 242px */
}
```

### Modern dobozmodell (border-box)
```css
div {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 1px solid black;
    /* Teljes szélesség = 200px */
}
```

## 4. Elemek méretezése

### Fix méret
```css
div {
    width: 200px;
    height: 100px;
}
```

### Minimum és maximum méretek
```css
div {
    min-width: 100px;
    max-width: 500px;
    min-height: 50px;
    max-height: 300px;
}
```

### Relatív méretek
```css
div {
    width: 50%;          /* szülő elem szélességének 50%-a */
    width: 20vw;         /* viewport szélesség 20%-a */
    height: 50vh;        /* viewport magasság 50%-a */
}
```

## 5. Túlcsordulás kezelése

### Overflow tulajdonság
```css
div {
    width: 200px;
    height: 100px;
    overflow: visible;    /* alapértelmezett - túllóg */
    overflow: hidden;     /* levágja a túllógó részt */
    overflow: scroll;     /* görgetősáv mindig */
    overflow: auto;       /* görgetősáv ha kell */
}
```

## 6. Gyakorlati példák

### 1. Kártya komponens
```css
.card {
    width: 300px;
    padding: 20px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

.card img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
}
```

### 2. Központosított konténer
```css
.container {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}
```

## 7. Jó gyakorlatok

1. **Box-sizing használata**
```css
/* Alkalmazzuk minden elemre */
* {
    box-sizing: border-box;
}
```

2. **Margók összeomlása (margin collapse)**
- Függőleges margók összeolvadnak
- A nagyobb margó érvényesül
```css
/* Használjunk padding-ot margó helyett, ha el akarjuk kerülni */
.elem {
    padding-top: 20px;
    padding-bottom: 20px;
}
```

3. **Relatív méretek használata**
```css
.responsive-elem {
    max-width: 100%;
    height: auto;
}
```

## 8. Gyakori hibák és megoldásaik

1. **Váratlan teljes szélesség**
```css
/* Probléma */
.box {
    width: 100px;
    padding: 20px;
    border: 1px solid black;
}

/* Megoldás */
.box {
    box-sizing: border-box;
    width: 100px;
}
```

2. **Margók összeomlása**
```css
/* Probléma */
.elem1 { margin-bottom: 20px; }
.elem2 { margin-top: 20px; }

/* Megoldás */
.elem1 { margin-bottom: 20px; }
.elem2 { padding-top: 20px; }
```

## 9. Gyakorló feladatok

### 1. Alapfeladat
Készíts egy kártya komponenst:
- Fix szélesség
- Padding minden oldalon
- Vékony szegély
- Lekerekített sarkok
- Középre igazított tartalom

### 2. Haladó feladat
Készíts egy reszponzív galériát:
- Flexibilis szélesség
- Maximum szélesség beállítása
- Megfelelő térközök az elemek között
- Túlcsordulás kezelése

## 10. Ellenőrző kérdések

1. Mik a dobozmodell fő részei?
2. Mi a különbség a content-box és border-box között?
3. Hogyan lehet egy elemet vízszintesen középre igazítani margókkal?
4. Mikor érdemes relatív méreteket használni?
5. Mit jelent a margók összeomlása?

---

A következő leckékben a különböző pozicionálási módszerekkel és a flexbox layouttal fogunk foglalkozni, amelyek segítenek az elemek pontos elhelyezésében a weboldalon.
