
// export async function load() {
//     try {
//         const response = await fetch('http://localhost:4000', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 firstName: '',
//                 lastName: '',
//                 dateOfBirth: '',
//                 phone: '',
//                 address: '',
//                 comment: '',
//                 email: '',
//                 agree: ''
//             })
//         });

//         if (response.ok) {
//             let data = await response.text();
//             console.log(data);
//         } else {
//             console.error('Failed to send data', Error);
//         }
//     } catch (error) {
//         console.error('Error sending data:', error);
//     }
// }