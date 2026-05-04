import { MapPin, Clock, Phone } from "lucide-react";

export default function Location() {
  return (
    <section id="localizacao" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-0 items-stretch">
          {/* Info panel */}
          <div className="md:col-span-5 bg-surface-container p-12 border border-primary-container/20 flex flex-col justify-center">
            <p className="font-sans text-xs text-primary tracking-[0.2em] uppercase mb-4">
              Localização
            </p>
            <h3 className="font-serif font-bold text-on-surface text-3xl mb-10">
              Onde a Nobreza se Encontra
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-xs font-semibold tracking-widest uppercase text-on-surface mb-1">
                    Endereço
                  </p>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    Rua dos Barbeiros Imperiais, 412
                    <br />
                    Vila Dourada, São Paulo — SP
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-xs font-semibold tracking-widest uppercase text-on-surface mb-1">
                    Horário de Funcionamento
                  </p>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    Seg — Sex: 09h às 21h
                    <br />
                    Sábado: 08h às 19h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-xs font-semibold tracking-widest uppercase text-on-surface mb-1">
                    Contato
                  </p>
                  <p className="font-sans text-sm text-on-surface-variant">
                    (11) 94832-7165
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps?q=Rua+Conselheiro+Moreira+de+Barros,+2780,+Lauzane+Paulista,+São+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block font-sans text-xs tracking-widest uppercase text-on-primary bg-primary-container px-8 py-3 transition-all hover:bg-surface-tint active:scale-95 text-center"
            >
              Ver no Google Maps
            </a>
          </div>

          {/* Map embed */}
          <div className="md:col-span-7 h-[400px] md:h-auto min-h-[400px] gold-border-glow overflow-hidden">
            <iframe
              title="Localização Imperial Lauzane"
              className="w-full h-full grayscale contrast-125 opacity-60 hover:opacity-80 transition-opacity duration-500"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0!2d-46.607!3d-23.50!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5842b97d0c5d%3A0x1!2sR.+Conselheiro+Moreira+de+Barros%2C+2780+-+Lauzane+Paulista%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1714000000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
