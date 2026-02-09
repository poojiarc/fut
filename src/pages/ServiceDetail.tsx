// import { useParams, Link } from "react-router-dom";
// import { ArrowLeft, CheckCircle2 } from "lucide-react";
// import { services } from "@/data/services";
// import { serviceImages } from "@/lib/images";

// const ServiceDetail = () => {
//   const { id } = useParams<{ id: string }>();
//   const service = services.find((s) => s.id === id);

//   if (!service) {
//     return (
//       <div className="section-padding section-container text-left">
//         <h1 className="font-display text-3xl font-bold text-foreground mb-4">
//           Service Not Found
//         </h1>
//         <Link to="/services" className="text-secondary hover:underline">
//           ← Back to Services
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* HERO */}
//       <section className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
//         <img
//           src={serviceImages[service.image]}
//           alt={service.title}
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 gradient-hero-overlay" />

//         {/* Back to Services */}
//         <div className="absolute top-6 left-6 z-20">
//           <Link
//             to="/services"
//             className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium"
//           >
//             <ArrowLeft className="h-4 w-4" />
//             Back to Services
//           </Link>
//         </div>

//         {/* Center Hero Content */}
//         <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
//           <div className="max-w-3xl text-primary-foreground">
//             <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
//               {service.title.includes("(") ? (
//                 <>
//                   {service.title.split(" (")[0]}
//                   <br />
//                   <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-medium text-primary-foreground/85">
//                     ({service.title.split(" (")[1]}
//                   </span>
//                 </>
//               ) : (
//                 service.title
//               )}
//             </h1>

//             {service.description && (
//               <p className="text-primary-foreground/85 text-base sm:text-lg md:text-xl leading-relaxed">
//                 {service.description}
//               </p>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* CONTENT */}
//       <section className="section-padding bg-card">
//         <div className="section-container max-w-4xl">

//           {/* Highlights – single discipline */}
//           {service.highlights?.length > 0 && !service.disciplines && (
//             <>
//               <h3 className="font-display text-xl font-bold text-foreground mb-4 text-left">
//                 {service.id === "piping-engineering"
//                   ? "We Are Specialized in Piping Design"
//                   : "Highlights"}
//               </h3>
//               <div className="space-y-3 mb-10">
//                 {service.highlights.map((item) => (
//                   <div key={item} className="flex items-start gap-3">
//                     <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
//                     <span className="text-muted-foreground text-left">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}

//           {/* Highlights – multi discipline */}
//           {service.highlights?.length > 0 && service.disciplines && (
//             <>
//               <h3 className="font-display text-xl font-bold text-foreground mb-4 text-left">
//                 Why Choose Us?
//               </h3>
//               <div className="space-y-3 mb-10">
//                 {service.highlights.map((item) => (
//                   <div key={item} className="flex items-start gap-3">
//                     <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
//                     <span className="text-muted-foreground text-left">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}

//           {/* Disciplines */}
//           {service.disciplines && service.disciplines.length > 0 && (
//             <div className="mb-10 space-y-8">
//               <h3 className="font-display text-xl font-bold text-foreground text-left">
//                 Our Services
//               </h3>

//               {service.disciplines.map((disc) => (
//                 <div key={disc.name}>
//                   <h4 className="font-display text-lg font-semibold text-foreground mb-3 text-left">
//                     {disc.name}
//                   </h4>
//                   <div className="space-y-2">
//                     {disc.items.map((item) => (
//                       <div key={item} className="flex items-start gap-3">
//                         <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
//                         <span className="text-sm text-muted-foreground text-left">
//                           {item}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Quality Commitment – special logic */}
//           {service.id === "quality-commitment" && (
//             <>
//               <h3 className="font-display text-xl font-bold text-foreground mb-4 text-left">
//                 Our Structured Three-Level Review System
//               </h3>
//               <div className="space-y-6 mb-10">
//                 {service.highlights.map((item, idx) => (
//                   <div key={idx} className="bg-muted rounded-lg p-5">
//                     <div className="flex items-start gap-3">
//                       <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm">
//                         {idx + 1}
//                       </div>
//                       <span className="text-foreground text-left">{item}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {service.whyChooseUs && (
//                 <>
//                   <h3 className="font-display text-xl font-bold text-foreground mb-4 text-left">
//                     Why Our Quality Commitment Matters
//                   </h3>
//                   <div className="space-y-3 mb-10">
//                     {service.whyChooseUs.map((item) => (
//                       <div key={item} className="flex items-start gap-3">
//                         <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
//                         <span className="text-muted-foreground text-left">
//                           {item}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               )}
//             </>
//           )}

//           {/* Deliverables */}
//           {service.deliverables?.length > 0 && (
//             <>
//               <h3 className="font-display text-xl font-bold text-foreground mb-4 text-left">
//                 Deliverables
//               </h3>
//               <div className="grid sm:grid-cols-2 gap-3 mb-10">
//                 {service.deliverables.map((item) => (
//                   <div
//                     key={item}
//                     className="bg-muted rounded-lg p-4 flex items-start gap-3"
//                   >
//                     <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
//                     <span className="text-sm text-foreground text-left">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}

//           {/* Closing Statement */}
//           {service.closingStatement && (
//             <p className="text-muted-foreground leading-relaxed text-left italic border-l-4 border-secondary pl-4">
//               {service.closingStatement}
//             </p>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default ServiceDetail;


import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { serviceImages } from "@/lib/images";

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="section-padding section-container text-left">
        <h1 className="font-display text-3xl font-bold text-foreground mb-4">
          Service Not Found
        </h1>
        <Link to="/services" className="text-secondary hover:underline">
          ← Back to Services
        </Link>
      </div>
    );
  }

  // Title split logic (fix: force two clean lines)
  const hasSubTitle = service.title.includes("(");
  const titleMain = hasSubTitle
    ? service.title.split(" (")[0]
    : service.title;

  // Remove parentheses so subtitle displays cleanly
  const titleSub = hasSubTitle
    ? service.title.split(" (")[1].replace(")", "")
    : "";

  return (
    <>
      {/* HERO */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        <img
          src={serviceImages[service.image]}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />

        {/* Back to Services */}
        <div className="absolute top-6 left-6 z-20">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
        </div>

        {/* Center Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-3xl text-primary-foreground">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {hasSubTitle ? (
                <>
                  {/* Line 1: 3D Modelling & 2D Drafting */}
                  <span className="block whitespace-nowrap">
                    {titleMain}
                  </span>

                  {/* Line 2: Software Agnostic */}
                  <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-medium text-primary-foreground/85">
                    {titleSub}
                  </span>
                </>
              ) : (
                service.title
              )}
            </h1>

            {service.description && (
              <p className="text-primary-foreground/85 text-base sm:text-lg md:text-xl leading-relaxed">
                {service.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section-padding bg-card">
        <div className="section-container max-w-4xl">

          {/* Highlights – single discipline */}
          {service.highlights?.length > 0 && !service.disciplines && (
            <>
              <h3 className="font-display text-xl font-bold text-foreground mb-4 text-left">
                {service.id === "piping-engineering"
                  ? "We Are Specialized in Piping Design"
                  : "Highlights"}
              </h3>
              <div className="space-y-3 mb-10">
                {service.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-left">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Highlights – multi discipline */}
          {service.highlights?.length > 0 && service.disciplines && (
            <>
              <h3 className="font-display text-xl font-bold text-foreground mb-4 text-left">
                Why Choose Us?
              </h3>
              <div className="space-y-3 mb-10">
                {service.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-left">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Disciplines */}
          {service.disciplines && service.disciplines.length > 0 && (
            <div className="mb-10 space-y-8">
              <h3 className="font-display text-xl font-bold text-foreground text-left">
                Our Services
              </h3>

              {service.disciplines.map((disc) => (
                <div key={disc.name}>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-3 text-left">
                    {disc.name}
                  </h4>
                  <div className="space-y-2">
                    {disc.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground text-left">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quality Commitment – special logic */}
          {service.id === "quality-commitment" && (
            <>
              <h3 className="font-display text-xl font-bold text-foreground mb-4 text-left">
                Our Structured Three-Level Review System
              </h3>
              <div className="space-y-6 mb-10">
                {service.highlights.map((item, idx) => (
                  <div key={idx} className="bg-muted rounded-lg p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {idx + 1}
                      </div>
                      <span className="text-foreground text-left">{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              {service.whyChooseUs && (
                <>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4 text-left">
                    Why Our Quality Commitment Matters
                  </h3>
                  <div className="space-y-3 mb-10">
                    {service.whyChooseUs.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground text-left">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          )}

          {/* Deliverables */}
          {service.deliverables?.length > 0 && (
            <>
              <h3 className="font-display text-xl font-bold text-foreground mb-4 text-left">
                Deliverables
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {service.deliverables.map((item) => (
                  <div
                    key={item}
                    className="bg-muted rounded-lg p-4 flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground text-left">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Closing Statement */}
          {service.closingStatement && (
            <p className="text-muted-foreground leading-relaxed text-left italic border-l-4 border-secondary pl-4">
              {service.closingStatement}
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;