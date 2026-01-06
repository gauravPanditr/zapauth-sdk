import { AuthService } from "./service/authService"; 

const PROJECT_ID = "695d2bf439dd089b3b1cb"; 
const PROJECT_KEY = "abc12";                   

const auth = new AuthService(PROJECT_ID, PROJECT_KEY);

async function test() {
  try {
   
    const signupRes = await auth.signup(
      "testusr",
      "user1@est.com",
      "12345"
    );
    console.log("Signup response:", signupRes);

  
    const loginRes = await auth.login(
      "user1@test.com",
      "123456"
    );
    console.log("Login response:", loginRes);

  } catch (err: any) {
    console.error("SDK Error:", err.message);
  }
}

test();
