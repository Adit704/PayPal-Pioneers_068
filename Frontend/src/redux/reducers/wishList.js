export const wishlist = (state = [], {type, payload}) => {
    switch (type) {
        case "DATA_FROM_PRODUCT_PAGE":
            return [...state, payload]
        case "DATA_FROM_PRODUCT_CARD":
            return [...state, payload]
        case "REMOVED_ITEM_FROM_WISHLIST":
            return [...payload]
        default:
            return state;
    }
}