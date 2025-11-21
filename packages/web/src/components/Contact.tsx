import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Reveal } from './Reveal';

export const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-zinc-950 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <Reveal>
                        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-12">Vamos trabalhar juntos</h2>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <a
                            href="mailto:contato@guilhermemuller.com"
                            className="text-2xl md:text-4xl text-zinc-400 hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-2 mb-16 inline-block"
                        >
                            contato@guilhermemuller.com
                        </a>
                    </Reveal>

                    <div className="flex gap-8">
                        <Reveal delay={0.3}>
                            <div className="flex gap-4">
                                {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                                    <a key={i} href="#" className="p-3 rounded-full bg-zinc-900 text-white hover:bg-white hover:text-black transition-all duration-300">
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};
