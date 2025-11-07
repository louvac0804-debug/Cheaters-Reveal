'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [partnerGender, setPartnerGender] = useState<'homme' | 'femme' | null>(null)

  const handleContinue = () => {
    if (!partnerGender) {
      alert('Veuillez sélectionner le sexe de votre partenaire')
      return
    }
    
    // Sauvegarder dans sessionStorage
    sessionStorage.setItem('partnerGender', partnerGender)
    router.push('/age')
  }

  // Déterminer le fond selon le sexe
  const bgClass = partnerGender === 'homme' 
    ? 'bg-blue' 
    : partnerGender === 'femme' 
    ? 'bg-purple' 
    : 'bg-default'

  return (
    <div className={`container ${bgClass}`}>
      <div className="card">
        <h1>Quel est le sexe de votre partenaire ?</h1>
        <p>Cette information nous permet d'affiner notre recherche</p>
        
        <div className="gender-options">
          <button
            className={`gender-btn ${partnerGender === 'homme' ? 'selected' : ''}`}
            onClick={() => setPartnerGender('homme')}
          >
            <span className="gender-icon">👨</span>
            <span>Homme</span>
          </button>
          <button
            className={`gender-btn ${partnerGender === 'femme' ? 'selected' : ''}`}
            onClick={() => setPartnerGender('femme')}
          >
            <span className="gender-icon">👩</span>
            <span>Femme</span>
          </button>
        </div>

        <button className="btn" onClick={handleContinue}>
          Continuer
        </button>
      </div>
    </div>
  )
}
