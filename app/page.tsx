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
              href="#why"
              className="text-sm md:text-base hover:text-ocre-dourado transition duration-300"
            >
              Por que escolher método ricca
            </a>
            <a
              href="#beneficios"
              className="text-sm md:text-base hover:text-ocre-dourado transition duration-300"
            >
              Benefícios
            </a>
            <a
              href="#diferent"
              className="text-sm md:text-base hover:text-ocre-dourado transition duration-300"
            >
              Diferenciação
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
              href="#why"
              className="text-sm md:text-base hover:text-ocre-dourado transition duration-300"
            >
              Por que escolher método ricca
            </a>
            <a
              href="#beneficios"
              onClick={toggleMenu}
              className="text-lg hover:text-ocre-dourado transition duration-300"
            >
              Benefícios
            </a>
            <a
              href="#diferent"
              className="text-sm md:text-base hover:text-ocre-dourado transition duration-300"
            >
              Diferenciação
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
          </div>
        )}
      </nav>

      {/* Seção Principal */}
      <header
        id="home"
        className="bg-marfim text-outer-space text-center py-24 md:py-32 mt-16 rounded-b-3xl px-6 md:px-12"
      >
        <motion.h1
          className="text-3xl md:text-5xl sm:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Eleve seus lucros no mercado de joias de ouro 18k com o Método Ricca:{" "}
          <br />O parceiro que faltava para maximizar seus resultados.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl font-light mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Seja parte de uma revolução no segmento de joias. O Método Ricca
          oferece a solução completa para você aumentar seu faturamento e
          entregar mais valor aos seus clientes.
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/first.png"
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
          Você que já faz parte do universo da moda, acessórios, estética e/ou
          vende joias, agora, está na hora de dar um passo à frente. O Método
          Ricca foi criado para profissionais como você, que buscam não apenas
          mais um fornecedor, mas um parceiro estratégico para potencializar
          seus negócios e conquistar clientes com produtos de alta qualidade e
          confiança.
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
          Imagine ter um catálogo completo de joias de ouro 18k à sua disposição, sem a necessidade de investir em estoque ou em espaço físico. Com o Método Ricca, você terá acesso a um site personalizado com milhares de produtos prontos para venda. Nós cuidamos da logística até a entrega do produto em suas mãos, para que você possa enviar diretamente aos seus clientes, enquanto foca no crescimento e na diversificação da sua oferta, ampliando o seu alcance no mercado de luxo.
        </p>
        <Image
          src="/third.png"
          alt="Imagem representando liberdade para trabalhar de qualquer lugar"
          width={600}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </motion.section>
      {/* Por que escolher método ricca */}
      <span id="why"></span>
      <motion.section
        className="max-w-xl md:max-w-3xl mx-auto mt-16 p-6 md:p-8 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold text-outer-space mb-6">
          Por que escolher o Método Ricca?
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Você já entende o valor de oferecer produtos de qualidade aos seus
          clientes. O Método Ricca permite que você amplie seu portfólio com
          joias de ouro 18k, sem os custos e preocupações de investir em um novo
          negócio do zero, por exemplo.
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Muitas pessoas optam por abrir uma franquia para evitar os desafios de
          começar do zero: altos custos, falta de reconhecimento e a necessidade
          de construir tudo do início. No entanto, mesmo em uma franquia, os
          obstáculos são grandes.
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          O Método Ricca se assemelha a um modelo de franquia, conosco você tem
          acesso a um sistema eficiente, processos otimizados e suporte
          contínuo, acelerando o sucesso e minimizando riscos. Enquanto abrir
          uma franquia exige tempo e recursos, o Método Ricca oferece uma
          entrada e permanência mais eficiente e segura no mercado.
        </p>
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
          Agregar valor ao seu negócio com o Método Ricca
        </h2>
        <div className="text-base md:text-lg text-outer-space items-center justify-items-center">
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li className="mb-4">
              <span className="font-semibold">Aumente seus lucros: </span>
              Com um desconto de 40% a 50% em todos os produtos, você tem
              liberdade total para definir sua margem de lucro. Ofereça joias
              exclusivas e de alta qualidade, garantindo mais vendas e um ticket
              médio maior para seus clientes.
            </li>
            <li className="mb-4">
              <span className="font-semibold">Riscos minimizados: </span>
              Tudo o que você precisa já está pronto. Não é necessário investir
              em estoque, nem se preocupar com fotografia ou logística. Nós
              fornecemos as ferramentas para que você comece a vender
              imediatamente.
            </li>
            <li className="mb-4">
              <span className="font-semibold">Fortaleça a relação com seus clientes: </span>
              Ao oferecer um portfólio de joias de ouro 18k, você reforça sua
              posição como especialista e referência no mercado, fidelizando
              seus clientes e atraindo novos públicos que buscam exclusividade e
              luxo.
            </li>
            <li className="mb-4">
              <span className="font-semibold">Parceria estratégica: </span>
              Trabalhar com o Método Ricca é contar com décadas de experiência
              no setor de joias. Oferecemos suporte completo, com mentorias
              exclusivas, insights de mercado e uma equipe pronta para ajudar
              seu negócio a crescer.
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Seção de diferenciação*/}
      <span id="diferent"></span>
      <motion.section
        className="max-w-xl md:max-w-3xl mx-auto mt-16 p-6 md:p-8 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold text-outer-space mb-6">
          Você já sabe o valor de uma boa parceria
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          O Método Ricca não é apenas um fornecedor de joias, é o parceiro que
          faltava para levar seu negócio ao próximo nível. Você já tem a
          expertise no mercado, agora ofereça mais aos seus clientes com um
          portfólio exclusivo de joias de ouro 18k, sem precisar lidar com os
          desafios tradicionais de múltiplos fornecedores.
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Descubra como o Método Ricca pode transformar seu faturamento e
          expandir seu negócio. Assista ao vídeo para mais detalhes!
        </p>
        <div className="flex justify-center">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/tqyMQVbXP6A?si=ew-wtgIfV8thtYyp"
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
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Oportunidades como esta são raras. Assegure-se de ter o Método Ricca
          como parceiro e garanta uma vantagem competitiva no mercado.
        </p>
        <h2 className="text-2xl md:text-4xl font-semibold text-outer-space mb-6">
          Por que limitamos a parceria?
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Nosso compromisso com a qualidade e o suporte é nosso diferencial.
          Queremos garantir que cada parceiro tenha o acompanhamento necessário
          para maximizar seus resultados.
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Não deixe essa oportunidade passar. Entre agora e faça parte de um
          grupo seleto que já está lucrando com o Método Ricca.
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
          Se você deseja aumentar seus lucros, diversificar seu portfólio e
          garantir mais valor para seus clientes, o Método Ricca é a parceria
          que você precisa. Não perca tempo — junte-se agora e transforme seu
          negócio.
        </p>
        <blockquote className="text-lg md:text-xl font-semibold text-outer-space italic mb-4">
          "O sucesso é resultado de boas decisões, e a melhor decisão é oferecer
          mais valor aos seus clientes"
        </blockquote>
        <p className="text-right text-base md:text-lg text-gray-700">
          — Rafael Caetano
        </p>

        <h2 className="text-2xl md:text-4xl font-semibold mb-6 mt-8">
          Quem é Rafael Caetano?
        </h2>
        <p className="text-base md:text-lg mb-6">
          Rafael Caetano, mais conhecido como Ricca ou Rafael Ricca, é CEO do
          Grupo Ricca e especialista no mercado de joias de ouro 18k. Com mais
          de 30 anos de experiência, ele agora oferece essa expertise como
          mentor e parceiro estratégico para negócios que desejam crescer no
          setor de moda e acessórios.
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

      {/* Seção Quem é Rafael Caetano? */}
      {/* <span id="contato"></span>
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
          Rafael Caetano, mais conhecido como Ricca ou Rafael Ricca, é CEO do
          Grupo Ricca e especialista no mercado de joias de ouro 18k. Com mais
          de 30 anos de experiência, ele agora oferece essa expertise como
          mentor e parceiro estratégico para negócios que desejam crescer no
          setor de moda e acessórios.
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
      </motion.section> */}

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
