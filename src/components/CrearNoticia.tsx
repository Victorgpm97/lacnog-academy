import { useState } from "react";
import { getXataClient } from "../xata";

const TAG_OPTIONS = [
  "#Terms",
  "#Privacy Policy",
  "#Intellectual Property Policy",
  "#Ethics and Compliance",
  "#Cookie Policy",
];

export default function CrearNoticia() {
  const [titulo, setTitulo] = useState("");
  const [resumen, setResumen] = useState("");
  const [articulo, setArticulo] = useState("");
  const [imagenUrl, setImagenUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showSelect, setShowSelect] = useState(false);
  const xata = getXataClient();

  const availableTags = TAG_OPTIONS.filter((tag) => !selectedTags.includes(tag));

  const handleTagSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tag = e.target.value;
    if (tag && !selectedTags.includes(tag)) {
      setSelectedTags((prev) => [...prev, tag]);
    }
    e.target.value = "";
    setShowSelect(false); // volver a mostrar el botón
  };

  const removeTag = (tag: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.PUBLIC_CLOUDINARY_UPLOAD_PRESET);
    formData.append("folder", "noticias");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    setImagenUrl(data.secure_url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (selectedTags.length === 0) {
        alert("Selecciona al menos una etiqueta");
        setLoading(false);
        return;
      }

      const created = await xata.db.noticias.create({
        titulo,
        resumen,
        articulo,
        imagen: imagenUrl,
        tags: selectedTags,
      });

      console.log("Registro creado:", created?.xata_id);
      alert("Noticia creada");

      setTitulo("");
      setResumen("");
      setArticulo("");
      setImagenUrl("");
      setSelectedTags([]);
    } catch (err) {
      console.error("Error creando noticia en Xata:", err);
      alert("No se pudo crear la noticia. Revisa consola y el esquema de Xata.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-12 space-y-8">
      <h2 className="text-3xl font-bold text-[#FE9E1B] mb-8 text-center">Añadir nueva noticia</h2>
      <a
        href="/noticias"
        className="text-[#FE9E1B] px-4 py-2 rounded hover:text-[#FE9E1B] transition text-sm font-medium mb-6 cursor-pointer"
      >
        ← Volver Atrás
      </a>

      <div className="shadow-sm rounded-2xl">
        <form onSubmit={handleSubmit} className="space-y-4 p-6 max-w-xl mx-auto">
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Título"
            className="w-full border p-2 rounded bg-white"
            required
          />
          <textarea
            value={resumen}
            onChange={(e) => setResumen(e.target.value)}
            placeholder="Resumen breve"
            className="w-full border p-2 rounded bg-white"
            required
          />
          <textarea
            value={articulo}
            onChange={(e) => setArticulo(e.target.value)}
            placeholder="Contenido completo"
            className="w-full border p-2 rounded bg-white h-20"
            required
          />

          <div className="flex justify-center">
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="bg-[#FE9E1B] text-white px-4 py-2 rounded cursor-pointer"
            />
          </div>

          {imagenUrl && (
            <img src={imagenUrl} alt="Preview" className="w-full mt-4 rounded" />
          )}
          
          <div className="flex justify-center">
            <p className="text-gray-400 text-sm font-light">La imagen seleccionada no puede ser mayor a 10MB*</p>
          </div>
          <div className="mt-4 relative z-50">
            {/* Chips seleccionados */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {selectedTags.map((tag) => (
                <span
                  key={tag}
                  className="bg-yellow-100 text-neutral-700 rounded-full px-3 py-1.5 flex items-center gap-2 text-sm font-medium"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="text-neutral-500 hover:text-red-600 font-bold"
                    aria-label={`Eliminar ${tag}`}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            {/* Botón para mostrar el select */}
            {!showSelect && availableTags.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  console.log("Agregar Tags clicked");
                  setShowSelect(true);
                }}
                className="relative z-50 bg-[#FE9E1B] text-white rounded-full px-3 py-1.5 flex items-center gap-2 text-sm font-medium cursor-pointer pointer-events-auto hover:bg-[#FEA723]"
                aria-label="Agregar Tags"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setShowSelect(true);
                }}
              >
                <span className="text-lg font-bold">＋</span>
                Agregar Tags
              </button>
            )}

            {/* Select visible */}
            {showSelect && availableTags.length > 0 && (
              <div className="mt-2 relative z-50 pointer-events-auto">
                <select
                  onChange={handleTagSelect}
                  className="border border-yellow-300 rounded-full px-3 py-2 w-full text-sm focus:outline-none"
                  defaultValue=""
                  aria-label="Selecciona una etiqueta"
                >
                  <option value="" disabled>
                    Selecciona una etiqueta
                  </option>
                  {availableTags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
            )}

          {/* Etiquetas dinámicas */}
          <div className="mt-4 relative z-40 pointer-events-auto">
            {/* Estado visible para depurar (puedes quitarlo luego) */}
            <p className="text-xs text-gray-400 font-light">
               Disponibles: {availableTags.join(", ") || "Ninguno"}
            </p>

            {/* Sin opciones disponibles */}
            {availableTags.length === 0 && !showSelect && (
              <p className="mt-2 text-sm text-neutral-500">
                Ya seleccionaste todas las etiquetas disponibles.
              </p>
            )}
          </div>
        </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#FE9E1B] text-white px-4 py-2 rounded hover:bg-[#FEA723] cursor-pointer"
            >
              {loading ? "Publicando..." : "Publicar Noticia"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
