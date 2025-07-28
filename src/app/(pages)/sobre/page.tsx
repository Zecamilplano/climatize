import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Award, Users, ThumbsUp } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-main absolute top-36 left-0">
      <main className="container mx-auto py-12 px-4">
        {/* Hero Section */}
        <section className="bg-hero-section rounded-lg p-8 mb-12 text-white shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sobre a Climatize</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Somos especialistas em soluções de climatização, oferecendo produtos de alta qualidade e serviços
            profissionais para garantir o conforto térmico ideal para sua casa ou empresa.
          </p>
        </section>

        {/* Nossa História */}
        <section className="bg-white rounded-lg p-8 mb-12 shadow-md">
          <h2 className="text-title text-2xl font-bold mb-6">Nossa História</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="text-about">
              <p className="mb-4">
                Fundada em 2010, a Climatize nasceu com o propósito de transformar ambientes através de soluções de
                climatização eficientes e sustentáveis. Começamos como uma pequena loja familiar e hoje somos referência
                no mercado de climatizadores.
              </p>
              <p className="mb-4">
                Ao longo dos anos, expandimos nossa atuação e aprimoramos nossos serviços, sempre mantendo o compromisso
                com a qualidade e a satisfação dos nossos clientes.
              </p>
              <p>
                Nossa equipe é formada por profissionais altamente qualificados, prontos para oferecer o melhor
                atendimento e as soluções mais adequadas para cada necessidade.
              </p>
            </article>
            <aside className="bg-timeline rounded-lg p-6">
              <h3 className="text-title text-xl font-semibold mb-4">Marcos Importantes</h3>
              <ul className="space-y-3 text-about">
                <li className="flex items-start">
                  <span className="bg-timeline-card text-white rounded-full p-1 mr-2 mt-1">
                    <Clock className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="font-semibold">2010</span> - Fundação da Climatize
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-timeline-card text-white rounded-full p-1 mr-2 mt-1">
                    <Clock className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="font-semibold">2015</span> - Expansão para novas regiões
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-timeline-card text-white rounded-full p-1 mr-2 mt-1">
                    <Clock className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="font-semibold">2018</span> - Certificação em excelência técnica
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-timeline-card text-white rounded-full p-1 mr-2 mt-1">
                    <Clock className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="font-semibold">2022</span> - Lançamento de linha exclusiva de produtos
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="mb-12">
          <h2 className="text-title text-2xl font-bold mb-8 text-center">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-value-card p-3 rounded-full mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-title text-xl font-semibold mb-2">Qualidade</h3>
              <p className="text-value-card">
                Trabalhamos apenas com produtos de alta qualidade e marcas reconhecidas no mercado, garantindo
                durabilidade e eficiência.
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-value-card p-3 rounded-full mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-title text-xl font-semibold mb-2">Compromisso</h3>
              <p className="text-value-card">
                Estamos comprometidos com a satisfação dos nossos clientes, oferecendo suporte técnico e atendimento
                personalizado.
              </p>
            </article>
            <article className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-value-card p-3 rounded-full mb-4">
                <ThumbsUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-title text-xl font-semibold mb-2">Inovação</h3>
              <p className="text-value-card">
                Buscamos constantemente novas tecnologias e soluções para oferecer o que há de melhor em climatização.
              </p>
            </article>
          </div>
        </section>

        {/* Contato */}
        <section className="bg-contact rounded-lg p-8 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Entre em Contato</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                (xx) xxxx-xxxx
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                contato@climatize.com.br
              </p>
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1" />
                Av. Principal, 1234 - Centro
                <br />
                Cidade - Estado, CEP 00000-000
              </p>
              <p className="flex items-center">
                <Clock className="w-5 h-5 mr-3" />
                Segunda a Sexta: 8h às 18h
                <br />
                Sábado: 8h às 12h
              </p>
            </div>
            <div>
              <p className="mb-4">
                Estamos à disposição para esclarecer suas dúvidas e ajudar a encontrar a melhor solução de climatização
                para seu ambiente.
              </p>
              <button className="bg-button-contact hover:bg-button-hover-contact text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-footer text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold mb-2">CLIMATIZE</h2>
              <p>Conforto térmico para sua vida</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="hover:underline outline-none">Início</Link>
              <Link href="/produtos" className="hover:underline outline-none">Produtos</Link>
              <Link href="/sobre" className="hover:underline outline-none">Sobre</Link>
            </div>
          </div>
          <div className="border-t border-white/30 mt-6 pt-6 text-center">
            <p>© {new Date().getFullYear()} Climatize. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>

  )
}


