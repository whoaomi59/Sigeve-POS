import { useState } from "react";
import { products } from "../../mock/productos";

export default function Ventas() {
  const [tickets, setTickets] = useState([{ id: 1, items: [] }]);
  const [currentTicketId, setCurrentTicketId] = useState(1);

  const currentTicket = tickets.find((t) => t.id === currentTicketId);

  const addProductToTicket = (product) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === currentTicketId
          ? { ...ticket, items: [...ticket.items, product] }
          : ticket
      )
    );
  };

  const createNewTicket = () => {
    const newId = tickets.length + 1;
    setTickets([...tickets, { id: newId, items: [] }]);
    setCurrentTicketId(newId);
  };

  const switchTicket = (id) => {
    setCurrentTicketId(id);
  };

  const calculateTotal = (ticket) => {
    return ticket.items.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <header className="flex items-center justify-between mb-6">
        <div className="text-xl font-bold text-blue-700">Ventas</div>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-yellow-300">📩</button>
          <button className="p-2 rounded-full bg-gray-300">🧾</button>
        </div>
      </header>

      <div className="flex gap-4 mb-4">
        <button
          onClick={createNewTicket}
          className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm shadow"
        >
          Nuevo Ticket
        </button>
        {tickets.map((ticket) => (
          <button
            key={ticket.id}
            onClick={() => switchTicket(ticket.id)}
            className={`px-4 py-2 text-sm font-semibold  ${
              currentTicketId === ticket.id
                ? "text-blue-500  border-b border-blue-500"
                : "text-gray-700 border-b border-gray-300"
            }`}
          >
            Ticket #{ticket.id}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <input
            className="p-2 w-full mb-4 border rounded shadow-sm"
            placeholder="Buscar producto..."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="flex items-center bg-white p-4 rounded shadow hover:scale-[1.01] transition cursor-pointer"
                onClick={() => addProductToTicket(product)}
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{product.icon}</div>
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-500">
                      Se vende por {product.type}
                    </p>
                    {product.code && (
                      <p className="text-xs text-gray-400">📦 {product.code}</p>
                    )}
                  </div>
                </div>
                <div className="ml-auto text-right">
                  <div
                    className={`text-sm px-2 py-1 rounded-full w-fit ${product.color}`}
                  >
                    {product.unit}
                  </div>
                  <div className="font-semibold text-lg">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow flex flex-col justify-between min-h-[300px]">
          <div>
            <h3 className="text-lg font-semibold mb-2">Productos del Ticket</h3>
            {currentTicket.items.length === 0 ? (
              <div className="text-center text-gray-400 mt-10">
                No hay productos en el ticket
              </div>
            ) : (
              <ul className="text-sm text-gray-700 space-y-1">
                {currentTicket.items.map((item, i) => (
                  <li key={i} className="flex justify-between border-b pb-1">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-4 border-t pt-4">
            <button className="flex justify-between text-white font-bold bg-blue-600 w-full p-4 rounded rounded-full">
              <span>Cobrar:</span>
              <span>{calculateTotal(currentTicket)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
