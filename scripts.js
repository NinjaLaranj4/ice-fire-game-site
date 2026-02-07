const STORAGE_KEYS = {
    apiKey: "icefire_api_key",
    model: "icefire_model",
    temp: "icefire_temp",
    systemPrompt: "icefire_system_prompt",
    history: "icefire_chat_history"
};

const state = {
    history: []
};

const elements = {
    apiKey: document.getElementById("api-key"),
    model: document.getElementById("model"),
    temperature: document.getElementById("temperature"),
    tempValue: document.getElementById("temp-value"),
    systemPrompt: document.getElementById("system-prompt"),
    chatLog: document.getElementById("chat-log"),
    form: document.getElementById("chat-form"),
    userInput: document.getElementById("user-input"),
    clearHistory: document.getElementById("clear-history"),
    sendBtn: document.getElementById("send-btn")
};

function saveConfig() {
    localStorage.setItem(STORAGE_KEYS.apiKey, elements.apiKey.value.trim());
    localStorage.setItem(STORAGE_KEYS.model, elements.model.value);
    localStorage.setItem(STORAGE_KEYS.temp, elements.temperature.value);
    localStorage.setItem(STORAGE_KEYS.systemPrompt, elements.systemPrompt.value);
}

function loadConfig() {
    elements.apiKey.value = localStorage.getItem(STORAGE_KEYS.apiKey) || "";
    elements.model.value = localStorage.getItem(STORAGE_KEYS.model) || "gpt-4.1-mini";
    elements.temperature.value = localStorage.getItem(STORAGE_KEYS.temp) || "0.7";
    elements.tempValue.textContent = elements.temperature.value;
    elements.systemPrompt.value = localStorage.getItem(STORAGE_KEYS.systemPrompt) || "";
}

function saveHistory() {
    localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(state.history));
}

function loadHistory() {
    try {
        state.history = JSON.parse(localStorage.getItem(STORAGE_KEYS.history) || "[]");
    } catch {
        state.history = [];
    }
}

function addMessage(role, content) {
    const message = document.createElement("article");
    message.className = `message ${role}`;
    message.textContent = content;
    elements.chatLog.appendChild(message);
    elements.chatLog.scrollTop = elements.chatLog.scrollHeight;
}

function renderHistory() {
    elements.chatLog.innerHTML = "";

    if (!state.history.length) {
        addMessage("system", "Conversa pronta. Configure sua chave e envie sua primeira mensagem.");
        return;
    }

    state.history.forEach(({ role, content }) => {
        addMessage(role, content);
    });
}

async function callOpenAI() {
    const apiKey = elements.apiKey.value.trim();
    if (!apiKey) {
        addMessage("system", "Insira uma API key para continuar.");
        return;
    }

    const prompt = elements.userInput.value.trim();
    if (!prompt) {
        return;
    }

    const systemPrompt = elements.systemPrompt.value.trim();

    state.history.push({ role: "user", content: prompt });
    addMessage("user", prompt);
    elements.userInput.value = "";

    const requestMessages = [];
    if (systemPrompt) {
        requestMessages.push({ role: "system", content: systemPrompt });
    }

    requestMessages.push(
        ...state.history
            .filter((msg) => msg.role === "user" || msg.role === "assistant")
            .map(({ role, content }) => ({ role, content }))
    );

    elements.sendBtn.disabled = true;
    elements.sendBtn.textContent = "Pensando...";

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: elements.model.value,
                messages: requestMessages,
                temperature: Number(elements.temperature.value)
            })
        });

        if (!response.ok) {
            const errorPayload = await response.json().catch(() => ({}));
            const details = errorPayload.error?.message || `HTTP ${response.status}`;
            throw new Error(details);
        }

        const data = await response.json();
        const answer = data.choices?.[0]?.message?.content?.trim() || "Sem resposta do modelo.";

        state.history.push({ role: "assistant", content: answer });
        addMessage("assistant", answer);
        saveHistory();
    } catch (error) {
        const details = error instanceof Error ? error.message : "Falha inesperada";
        addMessage("system", `Erro na chamada da API: ${details}`);
        state.history = state.history.filter((msg, index, arr) => !(index === arr.length - 1 && msg.role === "user"));
    } finally {
        elements.sendBtn.disabled = false;
        elements.sendBtn.textContent = "Enviar";
    }
}

function bindEvents() {
    [elements.apiKey, elements.model, elements.temperature, elements.systemPrompt].forEach((input) => {
        input.addEventListener("input", () => {
            elements.tempValue.textContent = elements.temperature.value;
            saveConfig();
        });
    });

    elements.form.addEventListener("submit", async (event) => {
        event.preventDefault();
        await callOpenAI();
    });

    elements.clearHistory.addEventListener("click", () => {
        state.history = [];
        saveHistory();
        renderHistory();
    });
}

loadConfig();
loadHistory();
renderHistory();
bindEvents();
