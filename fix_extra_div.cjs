const fs = require("fs");
const path = require("path");

const full = path.join(__dirname, "src/pages/[lang]/kontakta.astro");
let content = fs.readFileSync(full, "utf8");

const oldBlock = "      </form>\n    </div>\n  </div>\n</BaseLayout>";
const newBlock = "      </form>\n    </div>\n</BaseLayout>";

if (content.includes(oldBlock)) {
  content = content.replace(oldBlock, newBlock);
  fs.writeFileSync(full, content, "utf8");
  console.log("kontakta.astro: etiqueta div sobrante eliminada");
} else {
  console.error("AVISO: no encontre el patron exacto. Puede que la indentacion sea distinta.");
}
