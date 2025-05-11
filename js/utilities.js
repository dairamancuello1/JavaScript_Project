const utilities = {};

class Modal {
    constructor() {}

    show(title, message) {
        return new Promise((resolve) => {
            const id = `modalMessage-${new Date().getTime()}`;
            const element = this.getModalElement(id, title, message);
            const confirmButton = element.querySelector('[data-bs-confirm="modal"]');
            const instance = bootstrap.Modal.getOrCreateInstance(element);
            
            document.body.appendChild(element);
            instance.show();

            confirmButton.addEventListener('click', () => {
                instance.hide();
                resolve(true);  
            });

            element.addEventListener('hidden.bs.modal', () => {
                this.destroy(id);
                resolve(false);
            });
        })
    }

    destroy(id) {
        const element = document.getElementById(id);

        if (element) {
            element.remove();
        }
    }

    getModalElement(id, title, message) {
        const modalElement = document.createElement('div');  

        modalElement.id = id;
        modalElement.classList.add('modal', 'fade');
        modalElement.setAttribute('tabindex', '-1');
        modalElement.setAttribute('aria-hidden', 'true');

        modalElement.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5">${title}</h1>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                        </button>
                    </div>
                    <div class="modal-body">
                        ${message}
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Cancelar
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-confirm="modal"
                        >
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
        `;

        return modalElement;
    }
}

class Toast {
    constructor() {
        this.createContainerElement();
    }

    show(title, message) {
        const id = `toastMessage-${new Date().getTime()}`;
        const element = this.getMessageElement(id, title, message);
        const instance = bootstrap.Toast.getOrCreateInstance(element);

        this.getContainerElement().appendChild(element);
        instance.show();

        element.addEventListener('hidden.bs.toast', () => {
            this.destroy(id);
        });
    }

    destroy(id) {
        const element = document.getElementById(id);

        if (element) {
            element.remove();
        }
    }

    getMessageElement(id, title, message) {
        const messageElement = document.createElement('div');

        messageElement.id = id;
        messageElement.classList.add('toast', 'mb-1');
        messageElement.setAttribute('role', 'alert');
        messageElement.setAttribute('aria-live', 'assertive');
        messageElement.setAttribute('aria-atomic', 'true');

        messageElement.innerHTML = `
            <div class="toast-header">
                <strong
                    class="me-auto"
                >
                    ${title}
                </strong>
                <button
                    type="button"
                    class="btn-close" 
                    data-bs-dismiss="toast"
                    aria-label="Close"
                >
                </button>
            </div>
            <div class="toast-body">
                ${message}
            </div>
        `;

        return messageElement;
    }

    getContainerElement() {
        return document.getElementById('toastMessagesContainer');
    }

    createContainerElement() {
        const containerElement = document.createElement('div');

        containerElement.id = 'toastMessagesContainer';
        containerElement.classList.add('toast-container', 'position-fixed', 'bottom-0', 'end-0', 'p-3');

        document.body.appendChild(containerElement);
    }
}

function initializeUtilities() {
    utilities.modal = new Modal();
    utilities.toast = new Toast();
}

initializeUtilities();
