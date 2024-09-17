"use client";

import { PlugIcon, FolderIcon, ZapIcon, ServerIcon, ChevronsUp } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-green-600 dark:text-green-400">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-zinc-600 dark:text-zinc-300">{description}</p>
      </div>
    </div>
  );
}

export function FeatureCards() {
  const features = [
    {
      icon: <PlugIcon size={48} />,
      title: "Support Plugins/Mods",
      description:
        "Installez et gérez facilement vos plugins et mods préférés pour personnaliser votre expérience de jeu.",
    },
    {
      icon: <FolderIcon size={48} />,
      title: "Accès aux Fichiers",
      description:
        "Accédez et modifiez directement les fichiers de votre serveur pour un contrôle total sur votre configuration.",
    },
    {
      icon: <ZapIcon size={48} />,
      title: "Haute Performance",
      description:
        "Profitez d'une expérience de jeu fluide et sans lag grâce à nos serveurs optimisés et puissants.",
    },
    {
      icon: <ServerIcon size={48} />,
      title: "Configuration Facile",
      description:
        "Lancez votre serveur Minecraft en quelques clics avec notre interface conviviale et intuitive.",
    },
    {
      icon: <ChevronsUp size={48} />,
      title: "Mise à niveau rapide",
      description: "Mettez à niveau votre serveur et adaptez a votre budget.",
    },
  ];

  return (
    <section className="py-12 bg-zinc-200 dark:bg-zinc-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-zinc-800 dark:text-zinc-200">
          Fonctionnalités Principales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 rounded">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
