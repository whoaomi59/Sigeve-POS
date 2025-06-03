import * as Icons from "lucide-react";
import Hora from "./Hora";

export default function Header({ nombre }) {
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error("Error al intentar pantalla completa:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/"; // Redirigir a la página de login
  };

  return (
    <header className="flex shadow-md py-1 px-4 sm:px-7 bg-white min-h-[70px] tracking-wide z-[110] fixed top-0 w-full">
      <div className="flex flex-wrap items-center justify-between gap-4 w-full relative">
        <a href="/">
          <img src="/img/Logos/logo 1.png" alt="logo" className="w-30" />
        </a>
        <div className="lg:hidden !ml-7 outline-none flex">
          <Icons.CalendarDays className="w-5 text-[#636363] mr-1" />
          <Hora />
        </div>
        <div className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
          <div className="max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <div className="flex items-center max-lg:flex-col-reverse max-lg:ml-auto gap-8">
              <div className="flex items-center space-x-6 max-lg:flex-wrap">
                <a href="#" className="flex">
                  <Icons.CalendarDays className="w-5 text-[#636363] mr-1" />
                  <Hora />
                </a>
              </div>
              <div className="text-gray-500 flex">
                <Icons.Hammer className="mr-1" />
                {nombre || "Admin Sigeve POS"}
              </div>
              <button
                title="Pantalla Completa"
                onClick={() => toggleFullScreen()}
                className="cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out"
              >
                <Icons.Expand className="text-gray-500" />
              </button>

              <div className="dropdown-menu relative flex shrink-0 group">
                <img
                  src="https://w7.pngwing.com/pngs/945/530/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon.png"
                  alt="profile-pic"
                  className="w-9 h-9 max-lg:w-16 max-lg:h-16 rounded-full border-2 border-gray-300 cursor-pointer"
                />

                <div className="dropdown-content hidden group-hover:block shadow-md p-2 bg-white rounded-md absolute top-9 right-0 w-56">
                  <div className="w-full">
                    <a
                      href="/usuarios"
                      className="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out"
                    >
                      <Icons.MonitorCog className="w-4 h-4 mr-3" />
                      Configuraciones
                    </a>

                    <button
                      onClick={handleLogout}
                      className="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-gray-100 dropdown-item transition duration-300 ease-in-out w-full"
                    >
                      <Icons.Power className="w-4 h-4 mr-3" />
                      Salir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
