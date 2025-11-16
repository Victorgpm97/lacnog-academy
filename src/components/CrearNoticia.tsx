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
  const [imagenUrl, setImagenUrl] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showSelect, setShowSelect] = useState(false);
  const xata = getXataClient();

  const availableTags = TAG_OPTIONS.filter((tag) => !selectedTags.includes(tag));

  const handleTagSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tag = e.target.value;
    if (tag && !selectedTags.includes(tag)) {
      setSelectedTags((prev) => [...prev, tag]);
    };
  };
  const [contenido, setContenido] = useState("");
  const [articulo, setArticulo] = useState("");
  const [imagen, setImagen] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // 🔹 Estados añadidos para feedback
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImagen(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setPreview(null);

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

    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("titulo", titulo);
      formData.append("contenido", contenido);
      formData.append("articulo", articulo); // 🔹 agregado
      if (imagen) formData.append("imagen", imagen);

      const res = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Error al publicar la noticia");

      setSuccess(true);
      setTitulo("");
      setContenido("");
      setArticulo("");
      setImagen(null);
      setPreview(null);
    } catch (err: any) {
      setError(err.message);

    } finally {
      setLoading(false);
    }
  };
}

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
            placeholder="archivo"
            className="bg-[#FE9E1B] text-white px-4 py-2 rounded cursor-pointer"
          />
        </div>

        {imagenUrl && (
          <img src={imagenUrl} alt="Preview" className="w-full mt-4 rounded" />
        )}

        <div className="flex justify-center">
          <p className="text-gray-400 text-sm font-light">
            La imagen seleccionada no puede ser mayor a 10MB*
          </p>
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
            <p className="text-xs text-gray-400 font-light">
              Disponibles: {availableTags.join(", ") || "Ninguno"}
            </p>

            {availableTags.length === 0 && !showSelect && (
              <p className="mt-2 text-sm text-neutral-500">
                Ya seleccionaste todas las etiquetas disponibles.
              </p>
            )}
          </div>
        </div>
      </form> {/* 🔹 cierre del primer form */}

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-xl p-6 shadow-md space-y-6"
      >
        {/* Título */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Título:
          </label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE9E1B]"
            placeholder="Titulo"
            required
          />
        </div>

        {/* Contenido */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Resumen:
          </label>
          <textarea
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            rows={8}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE9E1B]"
            placeholder="Contenido del Articulo"
            required
          />
        </div>

        {/* Artículo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Artículo:
          </label>
          <textarea
            value={articulo}
            onChange={(e) => setArticulo(e.target.value)}
            placeholder="Contenido completo"
            className="w-full border p-2 rounded bg-white h-20"
            required
          />
        </div>

        {/* Imagen destacada */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Imagen destacada:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImagen}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#FE9E1B] file:text-white hover:file:bg-orange-600 cursor-pointer"
            placeholder="archivo"
          />
          {preview && (
            <img
              src={preview}
              alt="Vista previa"
              className="mt-4 rounded-lg border border-gray-300 w-full object-cover max-h-64"
            />
          )}
        </div>

        {/* Feedback */}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && (
          <p className="text-green-600 text-sm">Noticia publicada con éxito ✅</p>
        )}
        {loading && <p className="text-gray-500 text-sm">Publicando...</p>}

        {/* Botón enviar */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className={`bg-[#FE9E1B] text-white px-6 py-2 rounded transition cursor-pointer ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-600"
            }`}
          >
            {loading ? "Publicando..." : "Publicar noticia"}
          </button>
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
      </form> {/* 🔹 cierre del segundo form */}
    </div>
  </section>
  );
};