import { AuthService } from "./service/authService"; 

const PROJECT_ID = "695d2bf439dd089b3b1cbda9"; 
const PROJECT_KEY = "abc123";                   

const auth = new AuthService(PROJECT_ID, PROJECT_KEY);

async function test() {
  try {
   
    const signupRes = await auth.signup(
      "Karan Yadav",
      "karan@est.com",
      "125675"
    );
    console.log("Signup response:", signupRes);

  
    const loginRes = await auth.login(
      "karan@est.com",
      "125675"
    );
    console.log("Login response:", loginRes);

  } catch (err: any) {
    console.error("SDK Error:", err.message);
  }
}

test();
