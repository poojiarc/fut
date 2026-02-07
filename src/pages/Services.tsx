import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { serviceImages } from "@/lib/images";

const Services = () => {
  return (
    <>
      <section className="gradient-bg py-16 md:py-20">
        <div className="section-container text-center text-primary-foreground">
          <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-2">What We Do</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">Our Engineering Services</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mt-4">
            At Futunir Global Pvt Ltd, we provide end-to-end engineering design and support services, tailored to meet project-specific requirements across industries.
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="service-card group h-72"
              >
                <img
                  src={serviceImages[service.image]}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                    {service.shortTitle}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm line-clamp-3 mb-3">
                    {service.description}
                  </p>
                  <span className="text-cyan text-sm font-medium inline-flex items-center gap-1">
                    View Details <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
