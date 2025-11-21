const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");
    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return [];
    }
};

const addToStoreDB = (id) => {
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        alert('This Book is Already Added')
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data)
    }
};


const getWishList = () => {
    const storedWishList = localStorage.getItem("wishList");
    if (storedWishList) {
        const storedWishListData = JSON.parse(storedWishList);
        return storedWishListData;
    }
    else {
        return [];
    }
};

const addToWishListDB = (id) => {
    const storedWishListData = getWishList();
    if (storedWishListData.includes(id)) {
        alert('This Book is Already Added')
    }
    else {
        storedWishListData.push(id);
        const data = JSON.stringify(storedWishListData);
        localStorage.setItem("wishList", data)
    }
};

export { addToStoreDB, addToWishListDB, getStoredBook, getWishList }