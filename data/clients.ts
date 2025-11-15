export type ClientItem = {
  id: string       // kebab-case
  name: string     // display name
  domain?: string  // optional: used for Clearbit logo
  url?: string     // optional: official website
}

export const CLIENTS: ClientItem[] = [
  { id: 'salto-systems', name: 'SALTO Systems', domain: 'saltosystems.com', url: 'https://www.saltosystems.com' },
  { id: 'red-sea-development', name: 'The Red Sea Development Company', domain: 'redseaglobal.com' },
  { id: 'saudi-aramco', name: 'Saudi Aramco', domain: 'aramco.com' },
  { id: 'jana-marine-services', name: 'Jana Marine Services Co. LLC', domain: 'janamarine.com' },
  { id: 'al-rajhi-transport-logistics', name: 'Al Rajhi Transport & Logistics', domain: 'alrajhitransport.com' },
  { id: 'alrashed', name: 'ALRASHED', domain: 'alrashed.com' },
  { id: 'aj-saudi', name: 'AJ SAUDI', domain: 'ajholding.com.sa' },
  { id: 'educational-book-house', name: 'Educational Book House', domain: 'edbookhouse.com' },
  { id: 'al-ahsa-modern-press', name: 'AL-AHSA MODERN PRESS', domain: 'ahsapress.com' },
  { id: 'future-corners-contracting', name: 'Future Corners Contracting Est.' },
  { id: 'gcc-lab', name: 'GCC Lab', domain: 'gcclab.com' },
  { id: 'saad-college-of-nursing', name: 'Saad College of Nursing & Allied Health Sciences' },
  { id: 'dhahran-ahliyya-schools', name: 'Dhahran Ahliyya Schools', domain: 'das.sch.sa' },
  { id: 'ram-clinics', name: 'RAM Clinics', domain: 'ramclinics.net' },
  { id: 'sharbatly-club', name: 'Sharbatly Club' },
  { id: 'al-salam-hospital', name: 'Al Salam Hospital' },
  { id: 'al-moosa-doors', name: 'Al Moosa Doors' },
  { id: 'alhakmiah', name: 'ALHAKMIAH' },
]

export const CLIENTS_COUNT = CLIENTS.length

