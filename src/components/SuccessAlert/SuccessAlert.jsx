import Swal from 'sweetalert2';

    const successAlert = (message)=>{
        Swal.fire({
            title: `${message}!`,
            icon: "success",
            confirmButtonText: 'Continue',
            background: "black",
            color: "white",
            width: "auto",
            showConfirmButton : false,
          })
          timeCounter();
    };
   

        const alertMessage = (message, icon)=>{
          Swal.fire({
              title: `${message ==="Firebase: Error (auth/invalid-credential)." && "Invalid email or password" 
                  || message === "Firebase: Error (auth/internal-error)." && "Connected failed. Check your mobile data or wifi connection."
                  || message === "Firebase: Error (auth/network-request-failed)." && "Connected failed. Check your mobile data or wifi connection." || message} !`,
              icon: icon,
              confirmButtonText: 'Continue',
              background: "black",
            });
            timeCounter();
      };    
             const timeCounter = ()=>{
              setTimeout(()=>{
                  Swal.close()	
              },2000)
          };

        const redirectAlert=async ()=>{
          const {isConfirmed} = await  Swal.fire({
                title: `You want to use this moment`,
                icon: "info",
                confirmButtonText: 'Continue',
                background: "black",
                color: "white",
                width: "auto",
              })
              return isConfirmed;
        }
   export { successAlert, redirectAlert, alertMessage};