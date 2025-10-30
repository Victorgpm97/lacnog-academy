import React, { useState } from "react";

export default function CrearNoticia() {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [imagen, setImagen] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("contenido", contenido);
    if (imagen) formData.append("imagen", imagen);

    await fetch("/api/posts", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-12 space-y-8">
      <h2 className="text-3xl font-bold text-[#FE9E1B] mb-8 text-center">Añadir nueva noticia</h2>
            {/* Botón volver */}
          <a href="/noticias"
            className="text-[#FE9E1B] px-4 py-2 rounded hover:text-[#FE9E1B] transition text-sm font-medium  space-y-8 mb-6 cursor-pointer"
          >
            ← Volver Atrás
          </a>
      <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-6 shadow-md space-y-6">
        {/* Imagen destacada */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Imagen destacada</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImagen}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#FE9E1B] file:text-white hover:file:bg-orange-600 cursor-pointer"
          />
          {preview && (
            <img
              src={preview}
              alt="Vista previa"
              className="mt-4 rounded-lg border border-gray-300 w-full object-cover max-h-64"
            />
          )}
        </div>

        {/* Título */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE9E1B]"
            required
          />
        </div>

        {/* Contenido */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contenido</label>
          <textarea
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            rows={8}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FE9E1B]"
            required
          />
        </div>

        {/* Botón enviar */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#FE9E1B] text-white px-6 py-2 rounded hover:bg-orange-600 transition cursor-pointer"
          >
            Publicar noticia
          </button>
        </div>
      </form>
    </section>
  );
}
