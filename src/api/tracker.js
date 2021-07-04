import axios from "axios";

export default axios.create({
	//This needs to change every time ngrok is run expires in 2 hours
	baseURL: "http://214bc4d37c84.ngrok.io",
});
