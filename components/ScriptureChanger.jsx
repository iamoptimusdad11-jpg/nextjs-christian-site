import dayjs from 'dayjs';
import scriptures from '../lib/scriptures';

export default function ScriptureChanger({ className = '' }) {
  const today = dayjs().format('YYYY-MM-DD');
  const seed = dayjs(today).unix();
  const idx = Math.abs(seed) % scriptures.length;
  const verse = scriptures[idx];

  return (
    <div className={"p-6 rounded-2xl shadow-lg banner-gradient " + className}>
      <div className="text-sm uppercase tracking-wider text-pink-600">Scripture of the Day</div>
      <h2 className="mt-2 text-xl md:text-3xl font-bold">{verse.text}</h2>
      <div className="mt-3 text-sm text-gray-700">— {verse.ref}</div>
    </div>
  );
}
