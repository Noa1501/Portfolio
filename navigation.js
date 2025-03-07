document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments de navigation
    const sideNavItems = document.querySelectorAll('.side-nav .nav-item');
    const topNavLinks = document.querySelectorAll('.top-nav .nav-link');
    const sections = document.querySelectorAll('.page');
    const pagesContainer = document.querySelector('.pages-container');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const topNav = document.querySelector('.top-nav');
    
    // Variable pour éviter les défilements automatiques inattendus
    let isScrolling = false;
    let lastScrollTop = 0;
    let scrollTimeout;
    
    // Fonction pour mettre à jour la navigation active sans forcer le défilement
    function updateNavigation() {
        // Ne pas mettre à jour pendant qu'un défilement programmé est en cours
        if (isScrolling) return;
        
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
    
    // Fonction pour le défilement fluide avec protections
    function smoothScroll(targetId) {
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Empêcher les défilements trop rapprochés
        if (isScrolling) return;
        
        const targetPosition = targetElement.offsetTop;
        
        // Marquer qu'un défilement est en cours
        isScrolling = true;
        
        // Faire défiler la page vers la cible
        pagesContainer.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Restaurer après le défilement
        setTimeout(() => {
            isScrolling = false;
        }, 1000); // Une seconde pour laisser le défilement se terminer
        
        // Fermer le menu mobile si ouvert
        if (topNav.classList.contains('menu-open')) {
            topNav.classList.remove('menu-open');
        }
    }
    
    // Fonction pour déterminer si l'utilisateur est sur un appareil mobile
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
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
    
    // Écouteur d'événement pour le défilement avec debounce
    pagesContainer.addEventListener('scroll', () => {
        // Stocker la position de défilement pour détecter la direction
        const currentScrollTop = pagesContainer.scrollTop;
        
        // Annuler le callback précédent si le défilement continue
        clearTimeout(scrollTimeout);
        
        // Attendre que le défilement s'arrête avant de mettre à jour la navigation
        scrollTimeout = setTimeout(() => {
            // Ne pas mettre à jour si un défilement programmé est en cours
            if (!isScrolling) {
                window.requestAnimationFrame(updateNavigation);
            }
            lastScrollTop = currentScrollTop;
        }, 100);
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
    
    // Gestion des touches clavier (flèches haut/bas) uniquement sur desktop
    document.addEventListener('keydown', (e) => {
        // Désactiver la navigation au clavier sur mobile
        if (isMobileDevice()) return;
        
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
    
    // Support des touches de navigation sur appareil mobile (swipe) avec sécurité
    let touchStartY = 0;
    let touchEndY = 0;
    let touchStartTime = 0;
    let touchEndTime = 0;
    let isSwiping = false;
    
    // Désactiver complètement les swipes sur mobile si le problème persiste
    const enableSwipeNavigation = false;
    
    if (enableSwipeNavigation) {
        pagesContainer.addEventListener('touchstart', (e) => {
            // Vérifier si on n'est pas en train d'interagir avec un élément scrollable
            if (e.target.closest('.modal-content') || e.target.closest('.scrollable')) return;
            
            touchStartY = e.changedTouches[0].screenY;
            touchStartTime = new Date().getTime();
            isSwiping = true;
        }, { passive: true });
        
        pagesContainer.addEventListener('touchmove', (e) => {
            if (!isSwiping) return;
            
            // Si on est dans un élément qui a son propre défilement, annuler le swipe
            if (e.target.closest('.modal-content') || e.target.closest('.scrollable')) {
                isSwiping = false;
            }
        }, { passive: true });
        
        pagesContainer.addEventListener('touchend', (e) => {
            if (!isSwiping) return;
            
            touchEndY = e.changedTouches[0].screenY;
            touchEndTime = new Date().getTime();
            
            // Calculer la distance et la vitesse du swipe
            const swipeDistance = touchEndY - touchStartY;
            const swipeTime = touchEndTime - touchStartTime;
            const swipeVelocity = Math.abs(swipeDistance) / swipeTime;
            
            // Ne réagir qu'aux swipes significatifs, rapides, et si on n'est pas en train de faire défiler
            if (Math.abs(swipeDistance) > 100 && swipeVelocity > 0.3 && !isScrolling) {
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
            
            isSwiping = false;
        }, { passive: true });
    }
    
    // Initialisation avec un délai pour s'assurer que tout est chargé
    setTimeout(updateNavigation, 300);
    
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