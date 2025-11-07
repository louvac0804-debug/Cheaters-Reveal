'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

function ResultContent() {
  const searchParams = useSearchParams()
  const success = searchParams.get('success')
  const [bgClass, setBgClass] = useState('bg-default')

  useEffect(() => {
    const gender = sessionStorage.getItem('partnerGender')
    setBgClass(gender === 'homme' ? 'bg-blue' : gender === 'femme' ? 'bg-purple' : 'bg-default')
  }, [])

  // Si le paiement n'a pas été effectué, rediriger vers la page de paiement
  if (success !== 'true') {
    return (
      <div className={`container ${bgClass}`}>
        <div className="card">
          <h2>Paiement requis</h2>
          <p className="message error-message">
            Vous devez effectuer le paiement pour voir les résultats.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`container ${bgClass}`}>
      <div className="card final-result">
        <div className="result-icon">✅</div>
        <h1>Votre partenaire est fidèle !</h1>
        <div className="success-message-large">
          <p className="main-message">
            <strong>Non, votre partenaire n'est sur aucun site de rencontre.</strong>
          </p>
          <p>
            Notre analyse approfondie n'a détecté aucune activité suspecte sur les plateformes de rencontre.
          </p>
        </div>
        
        <div className="thank-you-section">
          <h2>Merci de nous avoir fait confiance</h2>
          <p>
            Nous espérons que cette vérification vous apporte la tranquillité d'esprit que vous recherchiez.
          </p>
          <p className="wishes">
            Nous vous souhaitons beaucoup de bonheur dans votre relation et bon courage pour la suite ! 💕
          </p>
        </div>

        <div className="celebration">
          <span>🎉</span>
          <span>💑</span>
          <span>✨</span>
        </div>
      </div>
    </div>
  )
}

export default function Result() {
  return (
    <Suspense fallback={
      <div className="container">
        <div className="card">
          <h2>Chargement...</h2>
        </div>
      </div>
    }>
      <ResultContent />
    </Suspense>
  )
}
