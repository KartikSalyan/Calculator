const { exec } = require('child_process');


// Replace 'newuser' with the desired username and 'newpassword' with the user's password
const username = 'newuser';
const password = 'newpassword';

// Create a new user on the local machine
exec(`net user ${username} ${password} /add`, (error, stdout, stderr) => {
     if (error) {
         console.error(`Error creating user: ${error}`);
         return;
     }
      console.log(`User ${username} created successfully`);
    }
    );