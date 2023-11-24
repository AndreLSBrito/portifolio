import { NextResponse } from "next/server";

const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK!

export async function POST(request: Request){
  try {
    const body = await request.json()
    const {name, email, phone, message} = body

    const messageData = {
      embeds: [
        {
          title: 'Mensagem de Contato',
          color: 0x4983f5,
          fields: [
            {
              name: 'Nome',
              value: name,
              inline: true,
            },
            {
              name: 'E-mail',
              value: email,
              inline: true,
            },
            {
              name: 'Telefone',
              value: phone,
              inline: true,
            },
            {
              name: 'Mensagem',
              value: message,
            },
          ],
        },
      ],
    }
    
    await fetch(DISCORD_WEBHOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(messageData), 
    });

    return NextResponse.json({
      message: 'Mensagem enviada com sucesso!',
    })
  } catch (error) {
    return NextResponse.error
  }
}