import axios from "axios";
const API_KEY = "AIzaSyAWuj1Otg1vufdQCFiPp3f-NBBYzYbffZ0";
export async function createUser(email, password) {
  const reponse = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
