const fs = require("fs");
const path = require("path");

const full = path.join(__dirname, "src/components/ProjekterIsland.jsx");
let content = fs.readFileSync(full, "utf8");

const LB_LABELS_BLOCK = "\nconst LB_LABELS = {\n  sv: { close: \"Stang\", prev: \"Foregaende bild\", next: \"Nasta bild\", view: \"Visa bild i storre format\" },\n  en: { close: \"Close\", prev: \"Previous image\", next: \"Next image\", view: \"View enlarged image\" },\n  es: { close: \"Cerrar\", prev: \"Imagen anterior\", next: \"Imagen siguiente\", view: \"Ver imagen ampliada\" },\n};";

const edits = [
  [
    "import { useEffect, useRef, useState } from \"react\";",
    "import { useEffect, useRef, useState } from \"react\";\nimport Lightbox from \"./Lightbox\";\n" + LB_LABELS_BLOCK
  ],
  [
    "  const [activeScreen,    setActiveScreen]    = useState(0);\n  const [activeAhrScreen, setActiveAhrScreen] = useState(0);",
    "  const [activeScreen,    setActiveScreen]    = useState(0);\n  const [activeAhrScreen, setActiveAhrScreen] = useState(0);\n  const [lightboxGallery, setLightboxGallery] = useState(null);\n  const lbLabels = LB_LABELS[lang] || LB_LABELS.sv;"
  ],
  [
    "                    <img src={src} alt={ahrScreens[i]?.alt || \"\"} className=\"pk-gallery__img\" />",
    "                    <button type=\"button\" className=\"pk-gallery__img-btn\" onClick={() => setLightboxGallery(\"ahr\")} aria-label={lbLabels.view}>\n                      <img src={src} alt={ahrScreens[i]?.alt || \"\"} className=\"pk-gallery__img\" />\n                    </button>"
  ],
  [
    "                          <img src={src} alt={oakScreens[i]?.alt || \"\"} className=\"pk-gallery__img\" />",
    "                          <button type=\"button\" className=\"pk-gallery__img-btn\" onClick={() => setLightboxGallery(\"oak\")} aria-label={lbLabels.view}>\n                            <img src={src} alt={oakScreens[i]?.alt || \"\"} className=\"pk-gallery__img\" />\n                          </button>"
  ],
  [
    "        <a href={\"/\" + lang + \"/kontakta\"} className=\"pk-cta__btn\">{pk.ctaBtn}</a>\n      </footer>\n\n    </main>\n  );\n}",
    "        <a href={\"/\" + lang + \"/kontakta\"} className=\"pk-cta__btn\">{pk.ctaBtn}</a>\n      </footer>\n\n      {lightboxGallery === \"ahr\" && (\n        <Lightbox\n          images={AHR_IMGS.map((src, i) => ({ src, alt: ahrScreens[i]?.alt || \"\" }))}\n          index={activeAhrScreen}\n          onClose={() => setLightboxGallery(null)}\n          onPrev={() => setActiveAhrScreen(i => (i - 1 + AHR_IMGS.length) % AHR_IMGS.length)}\n          onNext={() => setActiveAhrScreen(i => (i + 1) % AHR_IMGS.length)}\n          prevLabel={lbLabels.prev} nextLabel={lbLabels.next} closeLabel={lbLabels.close}\n        />\n      )}\n      {lightboxGallery === \"oak\" && (\n        <Lightbox\n          images={OAK_IMGS.map((src, i) => ({ src, alt: oakScreens[i]?.alt || \"\" }))}\n          index={activeScreen}\n          onClose={() => setLightboxGallery(null)}\n          onPrev={() => setActiveScreen(i => (i - 1 + OAK_IMGS.length) % OAK_IMGS.length)}\n          onNext={() => setActiveScreen(i => (i + 1) % OAK_IMGS.length)}\n          prevLabel={lbLabels.prev} nextLabel={lbLabels.next} closeLabel={lbLabels.close}\n        />\n      )}\n\n    </main>\n  );\n}"
  ],
];

let ok = 0;
for (const [oldStr, newStr] of edits) {
  if (content.includes(oldStr)) {
    content = content.split(oldStr).join(newStr);
    ok++;
  } else {
    console.error("AVISO: no encontre un bloque esperado (edit #" + (ok + 1) + ")");
  }
}
fs.writeFileSync(full, content, "utf8");
console.log("ProjekterIsland.jsx: " + ok + "/4 cambios aplicados");