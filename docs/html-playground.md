---
id: html-playground
title: HTML Gyakorló felület
sidebar_label: 'HTML Playground'
description: 'Interaktív HTML gyakorló felület kezdőknek'
keywords: [html, practice, playground, interactive, learning]
sidebar_position: 4
---

# HTML Gyakorló felület

Ez a gyakorló felület lehetővé teszi, hogy valós időben próbáld ki a HTML kódolást. Minden változtatás azonnal megjelenik, így könnyedén tanulhatod és gyakorolhatod a HTML elemek használatát.

## Interaktív Szerkesztő

```jsx live
function HTMLEditor() {
  return (
    <div className="playground-container">
      <div className="p-4 bg-gray-100 rounded-t-lg">
        <h2 className="text-xl font-bold mb-4">Próbáld ki a HTML-t!</h2>
        <p className="mb-4">Szerkeszd ezt a kódot és nézd meg az eredményt!</p>
      </div>
      <div className="language-html live-editor p-4 bg-white border-2 border-gray-200 rounded-b-lg">
        <h1>Üdvözöllek a gyakorló felületen!</h1>
        <p>Itt kipróbálhatod a HTML kódolást:</p>
        <ul>
          <li>Módosíthatod ezt a kódot</li>
          <li>Azonnal látod az eredményt</li>
          <li>Kísérletezz bátran!</li>
        </ul>
      </div>
    </div>
  );
}
```

## Tippek a gyakorláshoz

1. **Kezdd az alapoktól**
   - Próbáld ki a különböző címsorokat (`<h1>` - `<h6>`)
   - Hozz létre bekezdéseket (`<p>`)
   - Kísérletezz a szövegformázással (`<strong>`, `<em>`)

2. **Haladj a bonyolultabb elemek felé**
   - Készíts listákat (`<ul>`, `<ol>`, `<li>`)
   - Próbálj ki táblázatokat (`<table>`, `<tr>`, `<td>`)
   - Kísérletezz hivatkozásokkal (`<a href="">`)

## Minta feladatok

### 1. Egyszerű névjegy
Készíts egy névjegyet a következő elemekkel:
- A neved címsorként
- Rövid bemutatkozás bekezdésként
- Lista a hobbijaiddal
- Elérhetőségek külön bekezdésben

### 2. Mini blog post
Hozz létre egy blog bejegyzést:
- Cím
- Szerző és dátum
- Több bekezdésnyi tartalom
- Címkék listája