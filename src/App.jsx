import { Footer } from "./components/Footer";
import { Game } from "./components/Game";
import fondo from './fondo.png'; // importa tu PNG

function App() {
  return (
    <main
      className="grid totalPageSize place-content-center"
      style={{
        backgroundImage: `url(${fondo})`,  // aquí pones tu fondo
        backgroundSize: 'cover',           // que ocupe toda la pantalla
        backgroundPosition: 'center',      // centrado
        backgroundRepeat: 'no-repeat',     // que no se repita
        minHeight: '100vh'                 // cubre toda la altura de la ventana
      }}
    >
      <Game />
      <Footer />
    </main>
  );
}

export default App;
