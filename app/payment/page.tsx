'use client'

import { useState, useEffect } from 'react'

export default function Payment() {
  const [isLoading, setIsLoading] = useState(false)
  const [bgClass, setBgClass] = useState('bg-default')

  useEffect(() => {
    const gender = sessionStorage.getItem('partnerGender')
    setBgClass(gender === 'homme' ? 'bg-blue' : gender === 'femme' ? 'bg-purple' : 'bg-default')
  }, [])

  const handlePayment = async () => {
    setIsLoading(true)

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()

      if (data.error) {
        alert('Erreur: ' + data.error)
        setIsLoading(false)
        return
      }

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Erreur:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
      setIsLoading(false)
    }
  }

  return (
    <div className={`container ${bgClass}`}>
      <div className="card">
        <h2>Vous êtes seulement à 5€ de connaître la vérité !</h2>
        <p className="message">
          Effectuez le paiement pour découvrir si votre partenaire est fidèle.
          Le paiement est sécurisé et peut être effectué via Apple Pay, carte bancaire ou autres méthodes.
        </p>
        <div className="price">5,00 €</div>
        
        <button 
          className="btn" 
          onClick={handlePayment}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="loading"></span> Chargement...
            </>
          ) : (
            'Payer 5€ - Découvrir la vérité'
          )}
        </button>
      </div>
    </div>
  )
}
