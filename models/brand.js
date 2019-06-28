const mongoose = require(`mongoose`);
const BrandSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	country:{
		type: String,
		required: true
	}
	
},{
  timestamps: true
});


module.exports = mongoose.model('brand', BrandSchema);