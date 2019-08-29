document.body.style.margin = 0; var canvas = document.querySelector("canvas"); setTimeout(() => { document.title = 'go to /win' }, 4000); canvas.width = window.innerWidth, canvas.height = window.innerHeight; var context = canvas.getContext("2d"); function drawRectangle(t, n, e, i, a) { context.fillStyle = a, context.beginPath(), context.fillRect(t - e / 2, n - i / 2, e, i), context.closePath() } function randomColor() { return "rgba(" + 255 * Math.random() + ", " + 255 * Math.random() + ", " + 255 * Math.random() + ", " + Math.random() + ")" } for (var particleCount = 200, particles = [], i = 1; i <= particleCount; i += 1) { var particle = { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, color: "black", size: 1, deltaX: 2 * Math.random() - 1, deltaY: 2 * Math.random() - 1 }; particles.push(particle) } function distance(t, n, e, i) { var a = Math.pow(e - t, 2), o = Math.pow(i - n, 2); return Math.sqrt(a + o) } function drawNeighborLines(t) { for (var n = 0; n < particles.length; n++) { var e = particles[n]; distance(t.x, t.y, e.x, e.y) < 850 && (context.beginPath(), context.moveTo(t.x, t.y), context.lineTo(e.x, e.y), context.stroke(), context.closePath()) } } function animate() { context.fillStyle = "red", context.fillRect(0, 0, window.innerWidth, window.innerHeight); for (var t = 0; t < particles.length; t += 1) { var n = particles[t]; n.x += n.deltaX, n.y += n.deltaY, n.x > window.innerWidth && (n.x = 0), n.x < 0 && (n.x = window.innerWidth), n.y > window.innerHeight && (n.y = 0), n.y < 0 && (n.y = window.innerHeight), drawNeighborLines(n), drawRectangle(n.x, n.y, n.size, n.size, n.color) } } const ascii_code = [80, 97, 115, 115, 119, 111, 114, 100]; let passcode = ascii_code.map(t => String.fromCharCode(t)); passcode = passcode.join("+"), setInterval(() => { animate(), context.font = "80px Arial", context.fillText(passcode, window.innerWidth / 2, window.innerHeight / 2) }, 1e3 / 60);