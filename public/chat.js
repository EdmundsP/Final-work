const WEBHOOK_URL = 'http://100.108.143.64:5678/webhook/sustainability-chat'

const toggleBtn = document.createElement('button')
toggleBtn.className = 'chat_toggle'
toggleBtn.title = 'Chat'
toggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`

const chatWindow = document.createElement('div')
chatWindow.className = 'chat_window'
chatWindow.innerHTML = `
    <div class="chat_header">Chat</div>
    <div class="chat_messages" id="chat_messages"></div>
    <div class="chat_input_row">
        <input class="chat_input" id="chat_input" type="text" placeholder="Raksti šeit...">
        <button class="chat_send" id="chat_send">Sūtīt</button>
    </div>
`

document.body.appendChild(chatWindow)
document.body.appendChild(toggleBtn)

const messages = document.getElementById('chat_messages')
const input = document.getElementById('chat_input')
const sendBtn = document.getElementById('chat_send')

toggleBtn.onclick = function () {
    chatWindow.classList.toggle('open')
    if (chatWindow.classList.contains('open')) input.focus()
}

sendBtn.onclick = sendMessage
input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') sendMessage()
})

function addMessage(text, type) {
    const msg = document.createElement('div')
    msg.className = 'chat_msg ' + type
    msg.textContent = text
    messages.appendChild(msg)
    messages.scrollTop = messages.scrollHeight
    return msg
}

function sendMessage() {
    const text = input.value.trim()
    if (!text) return
    input.value = ''
    addMessage(text, 'user')

    const typing = addMessage('...', 'typing')
    sendBtn.disabled = true

    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
    })
    .then(function (res) { return res.json() })
    .then(function (data) {
        typing.remove()
        const reply = data.response || data.message || data.text || data.output || data.reply ||
            (Array.isArray(data) && (data[0].response || data[0].message || data[0].text || data[0].output)) ||
            JSON.stringify(data)
        addMessage(reply, 'bot')
    })
    .catch(function () {
        typing.remove()
        addMessage('Neizdevās nosūtīt. Mēģini vēlreiz.', 'bot')
    })
    .finally(function () {
        sendBtn.disabled = false
        input.focus()
    })
}
