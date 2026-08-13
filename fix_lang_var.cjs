const fs = require("fs");
const path = require("path");

const full = path.join(__dirname, "src/pages/[lang]/kontakta.astro");
let content = fs.readFileSync(full, "utf8");

const oldLine = "const { lang } = Astro.params;";
const newLine = "const { lang } = Astro.params;\nconst feedbackLabels = FEEDBACK_LABELS[lang] || FEEDBACK_LABELS.sv;";

if (content.includes(oldLine)) {
  content = content.replace(oldLine, newLine);
  fs.writeFileSync(full, content, "utf8");
  console.log("kontakta.astro: variable feedbackLabels agregada correctamente");
} else {
  console.error("AVISO: sigue sin encontrar el patron. Necesitamos ver el archivo con Select-String.");
}
