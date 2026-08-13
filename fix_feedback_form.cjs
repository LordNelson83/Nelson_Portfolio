const fs = require("fs");
const path = require("path");

const full = path.join(__dirname, "src/pages/[lang]/kontakta.astro");
let content = fs.readFileSync(full, "utf8");

const anchor = "  </div>\n</BaseLayout>\n\n<script>";

const newBlock = "  </div>\n\n    <div class=\"kt-feedback js-reveal\">\n      <p class=\"kt-feedback__eyebrow\">{feedbackLabels.eyebrow}</p>\n      <h2 class=\"kt-feedback__title\">{feedbackLabels.title}</h2>\n      <p class=\"kt-feedback__sub\">{feedbackLabels.sub}</p>\n      <form\n        name=\"portfolio-feedback\"\n        method=\"POST\"\n        data-netlify=\"true\"\n        netlify-honeypot=\"bot-field\"\n        class=\"kt-feedback__form\"\n        id=\"feedback-form\"\n      >\n        <input type=\"hidden\" name=\"form-name\" value=\"portfolio-feedback\" />\n        <p class=\"kt-feedback__hidden\">\n          <label>Dont fill this out: <input name=\"bot-field\" /></label>\n        </p>\n        <textarea\n          name=\"message\"\n          required\n          rows=\"4\"\n          placeholder={feedbackLabels.placeholder}\n        ></textarea>\n        <div class=\"kt-feedback__row\">\n          <input type=\"text\" name=\"role\" placeholder={feedbackLabels.rolePlaceholder} />\n          <input type=\"email\" name=\"email\" placeholder={feedbackLabels.emailPlaceholder} />\n        </div>\n        <button type=\"submit\">{feedbackLabels.submit}</button>\n        <p class=\"kt-feedback__status\" id=\"feedback-status\" role=\"status\" aria-live=\"polite\"></p>\n      </form>\n    </div>\n  </div>\n</BaseLayout>\n\n<script define:vars={{ feedbackLabels }}>\n  const form = document.getElementById(\"feedback-form\");\n  const status = document.getElementById(\"feedback-status\");\n  if (form) {\n    form.addEventListener(\"submit\", async (e) => {\n      e.preventDefault();\n      const data = new FormData(form);\n      try {\n        await fetch(\"/\", {\n          method: \"POST\",\n          headers: { \"Content-Type\": \"application/x-www-form-urlencoded\" },\n          body: new URLSearchParams(data).toString(),\n        });\n        status.textContent = feedbackLabels.success;\n        form.reset();\n      } catch (err) {\n        status.textContent = feedbackLabels.error;\n      }\n    });\n  }\n</script>\n\n<script>";

if (content.includes(anchor)) {
  content = content.replace(anchor, newBlock);
} else {
  console.error("AVISO: no encontre el punto de insercion exacto.");
  process.exit(1);
}

const labelsBlock = "const FEEDBACK_LABELS = {\n  sv: { eyebrow: \"Feedback\", title: \"Vad tycker du?\", sub: \"Har du n\u00e5gra tankar om portfoliot? Jag l\u00e4ser allt.\", placeholder: \"Skriv din feedback h\u00e4r...\", rolePlaceholder: \"Din roll (valfritt)\", emailPlaceholder: \"E-post (valfritt, om du vill ha svar)\", submit: \"Skicka\", success: \"Tack f\u00f6r din feedback!\", error: \"N\u00e5got gick fel, f\u00f6rs\u00f6k igen.\" },\n  en: { eyebrow: \"Feedback\", title: \"What do you think?\", sub: \"Any thoughts on the portfolio? I read everything.\", placeholder: \"Write your feedback here...\", rolePlaceholder: \"Your role (optional)\", emailPlaceholder: \"Email (optional, if you want a reply)\", submit: \"Send\", success: \"Thanks for your feedback!\", error: \"Something went wrong, try again.\" },\n  es: { eyebrow: \"Feedback\", title: \"\u00bfQu\u00e9 opinas?\", sub: \"\u00bfAlguna idea sobre el portafolio? Leo todo.\", placeholder: \"Escribe tu feedback aqu\u00ed...\", rolePlaceholder: \"Tu rol (opcional)\", emailPlaceholder: \"Correo (opcional, si quieres respuesta)\", submit: \"Enviar\", success: \"\u00a1Gracias por tu feedback!\", error: \"Algo sali\u00f3 mal, intenta de nuevo.\" },\n};\n";

const frontmatterMatch = content.match(/^---\n/);
if (frontmatterMatch) {
  const insertAt = frontmatterMatch.index + frontmatterMatch[0].length;
  content = content.slice(0, insertAt) + labelsBlock + content.slice(insertAt);
}

const langVarPattern = /const lang = Astro\.params\.lang;/;
if (langVarPattern.test(content)) {
  content = content.replace(langVarPattern, "const lang = Astro.params.lang;\nconst feedbackLabels = FEEDBACK_LABELS[lang] || FEEDBACK_LABELS.sv;");
} else {
  console.error("AVISO: no encontre la variable 'lang'. Revisemos el frontmatter manualmente.");
}

fs.writeFileSync(full, content, "utf8");
console.log("kontakta.astro: formulario de feedback agregado");
