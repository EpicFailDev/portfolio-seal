import { Reveal } from './Reveal';

export const About = () => {
    return (
        <section id="about" className="py-32 bg-zinc-950 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 md:gap-32">
                    <div className="md:w-1/3">
                        <Reveal>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-8">Sobre Mim</h2>
                            <div className="w-full h-[400px] bg-zinc-900 rounded-lg overflow-hidden relative group">
                                <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600">
                                    {/* Placeholder for actual image */}
                                    <span className="text-center px-4">Foto de Guilherme</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="md:w-2/3 flex flex-col justify-center gap-8">
                        <Reveal delay={0.2}>
                            <p className="text-2xl md:text-3xl font-medium leading-tight text-zinc-200">
                                Olá, sou Guilherme Muller de Souza. Um desenvolvedor apaixonado por criar soluções que impactam pessoas.
                            </p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <p className="text-lg text-zinc-400 leading-relaxed">
                                Minha jornada na tecnologia é movida pela curiosidade e pela busca constante por excelência.
                                Tenho experiência em desenvolvimento full-stack, com foco especial em React, Node.js e arquitetura de software.
                            </p>
                            <p className="text-lg text-zinc-400 leading-relaxed mt-6">
                                Acredito que o código é uma ferramenta para resolver problemas reais. Quando não estou programando,
                                estou estudando novas tendências de design ou contribuindo para a comunidade open source.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};
