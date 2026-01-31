// MaltBot Guide JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '/') {
                e.preventDefault();
                
                // Simple in-page navigation simulation
                window.location.hash = href;
                
                // In a real Next.js app, this would navigate to the proper route
                console.log(`Navigating to ${href}`);
            }
        });
    });
    
    // Add active class to current page link
    const currentPage = window.location.pathname;
    const activeLink = document.querySelector(`nav a[href="${currentPage}"]`);
    
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Feature card hover effects enhancement
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Utility functions for the guide
const MaltBotGuide = {
    // Function to highlight code blocks
    highlightCode: function() {
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach(block => {
            // In a real implementation, this would apply syntax highlighting
            block.classList.add('code-block');
        });
    },
    
    // Function to initialize expandable sections
    initExpandableSections: function() {
        const expandableHeaders = document.querySelectorAll('h3');
        expandableHeaders.forEach(header => {
            header.style.cursor = 'pointer';
            header.addEventListener('click', function() {
                // Toggle visibility of next sibling element
                const nextElement = this.nextElementSibling;
                if (nextElement && nextElement.tagName !== 'H3') {
                    nextElement.classList.toggle('hidden');
                }
            });
        });
    }
};