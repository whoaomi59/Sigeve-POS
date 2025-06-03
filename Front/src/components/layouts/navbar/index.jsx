import * as Icons from "lucide-react";
import { RutasGestion, RutasNavegacio } from "../../../mock/rutas";

export default function Navbar({ toggle, Roles }) {
  return (
    <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8">
      <div
        id="sidebar-collapse-menu"
        style={{ height: "calc(100vh - 72px)" }}
        className={`bg-white shadow-lg h-screen fixed py-6 px-4 top-[70px] z-[99] lg:min-w-[250px] ${
          toggle ? "" : "lg:w-max max-lg:w-0 max-lg:invisible"
        } transition-all duration-100`}
      >
        <div>
          <h6 className="text-[#494848] text-sm font-bold px-4 ">Navegacion</h6>
          <ul className="mt-3 space-y-2">
            {RutasNavegacio.map((item, index) => {
              const IconComponent = Icons[item.icon];
              return (
                <li key={index} className="text-[#636363]">
                  <a
                    href={item.path}
                    className="text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all"
                  >
                    {IconComponent && <IconComponent className="w-5 mr-2" />}
                    <span>{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-6">
          <h6 className="text-[#494848] text-sm font-bold px-4 ">Navegacion</h6>
          <ul className="mt-3 space-y-2">
            {RutasGestion.map((item, index) => {
              const IconComponent = Icons[item.icon];
              return (
                <li key={index} className="text-[#636363]">
                  <a
                    href={item.path}
                    className="text-sm flex items-center hover:bg-gray-100 rounded-md px-4 py-2 transition-all"
                  >
                    {IconComponent && <IconComponent className="w-5 mr-2" />}
                    <span>{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
