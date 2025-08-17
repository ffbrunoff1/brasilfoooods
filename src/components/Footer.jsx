import React from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import { Facebook, Instagram, Twitter, Phone } from 'lucide-react';

function Footer() {
  const onChange = (value) => {
    console.log("Captcha value:", value);
  }

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      <div className="container-center py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-full md:col-span-1 text-center md:text-left">
          <Link to="/" className="text-3xl font-bold font-serif text-primary-500">BRASIL FOOOODS</Link>
          <p className="mt-4 text-gray-300">Sabores autênticos do Brasil para o mundo. Qualidade e tradição em cada prato.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary-500">Navegação</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-primary-300 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary-300 transition-colors">Sobre</Link></li>
            <li><Link to="/services" className="hover:text-primary-300 transition-colors">Serviços</Link></li>
            <li><Link to="/products" className="hover:text-primary-300 transition-colors">Produtos</Link></li>
            <li><Link to="/contact" className="hover:text-primary-300 transition-colors">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary-500">Contato</h3>
          <address className="not-italic space-y-2">
            <p className="flex items-center gap-2"><Phone size={18} /> Telefone: <a href="tel:" className="hover:text-primary-300 transition-colors"></a></p>
            <p className="flex items-center gap-2">Email: <a href="mailto:" className="hover:text-primary-300 transition-colors"></a></p>
            <p>Endereço: Rua do Sabor, 123, Cidade Saborosa, Brasil</p>
          </address>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary-500">Conecte-se</h3>
          <div className="flex space-x-4">
            <a href="" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary-300 transition-colors">
              <Facebook size={28} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary-300 transition-colors">
              <Instagram size={28} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary-300 transition-colors">
              <Twitter size={28} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-center pb-4 z-10">
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXwpApNb" // Use your actual reCAPTCHA site key here
          onChange={onChange}
        />
      </div>

      <div className="text-center text-gray-400 py-4 border-t border-secondary-800">
        &copy; {new Date().getFullYear()} BRASIL FOOOODS. Todos os direitos reservados.
        <p className="mt-2 text-sm">Criado com <a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline"><em>Papum</em></a></p>
      </div>
    </footer>
  );
}

export default Footer;