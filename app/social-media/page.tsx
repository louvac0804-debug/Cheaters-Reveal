'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SocialMedia() {
  const router = useRouter()
  const [instagram, setInstagram] = useState('')
  const [snapchat, setSnapchat] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [searchStep, setSearchStep] = useState(0)
  const [bgClass, setBgClass] = useState('bg-default')

  useEffect(() => {
    const gender = sessionStorage.getItem('partnerGender')
    setBgClass(gender === 'homme' ? 'bg-blue' : gender === 'femme' ? 'bg-purple' : 'bg-default')
  }, [])

  const searchSteps = [
    { text: 'Recherche des profils similaires', icon: '🔍' },
    { text: 'Recherche par âge', icon: '📅' },
    { text: 'Recherche par localisation', icon: '📍' },
  ]

  const handleSearch = () => {
    if (!instagram.trim() && !snapchat.trim()) {
      alert('Veuillez entrer au moins un nom d\'utilisateur Instagram ou Snapchat')
      return
    }

    setIsSearching(true)
    sessionStorage.setItem('instagram', instagram)
    sessionStorage.setItem('snapchat', snapchat)

    // Simuler les étapes de recherche
    let currentStep = 0
    setSearchStep(0)
    
    const interval = setInterval(() => {
      currentStep++
      setSearchStep(currentStep)
      
      if (currentStep >= searchSteps.length) {
        clearInterval(interval)
        setTimeout(() => {
          router.push('/payment')
        }, 1000)
      }
    }, 2000)
  }

  return (
    <div className={`container ${bgClass}`}>
      <div className="card">
        <h2>Réseaux sociaux de votre partenaire</h2>
        <p>Entrez le nom d'utilisateur Instagram et/ou Snapchat</p>
        
        {!isSearching ? (
          <>
            <div className="input-group">
              <label htmlFor="instagram">Instagram (optionnel)</label>
              <input
                type="text"
                id="instagram"
                placeholder="@username"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="snapchat">Snapchat (optionnel)</label>
              <input
                type="text"
                id="snapchat"
                placeholder="username"
                value={snapchat}
                onChange={(e) => setSnapchat(e.target.value)}
              />
            </div>

            <button className="btn" onClick={handleSearch}>
              Rechercher
            </button>
          </>
        ) : (
          <div className="search-animation">
            <h3>Analyse en cours...</h3>
            <div className="gears-container">
              {searchSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`gear-step ${index <= searchStep ? 'active' : ''} ${index < searchStep ? 'completed' : ''}`}
                >
                  <div className="gear-icon">
                    {index < searchStep ? '✅' : index === searchStep ? (index === 2 ? '📍' : '⚙️') : '⏳'}
                  </div>
                  <div className="gear-text">{step.text}</div>
                  {index === searchStep && <div className="gear-spinner"></div>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

