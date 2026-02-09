// import { CheckCircle2, Globe, Heart, Shield, Users, Zap, Target } from "lucide-react";
// import { remoteDelivery } from "@/lib/images";

// const RemoteModel = () => {
//   return (
//     <>
//       {/* Hero */}
//       <section className="relative h-72 md:h-96 overflow-hidden">
//         <img src={remoteDelivery} alt="Remote engineering" className="w-full h-full object-cover" />
//         <div className="absolute inset-0 gradient-hero-overlay" />
//         <div className="relative z-10 h-full flex items-center">
//           <div className="section-container text-primary-foreground">
//             <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-2 text-left">How We Work</p>
//             <h1 className="font-display text-4xl md:text-5xl font-bold text-left">Our Remote-First Engineering Model</h1>
//           </div>
//         </div>
//       </section>

//       {/* Intro */}
//       <section className="section-padding bg-card">
//         <div className="section-container max-w-3xl">
//           <p className="text-muted-foreground leading-relaxed text-lg text-left">
//             At Futunir Global Pvt Ltd, we believe engineering excellence is driven by focus, accountability, and disciplined execution, not by physical location. Our remote-first delivery model allows us to build high-performing engineering teams across geographies, while maintaining strong quality control, secure workflows, and predictable delivery.
//           </p>
//         </div>
//       </section>

//       {/* Engineering Without Boundaries */}
//       <section className="section-padding bg-muted">
//         <div className="section-container">
//           <div className="mb-10">
//             <Globe className="h-10 w-10 text-secondary mb-3" />
//             <h2 className="font-display text-3xl font-bold text-foreground text-left">Engineering Without Boundaries</h2>
//             <p className="text-muted-foreground mt-3 max-w-2xl text-left">
//               Modern engineering projects demand speed, flexibility, and global collaboration. Our delivery model enables us to:
//             </p>
//           </div>
//           <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
//             {[
//               "Access the right expertise for each project",
//               "Scale teams quickly based on project needs",
//               "Support clients across time zones",
//               "Maintain continuity and responsiveness",
//             ].map((item) => (
//               <div key={item} className="bg-card rounded-lg p-5 card-shadow flex items-start gap-3">
//                 <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
//                 <span className="text-foreground text-left">{item}</span>
//               </div>
//             ))}
//           </div>
//           <p className="text-muted-foreground mt-8 max-w-2xl text-left">
//             This approach ensures consistent output quality, regardless of project size or location.
//           </p>
//         </div>
//       </section>

//       {/* Work Life Balance */}
//       <section className="section-padding bg-card">
//         <div className="section-container max-w-3xl">
//           <div className="mb-10">
//             <Heart className="h-10 w-10 text-secondary mb-3" />
//             <h2 className="font-display text-3xl font-bold text-foreground text-left">Work Life Balance Enables Better Engineering</h2>
//             <p className="text-muted-foreground mt-3 text-left">
//               Engineering design requires concentration, sound judgment, and attention to detail. We strongly believe that engineers perform best when they maintain a healthy work life balance.
//             </p>
//           </div>
//           <div className="space-y-3">
//             {[
//               "Work with higher focus and productivity",
//               "Reduce errors caused by fatigue and burnout",
//               "Take clear ownership of deliverables",
//               "Deliver consistent quality under tight schedules",
//             ].map((item) => (
//               <div key={item} className="bg-muted rounded-lg p-4 flex items-start gap-3">
//                 <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
//                 <span className="text-foreground text-left">{item}</span>
//               </div>
//             ))}
//           </div>
//           <p className="text-muted-foreground mt-6 font-medium text-left">
//             Balanced engineers deliver better engineering outcomes.
//           </p>
//         </div>
//       </section>

//       {/* Quality & Accountability */}
//       <section className="section-padding bg-muted">
//         <div className="section-container max-w-3xl">
//           <div className="mb-10">
//             <Shield className="h-10 w-10 text-secondary mb-3" />
//             <h2 className="font-display text-3xl font-bold text-foreground text-left">Quality & Accountability Remain Non-Negotiable</h2>
//             <p className="text-muted-foreground mt-3 text-left">
//               Remote working at Futunir does not mean reduced control. Every project follows defined processes, review cycles, and accountability structures to ensure:
//             </p>
//           </div>
//           <div className="grid sm:grid-cols-2 gap-4">
//             {[
//               "Compliance with client and international standards",
//               "Multi-level design checks and reviews",
//               "Secure data access and controlled workflows",
//               "Clear communication and reporting",
//             ].map((item) => (
//               <div key={item} className="bg-card rounded-lg p-4 card-shadow flex items-start gap-3">
//                 <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
//                 <span className="text-foreground text-sm text-left">{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Our Remote Model Works */}
//       <section className="section-padding bg-card">
//         <div className="section-container">
//           <h2 className="font-display text-3xl font-bold text-foreground text-left mb-10">
//             Why Our Remote Model Works for Clients
//           </h2>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
//             {[
//               { icon: Users, title: "Global Talent Access", desc: "Right engineers for the right scope" },
//               { icon: Target, title: "Quality-Focused Execution", desc: "Better focus, fewer errors" },
//               { icon: Zap, title: "Scalable Teams", desc: "Flexible resourcing without delays" },
//               { icon: Shield, title: "Cost Efficiency", desc: "Optimized delivery without quality compromise" },
//               { icon: CheckCircle2, title: "Reliable Outcomes", desc: "Predictable timelines and deliverables" },
//             ].map((item) => {
//               const Icon = item.icon;
//               return (
//                 <div key={item.title} className="bg-muted rounded-xl p-6 card-shadow">
//                   <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-3">
//                     <Icon className="h-5 w-5 text-primary-foreground" />
//                   </div>
//                   <h3 className="font-display font-bold text-foreground mb-1 text-left">{item.title}</h3>
//                   <p className="text-muted-foreground text-sm text-left">{item.desc}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default RemoteModel;



import { CheckCircle2, Globe, Heart, Shield, Users, Zap, Target } from "lucide-react";
import { remoteDelivery } from "@/lib/images";

const RemoteModel = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        <img
          src={remoteDelivery}
          alt="Remote engineering"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />

        {/* CENTER HERO CONTENT */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-3xl text-center text-primary-foreground">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Our Remote Engineering Model
            </h1>
            <p className="text-primary-foreground/85 text-base sm:text-lg md:text-xl leading-relaxed">
              A structured, accountable, and scalable delivery approach that
              enables high-quality engineering without geographical constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-card">
        <div className="section-container max-w-3xl">
          <p className="text-muted-foreground leading-relaxed text-lg text-left">
            At Futunir Global Pvt Ltd, we believe engineering excellence is driven
            by focus, accountability, and disciplined execution, not by physical
            location. Our remote-first delivery model allows us to build
            high-performing engineering teams across geographies, while
            maintaining strong quality control, secure workflows, and
            predictable delivery.
          </p>
        </div>
      </section>

      {/* Engineering Without Boundaries */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="mb-10">
            <Globe className="h-10 w-10 text-secondary mb-3" />
            <h2 className="font-display text-3xl font-bold text-foreground text-left">
              Engineering Without Boundaries
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-left">
              Modern engineering projects demand speed, flexibility, and global
              collaboration. Our delivery model enables us to:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
            {[
              "Access the right expertise for each project",
              "Scale teams quickly based on project needs",
              "Support clients across time zones",
              "Maintain continuity and responsiveness",
            ].map((item) => (
              <div
                key={item}
                className="bg-card rounded-lg p-5 card-shadow flex items-start gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-foreground text-left">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground mt-8 max-w-2xl text-left">
            This approach ensures consistent output quality, regardless of
            project size or location.
          </p>
        </div>
      </section>

      {/* Work Life Balance */}
      <section className="section-padding bg-card">
        <div className="section-container max-w-3xl">
          <div className="mb-10">
            <Heart className="h-10 w-10 text-secondary mb-3" />
            <h2 className="font-display text-3xl font-bold text-foreground text-left">
              Work Life Balance Enables Better Engineering
            </h2>
            <p className="text-muted-foreground mt-3 text-left">
              Engineering design requires concentration, sound judgment, and
              attention to detail. We strongly believe that engineers perform
              best when they maintain a healthy work life balance.
            </p>
          </div>

          <div className="space-y-3">
            {[
              "Work with higher focus and productivity",
              "Reduce errors caused by fatigue and burnout",
              "Take clear ownership of deliverables",
              "Deliver consistent quality under tight schedules",
            ].map((item) => (
              <div
                key={item}
                className="bg-muted rounded-lg p-4 flex items-start gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-foreground text-left">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground mt-6 font-medium text-left">
            Balanced engineers deliver better engineering outcomes.
          </p>
        </div>
      </section>

      {/* Quality & Accountability */}
      <section className="section-padding bg-muted">
        <div className="section-container max-w-3xl">
          <div className="mb-10">
            <Shield className="h-10 w-10 text-secondary mb-3" />
            <h2 className="font-display text-3xl font-bold text-foreground text-left">
              Quality & Accountability Remain Non-Negotiable
            </h2>
            <p className="text-muted-foreground mt-3 text-left">
              Remote working at Futunir does not mean reduced control. Every
              project follows defined processes, review cycles, and
              accountability structures to ensure:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Compliance with client and international standards",
              "Multi-level design checks and reviews",
              "Secure data access and controlled workflows",
              "Clear communication and reporting",
            ].map((item) => (
              <div
                key={item}
                className="bg-card rounded-lg p-4 card-shadow flex items-start gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-foreground text-sm text-left">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Remote Model Works */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <h2 className="font-display text-3xl font-bold text-foreground text-left mb-10">
            Why Our Remote Model Works for Clients
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {[
              { icon: Users, title: "Global Talent Access", desc: "Right engineers for the right scope" },
              { icon: Target, title: "Quality-Focused Execution", desc: "Better focus, fewer errors" },
              { icon: Zap, title: "Scalable Teams", desc: "Flexible resourcing without delays" },
              { icon: Shield, title: "Cost Efficiency", desc: "Optimized delivery without quality compromise" },
              { icon: CheckCircle2, title: "Reliable Outcomes", desc: "Predictable timelines and deliverables" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-muted rounded-xl p-6 card-shadow">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-3">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-1 text-left">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm text-left">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default RemoteModel;
