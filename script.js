const libros = [
  {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    descripcion: "Un piloto perdido en el desierto conoce a un pequeño príncipe de otro planeta.",
    imagen: "assets/el_principito.jpg",
    categoria: "Ficción",
    destacado: false
  },
  {
    titulo: "Sapiens",
    autor: "Yuval Noah Harari",
    anio: 2011,
    descripcion: "Una breve historia de la humanidad desde los primeros Homo sapiens hasta el presente.",
    imagen: "assets/sapiens.jpg",
    categoria: "Historia",
    destacado: true
  },
  {
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K. Rowling",
    anio: 1997,
    descripcion: "El joven Harry descubre que es un mago y asiste a Hogwarts.",
    imagen: "assets/harry_potter_y_la_piedra_filosofal.jpg",
    categoria: "Fantasía",
    destacado: false
  },
  {
    titulo: "Clean Code",
    autor: "Robert C. Martin",
    anio: 2008,
    descripcion: "Una guía para escribir código legible y mantenible en desarrollo de software.",
    imagen: "assets/clean_code.jpg",
    categoria: "Tecnología",
    destacado: true
  },
  {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    anio: 1605,
    descripcion: "Las aventuras del caballero loco Don Quijote y su escudero Sancho Panza.",
    imagen: "assets/don_quijote_de_la_mancha.jpg",
    categoria: "Ficción",
    destacado: false
  },
  {
    titulo: "El Hobbit",
    autor: "J.R.R. Tolkien",
    anio: 1937,
    descripcion: "Bilbo Bolsón vive una inesperada aventura hacia la Montaña Solitaria.",
    imagen: "assets/el_hobbit.jpg",
    categoria: "Fantasía",
    destacado: true
  },
  {
    titulo: "Matilda",
    autor: "Roald Dahl",
    anio: 1988,
    descripcion: "Una niña genio con poderes especiales enfrenta a sus crueles padres y directora.",
    imagen: "assets/matilda.jpg",
    categoria: "Infantil",
    destacado: false
  },
  {
    titulo: "La invención de Hugo Cabret",
    autor: "Brian Selznick",
    anio: 2007,
    descripcion: "Un niño huérfano que vive en una estación de tren descubre un misterioso autómata.",
    imagen: "assets/la_invencion_de_hugo_cabret.jpg",
    categoria: "Infantil",
    destacado: false
  },
  {
    titulo: "Introducción a la Programación",
    autor: "Paul Deitel",
    anio: 2015,
    descripcion: "Conceptos básicos para iniciar en el mundo de la programación.",
    imagen: "assets/introduccion_a_la_programacion.jpg",
    categoria: "Educativo",
    destacado: true
  },
  {
    titulo: "La historia interminable",
    autor: "Michael Ende",
    anio: 1979,
    descripcion: "Un niño se sumerge en un libro mágico donde salva el reino de Fantasía.",
    imagen: "assets/la_historia_interminable.jpg",
    categoria: "Fantasía",
    destacado: false
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    anio: 1949,
    descripcion: "Una distopía sobre un régimen totalitario que vigila todos los aspectos de la vida.",
    imagen: "assets/1984.jpg",
    categoria: "Ficción",
    destacado: false
  },
  {
    titulo: "Crimen y castigo",
    autor: "Fiódor Dostoyevski",
    anio: 1866,
    descripcion: "Un joven comete un asesinato y enfrenta las consecuencias morales.",
    imagen: "assets/crimen_y_castigo.jpg",
    categoria: "Ficción",
    destacado: false
  },
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    descripcion: "La historia de la familia Buendía en el mítico pueblo de Macondo.",
    imagen: "assets/cien_anos_de_soledad.jpg",
    categoria: "Ficción",
    destacado: false
  },
  {
    titulo: "Rebelión en la granja",
    autor: "George Orwell",
    anio: 1945,
    descripcion: "Una sátira política donde los animales se rebelan contra sus opresores humanos.",
    imagen: "assets/rebelion_en_la_granja.jpg",
    categoria: "Ficción",
    destacado: false
  },
  {
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    anio: 1963,
    descripcion: "Una novela que desafía la estructura tradicional de la narrativa.",
    imagen: "assets/rayuela.jpg",
    categoria: "Ficción",
    destacado: false
  },
  {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    anio: 1953,
    descripcion: "En un futuro distópico, los libros están prohibidos y se queman.",
    imagen: "assets/fahrenheit_451.jpg",
    categoria: "Ficción",
    destacado: false
  },
  {
    titulo: "Guns, Germs, and Steel",
    autor: "Jared Diamond",
    anio: 1997,
    descripcion: "Un análisis de las fuerzas que moldearon la historia humana.",
    imagen: "assets/guns_germs_and_steel.jpg",
    categoria: "Historia",
    destacado: false
  },
  {
    titulo: "Los pilares de la Tierra",
    autor: "Ken Follett",
    anio: 1989,
    descripcion: "Una novela histórica ambientada en la Edad Media.",
    imagen: "assets/los_pilares_de_la_tierra.jpg",
    categoria: "Historia",
    destacado: false
  },
  {
    titulo: "Una historia del mundo",
    autor: "Andrew Marr",
    anio: 2012,
    descripcion: "Relato accesible del desarrollo de la civilización humana.",
    imagen: "assets/una_historia_del_mundo.jpg",
    categoria: "Historia",
    destacado: false
  },
  {
    titulo: "La Segunda Guerra Mundial",
    autor: "Antony Beevor",
    anio: 2012,
    descripcion: "Relato exhaustivo del conflicto más grande del siglo XX.",
    imagen: "assets/la_segunda_guerra_mundial.jpg",
    categoria: "Historia",
    destacado: false
  },
  {
    titulo: "Historia mínima de Colombia",
    autor: "Jorge Orlando Melo",
    anio: 2017,
    descripcion: "Una síntesis de la historia de Colombia.",
    imagen: "assets/historia_minima_de_colombia.jpg",
    categoria: "Historia",
    destacado: false
  },
  {
    titulo: "La historia del siglo XX",
    autor: "Martin Gilbert",
    anio: 2000,
    descripcion: "Panorama global del siglo pasado.",
    imagen: "assets/la_historia_del_siglo_xx.jpg",
    categoria: "Historia",
    destacado: false
  },
  {
    titulo: "Las crónicas de Narnia",
    autor: "C.S. Lewis",
    anio: 1950,
    descripcion: "Un grupo de niños descubre un mundo mágico a través de un armario.",
    imagen: "assets/las_cronicas_de_narnia.jpg",
    categoria: "Fantasía",
    destacado: false
  },
  {
    titulo: "El nombre del viento",
    autor: "Patrick Rothfuss",
    anio: 2007,
    descripcion: "La historia del legendario mago Kvothe.",
    imagen: "assets/el_nombre_del_viento.jpg",
    categoria: "Fantasía",
    destacado: true
  },
  {
    titulo: "Juego de tronos",
    autor: "George R.R. Martin",
    anio: 1996,
    descripcion: "Intrigas y batallas en el continente ficticio de Poniente.",
    imagen: "assets/juego_de_tronos.jpg",
    categoria: "Fantasía",
    destacado: true
  },
  {
    titulo: "Eragon",
    autor: "Christopher Paolini",
    anio: 2002,
    descripcion: "Un joven descubre que es el último de los Jinetes de Dragón.",
    imagen: "assets/eragon.jpg",
    categoria: "Fantasía",
    destacado: false
  },
  {
    titulo: "Coraline",
    autor: "Neil Gaiman",
    anio: 2002,
    descripcion: "Una niña encuentra una versión alternativa y oscura de su hogar.",
    imagen: "assets/coraline.jpg",
    categoria: "Fantasía",
    destacado: false
  },
  {
    titulo: "El señor de los anillos",
    autor: "J.R.R. Tolkien",
    anio: 1954,
    descripcion: "Un hobbit debe destruir un anillo para salvar la Tierra Media.",
    imagen: "assets/el_senor_de_los_anillos.jpg",
    categoria: "Fantasía",
    destacado: false
  },
    {
    titulo: "The Pragmatic Programmer",
    autor: "Andrew Hunt",
    anio: 1999,
    descripcion: "Consejos prácticos para programadores profesionales.",
    imagen: "assets/the_pragmatic_programmer.jpg",
    categoria: "Tecnología",
    destacado: false
  },
  {
    titulo: "Eloquent JavaScript",
    autor: "Marijn Haverbeke",
    anio: 2011,
    descripcion: "Un profundo recorrido por el lenguaje JavaScript.",
    imagen: "assets/eloquent_javascript.jpg",
    categoria: "Tecnología",
    destacado: false
  },
  {
    titulo: "Código limpio",
    autor: "Steve McConnell",
    anio: 2004,
    descripcion: "Buenas prácticas para escribir código de calidad.",
    imagen: "assets/codigo_limpio.jpg",
    categoria: "Tecnología",
    destacado: true
  },
  {
    titulo: "Structure and Interpretation of Computer Programs",
    autor: "Harold Abelson",
    anio: 1985,
    descripcion: "Clásico sobre teoría de la computación.",
    imagen: "assets/structure_and_interpretation.jpg",
    categoria: "Tecnología",
    destacado: false
  },
  {
    titulo: "Diseño de software orientado a objetos",
    autor: "Rebecca Wirfs-Brock",
    anio: 1990,
    descripcion: "Principios del diseño orientado a objetos.",
    imagen: "assets/diseno_de_software_orientado_a_objetos.jpg",
    categoria: "Tecnología",
    destacado: true
  },
  {
    titulo: "Introduction to Algorithms",
    autor: "Thomas H. Cormen",
    anio: 1990,
    descripcion: "Algoritmos fundamentales de la informática.",
    imagen: "assets/introduction_to_algorithms.jpg",
    categoria: "Tecnología",
    destacado: false
  },
  {
    titulo: "Charlie y la fábrica de chocolate",
    autor: "Roald Dahl",
    anio: 1964,
    descripcion: "Un niño gana un recorrido por la misteriosa fábrica de Willy Wonka.",
    imagen: "assets/charlie_y_la_fabrica_de_chocolate.jpg",
    categoria: "Infantil",
    destacado: false
  },
  {
    titulo: "El grúfalo",
    autor: "Julia Donaldson",
    anio: 1999,
    descripcion: "Un ratón escapa de depredadores inventando un monstruo llamado Grúfalo.",
    imagen: "assets/el_grufalo.jpg",
    categoria: "Infantil",
    destacado: true
  },
  {
    titulo: "Donde viven los monstruos",
    autor: "Maurice Sendak",
    anio: 1963,
    descripcion: "Max viaja a una tierra de monstruos después de portarse mal.",
    imagen: "assets/donde_viven_los_monstruos.jpg",
    categoria: "Infantil",
    destacado: false
  },
  {
    titulo: "Alicia en el país de las maravillas",
    autor: "Lewis Carroll",
    anio: 1865,
    descripcion: "Alicia cae en una madriguera y entra a un mundo mágico.",
    imagen: "assets/alicia_en_el_pais_de_las_maravillas.jpg",
    categoria: "Infantil",
    destacado: false
  },
  {
    titulo: "Peter Pan",
    autor: "J.M. Barrie",
    anio: 1911,
    descripcion: "Un niño que no quiere crecer vive aventuras en el país de Nunca Jamás.",
    imagen: "assets/peter_pan.jpg",
    categoria: "Infantil",
    destacado: true
  },
  {
    titulo: "El gato ensombrerado",
    autor: "Dr. Seuss",
    anio: 1957,
    descripcion: "Un gato caótico revoluciona el día de dos niños en casa.",
    imagen: "assets/el_gato_ensombrerado.jpg",
    categoria: "Infantil",
    destacado: false
  },
  {
    titulo: "Estructura de datos y algoritmos",
    autor: "Mark Allen Weiss",
    anio: 1992,
    descripcion: "Fundamentos de estructuras y algoritmos en informática.",
    imagen: "assets/estructura_de_datos_y_algoritmos.jpg",
    categoria: "Educativo",
    destacado: false
  },
  {
    titulo: "Python para todos",
    autor: "Charles Severance",
    anio: 2016,
    descripcion: "Introducción amigable al lenguaje Python.",
    imagen: "assets/python_para_todos.jpg",
    categoria: "Educativo",
    destacado: true
  },
  {
    titulo: "Matemáticas divertidas",
    autor: "Clifford A. Pickover",
    anio: 1993,
    descripcion: "Curiosidades y rompecabezas matemáticos.",
    imagen: "assets/matematicas_divertidas.jpg",
    categoria: "Educativo",
    destacado: false
  },
  {
    titulo: "Física conceptual",
    autor: "Paul Hewitt",
    anio: 1987,
    descripcion: "Una aproximación intuitiva a los principios de la física.",
    imagen: "assets/fisica_conceptual.jpg",
    categoria: "Educativo",
    destacado: false
  },
  {
    titulo: "Aprendiendo SQL",
    autor: "Alan Beaulieu",
    anio: 2009,
    descripcion: "Guía práctica para entender y usar bases de datos relacionales.",
    imagen: "assets/aprendiendo_sql.jpg",
    categoria: "Educativo",
    destacado: true
  },
  {
    titulo: "Cómo funciona Google",
    autor: "Eric Schmidt",
    anio: 2014,
    descripcion: "Estrategias detrás de una de las empresas tecnológicas más influyentes.",
    imagen: "assets/como_funciona_google.jpg",
    categoria: "Educativo",
    destacado: false
  }
];


document.addEventListener("DOMContentLoaded", () => {
  inicializarBiblioteca(libros);
});

function inicializarBiblioteca(data) {
  poblarCategorias(data);
  renderizarGaleria(data);

  document.getElementById("btnDestacados").addEventListener("click", (e) => {
    e.preventDefault();
    filtrarDestacados();
  });

  document.getElementById("btnCategorias").addEventListener("click", (e) => {
    e.preventDefault();
    mostrarTodasCategorias();
  });


  const filtro = document.getElementById("categoriaFiltro");
  if (filtro) {
    filtro.addEventListener("change", filtrarPorCategoria);
  }
}

function poblarCategorias(libros) {
  const select = document.getElementById("categoriaFiltro");
  if (!select) return;
  const categorias = [...new Set(libros.map(libro => libro.categoria))];

  categorias.forEach(categoria => {
    const option = document.createElement("option");
    option.value = categoria;
    option.textContent = categoria;
    select.appendChild(option);
  });
}

function renderizarGaleria(librosFiltrados) {
  const galeria = document.getElementById("galeria");
  galeria.innerHTML = "";

  librosFiltrados.forEach((libro, index) => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
      <div class="card h-100">
        <img src="${libro.imagen}" class="card-img-top" alt="${libro.titulo}" style="height: 250px; object-fit: cover; cursor: pointer" onclick="mostrarDetalle(${index})">
        <div class="card-body">
          <h5 class="card-title">${libro.titulo}</h5>
          <p class="card-text text-muted">${libro.autor} (${libro.anio})</p>
        </div>
      </div>
    `;
    galeria.appendChild(col);
  });
}

function filtrarPorCategoria() {
  const categoria = document.getElementById("categoriaFiltro").value;
  const filtrados = categoria ? libros.filter(l => l.categoria === categoria) : libros;
  renderizarGaleria(filtrados);
}

function filtrarDestacados() {
  const destacados = libros.filter(l => l.destacado);
  document.getElementById("categoriaFiltro").value = "";
  renderizarGaleria(destacados);
}

function mostrarTodasCategorias() {
  document.getElementById("categoriaFiltro").value = "";
  renderizarGaleria(libros);
}

function mostrarDetalle(index) {
  const libro = libros[index];
  document.getElementById("modalTitulo").textContent = libro.titulo;
  document.getElementById("modalAutor").textContent = libro.autor;
  document.getElementById("modalAnio").textContent = libro.anio;
  document.getElementById("modalDescripcion").textContent = libro.descripcion;
  document.getElementById("modalImagen").src = libro.imagen;

  const modal = new bootstrap.Modal(document.getElementById("modalLibro"));
  modal.show();
}

function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return false;
    }

    alert("Mensaje enviado correctamente. ¡Gracias por contactarnos!");
    document.getElementById("formularioContacto").reset();
    return false;
}