type CardProps = {
  title: string;
  children: React.ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div className="border-4 border-black rounded-2xl p-6 bg-white shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      {children}
    </div>
  );
}