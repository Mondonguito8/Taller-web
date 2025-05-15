function abrirMenu() {
      document.getElementById("menu-wrapper").style.display = "flex";
    }

    function cerrarMenu() {
      document.getElementById("menu-wrapper").style.display = "none";
    }

    function mostrarContenido(opcion) {
      let contenido = "";

      if (opcion === "oportunidades") {
        contenido = `
          <h2>Oportunidades Únicas</h2>
          <div class="section">
            <h3>Comprar por categoría</h3>
            <div class="categories">
              <div class="category"><img src="ver-todo.jpg" alt=""><p>Ver todo</p></div>
              <div class="category"><img src="novedades.jpg" alt=""><p>Novedades</p></div>
              <div class="category"><img src="valorados.jpg" alt=""><p>Mejor valorados</p></div>
              <div class="category"><img src="tops.jpg" alt=""><p>Tops</p></div>
              <div class="category"><img src="bottoms.jpg" alt=""><p>Bottoms</p></div>
              <div class="category"><img src="conjuntos.jpg" alt=""><p>Conjuntos</p></div>
            </div>

          </div>
        `;
      } else {
        contenido = `<h2>${opcion.charAt(0).toUpperCase() + opcion.slice(1)}</h2><p>Contenido para la categoría: ${opcion}</p>`;
      }

      document.getElementById("contenido-principal").innerHTML = contenido;
    }