import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
}

const PROJECTS: Project[] = [
    { id: 1, title: 'Nebula Dashboard', category: 'Fintech / UX', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop' },
    { id: 2, title: 'Aura Identity', category: 'Branding / WebGL', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2340&auto=format&fit=crop' },
    { id: 3, title: 'Kinetic Commerce', category: 'E-commerce / 3D', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop' },
    { id: 4, title: 'Echo Audio', category: 'Product / Sound', image: 'https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2340&auto=format&fit=crop' }
];

export const Showcase = () => {
    return (
        <section id="work" className="py-32 bg-zinc-950">
            <div className="container mx-auto px-6">
                <Reveal>
                    <div className="flex items-end justify-between mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">Trabalhos Selecionados</h2>
                        <span className="hidden md:block text-zinc-500">2023 - 2025</span>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {PROJECTS.map((project, index) => (
                        <Reveal key={project.id} delay={index % 2 === 0 ? 0 : 0.2}>
                            <div className="group cursor-pointer">
                                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-6 bg-zinc-900">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    />

                                    <div className="absolute bottom-6 right-6 z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                        <div className="bg-white text-black p-4 rounded-full">
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-2xl text-white font-medium tracking-tight group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                                    <p className="text-zinc-500 text-sm uppercase tracking-widest">{project.category}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
