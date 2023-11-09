
const Medicine = require('../models/medicineModel.js');
const Patient = require('../models/regesterAsPatient.js');
// add an over the counter medicine to cart

const addMedicineToCart = async (req, res) => {
  try {
    const { UserName, name } = req.params;
    console.log('Params:', UserName, name);

    const medicine = await Medicine.findOne({ name });
    console.log('Medicine:', medicine);

    if (!medicine) {
      return res.status(404).json({ message: 'Medicine not found' });
    }

    const patient = await Patient.findOne({ UserName });
    console.log('Patient:', patient);

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    if (medicine.quantity === 0) {
      return res.status(400).json({ message: 'No quantity of the medicine available' });
    }
    if (medicine.prescriptionRequired === true) {
      return res.status(400).json({ message: 'Prescription required' });
    }
    if (medicine.quantity > 0) {
          medicine.quantity -= 1;
      console.log(' Patient Cart: ');
      patient.cart.items.forEach(item => {
        console.log('Medicine:', item.medicine);
        console.log('Quantity:', item.quantity);
      });
      if (patient.cart.items.some(item => item.medicine === medicine.name)) {
        const existingCartItem = patient.cart.items.find(item => item.medicine === medicine.name);
        existingCartItem.quantity += 1;
        patient.cart.totalAmount += medicine.price;
        console.log('Updated Cart:', patient.cart);
        await patient.save();
        await medicine.save();
        return res.status(200).json({ message: 'Medicine added to cart successfully' });
      } else {


        const cartItem = {
          medicine: medicine.name,
          quantity: 1,
        }

        console.log('Cart Item:', cartItem);
        patient.cart.items.push(cartItem);
        patient.cart.totalAmount += medicine.price;

        console.log('Updated Cart:', patient.cart);
        try {
          await patient.save();
          await medicine.save();
          return res.status(200).json({ message: 'Medicine added to cart successfully' });
        } catch (error) {
          console.error('Error saving data:', error);
          return res.status(500).json({ message: 'Error saving data' });
        }
        return res.status(200).json({ message: 'Medicine added to cart successfully' });
      }

    }


  }
  catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }

}

const getCartItems = async (req, res) => {
  try {
    const { UserName } = req.params;
    const patient = await Patient.findOne({ UserName }).populate('cart.items.medicine');
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    console.log('Total Amount', patient.cart.totalAmount);
    return res.status(200).json({ cartItems: patient.cart.items });

  }
  catch (error) {
    console.error('Error fetching cart items:', error);
    return res.status(500).json({ message: 'Error fetching cart items' });
  }
}

const deleteMedicineFromCart = async (req, res) => {
  try {
    const { UserName, name } = req.params;
  //  console.log('Params:', UserName, name);
    const patient = await Patient.findOne({ UserName });
   // console.log('Patient:', patient);
    const medicine = await Medicine.findOne({ name });
   // console.log('Medicine:', medicine);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    const removedItemIndex = patient.cart.items.findIndex(item => item.medicine === name);
    console.log('Removed Item Index:', removedItemIndex);
    if (removedItemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in the cart' });
    }
    const removedItem = patient.cart.items[removedItemIndex];
    console.log('Removed Item:', removedItem);
    console.log('Removed Item Price:', medicine.price);
console.log('Removed Item Quantity:', removedItem.quantity);
    const price = medicine.price * removedItem.quantity;
    console.log('Price:', price);
    patient.cart.totalAmount -= medicine.price * removedItem.quantity;
    console.log('Total Amount:', patient.cart.totalAmount);
    patient.cart.items.splice(removedItemIndex, 1);
    medicine.quantity = medicine.quantity + removedItem.quantity;
    console.log('medicine quantity:', medicine.quantity );
    await patient.save();
    await medicine.save();
    return res.status(200).json({ message: 'Item removed from the cart successfully' });
  }
  catch(error) {
    return res.status(500).json({ message: 'Error removing item from cart' });

  }
}

const changeQuantityInCart = async (req, res) => {
  try {
    
    const {UserName,name,newQuantity} = req.params;
    const patient = await Patient.findOne({ UserName });
    const medicine = await Medicine.findOne({ name });
    // console.log('Medicine:', medicine);
    // console.log('Patient:', patient);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }   
    const cartItemIndex = patient.cart.items.findIndex(item => item.medicine === name);
    console.log('Cart Item Index:', cartItemIndex);
    if (cartItemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in the cart' });
    }
    //console.log('hi');
    const cartItem = patient.cart.items[cartItemIndex];
     console.log('Cart Item:', cartItem);
     const originalQuantity = cartItem.quantity;
     console.log('Original Quantity:', originalQuantity);
    cartItem.quantity = newQuantity;
     console.log('New Quantity:', newQuantity);
     console.log('Cart Item UPDATED:', cartItem); 

     
    
    const cartQuant = newQuantity - originalQuantity; // new = 10 , old = 5 , cartQuant = 5
    const negative= newQuantity;
    if(cartQuant > medicine.quantity) {
      return res.status(400).json({ message: 'No quantity of the medicine available' });
    }
    if(cartQuant === 0){
      return res.status(400).json({ message: 'Quantity is already the same' });

    }
    const originalNegative = 0 - originalQuantity;
    if(cartQuant === originalNegative){
      return res.status(400).json({ message: 'Quantity is already the same, remove it instead.' });
    }
    if(negative < 0){
      return res.status(400).json({ message: 'Quantity cannot be negative' });
    }
    console.log('Cart Quantity:', cartQuant);
    const newAmount = medicine.price * cartQuant;
    console.log('New Amount:', newAmount);
    patient.cart.totalAmount += newAmount;
    
    medicine.quantity = medicine.quantity - cartQuant;
    await patient.save();
    await medicine.save();
    return res.status(200).json({ message: 'Quantity changed successfully' });
  }
  catch (error) {
    return res.status(500).json({ message: 'Error changing quantity in cart' });
  }
}

  const getAddresses = async (req, res) => {
    try {
      const { UserName } = req.params;
  
      const patient = await Patient.findOne({ UserName });
  
      if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
      }
  
      const addresses = patient.addresses;
  
      return res.status(200).json({ addresses });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };



module.exports = { addMedicineToCart, getCartItems, deleteMedicineFromCart, changeQuantityInCart, getAddresses, };