import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services"
import { caseStudies } from "@/data/case-studies"
import { ServiceDetailClient } from "./service-detail-client"

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: service.name,
    description: service.description,
  }
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const relatedStudies = caseStudies.filter((study) =>
    service.relatedCaseStudies.includes(study.id)
  )

  return <ServiceDetailClient service={service} relatedStudies={relatedStudies} />
}
