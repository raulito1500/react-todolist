import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(()=>{
            try {
                const storagedItems = localStorage.getItem(itemName);
    
                let parsedItems;
    
                if (!storagedItems) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItems = initialValue
                } else {
                    parsedItems = JSON.parse(storagedItems);
                    setItem(parsedItems);
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 2000); 
    }, []);


    const saveItem = (newItems) => {
        localStorage.setItem(itemName, JSON.stringify(newItems))
        setItem(newItems);
    }

    return { item, saveItem, loading, error } // para más de dos returns es mejor devolver un objeto
}

export { useLocalStorage }

// const defaultTodos = [
//   { text: "Potatoes", completed: true },
//   { text: "Rice", completed: false },
//   { text: "Tomatoes", completed: false },
//   { text: "Milk", completed: false },
//   { text: "Onion", completed: false },
//   { text: "Butter", completed: true },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');