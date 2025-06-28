// components/NewsCard.tsx
type NewsItem = {
  title: string;
  date: string;
  summary: string;
};

export function NewsCard({ title, date, summary }: NewsItem) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="text-sm mt-2">{summary}</p>
    </div>
  );
}
