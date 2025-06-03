import * as Icons from "lucide-react";
export default function Dashboard() {
  return (
    <>
      <h1 className="text-blue-500 text-center mt-10">SIGEVE POS</h1>
      <p className="text-gray-500 text-center">
        Sistema POS venta y inventario.
      </p>
      <div className="flexx">
        <Icons.CupSoda className="text-gray-300 w-50 h-50 mt-5" />
      </div>
    </>
  );
}
