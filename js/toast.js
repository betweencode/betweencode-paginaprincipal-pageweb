/**
 * Toast Notification System
 * A minimalist and beautiful toast notification system for Atiendelos Restaurant
 */

// Create a self-executing function to avoid polluting the global namespace
(function() {
    'use strict';

    // Create the toast container if it doesn't exist
    function createToastContainer() {
        if (!document.querySelector('.toast-container')) {
            const container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
    }

    // Create and show a toast notification
    function showToast(type, message, duration = 3000) {
        // Ensure the container exists
        createToastContainer();
        
        // Create toast elements
        const toast = document.createElement('div');
        toast.className = 'toast';
        
        const header = document.createElement('div');
        header.className = `toast-header ${type}`;
        
        const title = document.createElement('strong');
        title.className = 'mr-auto';
        
        // Set title based on type
        switch(type) {
            case 'success':
                title.textContent = 'Éxito';
                break;
            case 'error':
                title.textContent = 'Error';
                break;
            case 'warning':
                title.textContent = 'Advertencia';
                break;
            default:
                title.textContent = 'Notificación';
        }
        
        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'ml-2 mb-1 close';
        closeButton.innerHTML = '&times;';
        closeButton.addEventListener('click', function() {
            toast.remove();
        });
        
        const body = document.createElement('div');
        body.className = 'toast-body';
        body.textContent = message;
        
        // Assemble the toast
        header.appendChild(title);
        header.appendChild(closeButton);
        toast.appendChild(header);
        toast.appendChild(body);
        
        // Add to container
        const container = document.querySelector('.toast-container');
        container.appendChild(toast);
        
        // Show the toast with animation
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        // Auto-hide after duration
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300); // Wait for fade out animation
        }, duration);
        
        return toast;
    }

    // Define the modal object with showmodal function
    window.modal = {
        /**
         * Show a toast notification
         * @param {string} type - Type of toast: 'success', 'error', 'warning'
         * @param {string} message - Message to display in the toast
         * @param {number} duration - Duration in milliseconds to show the toast (default: 3000)
         * @returns {HTMLElement} - The toast element
         */
        showmodal: function(type, message, duration) {
            return showToast(type, message, duration);
        }
    };
    
    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        createToastContainer();
    });
})();
