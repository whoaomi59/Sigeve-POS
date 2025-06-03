import { useState } from "react";
import { products } from "../../mock/productos";
import * as Icons from "lucide-react";

export default function Ventas() {
  const [tickets, setTickets] = useState([{ id: 1, items: [] }]);
  const [currentTicketId, setCurrentTicketId] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const productsPerPage = 6;

  // Filtrar productos según searchTerm en nombre o código (ignorando mayúsculas)
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.code &&
        product.code.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Al cambiar el término de búsqueda, resetear a página 1
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen">
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
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 w-full mb-4 border rounded border-gray-300"
            placeholder="Buscar producto por nombre o código..."
            autoFocus
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentProducts.length === 0 ? (
              <p className="text-center text-gray-400">
                No se encontraron productos
              </p>
            ) : (
              currentProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-white p-4 rounded shadow hover:scale-[1.01] transition cursor-pointer"
                  onClick={() => addProductToTicket(product)}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src="https://st3.depositphotos.com/15973376/32993/v/450/depositphotos_329939348-stock-illustration-icon-icon-in-trendy-flat.jpg"
                      alt="img"
                      className="w-12 h-12 max-lg:w-16 max-lg:h-16 rounded-full border-2 border-gray-300 cursor-pointer"
                    />
                    <div>
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-500">
                        Se vende por {product.type}
                      </p>
                      {product.code && (
                        <p className="text-xs text-gray-400">
                          📦 {product.code}
                        </p>
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
              ))
            )}
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 border border-gray-300 rounded disabled:opacity-50"
            >
              <Icons.ChevronLeft />
            </button>
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx + 1)}
                className={`p-2 border rounded border-gray-300 ${
                  currentPage === idx + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 border border-gray-300 rounded disabled:opacity-50"
            >
              <Icons.ChevronRight />
            </button>
          </div>
        </div>

        <div className="sticky top-4 h-fit bg-white p-4 rounded shadow flex flex-col justify-between min-h-[300px]">
          <div>
            <h3 className="text-lg font-semibold mb-2">Productos del Ticket</h3>
            {currentTicket.items.length === 0 ? (
              <div className="text-center text-gray-400 mt-10">
                No hay productos en el ticket
              </div>
            ) : (
              <ul className="text-sm text-gray-700 space-y-1">
                {currentTicket.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center border-b pb-1 border-gray-300"
                  >
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                    <Icons.Trash className="w-4 h-4 text-red-500 hover:text-gray-500 cursor-pointer" />
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-4 border-t pt-4 border-gray-300">
            <button className="flex justify-between text-white font-bold bg-blue-600 w-full p-4 rounded-full">
              <span>Cobrar:</span>
              <span>${calculateTotal(currentTicket)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
