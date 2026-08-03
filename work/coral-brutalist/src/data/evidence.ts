import type { EvidenceResource } from '@/types'

export const evidenceResources: EvidenceResource[] = [
  {
    id: 'capabilities-statement',
    title: 'Capabilities Statement',
    description: 'Federal-formatted capabilities overview including service portfolio, NAICS codes, past performance, and contract vehicles.',
    category: 'Procurement',
    status: 'available',
    href: '/procurement',
    icon: 'FileText',
  },
]

export function getEvidenceByCategory(category: string): EvidenceResource[] {
  return evidenceResources.filter((r) => r.category === category)
}
