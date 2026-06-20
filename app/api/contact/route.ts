import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()

  const formData = new FormData()
  formData.append('first_name', body.firstName)
  formData.append('last_name', body.lastName)
  formData.append('email', body.email)
  formData.append('phone', body.phone)
  formData.append('street', body.address)
  formData.append('city', body.city)
  formData.append('state', body.state)
  formData.append('zip', body.zip)
  formData.append('note', `Service: ${body.service}\n\n${body.message}`)

  const res = await fetch(
    'https://clienthub.getjobber.com/client_hubs/9b374c6f-63f6-43ea-8b26-34fbc28a4679/public/work_request/embedded_work_request_form?form_id=2195092',
    {
      method: 'POST',
      body: formData,
    }
  )

    console.log('Jobber status:', res.status)
    const text = await res.text()
    console.log('Jobber response:', text)

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to submit' }, { status: 500 })
  }

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}