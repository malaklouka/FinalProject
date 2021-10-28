const Bag = require('../models/bag');

exports.getNewBags = async (req, res) => {
    //descend sorting
	const sortBy = req.query.sortBy ? req.query.sortBy : 'desc';
    //limit
	const limit = req.query.limit ? parseInt(req.query.limit) : parseInt(3);

	try {
		const newBags = await Bag.find({})
			.sort({ createdAt: sortBy })
			.limit(limit);

		res.json({
			newBags,
		});
	} catch (err) {
		console.log(err, 'filter error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};

exports.searchByQueryType = async (req, res) => {
	const { type, query } = req.body;

	try {
		let bags;

		switch (type) {
			case 'text':
				bags = await Bag.find({ $text: { $search: query } });
				break;
			case 'adresse':
				bags = await Bag.find({ adresse: query });
				break;
		}

		{/* length is undefined
			if (!bags.length > 0) {
			bags = await Bag.find({});
		}*/}

		res.json({ bags });
	} catch (err) {
		console.log(err, 'filter  error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};