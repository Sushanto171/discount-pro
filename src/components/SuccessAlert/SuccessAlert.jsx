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
   export { successAlert, redirectAlert};