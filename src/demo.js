(() => {
        var letters = [
                        '#700000', '#0C2D08',
                        '#FF9800', '#08162D'
                ];
        var color = letters[Math.floor(Math.random() * letters.length)];
        document.body.style.color = '#FFFFFF';
        document.body.style.background = color;
})();