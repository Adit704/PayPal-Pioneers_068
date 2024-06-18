const API_URL = 'https://paypal-pioneers-068.onrender.com/users';

export const addToWishlist = async (objId) => {
    const user = JSON.parse(localStorage.getItem("user"));

    let wishlist = user.wishlist || [];
    if (!wishlist.includes(objId)) {
        wishlist.push(objId);
        try {
            const response = await fetch(`${API_URL}/${user.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ wishlist }),
            });
            if (response.ok) {
                const updatedUser = await response.json();
                localStorage.setItem("user", JSON.stringify(updatedUser));
                return updatedUser.wishlist;
            } else {
                throw new Error('Failed to update wishlist on server');
            }
        } catch (err) {
            console.log(err);
        }
    }
};

export const removeFromWishlist = async (objId) => {
    const user = JSON.parse(localStorage.getItem("user"));


    let wishlist = user.wishlist || [];
    wishlist = wishlist.filter(id => id !== objId);
    try {
        const response = await fetch(`${API_URL}/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ wishlist }),
        });
        if (response.ok) {
            const updatedUser = await response.json();
            localStorage.setItem("user", JSON.stringify(updatedUser));
            return updatedUser.wishlist;
        } else {
            throw new Error('Failed to update wishlist on server');
        }
    } catch (err) {
        console.log(err);
    }
    return [];
};
