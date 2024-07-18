class Phone {
  constructor(phoneNumber, contacts = []){
    this.phoneNumber = phoneNumber
    this.contacts = contacts
  }
  addContact(contact){
    const phoneNumberPattern = /^\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/;
    
    if (!contact.name || !contact.phoneNumber || !phoneNumberPattern.test(contact.phoneNumber)) {
      return "Invalid";
    }else{
      this.contacts.push(contact);
      return `${contact.name} added.`;
    } 
  }
  removeContact(contactName){
    const findContact = this.contacts.findIndex(contact => contact.name === contactName);

    if (findContact !== -1) {
      this.contacts.splice(findContact, 1);
      return `${contactName} removed.`;
    } else {
      return `Contact not found.`;
    }
  }
  makeCall(contactNameOrNum){
    const findContact = this.contacts.find(({name, phoneNumber}) => name === contactNameOrNum|| phoneNumber === contactNameOrNum);
    if (findContact) {
      return `Calling ${findContact.name}...`;
    } else {
      const phoneNumberPattern = /^\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/;
      if (phoneNumberPattern.test(contactNameOrNum)) {
        return `Calling ${contactNameOrNum}...`;
      } else {
        return "Invalid";
      }
    }
  }
}

  
class AppleIPhone extends Phone {
  constructor(phoneNumber, model, contacts){
    super(phoneNumber, contacts = [])
    this.model = model 
  }

  sendIMessage(phone, message){
    if (phone instanceof AppleIPhone) {
      return `Message: ${message} - sent from ${this.model}`;
    } else {
      return 'Message could not be sent.';
    }
  }
}

module.exports = {
  Phone,
  AppleIPhone,
};
