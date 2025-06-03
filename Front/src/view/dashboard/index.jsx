import * as Icons from "lucide-react";
export default function Dashboard() {
  const items = [
    {
      title: "Realizar una venta",
      desc: "Hacer una venta al contado o un apartado",
      icon: "🛍️",
    },
    {
      title: "Ver inventario",
      desc: "Registrar, eliminar o actualizar detalles productos",
      icon: "📋",
    },
    {
      title: "Mis clientes",
      desc: "Registrar, eliminar o actualizar detalles clientes",
      icon: "👥",
    },
    {
      title: "Abonos",
      desc: "Registrar o ver abonos de un apartado",
      icon: "💵",
    },
    {
      title: "Caja",
      desc: "Registrar una salida o entrada de efectivo",
      icon: "🪙",
    },
    {
      title: "Reportes",
      desc: "Ver el reporte de caja, de ventas al contado o de apartados",
      icon: "📑",
    },
    {
      title: "Usuarios",
      desc: "Administrar usuarios (o cajeros) así como sus permisos",
      icon: "🛡️",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-2">
        Bienvenido a Sigeve POS
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Sistema POS venta y inventario.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-200 cursor-pointer"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
