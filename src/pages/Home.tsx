export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold">Welcome to Donna’s Best</h1>
      <p>
        This isn’t just a website — it’s the beginning of a legacy. I’m Donna, and I’m writing a book
        to help others care with heart. This space will guide me through my story, one memory and
        lesson at a time.
      </p>
      <p>
        <strong>Want to follow along?</strong> Join my mailing list for early previews, reflections, and caregiving wisdom.
      </p>
      <a href="/journal" className="text-blue-600 underline">Start Donna’s Journal</a>
    </div>
  );
}
