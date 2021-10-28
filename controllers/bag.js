exports.getBags = async(req,res)=>{
    try {
        const result = await Bag.find()
        res.status(201).send({res:result , msg:' success '})
    } catch (error) {
        res.status(409).send('Failure')
    }
}
//pagination
exports.getBags = async (req, res) => {
    const { page } = req.params;
    
    try {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    
        const total = await Bag.countDocuments({});
        const bags = await Bag.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: bags, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

//get bag by search adresse
exports.getBagsBySearch = async (req, res) => {
    const { searchQuery } = req.params;

    try {
        const adresse = new RegExp(searchQuery, "i");

        const bags = await Bag.find(adresse);

        res.json({ data: bags });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

//FILTER BAG 
exports.filterController = async (req, res) => {

    try {
        const {  adresse} = req.body;
        

        const keyword =  { adresse: { $regex: adresse, $options: 'i' } } 
        
        //console.log(keyword)
    
        const bags = await Bag.find({isReserved:false,...keyword});
    
        res.status(201).send({ bags  });
    } catch (error) {
        res.status(500).send({ message: error });
    } 
};


exports.like = async (req, res) => {
    try {
        const bag = await Bag.findById(req.params.id);
        if(bag.likes.filter(like=> like.user.toString()=== req.user.id).length>0){
            return res.status(400).send({msg:'bag alreadyliked'});
        }
        bag.likes.unshift({user:req.user.id}); //add the user on the beginnig
        await bag.save();
        res.status(200).send(bag.likes);
    } catch (error) {
        console.log(error);
    res.status(500).send({ errors: error });
    }
};

//UNLIKE A POST
exports.unlike = async (req,res) => {
    try {
        const bag = await Bag.findById(req.params.id);
        if(bag.likes.filter(like=> like.user.toString() === req.user.id).length >0) {
            bag.likes = bag.likes.filter(like=> like.user.toString() !== req.user.id);
            await bag.save();
            res.status(200).send(bag.likes);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ errors: error });
    }
};