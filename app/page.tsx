/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaShieldAlt,
  FaCoins,
  FaBolt,
  FaGlobe,
  FaBars,
  FaTimes,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Home() {
  const [testimonials] = useState([
    {
      quote:
        "O Método Ricca transformou minha vida! Em poucos meses, alcancei minha liberdade financeira.",
      author: "Maria Oliveira",
    },
    {
      quote:
        "Nunca pensei que poderia ter um negócio de sucesso sem investir tanto. O suporte é incrível!",
      author: "João Silva",
    },
    {
      quote: "Agora trabalho de onde quiser e quando quiser. Liberdade total!",
      author: "Ana Costa",
    },
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-marfim text-outer-space font-poppins">
      {/* Barra de Navegação */}
      <nav className="fixed top-0 left-0 w-full bg-marfim text-outer-space shadow-lg z-50 transition-all duration-300 ease-in-out">
        <div
          className="container mx-auto flex justify-between items-center px-4 py-3 md:py-4 transition-all duration-300 ease-in-out"
          style={{
            backdropFilter: "blur(10px)",
          }}
        >
          <Image
            src="/Logo Método Ricca.png"
            alt="Logo do Método Ricca"
            width={150}
            height={50}
          />
          <div className="hidden md:flex space-x-2 md:space-x-4">
            <a
              href="#introducao"
              className="text-sm md:text-base hover:text-ocre-dourado transition duration-300"
            >
              Introdução
            </a>
            <a
              href="#como-funciona"
              className="text-sm md:text-base hover:text-ocre-dourado transition duration-300"
            >
              Como Funciona
            </a>
            <a
              href="#beneficios"
              className="text-sm md:text-base hover:text-ocre-dourado transition duration-300"
            >
              Benefícios
            </a>
            <a
              href="#cta"
              className="text-sm md:text-base hover:text-ocre-dourado transition duration-300"
            >
              Vídeo
            </a>
            <a
              href="#urgencia"
              className="text-sm md:text-base hover:text-ocre-dourado transition duration-300"
            >
              Urgência
            </a>
            <a
              href="#impacto"
              className="text-sm md:text-base hover:text-ocre-dourado transition duration-300"
            >
              Impacto Final
            </a>
            <a
              href="#contato"
              className="text-sm md:text-base hover:text-ocre-dourado transition duration-300"
            >
              Contato
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        <div
          className="h-1 bg-ocre-amarelo"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-outer-space text-marfim flex flex-col items-center justify-center space-y-6 z-40">
            <a
              href="#introducao"
              onClick={toggleMenu}
              className="text-lg hover:text-ocre-dourado transition duration-300"
            >
              Introdução
            </a>
            <a
              href="#como-funciona"
              onClick={toggleMenu}
              className="text-lg hover:text-ocre-dourado transition duration-300"
            >
              Como Funciona
            </a>
            <a
              href="#beneficios"
              onClick={toggleMenu}
              className="text-lg hover:text-ocre-dourado transition duration-300"
            >
              Benefícios
            </a>
            <a
              href="#cta"
              onClick={toggleMenu}
              className="text-lg hover:text-ocre-dourado transition duration-300"
            >
              Vídeo
            </a>
            <a
              href="#urgencia"
              onClick={toggleMenu}
              className="text-lg hover:text-ocre-dourado transition duration-300"
            >
              Urgência
            </a>
            <a
              href="#impacto"
              onClick={toggleMenu}
              className="text-lg hover:text-ocre-dourado transition duration-300"
            >
              Impacto Final
            </a>
            <a
              href="#contato"
              onClick={toggleMenu}
              className="text-lg hover:text-ocre-dourado transition duration-300"
            >
              Contato
            </a>
          </div>
        )}
      </nav>

      {/* Seção Principal */}
      <header
        id="home"
        className="bg-marfim text-outer-space text-center py-24 md:py-32 mt-16 rounded-b-3xl px-6 md:px-12"
      >
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Com o Método Ricca, você dita as regras do jogo: Conquiste sua tão
          sonhada liberdade financeira e geográfica
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl font-light mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Poucas oportunidades têm o poder de mudar vidas. O Método Ricca é uma
          delas. Junte-se a nós e escreva seu próprio capítulo de sucesso em
          ouro.
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/Imagem do WhatsApp de 2024-08-22 à(s) 08.44.17_71e24b0d.jpg"
            alt="Imagem representando confiança e parceria"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mx-auto"
          />
        </motion.div>
      </header>

      {/* Seção de Introdução */}
      <span id="introducao"></span>
      <motion.section
        className="max-w-xl md:max-w-3xl mx-auto mt-16 p-6 md:p-8 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold text-outer-space mb-6">
          Você está a um passo de revolucionar sua vida profissional e pessoal
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          O Método Ricca nasceu para democratizar o acesso ao mercado de jóias
          de ouro 18k, oferecendo uma solução simples, lucrativa e acessível.
          Não importa se você já trabalha com joias, está em transição de
          carreira ou busca um meio de empreender de casa—nós temos a chave para
          o alcance dos seus sonhos.
        </p>
        <Image
          src="/9925a91a-88d6-4fd4-ad65-ad82893826e1.jpeg"
          alt="Imagem de joias representando oportunidade"
          width={600}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </motion.section>

      {/* Seção Como Funciona */}
      <span id="como-funciona"></span>
      <motion.section
        className="max-w-xl md:max-w-3xl mx-auto mt-16 p-6 md:p-8 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold text-outer-space mb-6">
          Como funciona?
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Imagine ter seu próprio negócio de jóias de ouro 18k sem precisar
          investir em estoque, espaço físico ou processos burocráticos. Com o
          Método Ricca, você terá acesso a um site personalizado, com mais de
          2.000 produtos prontos para venda, suporte completo de uma marca que
          carrega décadas de tradição. Tudo isso enquanto você foca no que
          realmente importa: crescer e prosperar.
        </p>
        <Image
          src="https://media.istockphoto.com/id/1305227027/pt/foto/woman-relaxing-in-nature-and-using-technology.webp?b=1&s=612x612&w=0&k=20&c=pF6Z1rNMHteQ9GmShqa5L-SFl_bekl-prijIMdFckoI="
          alt="Imagem representando liberdade para trabalhar de qualquer lugar"
          width={600}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </motion.section>

      {/* Seção de Benefícios */}
      <span id="beneficios"></span>
      <motion.section
        className="max-w-xl md:max-w-3xl mx-auto mt-16 p-6 md:p-8 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold text-outer-space mb-6">
          Abrir um negócio do zero vs. Entrar no Método Ricca
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base md:text-lg text-outer-space items-center justify-items-center">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-4 flex items-center">
              <FaBolt className="mr-2" /> Os desafios de abrir um negócio do
              zero:
            </h3>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              <li>Investimento inicial elevado.</li>
              <li>Tempo e dedicação intensivos.</li>
              <li>Incerteza e riscos elevados.</li>
              <li>Complexidade operacional.</li>
            </ul>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h3 className="text-xl md:text-2xl font-semibold text-green-600 mb-4 flex items-center">
              <FaShieldAlt className="mr-2" /> As facilidades de entrar no
              Método Ricca:
            </h3>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              <li>
                <FaCoins className="inline-block mr-2" /> Baixo investimento.
              </li>
              <li>
                <FaBolt className="inline-block mr-2" /> Rápido e simples.
              </li>
              <li>
                <FaShieldAlt className="inline-block mr-2" /> Segurança e
                mentoria.
              </li>
              <li>
                <FaGlobe className="inline-block mr-2" /> Liberdade e
                flexibilidade.
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Seção de CTA para Vídeo */}
      <span id="cta"></span>
      <motion.section
        className="max-w-xl md:max-w-3xl mx-auto mt-16 p-6 md:p-8 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.0 }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold text-outer-space mb-6 text-center">
          Eu tenho muito mais para te contar
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-6 text-center">
          Assista ao vídeo e descubra como o Método Ricca pode transformar sua
          vida!
        </p>
        <div className="flex justify-center">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/BPZSQUIJWiI"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </motion.section>

      {/* Seção de Urgência */}
      <span id="urgencia"></span>
      <motion.section
        className="max-w-xl md:max-w-3xl mx-auto mt-16 p-6 md:p-8 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold text-outer-space mb-6">
          Esta é uma oportunidade única e limitada a poucos parceiros
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Porque acreditamos que a qualidade do suporte e mentoria é essencial
          para o sucesso de cada parceiro. Não queremos apenas mais membros;
          queremos parceiros de sucesso.
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Não deixe seus sonhos passarem diante dos seus olhos, agarre-os. Eles
          podem estar a um clique de distância!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://wa.me/17747323422?text=Olá,%20eu%20preciso%20de%20mais%20informações%20sobre%20o%20Método%20Ricca!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ocre-dourado text-marfim px-8 py-4 rounded-lg shadow-md hover:bg-ocre-amarelo transition-all duration-300"
          >
            Quero saber mais
          </a>

          <a
            href="https://wa.me/17747323422?text=Olá,%20eu%20quero%20entrar%20para%20o%20Método%20Ricca.%20Vamos%20fechar?"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ocre-dourado text-marfim px-8 py-4 rounded-lg shadow-md hover:bg-ocre-amarelo transition-all duration-300"
          >
            Quero fechar agora
          </a>
        </div>
      </motion.section>

      {/* Seção de Impacto Final */}
      <span id="impacto"></span>
      <motion.section
        className="max-w-xl md:max-w-3xl mx-auto mt-16 p-6 md:p-8 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold text-outer-space mb-6">
          O sucesso não espera
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Se você deseja liberdade financeira, geográfica e a chance de
          construir algo grandioso, o Método Ricca é para você. Lembre-se: as
          grandes oportunidades são aquelas que agarramos antes que os outros
          percebam.
        </p>
        <blockquote className="text-lg md:text-xl font-semibold text-outer-space italic mb-4">
          "O futuro pertence àqueles que acreditam na beleza dos seus sonhos."
        </blockquote>
        <p className="text-right text-base md:text-lg text-gray-700">
          — Eleanor Roosevelt
        </p>
      </motion.section>

      {/* Seção Quem é Rafael Caetano? */}
      <span id="contato"></span>
      <motion.section
        className="max-w-xl md:max-w-3xl mx-auto mt-16 p-6 md:p-8 bg-outer-space text-marfim rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Quem é Rafael Caetano?
        </h2>
        <p className="text-base md:text-lg mb-6">
          Mais conhecido como Ricca ou Rafael Ricca, é um amado marido e pai de
          três filhas, CEO do Grupo Ricca, mentor e palestrante. Começou a
          trabalhar com ouro entre 1994 e 1995, ajudando o pai no negócio da
          família, que já estava consolidado desde 1950.
        </p>
        <p className="text-base md:text-lg mb-10">
          Já em 2001, abriu sua primeira empresa no mesmo segmento no Brasil. E,
          há 5 anos atua no mercado norte-americano, atendendo especialmente a
          comunidade brasileira. Esse é um legado que ele valoriza e que deseja
          compartilhar com você, para que também possa construir uma carreira
          próspera.
        </p>
        <Image
          src="/60c915dd-7797-4488-9b4f-fd0e8a5fe359.jpg"
          alt="Imagem de Rafael Caetano"
          width={600}
          height={400}
          className="rounded-lg shadow-lg mx-auto mb-6" // Adiciona espaço abaixo da imagem
        />
        <motion.a
          href="https://wa.me/17747323422?text=Olá,%20eu%20gostaria%20de%20falar%20com%20você%20sobre%20o%20Método%20Ricca!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ocre-dourado text-marfim px-8 py-4 rounded-lg shadow-md hover:bg-ocre-amarelo transition-all duration-300 mt-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Fale Comigo
        </motion.a>
      </motion.section>

      {/* Rodapé */}
      <footer className="bg-outer-space text-marfim text-center py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <p className="mb-2">
                <a
                  href="tel:+17747323422"
                  className="hover:text-ocre-dourado transition duration-300"
                >
                  +1 (774) 732-3422
                </a>
              </p>
              <p className="mb-2">
                <a
                  href="mailto:contato@metodoricca.com"
                  className="hover:text-ocre-dourado transition duration-300"
                >
                  contato@metodoricca.com
                </a>
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
              <div className="flex space-x-6">
                <a
                  href="https://www.instagram.com/riccajewelry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ocre-dourado transition duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rafael-ricca-b5b936308/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ocre-dourado transition duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">Endereço</h3>
              <p>Hudson, Massachusetts</p>
            </div>
          </div>

          <div className="mt-8 border-t border-marfim pt-4">
            <p>&copy; 2024 Método Ricca. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">Desenvolvido com ♥ por Método Ricca.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
