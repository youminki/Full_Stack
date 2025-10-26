document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggler --- //
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            body.classList.remove('light-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    };
    applySavedTheme();

    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

    // --- Skill Animation --- //
    const skillsContainer = document.getElementById('skills');
    const skillItems = document.querySelectorAll('.skill-category li');

    if (skillsContainer && skillItems.length > 0) {
        skillsContainer.addEventListener('mousemove', (e) => {
            const rect = skillsContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            skillItems.forEach(item => {
                const itemRect = item.getBoundingClientRect();
                const itemX = itemRect.left + itemRect.width / 2 - rect.left;
                const itemY = itemRect.top + itemRect.height / 2 - rect.top;
                const distance = Math.sqrt(Math.pow(x - itemX, 2) + Math.pow(y - itemY, 2));
                const maxDistance = 300;
                if (distance < maxDistance) {
                    const scale = 1 + (1 - distance / maxDistance) * 0.25;
                    item.style.transform = `scale(${scale})`;
                } else {
                    item.style.transform = 'scale(1)';
                }
            });
        });

        skillsContainer.addEventListener('mouseleave', () => {
            skillItems.forEach(item => {
                item.style.transform = 'scale(1)';
            });
        });
    }

    // --- Chatbot Logic --- //
    const chatBubble = document.getElementById('chat-bubble');
    const chatWindow = document.getElementById('chat-window');
    const closeChat = document.getElementById('close-chat');
    const chatBody = document.getElementById('chat-body');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');

    chatBubble.addEventListener('click', () => {
        chatWindow.classList.remove('hidden');
        chatBubble.classList.add('hidden');
    });

    closeChat.addEventListener('click', () => {
        chatWindow.classList.add('hidden');
        chatBubble.classList.remove('hidden');
    });

    const handleSendMessage = async () => {
        const messageText = chatInput.value.trim();
        if (messageText === '') return;

        // Display user message
        appendMessage(messageText, 'user');
        chatInput.value = '';

        // Get and display bot response (simulated)
        const botResponse = await getGeminiResponse(messageText);
        appendMessage(botResponse, 'bot');
    };

    chatSend.addEventListener('click', handleSendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });

    function appendMessage(text, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = text;
        chatBody.appendChild(messageElement);
        chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to bottom
    }

    async function getGeminiResponse(prompt) {
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: prompt })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const data = await response.json();
            return data.response;

        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
            return "죄송합니다. AI와 통신하는 중 오류가 발생했습니다.";
        }
    }
});