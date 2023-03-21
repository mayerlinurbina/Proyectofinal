export default function CartItem({ producto }) {
    return (
      <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              className="me-3"
              src={producto.imagen}
              alt={producto.nombre}
              width="100"
            />
            <div>
    <h5 className="mb-0">{producto.nombre}</h5>
    <small className="text-muted">${producto.precio}</small>
            </div>
          </div>
          <div className="d-flex gap-1">
            <button className="btn btn-outline-danger btn-sm">-</button>
            <button className="btn btn-outline-dark btn-sm disabled">5</button>
            <button className="btn btn-outline-primary btn-sm">+</button>
          </div>
        </div>
      </li>
    );
  }