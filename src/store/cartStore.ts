import { atom, computed } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    category?: string;
    discount?: number;
    stock?: number;
    size?: string;
}

export function cartItemKey(id: string, size?: string): string {
    return size ? `${id}__${size}` : id;
}

export const isCartOpen = atom(false);

// Persist cart items in localStorage
export const cartItems = persistentAtom<CartItem[]>('cart_items', [], {
    encode: JSON.stringify,
    decode: JSON.parse,
});

// Persist stock overrides to simulate stock reduction
export const stockOverrides = persistentAtom<Record<string, number>>('stock_overrides', {}, {
    encode: JSON.stringify,
    decode: JSON.parse,
});

export function getEffectiveStock(productId: string, initialStock: number) {
    const overrides = stockOverrides.get();
    return productId in overrides ? overrides[productId] : initialStock;
}

export function toggleCart() {
    isCartOpen.set(!isCartOpen.get());
}

export function openCart() {
    isCartOpen.set(true);
}

export function closeCart() {
    isCartOpen.set(false);
}

export function addToCart(product: Omit<CartItem, 'quantity'>, qty: number = 1) {
    const items = cartItems.get();
    const key = cartItemKey(product.id, product.size);
    const currentStock = getEffectiveStock(product.id, product.stock || 0);
    const existingItem = items.find(item => cartItemKey(item.id, item.size) === key);

    if (existingItem) {
        const newQuantity = existingItem.quantity + qty;
        if (newQuantity > currentStock) {
            return { success: false, message: `Solo quedan ${currentStock} unidades disponibles` };
        }
        cartItems.set(
            items.map(item =>
                cartItemKey(item.id, item.size) === key
                    ? { ...item, quantity: Math.max(0, newQuantity) }
                    : item
            ).filter(item => item.quantity > 0)
        );
    } else if (qty > 0) {
        if (qty > currentStock) {
            return { success: false, message: `Solo quedan ${currentStock} unidades disponibles` };
        }
        cartItems.set([...items, { ...product, quantity: qty, stock: currentStock }]);
    }
    return { success: true, message: `${product.name} agregado al carrito` };
}

export function removeFromCart(key: string) {
    cartItems.set(cartItems.get().filter(item => cartItemKey(item.id, item.size) !== key));
}

export function updateQuantity(key: string, qty: number) {
    const items = cartItems.get();
    const item = items.find(i => cartItemKey(i.id, i.size) === key);

    if (item) {
        const currentStock = getEffectiveStock(item.id, item.stock || 0);
        if (qty > currentStock) {
            return { success: false, message: `Solo quedan ${currentStock} unidades disponibles` };
        }
        cartItems.set(
            items.map(i =>
                cartItemKey(i.id, i.size) === key ? { ...i, quantity: Math.max(0, qty) } : i
            ).filter(i => i.quantity > 0)
        );
        return { success: true };
    }
    return { success: false, message: "Producto no encontrado" };
}

export function clearCart() {
    cartItems.set([]);
}

export function completePurchase() {
    const items = cartItems.get();
    const overrides = { ...stockOverrides.get() };

    items.forEach(item => {
        const currentStock = getEffectiveStock(item.id, item.stock || 0);
        overrides[item.id] = Math.max(0, currentStock - item.quantity);
    });

    stockOverrides.set(overrides);
    clearCart();
    return { success: true };
}

export const totalPrice = computed(cartItems, (items) => {
    return items.reduce((total, item) => {
        const itemPrice = item.price * (1 - (item.discount || 0) / 100);
        return total + itemPrice * item.quantity;
    }, 0);
});

export const totalSavings = computed(cartItems, (items) => {
    return items.reduce((total, item) => {
        if (!item.discount) return total;
        const discountAmount = item.price * (item.discount / 100);
        return total + discountAmount * item.quantity;
    }, 0);
});

export const totalItems = computed(cartItems, (items) => {
    return items.reduce((total, item) => total + item.quantity, 0);
});
