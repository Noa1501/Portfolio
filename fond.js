// Script pour le fond avec particules connectées
document.addEventListener('DOMContentLoaded', function() {
	console.log("Initialisation du fond avec particules...");
	
	// Créer le conteneur pour les particules s'il n'existe pas déjà
	let particlesContainer = document.querySelector('.particles-bg');
	if (!particlesContainer) {
	  particlesContainer = document.createElement('div');
	  particlesContainer.className = 'particles-bg';
	  document.body.insertBefore(particlesContainer, document.body.firstChild); // Ajouter en premier pour être derrière tout
	  console.log("Conteneur de particules créé");
	}
	
	// Créer le canvas s'il n'existe pas déjà
	let canvas = particlesContainer.querySelector('canvas');
	if (!canvas) {
	  canvas = document.createElement('canvas');
	  particlesContainer.appendChild(canvas);
	  console.log("Canvas créé");
	}
	
	const ctx = canvas.getContext('2d');
	
	// Définir la taille du canvas
	function resizeCanvas() {
	  canvas.width = window.innerWidth;
	  canvas.height = window.innerHeight;
	  console.log(`Canvas redimensionné: ${canvas.width}x${canvas.height}`);
	}
	
	resizeCanvas(); // Initialiser la taille
	
	// Configuration
	const particleCount = 80;
	const particles = [];
	const connectionDistance = canvas.width > 768 ? 150 : 100;
	const colors = {
	  particles: 'rgba(255, 255, 255, 0.5)',
	  connection: 'rgba(45, 0, 247, 0.15)' // Couleur primary de votre portfolio
	};
	
	// Écouter le redimensionnement de la fenêtre
	window.addEventListener('resize', function() {
	  resizeCanvas();
	});
	
	// Classe Particle
	class Particle {
	  constructor() {
		this.x = Math.random() * canvas.width;
		this.y = Math.random() * canvas.height;
		this.vx = Math.random() * 0.5 - 0.25;
		this.vy = Math.random() * 0.5 - 0.25;
		this.radius = Math.random() * 2 + 1;
	  }
	  
	  update() {
		this.x += this.vx;
		this.y += this.vy;
		
		// Rebondir aux bords
		if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
		if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
	  }
	  
	  draw() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.fillStyle = colors.particles;
		ctx.fill();
	  }
	}
	
	// Initialiser les particules
	function initParticles() {
	  particles.length = 0; // Vider le tableau si nécessaire
	  for (let i = 0; i < particleCount; i++) {
		particles.push(new Particle());
	  }
	  console.log(`${particleCount} particules initialisées`);
	}
	
	initParticles();
	
	// Dessiner les connections
	function drawConnections() {
	  for (let i = 0; i < particles.length; i++) {
		for (let j = i + 1; j < particles.length; j++) {
		  const dx = particles[i].x - particles[j].x;
		  const dy = particles[i].y - particles[j].y;
		  const distance = Math.sqrt(dx * dx + dy * dy);
		  
		  if (distance < connectionDistance) {
			ctx.beginPath();
			ctx.strokeStyle = colors.connection;
			ctx.lineWidth = 0.5;
			ctx.globalAlpha = 1 - (distance / connectionDistance);
			ctx.moveTo(particles[i].x, particles[i].y);
			ctx.lineTo(particles[j].x, particles[j].y);
			ctx.stroke();
			ctx.globalAlpha = 1;
		  }
		}
	  }
	}
	
	// Animation
	function animate() {
	  // Vérifier si le canvas est toujours dans le DOM
	  if (!document.body.contains(canvas)) {
		console.log("Canvas supprimé, arrêt de l'animation");
		return;
	  }
	  
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  
	  // Mettre à jour et dessiner chaque particule
	  particles.forEach(particle => {
		particle.update();
		particle.draw();
	  });
	  
	  drawConnections();
	  requestAnimationFrame(animate);
	}
	
	// Démarrer l'animation
	console.log("Démarrage de l'animation des particules");
	animate();
  });