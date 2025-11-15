export type PartnerItem = {
  id: string
  name: string
  domain?: string
  url?: string
}

export const PARTNERS: PartnerItem[] = [
  { id: 'sonicwall', name: 'SonicWall', domain: 'sonicwall.com', url: 'https://www.sonicwall.com' },
  { id: 'dell-technologies', name: 'Dell Technologies', domain: 'delltechnologies.com', url: 'https://www.dell.com' },
  { id: 'digital-guardian', name: 'Digital Guardian', domain: 'digitalguardian.com' },
  { id: 'microsoft', name: 'Microsoft', domain: 'microsoft.com' },
  { id: 'fortinet', name: 'Fortinet', domain: 'fortinet.com' },
  { id: 'kaspersky', name: 'Kaspersky', domain: 'kaspersky.com' },
  { id: 'logpoint', name: 'Logpoint', domain: 'logpoint.com' },
  { id: 'seceon', name: 'Seceon', domain: 'seceon.com' },
  { id: 'acronis', name: 'Acronis', domain: 'acronis.com' },
  { id: 'vmware', name: 'VMware', domain: 'vmware.com' },
  { id: 'ubility', name: 'Ubility' },
  { id: 'hewlett-packard-enterprise', name: 'Hewlett Packard Enterprise', domain: 'hpe.com' },
  { id: 'yeastar', name: 'Yeastar', domain: 'yeastar.com' },
  { id: 'sophos', name: 'Sophos', domain: 'sophos.com' },
  { id: 'micro-focus', name: 'Micro Focus', domain: 'microfocus.com' },
  { id: 'avaya', name: 'Avaya', domain: 'avaya.com' },
]

export const PARTNERS_COUNT = PARTNERS.length
