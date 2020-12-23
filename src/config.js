module.exports = {
	SIZE_LIMIT: 50, // mentioned in KB
	PORT: process.env.PORT || 3000,
	MONGO_URL:"mongodb+srv://admin:123@json-storage.f1omi.mongodb.net/datas?retryWrites=true&w=majority" || "mongodb://localhost:27017/jsonbox-io-dev",
	REQUEST_LIMIT_PER_HOUR: 100,
	ENABLE_DATA_EXPIRY: true, // Once switched on the index will be be set in mongodb. Might need to remove it in order to switch off the behaviour
	DATA_EXPIRY_IN_DAYS: 1000,
	FILTER_IP_SET: [],  // example ['172.29.0.1']
	FILTER_OPTIONS: { mode: 'allow' },
};
