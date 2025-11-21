export const Footer = () => {
    return (
        <footer className="py-8 bg-zinc-950 border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-zinc-600 text-sm">Copyright {new Date().getFullYear()} Guilherme Muller de Souza. Todos os direitos reservados.</p>
                <p className="text-zinc-600 text-sm flex items-center gap-1">Projetado & Construído com amor.</p>
            </div>
        </footer>
    );
};
