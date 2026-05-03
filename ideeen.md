# GevoelsAtlas — Ideeën & open punten

*Laatste review: 29 april 2026*

Dit bestand is privé — staat niet op de website. Bedoeld om af en toe naar terug te keren, dingen af te vinken, nieuwe ideeën bij te schrijven.

---

## Wat sterk staat (om vast te houden)

- Visuele consistentie over alle vier pagina's — herkenbaar handschrift
- 5-stap-flow op mobiel binnen 30 seconden af
- Splash herkent terugkerende bezoekers (andere subtitel)
- Gevoelswolk + "alleen deze"-knop in dagboek: inzoom én overzicht
- Poster-pagina maakt het meer dan een tooltje — een kunstwerk om mee te nemen
- localStorage-only privacy, expliciet uitgelegd

---

## Wat aandacht verdient

### 1. Dagboek-export & -import — hoog ✓ KLAAR (29 apr 2026)

Zonder dit verlies je *alles* bij een browser-wis. Voor jongeren die maandenlang sessies bewaren is dat broos.

- [x] Knop "Download mijn dagboek" → JSON-bestand (`gevoelsatlas-dagboek-YYYY-MM-DD.json`)
- [x] Knop "Importeer dagboek" → JSON-upload, samenvoegt zonder te overschrijven (dedupe op datum)
- [x] Korte uitleg "Bewaar een kopie" in een eigen sectie onderaan het dagboek
- [x] Op het lege scherm: subtiele "Heb je eerder een back-up gemaakt? Importeer dagboek"-link
- [x] Foutmeldingen voor ongeldige bestanden, getest met 5 scenario's (nieuw, dubbel, ongeldig JSON, legacy array, random object)

### 2. Crisis-vangnet — hoog voor pilots zorg/onderwijs ✓ KLAAR (3 mei 2026)

Bewust gekozen voor passieve aanpak: geen triggers op gezichtjes of woorden (te diagnostisch), maar altijd aanwezige stille link.

- [x] Eindscherm index.html: "Soms is een gesprek fijn. Kindertelefoon: 0800-0432 (gratis, altijd open)" — klein, muted, na een dunne scheidingslijn
- [x] about.html mentor-sectie: "Signaleer je iets zwaarders? Kindertelefoon (0800-0432) en 113 Zelfmoordpreventie" — praktisch, voor begeleiders
- [x] Geen pop-up, geen trigger op gezichtskeuze, geen belemmeringen voor de speelse/grappige toon

### 3. Toegankelijkheid — medium

- [ ] `prefers-reduced-motion` respecteren in splash, step-overlay, gevoelswolk
- [ ] `aria-label` op icon-only knoppen (lightbox-sluiters, favoriet-hartjes, etc.)
- [ ] Contrast van `--soft: #555` op `--bg: #F7F5EE` controleren tegen WCAG AA
- [ ] Op gedeelde schoolapparaten benoemen in mentor-sectie van about.html

### 4. Halverwege afbreken = sessie kwijt — laag

Geen waarschuwing of draft. Op zich gezond ("dit is een momentopname"), maar misschien een klein lijntje waard.

---

## Ideeën om over te dromen

### Klein, hoog rendement
- [ ] Tip "wist je dat je kunt zoeken op categorie?" — alleen bij eerste sessie
- [ ] Mini-kalender in dagboek met een dot per dag dat je een sessie deed

### Middelgroot
- [ ] **Snelle check-in (1 stap)** voor terugkerende gebruikers — naast de volle 5-stap-atlas
- [ ] **Stem-input** voor notities (Web Speech API, gratis, werkt op mobiel)
- [ ] **Mentor-modus** via URL-parameter — gespreksstarters meteen op het eindscherm

### Groot, strategisch
- [ ] **Fysieke kaartenset met QR** — gezichtjes als drukwerk, QR naar de webapp. Past bij Jolien-Beeldendwerk en bij gebruik in zorg/onderwijs waar fysiek vaak beter werkt dan een scherm.
- [ ] **Vergelijken sessies** — twee dagen naast elkaar, of vandaag vs. een maand geleden
- [ ] **Groeps-rapportage voor scholen** — geanonimiseerde wolk-trends per klas, zonder dat individuele data het apparaat verlaat

---

## Aantekeningen onderweg

*(Hier kun je gedachtes, observaties, of dingen die je in pilots opviel toevoegen.)*

