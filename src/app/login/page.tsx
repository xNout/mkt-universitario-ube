"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/store/authSlice";

// Página de inicio de sesión

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Función para enviar las credenciales al backend y procesar la respuesta
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, clave }),
      });
      const data = await res.json();
      if (!res.ok || data.mensajeRespuesta) {
        setError(data.mensajeRespuesta || "Error al iniciar sesión");
        return;
      }
      // Guardamos los tokens en Redux y en una cookie para que el middleware pueda validar
      dispatch(setCredentials({ token: data.token, refresh_token: data.refresh_token }));
      document.cookie = `token=${data.token}; path=/`;
      router.push("/home");
    } catch (err) {
      setError("Error de conexión con el servidor");
    }
  };

  return (
    <div className="relative min-h-screen inter-font">
      <div className="login-wrapper">
        {/* Falta el responsive de aqui para abajo */}
        <div className="w-md p-6 pb-8 bg-[#262626] bg-opacity-50 rounded-lg shadow-lg">
          <div className="w-full">
            <Image
              className="mx-auto mb-3"
              src="/ube-logo-texto.png"
              alt="UBE-LOGO"
              width={220}
              height={45}
              priority
            />
          </div>

          <div className="mb-5 mt-5">
            <p className="text-center text-xl text-white inter-font font-bold">MARKETPLACE UNIVERSITARIO</p>
          </div>

          {error && (
            <p className="text-center text-red-500 font-bold" data-testid="error-msg">
              {error}
            </p>
          )}

          <form className="space-y-4 pl-5 pr-5 form-login" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="usuario">Usuario</label>
              <input
                type="text"
                name="usuario"
                placeholder="Usuario"
                className="input-form"
                autoComplete="off"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                className="input-form"
                autoComplete="off"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
              />
            </div>

            <div className="input-group">
              <a href="#" className="text-md">
                ¿Olvidaste tu contraseña?
              </a>

              <button
                type="submit"
                className="mt-2 w-full py-2 bg-[#e3132d] text-md text-white rounded hover:bg-[#BF0F27] transition cursor-pointer"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>

        <div className="w-md p-6 bg-[#262626] bg-opacity-50 rounded-lg shadow-lg">
          <h2 className="text-center text-xl font-bold mb-4 text-[#e3132d]">¿Aún no tienes cuenta?</h2>
          <p className="text-md text-center text-white">
            Carreras de pre y post grado, cursos, diplomados, pasantías, etc. Todo en un solo lugar, para ti.
          </p>

          <button
            type="button"
            className="mt-3 w-full py-2 bg-[#e3132d] text-md text-white rounded hover:bg-[#BF0F27] transition cursor-pointer"
          >
            Crear cuenta
          </button>
        </div>
      </div>
    </div>
  );
}
