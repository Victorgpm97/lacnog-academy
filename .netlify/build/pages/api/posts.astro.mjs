import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
export { renderers } from '../../renderers.mjs';

const sqlite = new Database("local.sqlite");
const db = drizzle(sqlite);

const posts = sqliteTable("posts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  titulo: text("titulo"),
  contenido: text("contenido"),
  imagen: text("imagen")
});

const POST = async ({ request }) => {
  const formData = await request.formData();
  const titulo = formData.get("titulo")?.toString() || "";
  const contenido = formData.get("contenido")?.toString() || "";
  const imagen = formData.get("imagen");
  let imageUrl = "";
  if (imagen) {
    const buffer = await imagen.arrayBuffer();
    const fileName = `${Date.now()}-${imagen.name}`;
    const uploadDir = join(process.cwd(), "public/uploads");
    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir, { recursive: true });
    }
    const filePath = join(uploadDir, fileName);
    writeFileSync(filePath, Buffer.from(buffer));
    imageUrl = `/uploads/${fileName}`;
  }
  await db.insert(posts).values({ titulo, contenido, imagen: imageUrl });
  return new Response("Noticia guardada", { status: 201 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
