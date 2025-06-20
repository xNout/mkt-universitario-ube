"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { logout } from "@/store/authSlice";

export default function HomePage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // Cierra la sesión eliminando datos y redirigiendo al login
  const handleLogout = () => {
    dispatch(logout());
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/login");
  };

  return (
    <div className="min-h-screen inter-font">
      <nav className="p-4 bg-[#262626] text-white flex justify-between items-center">
        <span className="font-bold">Home</span>
        {/* Menú simple con opción para cerrar sesión */}
        <div className="relative">
          <button onClick={() => setOpen(!open)} className="px-3 py-1 bg-[#e3132d] rounded">
            Menú
          </button>
          {open && (
            <ul className="absolute right-0 mt-2 bg-white text-black rounded shadow">
              <li>
                <button
                  className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </button>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <div className="p-4 text-white">Bienvenido al sistema</div>
    </div>
  );
}
