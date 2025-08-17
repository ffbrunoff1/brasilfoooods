import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';

// Placeholder Components - Replace with your actual content later
const Header = () => (
  <header className="bg-primary-500 text-white p-4 shadow-md">
    <nav className="container-center flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold font-serif">BRASIL FOOOODS</Link>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-accent-500 transition-colors">Home</Link></li>
        <li><Link to="/about" className="hover:text-accent-500 transition-colors">Sobre</Link></li>
        <li><Link to="/services" className="hover:text-accent-500 transition-colors">Serviços</Link></li>
        <li><Link to="/products" className="hover:text-accent-500 transition-colors">Produtos</Link></li>
        <li><Link to="/contact" className="hover:text-accent-500 transition-colors">Contato</Link></li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 text-white text-center animate-fade-in">
    <div className="container-center">
      <h1 className="text-5xl font-bold font-serif mb-4 animate-slide-up">Bem-vindo ao BRASIL FOOOODS</h1>
      <p className="text-xl mb-8 animate-slide-up delay-200">Sabores autênticos do Brasil diretamente para sua mesa.</p>
      <Link to="/products" className="btn-secondary animate-bounce-slow">Explore Nossos Sabores!</Link>
    </div>
  </section>
);

const About = () => (
  <section className="section-padding bg-white animate-fade-in container-center">
    <h2 className="text-4xl font-bold text-primary-700 text-center mb-8">Nossa História</h2>
    <p className="text-lg text-gray-700 leading-relaxed text-center">
      Na BRASIL FOOOODS, dedicamo-nos a trazer a verdadeira essência da culinária brasileira.
      Com ingredientes frescos e receitas tradicionais passadas de geração em geração,
      garantimos uma experiência gastronômica inesquecível.
    </p>
  </section>
);

const Services = () => (
  <section className="section-padding bg-gray-100 animate-fade-in container-center">
    <h2 className="text-4xl font-bold text-primary-700 text-center mb-8">Nossos Serviços</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="card-shadow p-6 bg-white rounded-lg text-center animate-slide-up">
        <h3 className="text-2xl font-semibold text-secondary-600 mb-4">Delivery Rápido</h3>
        <p className="text-gray-600">Entregamos o melhor da comida brasileira na sua porta, com agilidade e cuidado.</p>
      </div>
      <div className="card-shadow p-6 bg-white rounded-lg text-center animate-slide-up delay-200">
        <h3 className="text-2xl font-semibold text-secondary-600 mb-4">Eventos e Catering</h3>
        <p className="text-gray-600">Torne seu evento especial com nosso serviço de catering personalizado.</p>
      </div>
      <div className="card-shadow p-6 bg-white rounded-lg text-center animate-slide-up delay-400">
        <h3 className="text-2xl font-semibold text-secondary-600 mb-4">Produtos Artesanais</h3>
        <p className="text-gray-600">Descubra nossa linha exclusiva de produtos artesanais e ingredientes selecionados.</p>
      </div>
    </div>
  </section>
);

const Products = () => (
  <section className="section-padding bg-white animate-fade-in container-center">
    <h2 className="text-4xl font-bold text-primary-700 text-center mb-8">Nossos Produtos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="card-shadow bg-gray-50 rounded-lg overflow-hidden animate-slide-up">
          <img src={`https://via.placeholder.com/400x250?text=Produto+${i}`} alt={`Produto ${i}`} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-primary-700 mb-2">Nome do Produto {i}</h3>
            <p className="text-gray-600 mb-4">Descrição breve do produto, destacando seus diferenciais e sabor.</p>
            <span className="text-lg font-bold text-secondary-600">R$ XX,YY</span>
            <button className="btn-primary mt-4 w-full">Adicionar ao Carrinho</button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section className="section-padding bg-gray-100 animate-fade-in container-center">
    <h2 className="text-4xl font-bold text-primary-700 text-center mb-8">Entre em Contato</h2>
    <div className="max-w-xl mx-auto bg-white p-8 rounded-lg card-shadow">
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nome</label>
          <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500" />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500" />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Mensagem</label>
          <textarea id="message" name="message" rows="5" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"></textarea>
        </div>
        <button type="submit" className="btn-primary w-full">Enviar Mensagem</button>
      </form>
    </div>
  </section>
);


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<Products />} /> {/* Example for specific product page */}
          <Route path="*" element={<h1 className="text-center py-20 text-3xl font-bold">404 - Página Não Encontrada</h1>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;