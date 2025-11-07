import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-08-16',
})

export async function POST(request: NextRequest) {
  try {
    // Vérifier que la clé Stripe est configurée
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe secret key is not configured' },
        { status: 500 }
      )
    }

    // Obtenir l'URL de base (depuis la requête ou variable d'environnement)
    const origin = request.headers.get('origin') || 
                   request.headers.get('host') ? `https://${request.headers.get('host')}` : null ||
                   process.env.NEXT_PUBLIC_APP_URL ||
                   'https://cheatersreveal.vercel.app'
    
    const baseUrl = origin.startsWith('http') ? origin : `https://${origin}`

    // Créer une session Stripe Checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: { 
              name: 'Vérification de fidélité',
              description: 'Découvrez si votre partenaire est fidèle',
            },
            unit_amount: 500, // 5€ en centimes
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/result?success=true`,
      cancel_url: `${baseUrl}/payment?canceled=true`,
    })

    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url 
    })
  } catch (error: any) {
    console.error('Stripe error:', error)
    return NextResponse.json(
      { 
        error: error.message || 'An error occurred with our connection to Stripe',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    )
  }
}

