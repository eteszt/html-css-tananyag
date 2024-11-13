---
id: css-basics
title: CSS alapok
sidebar_label: 'CSS alapok'
description: 'Bevezetés a CSS (Cascading Style Sheets) világába - stílusok alkalmazása, szelektorok, színek, betűtípusok és formázás'
keywords: [css, styles, selectors, styling, web design, colors, fonts, formatting]
sidebar_position: 5
tags: [css, kezdő]
---


# CSS alapok

## 1. Mi a CSS és mire használjuk?

A CSS (Cascading Style Sheets = Lépcsőzetes Stíluslapok) egy stílusleíró nyelv, amely meghatározza, hogyan jelenjenek meg a HTML elemek a képernyőn.

### CSS használatával szabályozhatjuk:
- Színeket
- Betűtípusokat
- Térközöket
- Elrendezést
- Animációkat
- És még sok mást

## 2. CSS elhelyezési módok

### 1. Külső stíluslap (Ajánlott!)
```html
<!-- A HTML fájlban: -->
<head>
    <link rel="stylesheet" href="stilus.css">
</head>
```
```css
/* stilus.css fájlban: */
p {
    color: blue;
}
```

### 2. Belső stíluslap (Nem ajánlott)
```html
<head>
    <style>
        p {
            color: blue;
        }
    </style>
</head>
```

### 3. Soron belüli stílus (Kerülendő!)
```html
<p style="color: blue;">Kék szöveg</p>
```

## 3. CSS szabályok felépítése

### Szintaxis
```css
szelektor {
    tulajdonság: érték;
    masik-tulajdonsag: érték;
}
```

### Példa
```css
p {
    color: blue;
    font-size: 16px;
    margin: 10px;
}
```

## 4. Szelektor típusok

### 1. Elem szelektor
```css
p {
    color: blue;
}
```

### 2. Osztály szelektor (.)
```css
.kiemelt {
    background-color: yellow;
}
```
```html
<p class="kiemelt">Kiemelt szöveg</p>
```

### 3. Azonosító szelektor (#)
```css
#fooldal {
    background-color: gray;
}
```
```html
<div id="fooldal">Főoldal tartalma</div>
```

### 4. Összetett szelektorok
```css
/* Minden p elem a kiemelt osztályon belül */
.kiemelt p {
    font-weight: bold;
}

/* Elemek, amelyek mindkét osztállyal rendelkeznek */
.kiemelt.fontos {
    border: 1px solid red;
}
```

## 5. CSS specifikusság

A specifikusság határozza meg, hogy melyik stílus érvényesül, ha több szabály vonatkozik ugyanarra az elemre.

### Specifikusság sorrendje (növekvő):
1. Elem szelektorok
2. Osztály szelektorok
3. Azonosító szelektorok
4. Inline stílusok

### Példa
```css
p { color: blue; }                  /* Specifikusság: 1 */
.kiemelt { color: red; }           /* Specifikusság: 10 */
#egyedi { color: green; }          /* Specifikusság: 100 */
```

## 6. CSS öröklődés

Bizonyos CSS tulajdonságok öröklődnek a szülő elemektől.

### Példa
```css
body {
    font-family: Arial;
    color: black;
}
/* Minden body-n belüli elem örökli ezeket a tulajdonságokat, 
   hacsak nincs felülírva */
```

## 7. Gyakran használt CSS tulajdonságok

### Szövegformázás
```css
p {
    color: blue;                /* szövegszín */
    font-family: Arial;         /* betűtípus */
    font-size: 16px;           /* betűméret */
    font-weight: bold;         /* betűvastagság */
    text-align: center;        /* szövegigazítás */
}
```

### Doboz modell
```css
div {
    margin: 10px;              /* külső margó */
    padding: 15px;             /* belső margó */
    border: 1px solid black;   /* szegély */
    width: 200px;             /* szélesség */
    height: 100px;            /* magasság */
}
```

### Színek megadása
```css
div {
    color: red;                /* névvel */
    background-color: #FF0000; /* hexadecimális */
    border-color: rgb(255,0,0);/* RGB */
}
```

## 8. Jó gyakorlatok

1. **Fájlszervezés**
   - Használj külső CSS fájlt
   - Nevezd el érthetően a fájlokat
   - Szervezd logikusan a szabályokat

2. **Kódolás**
   - Használj beszédes osztályneveket
   - Tartsd be a behúzásokat
   - Kommentezd a bonyolultabb részeket

3. **Optimalizálás**
   - Kerüld az inline stílusokat
   - Ne használj felesleges szelektorokat
   - Csoportosítsd az azonos tulajdonságokat

## 9. Gyakorló feladatok

### 1. Alapszintű feladat
Készíts egy stíluslapot, amely:
- Beállítja az oldal betűtípusát Arial-ra
- A címsorokat középre igazítja
- A bekezdéseknek ad margót

### 2. Haladó feladat
Készíts egy stíluslapot egy egyszerű cikkhez:
- Különböző stílusú címsorok
- Kiemelt bekezdések
- Linkek különböző állapotai (hover, visited)

## 10. Ellenőrző kérdések

1. Mi a különbség a belső és külső stíluslap között?
2. Hogyan működik a CSS specifikusság?
3. Melyek a leggyakrabban használt szelektor típusok?
4. Mik a CSS öröklődés szabályai?
5. Miért érdemes külső stíluslapot használni?

---

A következő leckében részletesebben foglalkozunk a CSS tulajdonságokkal és azok használatával.
