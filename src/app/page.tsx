import { FeatureCards } from "@/components/feature-cards";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className=" md:text-3xl text-4xl font-bold mb-6">
          Hébergement Minecraft Abordable et Performant
        </h1>
        <p className="md:text-2xl font-semibold text-xl mb-8">
          Lancez votre serveur Minecraft en quelques clics !
        </p>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          Commencer maintenant
        </Button>
      </section>

      <section
        id="fonctionnalites"
        className="bg-zinc-200 dark:bg-zinc-900 py-20 border-t border-zinc-300 dark:border-zinc-700"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Nos Fonctionnalités
          </h2>
          <FeatureCards />
        </div>
      </section>
    </main>
  );
}
