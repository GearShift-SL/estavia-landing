export const sendGenericNotification = async (
  topic: string,
  title: string,
  message: string,
  tags: string
) => {
  let ntfySent = false

  // Env variables
  const NTFY_URL = import.meta.env.NTFY_URL ?? process.env.NTFY_URL
  const NTFY_TOKEN = import.meta.env.NTFY_TOKEN ?? process.env.NTFY_TOKEN

  // Check if all env variables are available
  if (!NTFY_TOKEN || !NTFY_URL) {
    console.warn('No NTFY_URL or NTFY_TOKEN defined')
    return ntfySent
  }

  // Try-catch block to catch any errors
  try {
    // The payload that will be sent to NTFY
    const payload = {
      method: 'POST',
      body: message,
      headers: {
        Authorization: `Bearer ${NTFY_TOKEN}`,
        title: title,
        tags: tags
      }
    }

    // Make a POST request to NTFY
    const response = await fetch(`${NTFY_URL}/${topic}`, payload)

    // Check if the request was successful
    if (response.ok) {
      // Request succeeded
      ntfySent = true
      console.log('NTFY sent successfully')
    } else {
      // Request failed
      console.error('Failed to sent NTFY')
      console.log('Response:', response)
    }
  } catch (error) {
    console.error('Failed to send NTFY:', error)
  }

  return ntfySent
}
