const dataProvider = {
    sendData: (formData) => {
      return new Promise((resolve, reject) => {
        // Simulate sending data to server (replace this with actual server call)
        setTimeout(() => {
          const success = Math.random() < 0.5; // Simulating success/error randomly
          if (success) {
            resolve('Data sent successfully');
          } else {
            reject('Error sending data');
          }
        }, 1000);
      });
    },
  };
  
  export default dataProvider;
  