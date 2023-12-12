const localStorageUtil = {
    setData: (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    getData: (key) => {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    },
    clearData: (key) => {
      localStorage.removeItem(key);
    },
  };
  
  export default localStorageUtil;