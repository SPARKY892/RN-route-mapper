import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
	//This needs to change every time ngrok is run expires in 2 hours
	baseURL: "http://1c11e6b72d1e.ngrok.io",
});

instance.interceptors.request.use(
	async (config) => {
		const token = await AsyncStorage.getItem("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

export default instance;
