import { services } from "@/lib/data/homeServices";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Layers, ArrowLeft } from "lucide-react";

function HomeServicesSection() {
  const displayedServices = services.slice(0, 3);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-centlg:shadow-mder gap-3 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-8 py-3 rounded-full text-sm font-bold mb-8 shadow-lg">
            <Layers className="w-5 h-5" />
            <span>خدماتنا المتخصصة</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-[var(--dark)] mb-8">
            <span className="block">حلول شاملة</span>
            <span className="text-gradient">لجميع احتياجات تركيب الواجهات</span>
          </h2>

          <p className="text-xl text-[var(--dark)]/70 max-w-4xl mx-auto leading-relaxed font-light">
            نقدم مجموعة من الخدمات المتخصصة في مجال تركيب الواجهات الإعلانية
            والديكورية والكلادينج، نضمن فيها الجودة والدقة والابتكار.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <Card
              key={index}
              className="service-card group shadow-lg cursor-pointer h-full overflow-hidden rounded-3xl"
            >
              <CardContent className="p-8 h-full flex flex-col relative bg-white">
                {/* Hover Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10 flex-1">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[var(--dark)] mb-4 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--dark)]/70 leading-relaxed font-light mb-4 text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features?.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-[var(--dark)]/80"
                      >
                        <div className="w-2 h-2 bg-[var(--accent)] rounded-full flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Details Button */}
                <div className="mt-auto relative z-10   ">
                  <Link
                    href={service.link}
                    className="glass-navbar p-2 lg:shadow-md"
                  >
                    <Button
                      variant="link"
                      className="  text-[var(--secondary)] hover:text-white transition-all duration-300 font-bold group relative overflow-hidden"
                    >
                      <span className="group-hover:opacity-0 transition-opacity duration-200">
                        عرض التفاصيل
                      </span>
                      <ArrowLeft className="absolute justify-center text-black text-center opacity-20 group-hover:opacity-100 transition-opacity duration-200 w-6 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
export default HomeServicesSection;
