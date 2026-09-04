import { existsSync } from "node:fs";
import path from "node:path";

export const aiImage = (name: string) => {
  const file = path.join(process.cwd(), "public", "images", "ai", `${name}.jpg`);
  return existsSync(file) ? `/images/ai/${name}.jpg` : null;
};

export const aiVideo = (name: string) => {
  const file = path.join(process.cwd(), "public", "images", "ai", `${name}.mp4`);
  return existsSync(file) ? `/images/ai/${name}.mp4` : null;
};
