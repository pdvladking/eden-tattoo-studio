export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-bone text-ink">
      <h2 className="text-3xl font-bold text-center mb-8">Mutation Stories</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="italic">
            “I walked in with an idea. I walked out with a mutation.”
          </p>
          <span className="block mt-4 font-semibold">— Ramesh, Kathmandu</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="italic">
            “The studio felt like home. The ink felt like truth.”
          </p>
          <span className="block mt-4 font-semibold">— Priya, Pokhara</span>
        </div>
      </div>
    </section>
  );
}
