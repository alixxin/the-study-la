import { chromium } from "playwright";
import { mkdirSync } from "fs";
mkdirSync("/workspace/screenshots", { recursive: true });
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox", "--disable-dev-shm-usage"] });

async function shot(page, name) {
  await page.screenshot({ path: `/workspace/screenshots/${name}.png`, fullPage: false });
  console.log("wrote", name);
}

// desktop
const desk = await browser.newPage({ viewport: { width: 1440, height: 900 } });
desk.on("pageerror", (e) => console.log("desk pageerror", e.message));
desk.on("console", (m) => { if (m.type() === "error") console.log("desk console", m.text()); });

await desk.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await desk.waitForTimeout(600);
await shot(desk, "studio-desk");
await desk.evaluate(() => window.scrollTo(0, 900));
await desk.waitForTimeout(300);
await shot(desk, "studio-row1");

await desk.goto("http://127.0.0.1:8080/study", { waitUntil: "networkidle" });
await desk.waitForTimeout(600);
await shot(desk, "study-desk");
await desk.evaluate(() => document.querySelector("#position")?.scrollIntoView());
await desk.waitForTimeout(300);
await shot(desk, "study-position");
await desk.evaluate(() => document.querySelector("#practice")?.scrollIntoView());
await desk.waitForTimeout(300);
await shot(desk, "study-practice");
await desk.evaluate(() => document.querySelector("#table")?.scrollIntoView());
await desk.waitForTimeout(300);
await shot(desk, "study-table");
await desk.evaluate(() => document.querySelector("#inquire")?.scrollIntoView());
await desk.waitForTimeout(300);
await shot(desk, "study-inquire");
// hebrew
await desk.getByRole("button", { name: "עב" }).click();
await desk.waitForTimeout(400);
await desk.evaluate(() => window.scrollTo(0, 0));
await desk.waitForTimeout(300);
await shot(desk, "study-hebrew");

await desk.goto("http://127.0.0.1:8080/erev", { waitUntil: "networkidle" });
await desk.waitForTimeout(600);
await shot(desk, "erev-desk");
await desk.evaluate(() => document.querySelector("#instrument")?.scrollIntoView());
await desk.waitForTimeout(300);
await shot(desk, "erev-instrument");
await desk.getByRole("button", { name: "Run erev sequence" }).click();
await desk.waitForTimeout(5000);
await shot(desk, "erev-running");
await desk.evaluate(() => document.querySelector("#quiet")?.scrollIntoView());
await desk.waitForTimeout(300);
await shot(desk, "erev-quiet");

// mobile
const mob = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mob.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await mob.waitForTimeout(500);
await shot(mob, "studio-mobile");
const overflow = await mob.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
console.log("studio mobile overflow", overflow);

await mob.goto("http://127.0.0.1:8080/study", { waitUntil: "networkidle" });
await mob.waitForTimeout(500);
await shot(mob, "study-mobile");
const overflow2 = await mob.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
console.log("study mobile overflow", overflow2);

await mob.goto("http://127.0.0.1:8080/erev", { waitUntil: "networkidle" });
await mob.waitForTimeout(500);
await shot(mob, "erev-mobile");
const overflow3 = await mob.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
console.log("erev mobile overflow", overflow3);

await browser.close();
console.log("ok");
