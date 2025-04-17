import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MoveRight,
  Code,
  Zap,
  Shield,
  ArrowRight,
  ChevronDown,
  Workflow,
  LayoutDashboard,
  BadgeCheck,
  ShieldCheck,
  Gamepad,
  MailCheck,
} from "lucide-react";
import Fundo from "../assets/images/fundo.png";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950 -z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-violet-100/50 to-transparent dark:from-violet-900/10 -z-10"></div>

        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600/10 to-indigo-600/10 px-4 py-2 rounded-full">
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-medium">
                Soluções Tecnológicas
              </span>
              <div className="w-1 h-1 rounded-full bg-violet-600"></div>
              <span className="text-slate-500 text-sm">Inovação Digital</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Transforme
              </span>{" "}
              sua visão em realidade digital
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-md">
              Soluções tecnológicas personalizadas que impulsionam seu negócio
              para o próximo nível.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Modal Contato */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-6 py-6 rounded-xl group">
                    <span>Começar agora</span>
                    <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="rounded-2xl">
                  <DialogHeader>
                    <DialogTitle>Nos envie uma mensagem</DialogTitle>
                    <DialogDescription className="space-y-2 mt-4">
                      <p>
                        📞 <strong>+55 61 98341-9094</strong>
                      </p>
                      <p>
                        📞 <strong>+55 61 99657-0151</strong>
                      </p>
                      <p>
                        📧 <strong>adaptosoft@gmail.com</strong>
                      </p>
                      <p className="text-sm text-slate-500">
                        Estamos prontos para entender sua ideia!
                      </p>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              {/* Modal Demonstração */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-100 px-6 py-6 rounded-xl"
                  >
                    <span>Ver demonstração</span>
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="rounded-2xl">
                  <DialogHeader>
                    <DialogTitle>Demonstração Rápida</DialogTitle>
                    <DialogDescription className="mt-4">
                      <img
                        src={Fundo}
                        alt="Demonstração"
                        className="rounded-lg mb-4 w-full object-cover"
                      />
                      <p className="text-sm text-slate-600">
                        Veja como nossas soluções podem impulsionar seu negócio.
                      </p>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600/20 to-indigo-600/20 rounded-2xl blur-xl -z-10"></div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl mx-auto w-full max-w-[600px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] aspect-video">
              <img
                src={Fundo}
                alt="Desenvolvimento de software"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-teal-500 to-emerald-500 p-4 rounded-xl shadow-lg">
              <div className="text-white font-medium">+50</div>
              <div className="text-white/80 text-sm">Soluções prontas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solucoes" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Nossas Soluções
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Tecnologia de ponta para impulsionar seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/50 dark:to-indigo-950/50 rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1 group">
              <div className="bg-gradient-to-br from-violet-600 to-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                Desenvolvimento Sob Medida
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Soluções personalizadas que atendem exatamente às necessidades
                do seu negócio.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-violet-600 font-medium group-hover:text-indigo-600 transition-colors"
              >
                <span>Saiba mais</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50 rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1 group">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                Otimização de Processos
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Automatizamos e melhoramos seus processos para máxima eficiência
                operacional.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-amber-600 font-medium group-hover:text-orange-600 transition-colors"
              >
                <span>Saiba mais</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/50 dark:to-emerald-950/50 rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1 group">
              <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                Sistemas Seguros
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Implementamos as melhores práticas de segurança em todos os
                projetos.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-teal-600 font-medium group-hover:text-emerald-600 transition-colors"
              >
                <span>Saiba mais</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="processo"
        className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600/10 to-indigo-600/10 px-4 py-2 rounded-full mb-6">
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-medium">
                  Nosso Processo
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Como transformamos sua{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  visão em realidade
                </span>
              </h2>

              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Nossa metodologia ágil garante entregas rápidas e de alta
                qualidade, mantendo você envolvido em cada etapa do processo.
              </p>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="bg-gradient-to-br from-violet-600 to-indigo-600 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Descoberta e Planejamento
                    </h3>
                    <p className="text-slate-600">
                      Entendemos suas necessidades e definimos o escopo do
                      projeto.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Design e Desenvolvimento
                    </h3>
                    <p className="text-slate-600">
                      Criamos soluções elegantes e funcionais com tecnologias
                      modernas.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="bg-gradient-to-br from-teal-500 to-emerald-500 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Testes e Implementação
                    </h3>
                    <p className="text-slate-600">
                      Garantimos qualidade e segurança antes da entrega final.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600/10 to-indigo-600/10 rounded-2xl blur-xl -z-10"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md mt-6">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-violet-600"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1">Entrega Rápida</h4>
                  <p className="text-slate-600 text-sm">
                    Metodologia ágil para resultados mais rápidos
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md mt-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-600"
                    >
                      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.743-.95l.09-.706c.046-.35-.066-.702-.308-.944a1.41 1.41 0 0 0-.944-.308H16.5c-.731 0-1.433-.296-1.947-.82l-.53-.54c-.472-.472-.734-1.1-.734-1.764 0-.664.262-1.292.734-1.763l.927-.927c.47-.47 1.232-.47 1.703 0l1.539 1.539c.236.236.568.343.894.291l.478-.087c.456-.083.835.268.835.725v.501z" />
                      <path d="M7.879 16.121c.049-.322-.059-.648-.289-.878l-1.568-1.568c-.47-.47-.706-1.087-.706-1.704s.235-1.233.706-1.704l1.611-1.611a.98.98 0 0 1 .837-.276c.47.07.802.48.743.95l-.09.706c-.046.35.066.702.308.944.242.243.594.355.944.308H11.5c.731 0 1.433.296 1.947.82l.53.54c.472.472.734 1.1.734 1.764 0 .664-.262 1.292-.734 1.763l-.927.927c-.47.47-1.232.47-1.703 0l-1.539-1.539c-.236-.236-.568-.343-.894-.291l-.478.087c-.456.083-.835-.268-.835-.725v-.501z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1">Integração</h4>
                  <p className="text-slate-600 text-sm">
                    Compatível com seus sistemas existentes
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md mt-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-teal-600"
                    >
                      <path d="M12 2v4" />
                      <path d="M12 18v4" />
                      <path d="M4.93 4.93l2.83 2.83" />
                      <path d="M16.24 16.24l2.83 2.83" />
                      <path d="M2 12h4" />
                      <path d="M18 12h4" />
                      <path d="M4.93 19.07l2.83-2.83" />
                      <path d="M16.24 7.76l2.83-2.83" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1">Inovação</h4>
                  <p className="text-slate-600 text-sm">
                    Tecnologias de ponta para seu negócio
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md mt-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-indigo-600"
                    >
                      <path d="M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" />
                      <path d="M2 13h10" />
                      <path d="m9 16 3-3-3-3" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1">Suporte</h4>
                  <p className="text-slate-600 text-sm">
                    Assistência contínua após a entrega
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Oferecidos */}
      <section className="py-20 bg-white dark:bg-slate-900" id="servicos">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                O que podemos fazer por você
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Soluções práticas, modernas e adaptáveis para impulsionar seus
              resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-xl flex items-center justify-center mb-4">
                <Workflow className="text-violet-700 dark:text-violet-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Automação de Tarefas
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Elimine processos manuais com fluxos automatizados inteligentes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center mb-4">
                <LayoutDashboard className="text-indigo-700 dark:text-indigo-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Landing Pages Atraentes
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Criação de páginas de alta conversão, modernas e responsivas.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center mb-4">
                <BadgeCheck className="text-emerald-700 dark:text-emerald-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Sistemas de Credenciamento
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Controle de inscrições e acesso com segurança e eficiência.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="text-rose-700 dark:text-rose-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Sistemas de Portaria
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Gestão de entradas e visitantes em ambientes controlados.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mb-4">
                <Gamepad className="text-orange-700 dark:text-orange-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                Gamificação
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Torne sua plataforma mais engajante com pontos e recompensas.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-xl flex items-center justify-center mb-4">
                <MailCheck className="text-teal-700 dark:text-teal-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                E-mails Automáticos
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Envio de mensagens personalizadas com base em ações e eventos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-violet-600 to-indigo-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
            Pronto para transformar sua visão em realidade digital?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Entre em contato hoje mesmo e descubra como podemos ajudar a
            impulsionar seu negócio.
          </p>
          <Button
            onClick={() => window.open("https://wa.me/5561996570151", "_blank")}
            className="bg-white text-violet-700 hover:bg-white/90 px-8 py-6 rounded-xl text-lg font-medium"
          >
            Fale com um especialista
          </Button>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 text-center">
        <div className="container mx-auto">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 mb-4"
          >
            <div className="bg-gradient-to-r from-violet-500 to-indigo-500 w-8 h-8 rounded-lg"></div>
            <span className="font-bold text-xl">AdaptoSoft</span>
          </a>
          <p className="text-slate-400 mb-6">
            Transformando visões em realidade digital.
          </p>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} AdaptoSoft. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
