import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="container mx-auto px-4 py-16 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact</h2>
      <p className="text-gray-700 mb-4">For business inquiries, collaborations, or questions, please reach out via email or LinkedIn.</p>
      <div className="space-y-4">
        <a href="mailto:adeelatta2000@gmail.com" className="block">
          <Button className="bg-[#2F81F7] text-white hover:bg-[#1e5bb8] rounded-lg py-3 px-6 font-semibold">
            Email: adeelatta2000@gmail.com
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/adeel-atta/" target="_blank" rel="noopener noreferrer" className="block">
          <Button className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-3 px-6 font-semibold">
            LinkedIn: adeel-atta
          </Button>
        </a>
      </div>
    </section>
  );
}
