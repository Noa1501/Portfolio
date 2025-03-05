document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments de navigation
    const sideNavItems = document.querySelectorAll('.side-nav .nav-item');
    const topNavLinks = document.querySelectorAll('.top-nav .nav-link');
    const sections = document.querySelectorAll('.page');
    const pagesContainer = document.querySelector('.pages-container');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const topNav = document.querySelector('.top-nav');
    
    // Fonction pour mettre à jour la navigation active sans forcer le défilement
    function updateNavigation() {
        // Obtenir la position actuelle du défilement
        const currentPosition = pagesContainer.scrollTop;
        const windowHeight = window.innerHeight;
        
        // Calculer quelle section est la plus visible
        let mostVisibleSection = null;
        let mostVisibleArea = 0;
        
        sections.forEach((section) => {
            // Calculer la position relative de la section par rapport à la fenêtre
            const sectionTop = section.offsetTop - pagesContainer.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionBottom = sectionTop + sectionHeight;
            
            // Calculer la zone visible de la section
            const visibleTop = Math.max(currentPosition, sectionTop);
            const visibleBottom = Math.min(currentPosition + windowHeight, sectionBottom);
            const visibleArea = Math.max(0, visibleBottom - visibleTop);
            
            // Si cette section a une plus grande zone visible, la définir comme la plus visible
            if (visibleArea > mostVisibleArea) {
                mostVisibleArea = visibleArea;
                mostVisibleSection = section;
            }
        });
        
        // Si une section est la plus visible, la marquer comme active
        if (mostVisibleSection) {
            const activeId = mostVisibleSection.id;
            
            // Mettre à jour la navigation latérale
            sideNavItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${activeId}`) {
                    item.classList.add('active');
                }
            });
            
            // Mettre à jour la navigation supérieure
            topNavLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${activeId}`) {
                    link.classList.add('active');
                }
            });
        }
    }
    
    // Fonction pour le défilement fluide
    function smoothScroll(targetId) {
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        const targetPosition = targetElement.offsetTop;
        
        // Faire défiler la page vers la cible
        pagesContainer.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Fermer le menu mobile si ouvert
        if (topNav.classList.contains('menu-open')) {
            topNav.classList.remove('menu-open');
        }
    }
    
    // Ajouter les écouteurs d'événements pour la navigation latérale
    sideNavItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            smoothScroll(targetId);
        });
    });
    
    // Ajouter les écouteurs d'événements pour la navigation supérieure
    topNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            smoothScroll(targetId);
        });
    });
    
    // Écouteur d'événement pour le défilement
    pagesContainer.addEventListener('scroll', () => {
        // Utiliser requestAnimationFrame pour optimiser les performances
        window.requestAnimationFrame(updateNavigation);
    });
    
    // Gestion du menu mobile
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            topNav.classList.toggle('menu-open');
        });
    }
    
    // Fermer le menu mobile lorsqu'on clique en dehors
    document.addEventListener('click', (e) => {
        if (topNav.classList.contains('menu-open') && 
            !e.target.closest('.top-nav') && 
            !e.target.closest('.mobile-menu-toggle')) {
            topNav.classList.remove('menu-open');
        }
    });
    
    // Gestion des touches clavier (flèches haut/bas)
    document.addEventListener('keydown', (e) => {
        // Trouver la section active actuelle
        const activeLink = document.querySelector('.nav-link.active');
        if (!activeLink) return;
        
        const activeIndex = Array.from(topNavLinks).findIndex(link => link.classList.contains('active'));
        
        if (e.key === 'ArrowUp' && activeIndex > 0) {
            e.preventDefault();
            const targetId = topNavLinks[activeIndex - 1].getAttribute('href').substring(1);
            smoothScroll(targetId);
        } else if (e.key === 'ArrowDown' && activeIndex < topNavLinks.length - 1) {
            e.preventDefault();
            const targetId = topNavLinks[activeIndex + 1].getAttribute('href').substring(1);
            smoothScroll(targetId);
        } else if (e.key === 'Home') {
            e.preventDefault();
            const targetId = topNavLinks[0].getAttribute('href').substring(1);
            smoothScroll(targetId);
        } else if (e.key === 'End') {
            e.preventDefault();
            const targetId = topNavLinks[topNavLinks.length - 1].getAttribute('href').substring(1);
            smoothScroll(targetId);
        }
    });
    
    // Support des touches de navigation sur appareil mobile (swipe)
    let touchStartY = 0;
    let touchEndY = 0;
    
    pagesContainer.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    pagesContainer.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        
        // Calculer la distance du swipe
        const swipeDistance = touchEndY - touchStartY;
        
        // Ne réagir qu'aux swipes significatifs et si on n'est pas en train de faire défiler un élément qui a son propre défilement
        if (Math.abs(swipeDistance) > 100 && !e.target.closest('.scrollable')) {
            const activeLink = document.querySelector('.nav-link.active');
            if (!activeLink) return;
            
            const activeIndex = Array.from(topNavLinks).findIndex(link => link.classList.contains('active'));
            
            if (swipeDistance > 0 && activeIndex > 0) {
                // Swipe vers le bas = section précédente
                const targetId = topNavLinks[activeIndex - 1].getAttribute('href').substring(1);
                smoothScroll(targetId);
            } else if (swipeDistance < 0 && activeIndex < topNavLinks.length - 1) {
                // Swipe vers le haut = section suivante
                const targetId = topNavLinks[activeIndex + 1].getAttribute('href').substring(1);
                smoothScroll(targetId);
            }
        }
    }, { passive: true });
    
    // Initialisation
    updateNavigation();
    
    // Gestion du redimensionnement
    window.addEventListener('resize', () => {
        // Fermer le menu mobile sur redimensionnement
        if (window.innerWidth > 768 && topNav.classList.contains('menu-open')) {
            topNav.classList.remove('menu-open');
        }
        
        // Mettre à jour la navigation
        updateNavigation();
    });
});