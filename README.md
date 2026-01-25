# Authwave SDK

An intuitive library designed to simplify the integration of authentication services into web applications.


## Installation

Install the SDK using NPM:

```bash
npm install zap-auth
```

## Usage

```typescript
import { AuthService } from "zap-auth";

const authService = new AuthService("<your-project-id>", "<your-project-key>");

// Using async/await
const handleCreateAccount = async () => {
  try {
    const response = await authService.createAccount(username, email, password);
    console.log("Account created successfully:", response);
  } catch (error) {
    console.error("Error creating account:", error);
  }
};

// Using promises
authService
  .createAccount(username, email, password)
  .then((response) => {
    console.log("Account created successfully:", response);
  })
  .catch((error) => {
    console.error("Error creating account:", error);
  });
```


### DEVELOPER

This project is created by Gaurav Pandit. You can find more about the developer and connect on the following platforms:

- [**GitHub**](https://github.com/gauravPanditr)



---