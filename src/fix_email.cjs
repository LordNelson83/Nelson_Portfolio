const fs = require("fs");
const path = require("path");

const translationsPath = path.join(__dirname, "src/i18n/translations.js");
const kontaktaPath = path.join(__dirname, "src/pages/[lang]/kontakta.astro");

// --- 1. translations.js ---
let t = fs.readFileSync(translationsPath, "utf8");

// Quita cualquier línea "email:" agregada a mano previamente (evita duplicados)
t = t.split("\n").filter(line => !/^\s*email:\s*"nelsonpenna83@gmail\.com",\s*$/.test(line)).join("\n");

// Busca cada línea "cvSub:  "...",", sin importar el texto exacto adentro
const cvSubPattern = /( {6}cvSub:\s*"[^"]*",\n)/g;
const matches = t.match(cvSubPattern);

if (!matches || matches.length !== 3) {
  console.error("Se esperaban 3 coincidencias de 'cvSub:' (sv, en, es), se encontraron: " + (matches ? matches.length : 0));
  console.error("No se modifico translations.js. Pega aqui el resultado para revisar juntos.");
  process.exit(1);
}

// El orden en el archivo es: sv, en, es (confirmado por la estructura del proyecto)
const inserts = [
  '      email:      "E-post",\n      emailSub:   "nelsonpenna83@gmail.com",\n',
  '      email:      "Email",\n      emailSub:   "nelsonpenna83@gmail.com",\n',
  '      email:      "Correo",\n      emailSub:   "nelsonpenna83@gmail.com",\n',
];

let i = 0;
t = t.replace(cvSubPattern, (match) => match + inserts[i++]);

fs.writeFileSync(translationsPath, t, "utf8");
console.log("translations.js actualizado (sv, en, es)");

// --- 2. kontakta.astro ---
let k = fs.readFileSync(kontaktaPath, "utf8");

const emailLinkPattern = /<a href=\{"mailto:" \+ t\("contact", "email"\)\} class="kt-link kt-link--email js-reveal">\s*<span class="kt-link__icon"[^>]*>.*?<\/span>\s*<span class="kt-link__label">\{t\("contact", "email"\)\}<\/span>\s*<span class="kt-link__arrow"[^>]*>.*?<\/span>\s*<\/a>/s;

if (!emailLinkPattern.test(k)) {
  console.error("No encontre el bloque del link de email en kontakta.astro.");
  console.error("translations.js SI se actualizo. Revisemos kontakta.astro a mano.");
  process.exit(1);
}

k = k.replace(emailLinkPattern,
`<a href={"mailto:" + t("contact", "emailSub")} class="kt-link kt-link--email js-reveal">
          <span class="kt-link__label">{t("contact", "email")}</span>
          <span class="kt-link__sub">{t("contact", "emailSub")}</span>
          <span class="kt-link__arrow" aria-hidden="true">↗</span>
        </a>`);

fs.writeFileSync(kontaktaPath, k, "utf8");
console.log("kontakta.astro actualizado (icono removido, patron label+sub aplicado)");