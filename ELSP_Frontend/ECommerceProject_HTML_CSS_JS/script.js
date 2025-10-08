// --- Mock Data ---
// In a real application, this would come from a server API.
const mockProducts = [
    { id: 1, name: 'Laptop', price: 1200, stock: 10 },
    { id: 2, name: 'Mouse', price: 25, stock: 30 },
    { id: 3, name: 'Keyboard', price: 75, stock: 20 },
    { id: 4, name: 'Monitor', price: 300, stock: 15 },
    { id: 5, name: 'Webcam', price: 50, stock: 0 }, // Out of stock item
];

// --- Main E-Commerce Module ---
const ECommerce = {
    products: [],
    cart: [],
    orders: [],

    // --- Initialization ---
    init() {
        this.loadCartFromStorage();
        this.getProducts().then(() => {
            this.renderProducts();
            this.renderCart();
        });

        // Add event listener for the order form
        const orderForm = document.getElementById('orderForm');
        if (orderForm) {
            orderForm.addEventListener('submit', async (event) => {
                event.preventDefault();
                this.hideOrderConfirmation();

                const customerName = document.getElementById('customerName').value;
                const customerAddress = document.getElementById('customerAddress').value;

                if (!customerName || !customerAddress) {
                    alert('Please fill in your name and address.');
                    return;
                }

                const customerDetails = { name: customerName, address: customerAddress };
                const order = await this.placeOrder(customerDetails);
                if (order) {
                    orderForm.reset();
                }
            });
        }
    },

    // --- 1. Product Module ---
    async getProducts() {
        console.log("Fetching products...");
        // Simulate an API call to get products
        await new Promise(resolve => setTimeout(resolve, 500));
        this.products = mockProducts;
        console.log("Products loaded:", this.products);
        return this.products;
    },

    renderProducts() {
        const productListEl = document.getElementById("productList");
        if (!productListEl) return;
        productListEl.innerHTML = "";

        this.products.forEach(product => {
            const productEl = document.createElement("div");
            productEl.className = "product";
            productEl.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
                <p>In Stock: ${product.stock}</p>
                <button onclick="ECommerce.addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                    ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
            `;
            productListEl.appendChild(productEl);
        });
    },

    // --- 2. Inventory Module ---
    updateInventory(productId, quantityChange) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            product.stock += quantityChange; // quantityChange will be negative for sales
            console.log(`Inventory for ${product.name} (${productId}) updated to ${product.stock}`);
        }
    },

    // --- 3. Cart Module ---
    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) {
            console.error("Product not found!");
            return;
        }
        if (product.stock === 0) {
            alert("Sorry, this item is out of stock.");
            return;
        }
        const existingItem = this.cart.find(item => item.productId === productId);
        if (existingItem) {
            if (product.stock > existingItem.quantity) {
                existingItem.quantity += 1;
            } else {
                alert("No more stock available for this item.");
                return;
            }
        } else {
            this.cart.push({ productId: product.id, name: product.name, price: product.price, quantity: 1 });
        }
        this.saveCartToStorage();
        this.renderCart();
    },

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.productId !== productId);
        this.saveCartToStorage();
        this.renderCart();
    },

    updateQuantity(productId, quantity) {
        const item = this.cart.find(i => i.productId === productId);
        const product = this.products.find(p => p.id === productId);
        const newQuantity = Number(quantity);
        if (!item || !product) return;
        if (newQuantity > product.stock) {
            alert(`Only ${product.stock} items available. Your quantity has been reset.`);
            this.renderCart();
            return;
        }
        if (newQuantity <= 0) {
            this.removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
        }
        this.saveCartToStorage();
        this.renderCart();
    },

    renderCart() {
        const tbody = document.querySelector("#cartTable tbody");
        if (!tbody) return;
        tbody.innerHTML = "";
        let grandTotal = 0;
        this.cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            grandTotal += itemTotal;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td><input type="number" value="${item.quantity}" min="1" onchange="ECommerce.updateQuantity(${item.productId}, this.value)"></td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td><button onclick="ECommerce.removeFromCart(${item.productId})">Remove</button></td>
            `;
            tbody.appendChild(row);
        });
        const grandTotalEl = document.getElementById("grandTotal");
        if (grandTotalEl) {
            grandTotalEl.innerText = `Grand Total: $${grandTotal.toFixed(2)}`;
        }
    },

    saveCartToStorage() {
        localStorage.setItem('eCommerceCart', JSON.stringify(this.cart));
    },

    loadCartFromStorage() {
        const savedCart = localStorage.getItem('eCommerceCart');
        this.cart = savedCart ? JSON.parse(savedCart) : [];
    },

    // --- 4. Order, Billing, Shipment, Payment Modules ---
    async placeOrder(customerDetails) {
        if (this.cart.length === 0) {
            alert("Your cart is empty.");
            return null;
        }
        const paymentSuccess = await this.processPayment(customerDetails);
        if (!paymentSuccess) {
            alert("Payment failed. Please try again.");
            return null;
        }
        const grandTotal = this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const order = {
            orderId: `ORD-${Date.now()}`,
            customer: customerDetails,
            items: JSON.parse(JSON.stringify(this.cart)),
            grandTotal: grandTotal,
            status: 'Processing',
            date: new Date().toISOString()
        };
        order.items.forEach(item => {
            this.updateInventory(item.productId, -item.quantity);
        });
        this.orders.push(order);
        console.log("Order placed successfully:", order);
        this.cart = [];
        this.saveCartToStorage();
        this.renderCart();
        this.renderProducts();
        this.showOrderConfirmation(order.orderId);
        this.handleShipment(order.orderId);
        return order;
    },

    async processPayment(customerDetails) {
        console.log(`Processing payment for ${customerDetails.name}...`);
        // In a real app, this would integrate with a payment gateway.
        return new Promise(resolve => {
            setTimeout(() => {
                console.log("Payment successful!");
                resolve(true); // Always succeeds for this mock
            }, 1500);
        });
    },

    handleShipment(orderId) {
        const order = this.orders.find(o => o.orderId === orderId);
        if (!order) return;
        console.log(`Preparing shipment for order ${orderId}...`);
        setTimeout(() => {
            order.status = 'Shipped';
            console.log(`Order ${orderId} has been shipped to ${order.customer.address}.`);
        }, 3000);
    },

    showOrderConfirmation(orderId) {
        const confirmationEl = document.getElementById('orderConfirmation');
        if (confirmationEl) {
            confirmationEl.innerHTML = `Thank you! Your order ID is <strong>${orderId}</strong>.`;
            confirmationEl.style.display = 'block';
        }
    },

    hideOrderConfirmation() {
        const confirmationEl = document.getElementById('orderConfirmation');
        if (confirmationEl) {
            confirmationEl.style.display = 'none';
        }
    }
};

// Initialize the application when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    ECommerce.init();
});