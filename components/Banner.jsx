import ScriptureChanger from './ScriptureChanger';

export default function Banner() {
  return (
    <section className="rounded-3xl overflow-hidden p-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Welcome — a place to encounter grace</h1>
          <p className="mt-4 text-lg text-gray-700">Daily Scripture, thoughtful articles, and compassionate answers to Christian questions.</p>
        </div>

        <div>
          <ScriptureChanger />
        </div>
      </div>
    </section>
  );
}
