'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function City() {
  const router = useRouter()
  const [city, setCity] = useState('')
  const [bgClass, setBgClass] = useState('bg-default')

  useEffect(() => {
    const gender = sessionStorage.getItem('partnerGender')
    setBgClass(gender === 'homme' ? 'bg-blue' : gender === 'femme' ? 'bg-purple' : 'bg-default')
  }, [])

  const handleContinue = () => {
    if (!city.trim()) {
      alert('Veuillez entrer une ville')
      return
    }
    
    sessionStorage.setItem('city', city)
    router.push('/social-media')
  }

  return (
    <div className={`container ${bgClass}`}>
      <div className="card">
        <h2>Dans quelle ville habite votre partenaire ?</h2>
        <p>La localisation permet d'affiner les résultats de recherche</p>
        
        <div className="input-group">
          <label htmlFor="city">Ville</label>
          <input
            type="text"
            id="city"
            placeholder="Ex: Paris"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <button className="btn" onClick={handleContinue}>
          Continuer
        </button>
      </div>
    </div>
  )
}

