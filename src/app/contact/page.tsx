import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name}. Envía un mensaje para colaboraciones, proyectos o consultas.`,
  openGraph: {
    title: 'Contacto - Portafolio',
    description: `Ponte en contacto con ${personalInfo.name}`,
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
        <p className="text-lg text-gray-600 mb-8">
          ¿Tienes un proyecto en mente o quieres colaborar? ¡Me encantaría escucharte!
        </p>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                placeholder="Asunto del mensaje"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900"
                placeholder="Tu mensaje..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Otras formas de contacto
          </h2>
          <div className="space-y-3">
            <div>
              <span className="font-medium text-gray-700">Email:</span>{' '}
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-blue-600 hover:underline"
              >
                {personalInfo.email}
              </a>
            </div>
            <div>
              <span className="font-medium text-gray-700">GitHub:</span>{' '}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {personalInfo.github}
              </a>
            </div>
            <div>
              <span className="font-medium text-gray-700">LinkedIn:</span>{' '}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {personalInfo.linkedin}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
