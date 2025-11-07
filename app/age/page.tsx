'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Age() {
  const router = useRouter()
  const [age, setAge] = useState('')
  const [bgClass, setBgClass] = useState('bg-default')

  useEffect(() => {
    // Récupérer le sexe pour le fond
    const gender = sessionStorage.getItem('partnerGender')
    setBgClass(gender === 'homme' ? 'bg-blue' : gender === 'femme' ? 'bg-purple' : 'bg-default')
  }, [])

  const handleContinue = () => {
    if (!age || parseInt(age) < 18 || parseInt(age) > 100) {
      alert('Veuillez entrer un âge valide (entre 18 et 100 ans)')
      return
    }
    
    sessionStorage.setItem('age', age)
    router.push('/city')
  }

  return (
    <div className={`container ${bgClass}`}>
      <div className="card">
        <h2>Quel est l'âge de votre partenaire ?</h2>
        <p>Cette information nous aide à affiner la recherche</p>
        
        <div className="input-group">
          <label htmlFor="age">Âge</label>
          <input
            type="number"
            id="age"
            placeholder="Ex: 25"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min="18"
            max="100"
          />
        </div>

        <button className="btn" onClick={handleContinue}>
          Continuer
        </button>
      </div>
    </div>
  )
}

