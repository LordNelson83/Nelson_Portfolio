const fs = require("fs");
const path = require("path");

function apply(filePath, edits, label) {
  const full = path.join(__dirname, filePath);
  let content = fs.readFileSync(full, "utf8");
  let ok = 0;
  for (const [oldStr, newStr] of edits) {
    if (content.includes(oldStr)) {
      content = content.split(oldStr).join(newStr);
      ok++;
    } else {
      console.error("AVISO en " + label + ": no encontre un bloque esperado.");
    }
  }
  fs.writeFileSync(full, content, "utf8");
  console.log(label + ": " + ok + "/" + edits.length + " cambios aplicados");
}

const LB_LABELS_BLOCK = `
const LB_LABELS = {
  sv: { close: "Stang", prev: "Foregaende bild", next: "Nasta bild", view: "Visa bild i storre format" },
  en: { close: "Close", prev: "Previous image", next: "Next image", view: "View enlarged image" },
  es: { close: "Cerrar", prev: "Imagen anterior", next: "Imagen siguiente", view: "Ver imagen ampliada" },
};`;

apply("src/components/ProjekterIsland.jsx", [
  [
    `import { useEffect, useRef, useState } from "react";`,
    `import { useEffect, useRef, useState } from "react";\nimport Lightbox from "./Lightbox";\n` + LB_LABELS_BLOCK
  ],
  [
    `  const [activeScreen,    setActiveScreen]    = useState(0);\n  const [activeAhrScreen, setActiveAhrScreen] = useState(0);`,
    `  const [activeScreen,    setActiveScreen]    = useState(0);\n  const [activeAhrScreen, setActiveAhrScreen] = useState(0);\n  const [lightboxGallery, setLightboxGallery] = useState(null);\n  const lbLabels = LB_LABELS[lang] || LB_LABELS.sv;`
  ],
  [
    `                    <img src={src} alt={ahrScreens[i]?.alt || ""} className="pk-gallery__img" />`,
    `                    <button type="button" className="pk-gallery__img-btn" onClick={() => setLightboxGallery("ahr")} aria-label={lbLabels.view}>\n                      <img src={src} alt={ahrScreens[i]?.alt || ""} className="pk-gallery__img" />\n                    </button>`
  ],
  [
    `                          <img src={src} alt={oakScreens[i]?.alt || ""} className="pk-gallery__img" />`,
    `                          <button type="button" className="pk-gallery__img-btn" onClick={() => setLightboxGallery("oak")} aria-label={lbLabels.view}>\n                            <img src={src} alt={oakScreens[i]?.alt || ""} className="pk-gallery__img" />\n                          </button>`
  ],
  [
    `        <a href={"/" + lang + "/kontakta"} className="pk-cta__btn">{pk.ctaBtn}</a>\n      </footer>\n\n    </main>\n  );\n}`,
    `        <a href={"/" + lang + "/kontakta"} className="pk-cta__btn">{pk.ctaBtn}</a>\n      </footer>\n\n      {lightboxGallery === "ahr" && (\n        <Lightbox\n          images={AHR_IMGS.map((src, i) => ({ src, alt: ahrScreens[i]?.alt || "" }))}\n          index={activeAhrScreen}\n          onClose={() => setLightboxGallery(null)}\n          onPrev={() => setActiveAhrScreen(i => (i - 1 + AHR_IMGS.length) % AHR_IMGS.length)}\n          onNext={() => setActiveAhrScreen(i => (i + 1) % AHR_IMGS.length)}\n          prevLabel={lbLabels.prev} nextLabel={lbLabels.next} closeLabel={lbLabels.close}\n        />\n      )}\n      {lightboxGallery === "oak" && (\n        <Lightbox\n          images={OAK_IMGS.map((src, i) => ({ src, alt: oakScreens[i]?.alt || "" }))}\n          index={activeScreen}\n          onClose={() => setLightboxGallery(null)}\n          onPrev={() => setActiveScreen(i => (i - 1 + OAK_IMGS.length) % OAK_IMGS.length)}\n          onNext={() => setActiveScreen(i => (i + 1) % OAK_IMGS.length)}\n          prevLabel={lbLabels.prev} nextLabel={lbLabels.next} closeLabel={lbLabels.close}\n        />\n      )}\n\n    </main>\n  );\n}`
  ],
], "ProjekterIsland.jsx");

apply("src/components/OakCaseIsland.jsx", [
  [
    `import { useEffect, useRef, useState } from "react";`,
    `import { useEffect, useRef, useState } from "react";\nimport Lightbox from "./Lightbox";\n` + LB_LABELS_BLOCK
  ],
  [
    `  const [activeScreen, setActiveScreen] = useState(0);`,
    `  const [activeScreen, setActiveScreen] = useState(0);\n  const [lightboxOpen, setLightboxOpen] = useState(false);\n  const lbLabels = LB_LABELS[lang] || LB_LABELS.sv;`
  ],
  [
    `                <img src={img} alt={screens[i]?.alt ?? ""} className="oc-gallery__img" loading="lazy" />`,
    `                <button type="button" className="pk-gallery__img-btn" onClick={() => setLightboxOpen(true)} aria-label={lbLabels.view}>\n                  <img src={img} alt={screens[i]?.alt ?? ""} className="oc-gallery__img" loading="lazy" />\n                </button>`
  ],
  [
    `        <a href={"/" + lang + "/kontakta"} className="oc-cta__btn">{oakData.ctaBtn}</a>\n      </footer>\n\n    </div>\n  );\n}`,
    `        <a href={"/" + lang + "/kontakta"} className="oc-cta__btn">{oakData.ctaBtn}</a>\n      </footer>\n\n      {lightboxOpen && (\n        <Lightbox\n          images={IMGS.map((src, i) => ({ src, alt: screens[i]?.alt || "" }))}\n          index={activeScreen}\n          onClose={() => setLightboxOpen(false)}\n          onPrev={() => setActiveScreen(i => (i - 1 + IMGS.length) % IMGS.length)}\n          onNext={() => setActiveScreen(i => (i + 1) % IMGS.length)}\n          prevLabel={lbLabels.prev} nextLabel={lbLabels.next} closeLabel={lbLabels.close}\n        />\n      )}\n\n    </div>\n  );\n}`
  ],
], "OakCaseIsland.jsx");