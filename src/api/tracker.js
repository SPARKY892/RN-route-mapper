import axios from "axios";

export default axios.create({
	//This needs to change every time ngrok is run expires in 2 hours
	baseURL: "http://65ba88cd0752.ngrok.io",
});
