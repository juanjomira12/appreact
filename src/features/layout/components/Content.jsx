export const Content = () => {

  const productos = [
    { id: 1, nombre: 'Airmax 95 neon', precio: '700.000', stock: 'En stock', badge: 'bg-success', img: '/appreact/img/95.jpeg' },
    { id: 2, nombre: 'Tn black', precio: '900.000', stock: 'Pocas unidades', badge: 'bg-warning text-dark', img: '/appreact/img/nike-air-max-plus-tn-lisboa.jpg' },
    { id: 3, nombre: 'Nike dunk', precio: '860.000', stock: 'Agotado', badge: 'bg-secondary', img: '/appreact/img/dunk.jpeg' },
    { id: 4, nombre: 'Airmax fire', precio: '1.00.000', stock: 'En stock', badge: 'bg-success', img: '/appreact/img/fire.jpeg' },
    { id: 5, nombre: 'Timberland', precio: '1.000.000', stock: 'Pocas unidades', badge: 'bg-warning text-dark', img: '/appreact/img/timbo}.jpeg' },
  ];

  return (
    <main className="container py-5">
      <div className="row g-4">
        <div className="col-lg-9">
          <div className="row g-4">
            {productos.map((p) => (
              <div className="col-md-6 col-xl-4" key={p.id}>
                <div className="card h-100 shadow-sm border-0 rounded-4 text-center">
                  <div className="card-body">
                    <img
                      src={p.img}
                      alt={p.nombre}
                      className="img-fluid mb-3"
                      style={{ maxHeight: "150px", objectFit: "contain" }}
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=No+Image'; }}
                    />
                    <h6 className="fw-bold">{p.nombre}</h6>
                    <p className="text-primary fw-bold fs-5">COP ${p.precio}</p>
                    <span className={`badge ${p.badge} px-3 py-2`}>{p.stock}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulario a la derecha */}
        <div className="col-lg-3">
          <div className="card shadow border-0 rounded-5">
            <div className="card-header bg-primary text-white py-4">
              <h6 className="mb-0 fw-bold">AGREGAR PRODUCTO</h6>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Nombre:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Precio:</label>
                  <input type="text" className="form-control" />
                </div>
                <button type="button" className="btn btn-success w-100 fw-bold py-2">AGREGAR</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};