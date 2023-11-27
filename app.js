function displayNextChar() {
    if (currentLine < novelLines.length) {
        const line = novelLines[currentLine];
        if (currentChar < line.length) {
            novelText.textContent += line.charAt(currentChar);
            currentChar++;
            interval = setTimeout(displayNextChar, 10);
        } else {
            // Line complete; wait for user interaction.
            clearInterval(interval);
            currentLine++;
            currentChar = 0;
            novelText.textContent += '\n'; // Add a new line for the next text.
            document.addEventListener("click", displayNextChar);
            document.addEventListener("keydown", displayNextChar);
        }
    } else {
        // Display Endroll.
        document.addEventListener("click", clearContent);
        document.addEventListener("keydown", clearContent);
        // displayEndroll();
        return;
    }
}