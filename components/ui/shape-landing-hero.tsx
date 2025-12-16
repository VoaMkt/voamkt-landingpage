export function HeroGeometric({
  badge = "FILTRA TESTE",
  title1 = "Hero",
  title2 = "Funcionando",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-950 text-white border-b-4 border-red-500">
      
      {/* Círculo simples simulando o badge */}
      <div className="px-4 py-2 bg-white/10 rounded-full mb-8 border border-white/20">
        {badge}
      </div>

      {/* Título Gigante */}
      <h1 className="text-6xl md:text-8xl font-bold text-center mb-8">
        <span className="block text-white">{title1}</span>
        <span className="block text-cyan-400">{title2}</span>
      </h1>

      <p className="text-xl text-gray-400 max-w-lg text-center">
        Se você está vendo isso, a conexão do arquivo está 100% correta.
        O problema anterior era a animação travando.
      </p>

    </div>
  );
}