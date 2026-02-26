import React from 'react'

function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

function Avatar({ person, size }) {
  return (
    <img
      src={getImageUrl(person)}
      alt={person.name}
      className="img-fluid rounded-circle shadow"
      style={{
        width: size,
        height: size,
        objectFit: "cover"
      }}
    />
  );
}

export const Props = () => {

  const scientists = [
    {
      name: 'Katsuko Saruhashi',
      imageId: 'YfeOqp2',
      descripcion: 'Geoquímica japonesa pionera en estudios del océano.'
    },
    {
      name: 'Aklilu Lemma',
      imageId: 'OKS67lh',
      descripcion: 'Médico etíope que ayudó a combatir la esquistosomiasis.'
    },
    {
      name: 'Lin Lanying',
      imageId: '1bX5QH6',
      descripcion: 'Física china experta en materiales semiconductores.'
    }
  ];

  return (
    <main className="container py-5">
      <h2 className="text-center fw-bold mb-5">Científicos Destacados</h2>

      <div className="row justify-content-center g-4">

        {scientists.map((person, index) => (
          <div key={index} className="col-md-4 text-center">
            
            <div className="card border-0 shadow-sm rounded-4 h-100 p-4">

              <Avatar person={person} size={140} />

              <h5 className="fw-bold mt-3">{person.name}</h5>

              <p className="text-muted small">
                {person.descripcion}
              </p>

            </div>

          </div>
        ))}

      </div>
    </main>
  )
}