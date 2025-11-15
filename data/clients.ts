export type ClientItem = {
  id: string       // kebab-case
  name: string     // display name
  logo?: string    // optional: local logo image path (e.g., 'logo1.jpg')
  domain?: string  // optional: used for Clearbit logo fallback
  url?: string     // optional: official website
}

export const CLIENTS: ClientItem[] = [
  { id: 'salto-systems', name: 'SALTO Systems', logo: 'logo1.jpg', domain: 'saltosystems.com', url: 'https://www.saltosystems.com' },
  { id: 'red-sea-development', name: 'The Red Sea Development Company', logo: 'logo2.png', domain: 'redseaglobal.com' },
  { id: 'saudi-aramco', name: 'Saudi Aramco', logo: 'logo3.png', domain: 'aramco.com' },
  { id: 'jana-marine-services', name: 'Jana Marine Services Co. LLC', logo: 'logo4.jfif', domain: 'janamarine.com' },
  { id: 'al-rajhi-transport-logistics', name: 'Al Rajhi Transport & Logistics', logo: 'logo5.png', domain: 'alrajhitransport.com' },
  { id: 'alrashed', name: 'ALRASHED', logo: 'logo7.jfif', domain: 'alrashed.com' },
  { id: 'aj-saudi', name: 'AJ SAUDI', logo: 'logo8.webp', domain: 'ajholding.com.sa' },
  { id: 'educational-book-house', name: 'Educational Book House', logo: 'logo9.jpg', domain: 'edbookhouse.com' },
  { id: 'al-ahsa-modern-press', name: 'AL-AHSA MODERN PRESS', logo: 'logo10.png', domain: 'ahsapress.com' },
  { id: 'future-corners-contracting', name: 'Future Corners Contracting Est.' },
  { id: 'gcc-lab', name: 'GCC Lab', logo: 'logo11.webp', domain: 'gcclab.com' },
  { id: 'saad-college-of-nursing', name: 'Saad College of Nursing & Allied Health Sciences', logo: 'logo12.jpg' },
  { id: 'dhahran-ahliyya-schools', name: 'Dhahran Ahliyya Schools', logo: 'logo13.png', domain: 'das.sch.sa' },
  { id: 'ram-clinics', name: 'RAM Clinics', logo: 'logo14.jfif', domain: 'ramclinics.net' },
  { id: 'sharbatly-club', name: 'Sharbatly Club', logo: 'logo15.webp' },
  { id: 'al-salam-hospital', name: 'Al Salam Hospital', logo: 'logo16.jpg' },
  { id: 'al-moosa-doors', name: 'Al Moosa Doors' },
  { id: 'alhakmiah', name: 'ALHAKMIAH', logo: 'logo17.jpg' },
]

export const CLIENTS_COUNT = CLIENTS.length

