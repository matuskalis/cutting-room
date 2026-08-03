export interface Testimonial {
  id: string
  quote: string
  author: string
  title: string
  organization: string
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Northbound delivered a fully authorized data platform in under eight weeks — a timeline our previous vendor said was impossible. Their compliance-first approach saved us months of rework.",
    author: "Program Director",
    title: "Data Modernization Initiative",
    organization: "Federal Health Agency",
  },
  {
    id: "t2",
    quote:
      "Their team understood our mission from day one. The architecture they delivered wasn't just compliant — it was built so our team could maintain and extend it independently.",
    author: "Chief Technology Officer",
    title: "Digital Transformation Office",
    organization: "Department of Defense Component",
  },
  {
    id: "t3",
    quote:
      "Zero findings across three independent audits. That's not luck — that's engineering discipline. Northbound set a new standard for how we evaluate technology partners.",
    author: "Chief Information Security Officer",
    title: "Cybersecurity Division",
    organization: "Civilian Federal Agency",
  },
  {
    id: "t4",
    quote:
      "We needed a partner who could navigate both the technical and bureaucratic complexity of federal data systems. Northbound did both with precision.",
    author: "Deputy Director",
    title: "Enterprise Data Management",
    organization: "Federal Logistics Command",
  },
  {
    id: "t5",
    quote:
      "The ATO Accelerate methodology transformed our authorization process. What used to take quarters now takes weeks, with better security outcomes.",
    author: "Authorizing Official",
    title: "Risk Management Framework",
    organization: "Federal Health IT Organization",
  },
]
