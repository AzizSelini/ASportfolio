import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
        {/* Photo de profil */}
        <Image
          src="/profile.jpg" // remplace par ta vraie image dans /public
          alt="Mohamed Aziz Sellini"
          width={160}
          height={160}
          className="rounded-full shadow-lg mb-6"
        />

        {/* Texte d'intro */}
        <h1 className="text-4xl font-bold mb-4">👋 Je suis Mohamed Aziz Sellini</h1>
        <p className="text-xl mb-4">
          UX/UI Designer & Consultant Fonctionnel SAP / Systèmes d'information.
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400 max-w-2xl mb-6">
          Passionné par l’innovation, j’accompagne les entreprises dans la conception d’expériences utilisateurs fluides,
          la digitalisation de leurs process, et le pilotage fonctionnel.
        </p>

        {/* Boutons */}
        <div className="flex flex-wrap gap-4">
          <Link href="/projects" className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800">
            🎨 Voir mes projets
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-gray-600 dark:border-gray-400 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
            📬 Me contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
