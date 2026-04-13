import { services } from "@/data/services";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, Phone } from "lucide-react";
import Image from "next/image";

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const service = services.find((s) => s.id === params.id);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} - Dr. Shekhar Poudel`,
    description: service.description,
    keywords: [
      "gastroenterology",
      "hepatology",
      service.title.toLowerCase(),
      "medical services",
    ],
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default async function ServiceDetail(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-white dark:from-emerald-950/20 dark:via-green-900/20 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/services"
            className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 hover:text-green-600 dark:hover:text-green-400 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Services</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="w-150 h-100 p-2 bg-gradient-to-br from-emerald-200 to-green-200 dark:from-emerald-700 dark:to-green-700 rounded-2xl flex items-center justify-center mb-6">
            {/* <span className="text-4xl"> */}

            <Image
              src={service.image}
              alt="Dr. Shekhar Poudel"
              className=" rounded-2xl"
              width={600}
              height={400}
            />
            {/* </span> */}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400 bg-clip-text text-transparent mb-6 leading-tight">
            {service.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Service Details */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 p-8 rounded-2xl mb-12 border border-emerald-200/50 dark:border-emerald-700/50">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-6">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Key Features & Procedures:
              </h3>
              <ul className="space-y-3">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check
                      size={20}
                      className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-gray-600 dark:text-gray-300">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Why Choose Our Service:
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <Check
                    size={20}
                    className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5"
                  />
                  <span>Experienced gastroenterology specialist</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check
                    size={20}
                    className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5"
                  />
                  <span>State-of-the-art medical facilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check
                    size={20}
                    className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5"
                  />
                  <span>Personalized treatment plans</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check
                    size={20}
                    className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5"
                  />
                  <span>Comprehensive follow-up care</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-emerald-100 via-green-100 to-teal-100 dark:from-emerald-900/40 dark:via-green-900/40 dark:to-teal-900/40 p-8 rounded-2xl mb-12 border border-emerald-200/50 dark:border-emerald-700/50">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Contact us today to schedule a consultation for{" "}
            {service.title.toLowerCase()}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+977015451000"
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/9779765199777"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950 px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center space-x-2"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-emerald-600 dark:text-emerald-400"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Related Services */}
        {relatedServices && relatedServices.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent mb-8">
              Other Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((relatedService) => (
                <Link
                  key={relatedService.id}
                  href={`/services/${relatedService.id}`}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 transition border border-emerald-200/50 hover:shadow-lg hover:shadow-emerald-200 dark:hover:shadow-emerald-900/50"
                >
                  <div className="w-28 h-20 p-0.5 bg-gradient-to-br from-emerald-200 to-green-200 dark:from-emerald-700 dark:to-green-700 rounded-lg flex items-center justify-center mb-4">
                    <Image
                      width={112}
                      height={80}
                      src={relatedService.image}
                      alt={relatedService.title}
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                    {relatedService.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {relatedService.description}
                  </p>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                    Learn More
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
