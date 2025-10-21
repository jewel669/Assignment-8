
// const getStoredBook = () => {
//     const storedBookSTR = localStorage.getItem('readList');
//     if (storedBookSTR) {
//         return JSON.parse(storedBookSTR);
//     }
//     return [];
// };

// const addToStoredDB = (id) => {
//     const storedBookData = getStoredBook();
//     const strId = String(id);
//     if (storedBookData.includes(strId)) {
//         alert("এই অ্যাপটি ইতিমধ্যেই ইনস্টল করা আছে");
//     } else {
//         storedBookData.push(strId);
//         localStorage.setItem('readList', JSON.stringify(storedBookData));
//     }
// };

// const removeFromStoredDB = (id) => {
//     const storedBookData = getStoredBook();
//     const strId = String(id);
//     const updatedList = storedBookData.filter(bookId => bookId !== strId);
//     localStorage.setItem('readList', JSON.stringify(updatedList));
// };

// export { getStoredBook, addToStoredDB, removeFromStoredDB };



// src/Utility/addToBT.js

const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");
  if (storedBookSTR) {
    return JSON.parse(storedBookSTR);
  }
  return [];
};

const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();
  const strId = String(id);
  if (!storedBookData.includes(strId)) {
    storedBookData.push(strId);
    localStorage.setItem("readList", JSON.stringify(storedBookData));
  }
};

const removeFromStoredDB = (id) => {
  const storedBookData = getStoredBook();
  const strId = String(id);
  const updatedList = storedBookData.filter((bookId) => bookId !== strId);
  localStorage.setItem("readList", JSON.stringify(updatedList));
};

export { getStoredBook, addToStoredDB, removeFromStoredDB };

