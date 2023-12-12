const serverUtil = {
    sendDataToServer: (formData) => {
      return new Promise((resolve, reject) => {
        // Simulating sending data to the server
        setTimeout(() => {
          const success = Math.random() < 0.5; // Simulating success/error randomly
          if (success) {
            resolve('Data sent to server successfully');
          } else {
            reject('Error sending data to server');
          }
        }, 1000);
      });
    },
  };
  
  export default serverUtil;