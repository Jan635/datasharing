import anthropic

client = anthropic.Anthropic()
history = []

while True:
    user_input = input("You: ")
    history.append({"role": "user", "content": user_input})

    response = client.messages.create(
        model="claude-opus-4-7",
        max_tokens=1024,
        messages=history
    )

    reply = response.content[0].text
    history.append({"role": "assistant", "content": reply})
    print(f"Claude: {reply}\n")
